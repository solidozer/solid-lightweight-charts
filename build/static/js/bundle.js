"use strict";
(self["webpackChunksolid_app"] = self["webpackChunksolid_app"] || []).push([["bundle"],{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/.pnpm/lightweight-charts@3.7.0/node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");
/* harmony import */ var _solid_lightweight_charts_components_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid-lightweight-charts/components/chart */ "./src/solid-lightweight-charts/components/chart.tsx");
/* harmony import */ var _solid_lightweight_charts_components_line_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solid-lightweight-charts/components/line-series */ "./src/solid-lightweight-charts/components/line-series.tsx");
/* harmony import */ var _solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solid-lightweight-charts/components/price-line */ "./src/solid-lightweight-charts/components/price-line.tsx");
/* harmony import */ var _solid_lightweight_charts_components_bar_series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solid-lightweight-charts/components/bar-series */ "./src/solid-lightweight-charts/components/bar-series.tsx");
/* harmony import */ var _solid_lightweight_charts_components_candlestick_series__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solid-lightweight-charts/components/candlestick-series */ "./src/solid-lightweight-charts/components/candlestick-series.tsx");
/* harmony import */ var _solid_lightweight_charts_components_area_series__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solid-lightweight-charts/components/area-series */ "./src/solid-lightweight-charts/components/area-series.tsx");
/* harmony import */ var _solid_lightweight_charts_components_baseline_series__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solid-lightweight-charts/components/baseline-series */ "./src/solid-lightweight-charts/components/baseline-series.tsx");
/* harmony import */ var _solid_lightweight_charts_components_histogram_series__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solid-lightweight-charts/components/histogram-series */ "./src/solid-lightweight-charts/components/histogram-series.tsx");






const _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<fieldset><legend>View:</legend><label>Active:<input type="checkbox" name="active"></label><br><label>Height:<input type="range" name="height" min="200" max="600" step="1"></label><br><label>Width:<input type="range" name="width" min="300" max="1000" step="1"></label></fieldset>`, 15),
      _tmpl$2 = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<fieldset><legend>Series:</legend><label>Show line:<input type="checkbox" name="line"></label><br><label>Color:<input type="color" name="color"></label><br>Type:<br><label><input type="radio" name="series-type"> - Line<br></label><label><input type="radio" name="series-type"> - Area<br></label><label><input type="radio" name="series-type"> - Baseline<br></label><label><input type="radio" name="series-type"> - Candlestick<br></label><label><input type="radio" name="series-type"> - Histogram<br></label><label><input type="radio" name="series-type"> - Bar</label></fieldset>`, 36),
      _tmpl$3 = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<fieldset><legend>Crosshair:</legend><label>Track: <input type="checkbox" name="tack-hover"></label><br>Time: <br>Price: </fieldset>`, 9),
      _tmpl$4 = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<fieldset><legend>Click:</legend><label>Track: <input type="checkbox" name="tack-click"></label><br>Point: </fieldset>`, 8);












