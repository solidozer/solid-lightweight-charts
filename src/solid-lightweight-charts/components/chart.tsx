import type {JSX} from 'solid-js/jsx-runtime';
import {ChartOptions, createChart, DeepPartial, IChartApi, MouseEventHandler} from 'lightweight-charts';
import {createSignal, splitProps, Show, onMount, createEffect, onCleanup} from 'solid-js';

import {ApiProvider} from './internal/context';
import {Reference} from '../types';

export interface ChartProps extends ChartActionParams {
    children?: JSX.Element;
}

export function Chart(props: ChartProps): JSX.Element {
    const [api, setApi] = createSignal<IChartApi | null>(null);
    const [, params] = splitProps(props, ['children']);

    return (
        <>
            <div use:action={[
                (element: HTMLElement, params: ChartActionParams) => {
                    let {onClick, onCrosshairMove, ref, ...options} = params;
                    const subject = createChart(element, options);

                    if (onClick) {
                        subject.subscribeClick(onClick);
                    }
                    if (onCrosshairMove) {
                        subject.subscribeCrosshairMove(onCrosshairMove);
                    }

                    if (ref) {
                        ref(subject);
                    }

                    setApi(subject);
                    return {
                        update(nextParams: ChartActionParams): void {
                            const {
                                ref: nextRef,
                                onClick: nextOnClick,
                                onCrosshairMove: nextOnCrosshairMove,
                                ...nextOptions
                            } = nextParams;

                            if (nextRef !== ref) {
                                ref?.(null);
                                ref = nextRef;
                                ref?.(subject);
                            }

                            subject.applyOptions(nextOptions);

                            if (nextOnClick !== onClick) {
                                if (onClick) {
                                    subject.unsubscribeClick(onClick);
                                }
                                onClick = nextOnClick;
                                if (onClick) {
                                    subject.subscribeClick(onClick);
                                }
                            }

                            if (nextOnCrosshairMove !== onCrosshairMove) {
                                if (onCrosshairMove) {
                                    subject.unsubscribeCrosshairMove(onCrosshairMove);
                                }
                                onCrosshairMove = nextOnCrosshairMove;
                                if (onCrosshairMove) {
                                    subject.subscribeCrosshairMove(onCrosshairMove);
                                }
                            }
                        },
                        destroy(): void {
                            subject.remove();
                            setApi(null);
                        }
                    };
                },
                params,
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
                (element: HTMLElement, params: ChartActionParams) => {
                    update(nextParams: ChartActionParams): void;
                    destroy(): void;
                },
                ChartActionParams,
            ]
        }
    }
}

interface ChartActionParams extends DeepPartial<ChartOptions>{
    ref?: Reference<IChartApi>;
    onClick?: MouseEventHandler;
    onCrosshairMove?: MouseEventHandler;
}

function action(
    element: HTMLElement,
    accessor: () => [
        (element: HTMLElement, params: ChartActionParams) => {
            update(nextParams: ChartActionParams): void;
            destroy(): void;
        },
        DeepPartial<ChartOptions>,
    ]
): void {
    let action: {
        update(nextParams: ChartActionParams): void;
        destroy(): void;
    }

    onMount(() => {
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
