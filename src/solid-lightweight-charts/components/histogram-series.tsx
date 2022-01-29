import type {JSX} from 'solid-js/jsx-runtime';
import type {
    ISeriesApi,
    HistogramSeriesPartialOptions,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface HistogramSeriesProps extends HistogramSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Histogram'>>;
    data: SeriesDataItemTypeMap['Histogram'][];
    children?: JSX.Element;
}

export function HistogramSeries(props: HistogramSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Histogram'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Histogram'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Histogram',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Histogram'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