function App() {
  const [height, setHeight] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(400);
  const [width, setWidth] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(600);
  const [active, setActive] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(true);
  const [color, setColor] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)('#0000FF');
  const [line, setLine] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(false);
  const [type, setType] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)('Line');
  const [time, setTime] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)('');
  const [price, setPrice] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)('');
  const [point, setPoint] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)('');
  const [trackHover, setTrackHover] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(true);
  const [trackClick, setTrackClick] = (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createSignal)(true);
  return [(() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling,
          _el$4 = _el$3.firstChild,
          _el$5 = _el$4.nextSibling,
          _el$6 = _el$3.nextSibling,
          _el$7 = _el$6.nextSibling,
          _el$8 = _el$7.firstChild,
          _el$9 = _el$8.nextSibling,
          _el$10 = _el$7.nextSibling,
          _el$11 = _el$10.nextSibling,
          _el$12 = _el$11.firstChild,
          _el$13 = _el$12.nextSibling;

    _el$5.addEventListener("change", e => setActive(e.currentTarget.checked));

    _el$9.addEventListener("change", e => setHeight(e.currentTarget.valueAsNumber));

    _el$13.addEventListener("change", e => setWidth(e.currentTarget.valueAsNumber));

    (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createRenderEffect)(_p$ => {
      const _v$ = active(),
            _v$2 = height(),
            _v$3 = width();

      _v$ !== _p$._v$ && (_el$5.checked = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$9.value = _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && (_el$13.value = _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });

    return _el$;
  })(), (() => {
    const _el$14 = _tmpl$2.cloneNode(true),
          _el$15 = _el$14.firstChild,
          _el$16 = _el$15.nextSibling,
          _el$17 = _el$16.firstChild,
          _el$18 = _el$17.nextSibling,
          _el$19 = _el$16.nextSibling,
          _el$20 = _el$19.nextSibling,
          _el$21 = _el$20.firstChild,
          _el$22 = _el$21.nextSibling,
          _el$23 = _el$20.nextSibling,
          _el$24 = _el$23.nextSibling,
          _el$25 = _el$24.nextSibling,
          _el$26 = _el$25.nextSibling,
          _el$27 = _el$26.firstChild,
          _el$28 = _el$26.nextSibling,
          _el$29 = _el$28.firstChild,
          _el$30 = _el$28.nextSibling,
          _el$31 = _el$30.firstChild,
          _el$32 = _el$30.nextSibling,
          _el$33 = _el$32.firstChild,
          _el$34 = _el$32.nextSibling,
          _el$35 = _el$34.firstChild,
          _el$36 = _el$34.nextSibling,
          _el$37 = _el$36.firstChild;

    _el$18.addEventListener("change", e => setLine(e.currentTarget.checked));

    _el$22.addEventListener("change", e => setColor(e.currentTarget.value));

    _el$27.addEventListener("change", e => setType('Line'));

    _el$29.addEventListener("change", e => setType('Area'));

    _el$31.addEventListener("change", e => setType('Baseline'));

    _el$33.addEventListener("change", e => setType('Candlestick'));

    _el$35.addEventListener("change", e => setType('Histogram'));

    _el$37.addEventListener("change", e => setType('Bar'));

    (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createRenderEffect)(_p$ => {
      const _v$4 = line(),
            _v$5 = color(),
            _v$6 = type() === 'Line',
            _v$7 = type() === 'Area',
            _v$8 = type() === 'Baseline',
            _v$9 = type() === 'Candlestick',
            _v$10 = type() === 'Histogram',
            _v$11 = type() === 'Bar';

      _v$4 !== _p$._v$4 && (_el$18.checked = _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && (_el$22.value = _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && (_el$27.checked = _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && (_el$29.checked = _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && (_el$31.checked = _p$._v$8 = _v$8);
      _v$9 !== _p$._v$9 && (_el$33.checked = _p$._v$9 = _v$9);
      _v$10 !== _p$._v$10 && (_el$35.checked = _p$._v$10 = _v$10);
      _v$11 !== _p$._v$11 && (_el$37.checked = _p$._v$11 = _v$11);
      return _p$;
    }, {
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined
    });

    return _el$14;
  })(), (() => {
    const _el$38 = _tmpl$3.cloneNode(true),
          _el$39 = _el$38.firstChild,
          _el$40 = _el$39.nextSibling,
          _el$41 = _el$40.firstChild,
          _el$42 = _el$41.nextSibling,
          _el$43 = _el$40.nextSibling,
          _el$44 = _el$43.nextSibling,
          _el$45 = _el$44.nextSibling,
          _el$46 = _el$45.nextSibling;

    _el$42.addEventListener("change", e => setTrackHover(e.currentTarget.checked));

    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$38, time, _el$45);

    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$38, price, null);

    (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createRenderEffect)(() => _el$42.checked = trackHover());

    return _el$38;
  })(), (() => {
    const _el$47 = _tmpl$4.cloneNode(true),
          _el$48 = _el$47.firstChild,
          _el$49 = _el$48.nextSibling,
          _el$50 = _el$49.firstChild,
          _el$51 = _el$50.nextSibling,
          _el$52 = _el$49.nextSibling,
          _el$53 = _el$52.nextSibling;

    _el$51.addEventListener("change", e => setTrackClick(e.currentTarget.checked));

    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$47, point, null);

    (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createRenderEffect)(() => _el$51.checked = trackClick());

    return _el$47;
  })(), (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
    get when() {
      return active();
    },

    get children() {
      return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_chart__WEBPACK_IMPORTED_MODULE_2__.Chart, {
        get height() {
          return height();
        },

        get width() {
          return width();
        },

        get onCrosshairMove() {
          return trackHover() ? params => {
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
          } : undefined;
        },

        get onClick() {
          return trackClick() ? params => {
            setPoint(`X - ${params.point?.x ?? ''} Y - ${params.point?.y ?? ''}`);
          } : undefined;
        },

        get children() {
          return [(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Line', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_line_series__WEBPACK_IMPORTED_MODULE_3__.LineSeries, {
            get color() {
              return color();
            },

            data: [{
              time: '2019-04-11',
              value: 80.01
            }, {
              time: '2019-04-12',
              value: 96.63
            }, {
              time: '2019-04-13',
              value: 76.64
            }, {
              time: '2019-04-14',
              value: 81.89
            }, {
              time: '2019-04-15',
              value: 74.43
            }, {
              time: '2019-04-16',
              value: 80.01
            }, {
              time: '2019-04-17',
              value: 96.63
            }, {
              time: '2019-04-18',
              value: 76.64
            }, {
              time: '2019-04-19',
              value: 81.89
            }, {
              time: '2019-04-20',
              value: 74.43
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 80,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          })), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Area', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_area_series__WEBPACK_IMPORTED_MODULE_7__.AreaSeries, {
            data: [{
              time: '2019-04-11',
              value: 80.01
            }, {
              time: '2019-04-12',
              value: 96.63
            }, {
              time: '2019-04-13',
              value: 76.64
            }, {
              time: '2019-04-14',
              value: 81.89
            }, {
              time: '2019-04-15',
              value: 74.43
            }, {
              time: '2019-04-16',
              value: 80.01
            }, {
              time: '2019-04-17',
              value: 96.63
            }, {
              time: '2019-04-18',
              value: 76.64
            }, {
              time: '2019-04-19',
              value: 81.89
            }, {
              time: '2019-04-20',
              value: 74.43
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 80,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          })), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Histogram', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_histogram_series__WEBPACK_IMPORTED_MODULE_9__.HistogramSeries, {
            data: [{
              time: '2019-04-11',
              value: 80.01
            }, {
              time: '2019-04-12',
              value: 96.63
            }, {
              time: '2019-04-13',
              value: 76.64
            }, {
              time: '2019-04-14',
              value: 81.89
            }, {
              time: '2019-04-15',
              value: 74.43
            }, {
              time: '2019-04-16',
              value: 80.01
            }, {
              time: '2019-04-17',
              value: 96.63
            }, {
              time: '2019-04-18',
              value: 76.64
            }, {
              time: '2019-04-19',
              value: 81.89
            }, {
              time: '2019-04-20',
              value: 74.43
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 80,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          })), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Baseline', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_baseline_series__WEBPACK_IMPORTED_MODULE_8__.BaselineSeries, {
            baseValue: {
              type: 'price',
              price: 85
            },
            data: [{
              time: '2019-04-11',
              value: 80.01
            }, {
              time: '2019-04-12',
              value: 96.63
            }, {
              time: '2019-04-13',
              value: 76.64
            }, {
              time: '2019-04-14',
              value: 81.89
            }, {
              time: '2019-04-15',
              value: 74.43
            }, {
              time: '2019-04-16',
              value: 80.01
            }, {
              time: '2019-04-17',
              value: 96.63
            }, {
              time: '2019-04-18',
              value: 76.64
            }, {
              time: '2019-04-19',
              value: 81.89
            }, {
              time: '2019-04-20',
              value: 74.43
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 80,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          })), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Bar', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_bar_series__WEBPACK_IMPORTED_MODULE_5__.BarSeries, {
            data: [{
              time: '2018-10-19',
              open: 180.34,
              high: 180.99,
              low: 178.57,
              close: 179.85
            }, {
              time: '2018-10-22',
              open: 180.82,
              high: 181.40,
              low: 177.56,
              close: 178.75
            }, {
              time: '2018-10-23',
              open: 175.77,
              high: 179.49,
              low: 175.44,
              close: 178.53
            }, {
              time: '2018-10-24',
              open: 178.58,
              high: 182.37,
              low: 176.31,
              close: 176.97
            }, {
              time: '2018-10-25',
              open: 177.52,
              high: 180.50,
              low: 176.83,
              close: 179.07
            }, {
              time: '2018-10-26',
              open: 176.88,
              high: 177.34,
              low: 170.91,
              close: 172.23
            }, {
              time: '2018-10-29',
              open: 173.74,
              high: 175.99,
              low: 170.95,
              close: 173.20
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 178,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          })), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(() => type() === 'Candlestick', true)() && (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_candlestick_series__WEBPACK_IMPORTED_MODULE_6__.CandlestickSeries, {
            data: [{
              time: '2018-10-19',
              open: 180.34,
              high: 180.99,
              low: 178.57,
              close: 179.85
            }, {
              time: '2018-10-22',
              open: 180.82,
              high: 181.40,
              low: 177.56,
              close: 178.75
            }, {
              time: '2018-10-23',
              open: 175.77,
              high: 179.49,
              low: 175.44,
              close: 178.53
            }, {
              time: '2018-10-24',
              open: 178.58,
              high: 182.37,
              low: 176.31,
              close: 176.97
            }, {
              time: '2018-10-25',
              open: 177.52,
              high: 180.50,
              low: 176.83,
              close: 179.07
            }, {
              time: '2018-10-26',
              open: 176.88,
              high: 177.34,
              low: 170.91,
              close: 172.23
            }, {
              time: '2018-10-29',
              open: 173.74,
              high: 175.99,
              low: 170.95,
              close: 173.20
            }],

            get children() {
              return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_10__.Show, {
                get when() {
                  return line();
                },

                get children() {
                  return (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(_solid_lightweight_charts_components_price_line__WEBPACK_IMPORTED_MODULE_4__.PriceLine, {
                    price: 178,
                    color: "#FF0000",
                    lineWidth: 1,

                    get lineStyle() {
                      return lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.LineStyle.Solid;
                    },

                    axisLabelVisible: true,
                    title: "price"
                  });
                }

              });
            }

          }))];
        }

      });
    }

  })];
}
(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.render)(() => (0,solid_js__WEBPACK_IMPORTED_MODULE_10__.createComponent)(App, {}), document.body);

