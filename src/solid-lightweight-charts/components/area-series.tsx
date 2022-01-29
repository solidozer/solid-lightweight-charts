import type {JSX} from 'solid-js/jsx-runtime';
import type {
    AreaSeriesPartialOptions,
    ISeriesApi,
    SeriesDataItemTypeMap
} from 'lightweight-charts';

import {createSignal, splitProps, Show} from 'solid-js';
import {Reference} from '../types';
import {useSeriesEffect} from './internal/utils';
import {ApiProvider} from './internal/context';

export interface AreaSeriesProps extends AreaSeriesPartialOptions {
    ref?: Reference<ISeriesApi<'Area'>>;
    data: SeriesDataItemTypeMap['Area'][];
    children?: JSX.Element;
}

export function AreaSeries(props: AreaSeriesProps): JSX.Element {
    const id = performance.now().toString();
    const [, options] = splitProps(props, ['ref', 'data', 'children']);
    const [api, setApi] = createSignal<ISeriesApi<'Area'> | null>(null);
    const handleReference = (ref: ISeriesApi<'Area'> | null) => {
        console.log(ref);
        setApi(ref);
    }

    useSeriesEffect(() => [
        {
            id,
            type: 'Area',
            get options() {
                return {...options};
            },
            data: props.data,
        },
        handleReference,
    ]);

    return (
        <Show when={api()}>
        {(value: ISeriesApi<'Area'>) => (
            <ApiProvider value={value}>{props.children}</ApiProvider>
        )}
        </Show>
    )
}
