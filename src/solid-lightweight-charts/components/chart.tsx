import type {JSX} from 'solid-js/jsx-runtime';
import {ChartOptions, createChart, DeepPartial, IChartApi} from 'lightweight-charts';
import {createSignal, splitProps, Show, onMount, createEffect, onCleanup} from 'solid-js';

import {ApiProvider} from './internal/context';

export interface ChartProps extends DeepPartial<ChartOptions> {
    children?: JSX.Element;
}

export function Chart(props: ChartProps): JSX.Element {
    const [api, setApi] = createSignal<IChartApi | null>(null);
    const [, options] = splitProps(props, ['children']);

    return (
        <>
            <div use:action={[
                (element: HTMLElement, params: DeepPartial<ChartOptions>) => {
                    const subject = createChart(element, params);
                    setApi(subject);
                    return {
                        update(nextParams: DeepPartial<ChartOptions>): void {
                            subject.applyOptions(nextParams);
                        },
                        destroy(): void {
                            subject.remove();
                            setApi(null);
                        }
                    };
                },
                options,
            ]}/>
            {/*
                It is important to keep fake nodes as siblings of DIV
                because of strange behaviour of solid with empty elements.

                Solid will clean such nodes and kill manually inserted canvas.
            */}
            <Show when={api()}>
            {(value: IChartApi) => (
                <ApiProvider value={value}>
                    {props.children}
                </ApiProvider>
            )}
            </Show>
        </>
    );
}

/**
 * @internal
 */
declare module 'solid-js' {
    namespace JSX {
        interface Directives {
            action: [
                (element: HTMLElement, params: DeepPartial<ChartOptions>) => {
                    update(nextParams: DeepPartial<ChartOptions>): void;
                    destroy(): void;
                },
                DeepPartial<ChartOptions>,
            ]
        }
    }
}

function action(
    element: HTMLElement,
    accessor: () => [
        (element: HTMLElement, params: DeepPartial<ChartOptions>) => {
            update(nextParams: DeepPartial<ChartOptions>): void;
            destroy(): void;
        },
        DeepPartial<ChartOptions>,
    ]
): void {
    let action: {
        update(nextParams: DeepPartial<ChartOptions>): void;
        destroy(): void;
    }

    onMount(() => {
        console.log('chart init');
        const [fn, params] = accessor();
        action = fn(element, {...params});
    });

    createEffect(
        (mounted: boolean) => {
            const [, {...params}] = accessor();
            if (mounted) {
                action.update(params);
            }
            return true;
        },
        false
    );

    onCleanup(() => {
        action.destroy();
    });
}
