import {render} from 'solid-js/web';
import {createSignal, Show} from 'solid-js';
import {LineStyle} from 'lightweight-charts';

import {Chart} from './solid-lightweight-charts/components/chart';
import {LineSeries} from './solid-lightweight-charts/components/line-series';
import {PriceLine} from './solid-lightweight-charts/components/price-line';

export function App() {
    const [height, setHeight] = createSignal(400);
    const [width, setWidth] = createSignal(600);
    const [active, setActive] = createSignal(true);
    const [color, setColor] = createSignal('#0000FF');
    const [line, setLine] = createSignal(false);

    return (
        <>
            <input
                type="range"
                name="height"
                value={height()}
                min={200}
                max={600}
                step={1}
                onChange={(e) => setHeight(e.currentTarget.valueAsNumber)}
            />
            <input
                type="range"
                name="width"
                value={width()}
                min={300}
                max={1000}
                step={1}
                onChange={(e) => setWidth(e.currentTarget.valueAsNumber)}
            />
            <input
                type="checkbox"
                name="active"
                checked={active()}
                onChange={(e) => setActive(e.currentTarget.checked)}
            />
            <input
                type="color"
                name="color"
                value={color()}
                onChange={(e) => setColor(e.currentTarget.value)}
            />
            <input
                type="checkbox"
                name="line"
                checked={line()}
                onChange={(e) => setLine(e.currentTarget.checked)}
            />

            <Show when={active()}>
                <Chart height={height()} width={width()}>
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
                </Chart>
            </Show>
        </>
    );
}

render(() => <App/>, document.body);