/***/ }),

/***/ "./src/solid-lightweight-charts/components/area-series.tsx":
/*!*****************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/area-series.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaSeries": () => (/* binding */ AreaSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function AreaSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Area',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/bar-series.tsx":
/*!****************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/bar-series.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarSeries": () => (/* binding */ BarSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function BarSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Bar',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/baseline-series.tsx":
/*!*********************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/baseline-series.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineSeries": () => (/* binding */ BaselineSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function BaselineSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Baseline',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/candlestick-series.tsx":
/*!************************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/candlestick-series.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandlestickSeries": () => (/* binding */ CandlestickSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function CandlestickSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Candlestick',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/chart.tsx":
/*!***********************************************************!*\
  !*** ./src/solid-lightweight-charts/components/chart.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chart": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/.pnpm/lightweight-charts@3.7.0/node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");



const _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<div></div>`, 2);




function Chart(props) {
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createSignal)(null);
  const [, params] = (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.splitProps)(props, ['children']);
  return [(() => {
    const _el$ = _tmpl$.cloneNode(true);

    action(_el$, () => [(element, params) => {
      let {
        onClick,
        onCrosshairMove,
        ref,
        ...options
      } = params;
      const subject = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_1__.createChart)(element, options);

      if (onClick) {
        subject.subscribeClick(onClick);
      }

      if (onCrosshairMove) {
        subject.subscribeCrosshairMove(onCrosshairMove);
      }

      if (ref) {
        ref(subject);
      }

      setApi(subject);
      return {
        update(nextParams) {
          const {
            ref: nextRef,
            onClick: nextOnClick,
            onCrosshairMove: nextOnCrosshairMove,
            ...nextOptions
          } = nextParams;

          if (nextRef !== ref) {
            ref?.(null);
            ref = nextRef;
            ref?.(subject);
          }

          subject.applyOptions(nextOptions);

          if (nextOnClick !== onClick) {
            if (onClick) {
              subject.unsubscribeClick(onClick);
            }

            onClick = nextOnClick;

            if (onClick) {
              subject.subscribeClick(onClick);
            }
          }

          if (nextOnCrosshairMove !== onCrosshairMove) {
            if (onCrosshairMove) {
              subject.unsubscribeCrosshairMove(onCrosshairMove);
            }

            onCrosshairMove = nextOnCrosshairMove;

            if (onCrosshairMove) {
              subject.subscribeCrosshairMove(onCrosshairMove);
            }
          }
        },

        destroy() {
          subject.remove();
          setApi(null);
        }

      };
    }, params]);
    return _el$;
  })(), (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_3__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_2__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  })];
}
/**
 * @internal
 */

