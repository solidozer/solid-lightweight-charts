import type {IChartApi, IPriceLine, ISeriesApi, SeriesType} from 'lightweight-charts';
import type {PriceLineParams, Reference} from '../../types';
import type {PriceLineActionResult} from '../../internal/lines';

import {createEffect, onCleanup, onMount} from 'solid-js';
import {series, SeriesActionResult, SeriesParams} from '../../internal/series';
import {line} from '../../internal/lines';
import {context} from './context';

export function useSeriesEffect<T extends SeriesParams>(
    callback: () => [params: T, ref: Reference<ISeriesApi<T['type']>> | undefined]
): void {
    let subject: SeriesActionResult<T> | null = null;

    const api = context<IChartApi>();

    onMount(() => {
        const [{...params}, ref] = callback();
        console.log('series mount')
        subject = series(api, params);
        subject.updateReference(ref);
    });

    onCleanup(() => {
        subject?.destroy();
        subject = null;
    });

    createEffect(
        (mounted: boolean) => {
            const [{...params}, ref] = callback();

            if (mounted) {
                subject?.update(params);
                subject?.updateReference(ref);
            }
            return true;
        },
        false
    );
}

export function useLineEffect(callback: () => [params: PriceLineParams, ref: Reference<IPriceLine> | undefined]): void {
    let subject: PriceLineActionResult | null = null;

    const api = context<ISeriesApi<SeriesType>>();

    onMount(() => {
        const [{...params}, ref] = callback();
        subject = line(api, params);
        subject.updateReference(ref)
    });

    onCleanup(() => {
        subject?.destroy();
        subject = null;
    });

    createEffect(
        (mounted: boolean) => {
            const [{...params}, ref] = callback();

            if (mounted) {
                subject?.update(params);
                subject?.updateReference(ref);
            }
            return true;
        },
        false
    );
}
