import type {JSX} from 'solid-js/jsx-runtime';

import {IPriceLine, PriceLineOptions} from 'lightweight-charts';
import {Reference} from '../types';
import {createSignal, splitProps} from 'solid-js';
import {useLineEffect} from './internal/utils';

export interface PriceLineProps extends PriceLineOptions {
    ref?: Reference<IPriceLine>;
}

export function PriceLine(props: PriceLineProps): JSX.Element {
    const [, options] = splitProps(props, ['ref']);
    const id = performance.now().toString();

    const [api, setApi] = createSignal<IPriceLine | null>(null);
    const handleReference = (ref: IPriceLine | null) => {
        console.log(ref);
        setApi(ref);
    }

    useLineEffect(() => [
        {
            id,
            get options() {
                return {...options};
            },
        },
        handleReference
    ]);

    return undefined;
}