function action(element, accessor) {
  let action;
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
    const [fn, params] = accessor();
    action = fn(element, { ...params
    });
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createEffect)(mounted => {
    const [, { ...params
    }] = accessor();

    if (mounted) {
      action.update(params);
    }

    return true;
  }, false);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onCleanup)(() => {
    action.destroy();
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/histogram-series.tsx":
/*!**********************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/histogram-series.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistogramSeries": () => (/* binding */ HistogramSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function HistogramSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Histogram',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/internal/context.tsx":
/*!**********************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/internal/context.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "ApiProvider": () => (/* binding */ ApiProvider)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");


const Context = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function context() {
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function ApiProvider(props) {
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createComponent)(Context.Provider, {
    get value() {
      return props.value;
    },

    get children() {
      return props.children;
    }

  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/internal/utils.ts":
/*!*******************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/internal/utils.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSeriesEffect": () => (/* binding */ useSeriesEffect),
/* harmony export */   "useLineEffect": () => (/* binding */ useLineEffect)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/series */ "./src/solid-lightweight-charts/internal/series.ts");
/* harmony import */ var _internal_lines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/lines */ "./src/solid-lightweight-charts/internal/lines.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function useSeriesEffect(callback) {
  let subject = null;
  const api = (0,_context__WEBPACK_IMPORTED_MODULE_2__.context)();
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
    const [{ ...params
    }, ref] = callback();
    console.log('series mount');
    subject = (0,_internal_series__WEBPACK_IMPORTED_MODULE_0__.series)(api, params);
    subject.updateReference(ref);
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onCleanup)(() => {
    subject?.destroy();
    subject = null;
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createEffect)(mounted => {
    const [{ ...params
    }, ref] = callback();

    if (mounted) {
      subject?.update(params);
      subject?.updateReference(ref);
    }

    return true;
  }, false);
}
function useLineEffect(callback) {
  let subject = null;
  const api = (0,_context__WEBPACK_IMPORTED_MODULE_2__.context)();
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
    const [{ ...params
    }, ref] = callback();
    subject = (0,_internal_lines__WEBPACK_IMPORTED_MODULE_1__.line)(api, params);
    subject.updateReference(ref);
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.onCleanup)(() => {
    subject?.destroy();
    subject = null;
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_3__.createEffect)(mounted => {
    const [{ ...params
    }, ref] = callback();

    if (mounted) {
      subject?.update(params);
      subject?.updateReference(ref);
    }

    return true;
  }, false);
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/line-series.tsx":
/*!*****************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/line-series.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineSeries": () => (/* binding */ LineSeries)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");
/* harmony import */ var _internal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/context */ "./src/solid-lightweight-charts/components/internal/context.tsx");




