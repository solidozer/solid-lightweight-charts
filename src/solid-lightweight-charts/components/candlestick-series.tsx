import type {JSX} from 'solid-js/jsx-runtime';
import type {
    ISeriesApi,
    CandlestickSeriesPartialOptions,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface CandlestickSeriesProps extends CandlestickSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Candlestick'>>;
    data: SeriesDataItemTypeMap['Candlestick'][];
    children?: JSX.Element;
}

export function CandlestickSeries(props: CandlestickSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Candlestick'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Candlestick'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Candlestick',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Candlestick'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
