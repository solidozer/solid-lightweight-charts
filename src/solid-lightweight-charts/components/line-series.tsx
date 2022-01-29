import type {JSX} from 'solid-js/jsx-runtime';
import type {
    ISeriesApi,
    LineSeriesPartialOptions,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface LineSeriesProps extends LineSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Line'>>;
    data: SeriesDataItemTypeMap['Line'][];
    children?: JSX.Element;
}

export function LineSeries(props: LineSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Line'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Line'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Line',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Line'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