function LineSeries(props) {
  const id = performance.now().toString();
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(props, ['ref', 'data', 'children']);
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useSeriesEffect)(() => [{
    id,
    type: 'Line',

    get options() {
      return { ...options
      };
    },

    data: props.data
  }, handleReference]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_js__WEBPACK_IMPORTED_MODULE_2__.Show, {
    get when() {
      return api();
    },

    children: value => (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_internal_context__WEBPACK_IMPORTED_MODULE_1__.ApiProvider, {
      value: value,

      get children() {
        return props.children;
      }

    })
  });
}

/***/ }),

/***/ "./src/solid-lightweight-charts/components/price-line.tsx":
/*!****************************************************************!*\
  !*** ./src/solid-lightweight-charts/components/price-line.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceLine": () => (/* binding */ PriceLine)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./src/solid-lightweight-charts/components/internal/utils.ts");


function PriceLine(props) {
  const [, options] = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.splitProps)(props, ['ref']);
  const id = performance.now().toString();
  const [api, setApi] = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.createSignal)(null);

  const handleReference = ref => {
    console.log(ref);
    setApi(ref);
  };

  (0,_internal_utils__WEBPACK_IMPORTED_MODULE_0__.useLineEffect)(() => [{
    id,

    get options() {
      return { ...options
      };
    }

  }, handleReference]);
  return undefined;
}

/***/ }),

/***/ "./src/solid-lightweight-charts/internal/collection.ts":
/*!*************************************************************!*\
  !*** ./src/solid-lightweight-charts/internal/collection.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collection": () => (/* binding */ collection)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/solid-lightweight-charts/internal/utils.ts");

