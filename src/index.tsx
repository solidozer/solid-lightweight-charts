import {render} from 'solid-js/web';
import {createSignal, Show} from 'solid-js';
import {LineStyle, SeriesType} from 'lightweight-charts';

import {Chart} from './solid-lightweight-charts/components/chart';
import {LineSeries} from './solid-lightweight-charts/components/line-series';
import {PriceLine} from './solid-lightweight-charts/components/price-line';
import {BarSeries} from './solid-lightweight-charts/components/bar-series';
import {CandlestickSeries} from './solid-lightweight-charts/components/candlestick-series';
import {AreaSeries} from './solid-lightweight-charts/components/area-series';
import {BaselineSeries} from './solid-lightweight-charts/components/baseline-series';
import {HistogramSeries} from './solid-lightweight-charts/components/histogram-series';

export function App() {
    const [height, setHeight] = createSignal(400);
    const [width, setWidth] = createSignal(600);
    const [active, setActive] = createSignal(true);
    const [color, setColor] = createSignal('#0000FF');
    const [line, setLine] = createSignal(false);
    const [type, setType] = createSignal<SeriesType>('Line');
    const [time, setTime] = createSignal('');
    const [price, setPrice] = createSignal('');
    const [point, setPoint] = createSignal('');
    const [trackHover, setTrackHover] = createSignal(true);
    const [trackClick, setTrackClick] = createSignal(true);

    return (
        <>
            <fieldset>
                <legend>View:</legend>
                <label>
                    Active:
                    <input
                        type="checkbox"
                        name="active"
                        checked={active()}
                        onChange={(e) => setActive(e.currentTarget.checked)}
                    />
                </label>
                <br/>
                <label>
                    Height:
                    <input
                        type="range"
                        name="height"
                        value={height()}
                        min={200}
                        max={600}
                        step={1}
                        onChange={(e) => setHeight(e.currentTarget.valueAsNumber)}
                    />
                </label>
                <br/>
                <label>
                    Width:
                    <input
                        type="range"
                        name="width"
                        value={width()}
                        min={300}
                        max={1000}
                        step={1}
                        onChange={(e) => setWidth(e.currentTarget.valueAsNumber)}
                    />
                </label>
            </fieldset>
            <fieldset>
                <legend>Series:</legend>
                <label>
                    Show line:
                    <input
                        type="checkbox"
                        name="line"
                        checked={line()}
                        onChange={(e) => setLine(e.currentTarget.checked)}
                    />
                </label>
                <br/>
                <label>
                    Color:
                    <input
                        type="color"
                        name="color"
                        value={color()}
                        onChange={(e) => setColor(e.currentTarget.value)}
                    />
                </label>
                <br/>
                Type:<br/>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Line'}
                        onChange={(e) => setType('Line')}
                    /> - Line
                    <br/>
                </label>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Area'}
                        onChange={(e) => setType('Area')}
                    /> - Area
                    <br/>
                </label>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Baseline'}
                        onChange={(e) => setType('Baseline')}
                    /> - Baseline
                    <br/>
                </label>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Candlestick'}
                        onChange={(e) => setType('Candlestick')}
                    /> - Candlestick
                    <br/>
                </label>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Histogram'}
                        onChange={(e) => setType('Histogram')}
                    /> - Histogram
                    <br/>
                </label>
                <label>
                    <input
                        type="radio"
                        name="series-type"
                        checked={type() === 'Bar'}
                        onChange={(e) => setType('Bar')}
                    /> - Bar
                </label>
            </fieldset>
            <fieldset>
                <legend>Crosshair:</legend>
                <label>Track: <input type="checkbox" name="tack-hover" checked={trackHover()} onChange={(e) => setTrackHover(e.currentTarget.checked)}/></label>
                <br/>
                Time: {time()}
                <br/>
                Price: {price()}
            </fieldset>
            <fieldset>
                <legend>Click:</legend>
                <label>Track: <input type="checkbox" name="tack-click" checked={trackClick()} onChange={(e) => setTrackClick(e.currentTarget.checked)}/></label>
                <br/>
                Point: {point()}
            </fieldset>
            <Show when={active()}>
                <Chart
                    height={height()}
                    width={width()}
                    onCrosshairMove={trackHover() ? (params) => {
                        if (typeof params.time === 'undefined') {
                            setTime('');
                        }
                        if (typeof params.time === 'object') {
                            const date = new Date(params.time.year, params.time.month, params.time.day);
                            setTime(date.toDateString());
                        }
                        if (typeof params.time === 'number') {
                            const date = new Date(params.time / 1000);
                            setTime(date.toDateString());
                        }

                        const [value] = params.seriesPrices.values();
                        if (typeof value === 'undefined') {
                            setPrice('');
                        }
                        if (typeof value === 'number') {
                            setPrice(value.toFixed(2));
                        }
                        if (typeof value === 'object') {
                            setPrice(`O: ${value.open} H: ${value.high} L: ${value.low} C: ${value.close}`);
                        }
                    } : undefined}
                    onClick={trackClick() ? (params) => {
                        setPoint(`X - ${params.point?.x ?? ''} Y - ${params.point?.y ?? ''}`)
                    } : undefined}
                >
                    {type() === 'Line' && (
                        <LineSeries
                            color={color()}
                            data={[
                                {time: '2019-04-11', value: 80.01},
                                {time: '2019-04-12', value: 96.63},
                                {time: '2019-04-13', value: 76.64},
                                {time: '2019-04-14', value: 81.89},
                                {time: '2019-04-15', value: 74.43},
                                {time: '2019-04-16', value: 80.01},
                                {time: '2019-04-17', value: 96.63},
                                {time: '2019-04-18', value: 76.64},
                                {time: '2019-04-19', value: 81.89},
                                {time: '2019-04-20', value: 74.43},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={80}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </LineSeries>
                    )}

                    {type() === 'Area' && (
                        <AreaSeries
                            data={[
                                {time: '2019-04-11', value: 80.01},
                                {time: '2019-04-12', value: 96.63},
                                {time: '2019-04-13', value: 76.64},
                                {time: '2019-04-14', value: 81.89},
                                {time: '2019-04-15', value: 74.43},
                                {time: '2019-04-16', value: 80.01},
                                {time: '2019-04-17', value: 96.63},
                                {time: '2019-04-18', value: 76.64},
                                {time: '2019-04-19', value: 81.89},
                                {time: '2019-04-20', value: 74.43},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={80}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </AreaSeries>
                    )}

                    {type() === 'Histogram' && (
                        <HistogramSeries
                            data={[
                                {time: '2019-04-11', value: 80.01},
                                {time: '2019-04-12', value: 96.63},
                                {time: '2019-04-13', value: 76.64},
                                {time: '2019-04-14', value: 81.89},
                                {time: '2019-04-15', value: 74.43},
                                {time: '2019-04-16', value: 80.01},
                                {time: '2019-04-17', value: 96.63},
                                {time: '2019-04-18', value: 76.64},
                                {time: '2019-04-19', value: 81.89},
                                {time: '2019-04-20', value: 74.43},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={80}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </HistogramSeries>
                    )}

                    {type() === 'Baseline' && (
                        <BaselineSeries
                            baseValue={{
                                type: 'price',
                                price: 85,
                            }}
                            data={[
                                {time: '2019-04-11', value: 80.01},
                                {time: '2019-04-12', value: 96.63},
                                {time: '2019-04-13', value: 76.64},
                                {time: '2019-04-14', value: 81.89},
                                {time: '2019-04-15', value: 74.43},
                                {time: '2019-04-16', value: 80.01},
                                {time: '2019-04-17', value: 96.63},
                                {time: '2019-04-18', value: 76.64},
                                {time: '2019-04-19', value: 81.89},
                                {time: '2019-04-20', value: 74.43},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={80}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </BaselineSeries>
                    )}

                    {type() === 'Bar' && (
                        <BarSeries
                            data={[
                                {time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85},
                                {time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75},
                                {time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53},
                                {time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97},
                                {time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07},
                                {time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23},
                                {time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={178}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </BarSeries>
                    )}

                    {type() === 'Candlestick' && (
                        <CandlestickSeries
                            data={[
                                {time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85},
                                {time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75},
                                {time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53},
                                {time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97},
                                {time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07},
                                {time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23},
                                {time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20},
                            ]}
                        >
                            <Show when={line()}>
                                <PriceLine
                                    price={178}
                                    color="#FF0000"
                                    lineWidth={1}
                                    lineStyle={LineStyle.Solid}
                                    axisLabelVisible={true}
                                    title="price"
                                />
                            </Show>
                        </CandlestickSeries>
                    )}
                </Chart>
            </Show>
        </>
    );
}

render(() => <App/>, document.body);
