import type {JSX} from 'solid-js/jsx-runtime';
import type {
    ISeriesApi,
    BaselineSeriesPartialOptions,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface BaselineSeriesProps extends BaselineSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Baseline'>>;
    data: SeriesDataItemTypeMap['Baseline'][];
    children?: JSX.Element;
}

export function BaselineSeries(props: BaselineSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Baseline'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Baseline'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Baseline',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Baseline'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