function collection(target, params = [], factory, reference) {
  const collection = new Map();

  for (const current of params) {
    const result = factory(target, current);
    result.updateReference(reference(current));
    collection.set(current.id, result);
  }

  return {
    update(nextParams = []) {
      const existing = new Set(collection.keys());
      const next = new Map(nextParams.map(item => [item.id, item]));

      for (const id of existing) {
        if (!next.has(id)) {
          const entry = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.ensure)(collection.get(id));
          entry.destroy();
          collection.delete(id);
        }
      }

      for (const [id, options] of next.entries()) {
        const entry = collection.get(id);

        if (entry === undefined) {
          const created = factory(target, options);
          created.updateReference(reference(options));
          collection.set(id, created);
        } else {
          entry.update(options);
          entry.updateReference(reference(options));
        }
      }
    },

    destroy() {
      for (const current of collection.values()) {
        current.destroy();
      }
    }

  };
}

/***/ }),

/***/ "./src/solid-lightweight-charts/internal/lines.ts":
/*!********************************************************!*\
  !*** ./src/solid-lightweight-charts/internal/lines.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linesCollection": () => (/* binding */ linesCollection),
/* harmony export */   "line": () => (/* binding */ line)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/solid-lightweight-charts/internal/collection.ts");

function linesCollection(target, params = []) {
  return (0,_collection__WEBPACK_IMPORTED_MODULE_0__.collection)(target, params, line, p => p.reference);
}
function line(target, params) {
  const subject = target.createPriceLine(params.options);
  let reference;
  return {
    update(nextParams) {
      if (nextParams.options) {
        subject.applyOptions(nextParams.options);
      }
    },

    updateReference(nextReference) {
      if (nextReference !== reference) {
        reference?.(null);
        reference = nextReference;
        reference?.(subject);
      }
    },

    destroy() {
      reference?.(null);
      target.removePriceLine(subject);
    }

  };
}

/***/ }),

/***/ "./src/solid-lightweight-charts/internal/series.ts":
/*!*********************************************************!*\
  !*** ./src/solid-lightweight-charts/internal/series.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seriesCollection": () => (/* binding */ seriesCollection),
/* harmony export */   "series": () => (/* binding */ series)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/solid-lightweight-charts/internal/collection.ts");
/* harmony import */ var _lines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lines */ "./src/solid-lightweight-charts/internal/lines.ts");


function seriesCollection(target, params = []) {
  return (0,_collection__WEBPACK_IMPORTED_MODULE_0__.collection)(target, params, series, p => p.reference);
}
function series(target, params) {
  let subject = createSeries(target, params);
  let reference;
  let lines = (0,_lines__WEBPACK_IMPORTED_MODULE_1__.linesCollection)(subject, params.priceLines);
  return {
    update(nextParams) {
      if (nextParams.type !== subject.seriesType()) {
        lines.destroy();
        target.removeSeries(subject);
        reference?.(null);
        subject = createSeries(target, nextParams);
        reference?.(subject);
        lines = (0,_lines__WEBPACK_IMPORTED_MODULE_1__.linesCollection)(subject, params.priceLines);
        return;
      }

      if (nextParams.options) {
        subject.applyOptions(nextParams.options);
      }

      lines.update(nextParams.priceLines);
    },

    updateReference(nextReference) {
      if (nextReference !== reference) {
        reference?.(null);
        reference = nextReference;
        reference?.(subject);
      }
    },

    destroy() {
      lines.destroy();
      reference?.(null);
      target.removeSeries(subject);
    }

  };
}

function createSeries(chart, params) {
  switch (params.type) {
    case 'Area':
      {
        const series = chart.addAreaSeries(params.options);
        series.setData(params.data);
        return series;
      }

    case 'Bar':
      {
        const series = chart.addBarSeries(params.options);
        series.setData(params.data);
        return series;
      }

    case 'Candlestick':
      {
        const series = chart.addCandlestickSeries(params.options);
        series.setData(params.data);
        return series;
      }

    case 'Histogram':
      {
        const series = chart.addHistogramSeries(params.options);
        series.setData(params.data);
        return series;
      }

    case 'Line':
      {
        const series = chart.addLineSeries(params.options);
        series.setData(params.data);
        return series;
      }

    case 'Baseline':
      {
        const series = chart.addBaselineSeries(params.options);
        series.setData(params.data);
        return series;
      }
  }
}

/***/ }),

/***/ "./src/solid-lightweight-charts/internal/utils.ts":
/*!********************************************************!*\
  !*** ./src/solid-lightweight-charts/internal/utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensure": () => (/* binding */ ensure)
/* harmony export */ });
function ensure(value) {
  if (value === null || value === undefined) {
    throw new Error('no value');
  }

  return value;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=bundle.js.map