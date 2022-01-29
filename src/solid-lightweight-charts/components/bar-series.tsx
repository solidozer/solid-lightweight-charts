import type {JSX} from 'solid-js/jsx-runtime';
import type {
    ISeriesApi,
    BarSeriesPartialOptions,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface BarSeriesProps extends BarSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Bar'>>;
    data: SeriesDataItemTypeMap['Bar'][];
    children?: JSX.Element;
}

export function BarSeries(props: BarSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Bar'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Bar'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Bar',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Bar'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
