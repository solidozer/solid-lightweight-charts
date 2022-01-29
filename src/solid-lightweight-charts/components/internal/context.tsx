import type {JSX} from 'solid-js/jsx-runtime';

import {createContext, useContext} from 'solid-js';
import {IChartApi, ISeriesApi, SeriesType} from 'lightweight-charts';

const Context = createContext<ApiContext | null>(null);

export type ApiContext = IChartApi | ISeriesApi<SeriesType>;

export function context<T extends ApiContext>(): T {
    return useContext(Context) as T;
}

export interface ApiProviderProps<T extends ApiContext> {
    value: T;
    children: JSX.Element;
}

export function ApiProvider<T extends ApiContext>(props: ApiProviderProps<T>): JSX.Element {
    return (
        <Context.Provider value={props.value}>
            {props.children}
        </Context.Provider>
    )
}
