"use strict";
(self["webpackChunksolid_app"] = self["webpackChunksolid_app"] || []).push([["vendors"],{

/***/ "./node_modules/.pnpm/fancy-canvas@0.2.2/node_modules/fancy-canvas/coordinate-space.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/fancy-canvas@0.2.2/node_modules/fancy-canvas/coordinate-space.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindToDevicePixelRatio": () => (/* binding */ bindToDevicePixelRatio)
/* harmony export */ });
var defaultBindingOptions = {
    allowDownsampling: true,
};
function bindToDevicePixelRatio(canvas, options) {
    if (options === void 0) { options = defaultBindingOptions; }
    return new DevicePixelRatioBinding(canvas, options);
}
var DevicePixelRatioBinding = /** @class */ (function () {
    function DevicePixelRatioBinding(canvas, options) {
        var _this = this;
        this._resolutionMediaQueryList = null;
        this._resolutionListener = function (ev) { return _this._onResolutionChanged(); };
        this._canvasConfiguredListeners = [];
        this.canvas = canvas;
        this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight,
        };
        this._options = options;
        this._configureCanvas();
        this._installResolutionListener();
    }
    DevicePixelRatioBinding.prototype.destroy = function () {
        this._canvasConfiguredListeners.length = 0;
        this._uninstallResolutionListener();
        this.canvas = null;
    };
    Object.defineProperty(DevicePixelRatioBinding.prototype, "canvasSize", {
        get: function () {
            return {
                width: this._canvasSize.width,
                height: this._canvasSize.height,
            };
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding.prototype.resizeCanvas = function (size) {
        this._canvasSize = {
            width: size.width,
            height: size.height,
        };
        this._configureCanvas();
    };
    Object.defineProperty(DevicePixelRatioBinding.prototype, "pixelRatio", {
        get: function () {
            // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
            // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
            var win = this.canvas.ownerDocument.defaultView;
            if (win == null) {
                throw new Error('No window is associated with the canvas');
            }
            return win.devicePixelRatio > 1 || this._options.allowDownsampling ? win.devicePixelRatio : 1;
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding.prototype.subscribeCanvasConfigured = function (listener) {
        this._canvasConfiguredListeners.push(listener);
    };
    DevicePixelRatioBinding.prototype.unsubscribeCanvasConfigured = function (listener) {
        this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function (l) { return l != listener; });
    };
    DevicePixelRatioBinding.prototype._configureCanvas = function () {
        var ratio = this.pixelRatio;
        this.canvas.style.width = this._canvasSize.width + "px";
        this.canvas.style.height = this._canvasSize.height + "px";
        this.canvas.width = this._canvasSize.width * ratio;
        this.canvas.height = this._canvasSize.height * ratio;
        this._emitCanvasConfigured();
    };
    DevicePixelRatioBinding.prototype._emitCanvasConfigured = function () {
        var _this = this;
        this._canvasConfiguredListeners.forEach(function (listener) { return listener.call(_this); });
    };
    DevicePixelRatioBinding.prototype._installResolutionListener = function () {
        if (this._resolutionMediaQueryList !== null) {
            throw new Error('Resolution listener is already installed');
        }
        // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
        // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
        var win = this.canvas.ownerDocument.defaultView;
        if (win == null) {
            throw new Error('No window is associated with the canvas');
        }
        var dppx = win.devicePixelRatio;
        this._resolutionMediaQueryList = win.matchMedia("all and (resolution: " + dppx + "dppx)");
        // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    DevicePixelRatioBinding.prototype._uninstallResolutionListener = function () {
        if (this._resolutionMediaQueryList !== null) {
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.removeListener(this._resolutionListener);
            this._resolutionMediaQueryList = null;
        }
    };
    DevicePixelRatioBinding.prototype._reinstallResolutionListener = function () {
        this._uninstallResolutionListener();
        this._installResolutionListener();
    };
    DevicePixelRatioBinding.prototype._onResolutionChanged = function () {
        this._configureCanvas();
        this._reinstallResolutionListener();
    };
    return DevicePixelRatioBinding;
}());


/***/ }),

/***/ "./node_modules/.pnpm/lightweight-charts@3.7.0/node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lightweight-charts@3.7.0/node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorType": () => (/* binding */ Pt),
/* harmony export */   "CrosshairMode": () => (/* binding */ j),
/* harmony export */   "LasPriceAnimationMode": () => (/* binding */ mt),
/* harmony export */   "LastPriceAnimationMode": () => (/* binding */ mt),
/* harmony export */   "LineStyle": () => (/* binding */ n),
/* harmony export */   "LineType": () => (/* binding */ i),
/* harmony export */   "PriceLineSource": () => (/* binding */ pt),
/* harmony export */   "PriceScaleMode": () => (/* binding */ dt),
/* harmony export */   "TickMarkType": () => (/* binding */ Ot),
/* harmony export */   "createChart": () => (/* binding */ xs),
/* harmony export */   "isBusinessDay": () => (/* binding */ It),
/* harmony export */   "isUTCTimestamp": () => (/* binding */ jt),
/* harmony export */   "version": () => (/* binding */ Ss)
/* harmony export */ });
/* harmony import */ var fancy_canvas_coordinate_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fancy-canvas/coordinate-space */ "./node_modules/.pnpm/fancy-canvas@0.2.2/node_modules/fancy-canvas/coordinate-space.js");
/*!
 * @license
 * TradingView Lightweight Charts v3.7.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
var i,n;function s(t,i){var n,s=((n={})[0]=[],n[1]=[t.lineWidth,t.lineWidth],n[2]=[2*t.lineWidth,2*t.lineWidth],n[3]=[6*t.lineWidth,6*t.lineWidth],n[4]=[t.lineWidth,4*t.lineWidth],n)[i];t.setLineDash(s)}function h(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(n,i+h),t.lineTo(s,i+h),t.stroke()}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps"}(i||(i={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(n||(n={}));var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},r(t,i)};function e(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}r(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var u=function(){return u=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var h in i=arguments[n])Object.prototype.hasOwnProperty.call(i,h)&&(t[h]=i[h]);return t},u.apply(this,arguments)};function a(t,i,n){if(n||2===arguments.length)for(var s,h=0,r=i.length;h<r;h++)!s&&h in i||(s||(s=Array.prototype.slice.call(i,0,h)),s[h]=i[h]);return t.concat(s||Array.prototype.slice.call(i))}function o(t,i){if(!t)throw new Error("Assertion failed"+(i?": "+i:""))}function l(t){if(void 0===t)throw new Error("Value is undefined");return t}function f(t){if(null===t)throw new Error("Value is null");return t}function c(t){return f(l(t))}function v(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];for(var s=0,h=i;s<h.length;s++){var r=h[s];for(var e in r)void 0!==r[e]&&("object"!=typeof r[e]||void 0===t[e]?t[e]=r[e]:v(t[e],r[e]))}return t}function _(t){return"number"==typeof t&&isFinite(t)}function d(t){return"number"==typeof t&&t%1==0}function w(t){return"string"==typeof t}function M(t){return"boolean"==typeof t}function b(t){var i,n,s,h=t;if(!h||"object"!=typeof h)return h;for(n in i=Array.isArray(h)?[]:{},h)h.hasOwnProperty(n)&&(s=h[n],i[n]=s&&"object"==typeof s?b(s):s);return i}function m(t){return null!==t}function p(t){return null===t?void 0:t}var g=function(){function t(){this.t=[]}return t.prototype.i=function(t){this.t=t},t.prototype.h=function(t,i,n,s){this.t.forEach((function(h){t.save(),h.h(t,i,n,s),t.restore()}))},t}(),y=function(){function t(){}return t.prototype.h=function(t,i,n,s){t.save(),t.scale(i,i),this.u(t,n,s),t.restore()},t.prototype.o=function(t,i,n,s){t.save(),t.scale(i,i),this.l(t,n,s),t.restore()},t.prototype.l=function(t,i,n){},t}(),k=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.v=null,i}return e(i,t),i.prototype._=function(t){this.v=t},i.prototype.u=function(t){if(null!==this.v&&null!==this.v.M){var i=this.v.M,n=this.v,s=function(s){t.beginPath();for(var h=i.to-1;h>=i.from;--h){var r=n.m[h];t.moveTo(r.p,r.g),t.arc(r.p,r.g,s,0,2*Math.PI)}t.fill()};t.fillStyle=n.k,s(n.C+2),t.fillStyle=n.N,s(n.C)}},i}(y);function C(){return{m:[{p:0,g:0,S:0,D:0}],N:"",k:"",C:0,M:null}}var N={from:0,to:1},x=function(){function t(t,i){this.A=new g,this.T=[],this.B=[],this.L=!0,this.F=t,this.V=i,this.A.i(this.T)}return t.prototype.O=function(t){var i=this.F.W();i.length!==this.T.length&&(this.B=i.map(C),this.T=this.B.map((function(t){var i=new k;return i._(t),i})),this.A.i(this.T)),this.L=!0},t.prototype.P=function(t,i,n){return this.L&&(this.R(t),this.L=!1),this.A},t.prototype.R=function(t){var i=this,n=this.F.W(),s=this.V.I(),h=this.F.j();n.forEach((function(n,r){var e,u=i.B[r],a=n.q(s);if(null!==a&&n.U()){var o=f(n.H());u.N=a.Y,u.C=a.C,u.m[0].D=a.D,u.m[0].g=n.$().K(a.D,o.X),u.k=null!==(e=a.Z)&&void 0!==e?e:i.F.J(u.m[0].g/t),u.m[0].S=s,u.m[0].p=h.G(s),u.M=N}else u.M=null}))},t}(),S=function(){function t(t){this.tt=t}return t.prototype.h=function(t,i,n,r){if(null!==this.tt){var e=this.tt.it.U,u=this.tt.nt.U;if(e||u){t.save();var a=Math.round(this.tt.p*i),o=Math.round(this.tt.g*i),l=Math.ceil(this.tt.st*i),f=Math.ceil(this.tt.ht*i);t.lineCap="butt",e&&a>=0&&(t.lineWidth=Math.floor(this.tt.it.rt*i),t.strokeStyle=this.tt.it.et,t.fillStyle=this.tt.it.et,s(t,this.tt.it.ut),function(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(i+h,n),t.lineTo(i+h,s),t.stroke()}(t,a,0,f)),u&&o>=0&&(t.lineWidth=Math.floor(this.tt.nt.rt*i),t.strokeStyle=this.tt.nt.et,t.fillStyle=this.tt.nt.et,s(t,this.tt.nt.ut),h(t,o,0,l)),t.restore()}}},t}(),D=function(){function t(t){this.L=!0,this.at={it:{rt:1,ut:0,et:"",U:!1},nt:{rt:1,ut:0,et:"",U:!1},st:0,ht:0,p:0,g:0},this.ot=new S(this.at),this.lt=t}return t.prototype.O=function(){this.L=!0},t.prototype.P=function(t,i){return this.L&&(this.R(),this.L=!1),this.ot},t.prototype.R=function(){var t=this.lt.U(),i=f(this.lt.ft()),n=i.vt().ct().crosshair,s=this.at;s.nt.U=t&&this.lt._t(i),s.it.U=t&&this.lt.dt(),s.nt.rt=n.horzLine.width,s.nt.ut=n.horzLine.style,s.nt.et=n.horzLine.color,s.it.rt=n.vertLine.width,s.it.ut=n.vertLine.style,s.it.et=n.vertLine.color,s.st=i.wt(),s.ht=i.Mt(),s.p=this.lt.bt(),s.g=this.lt.gt()},t}(),A={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function T(t){return t<0?0:t>255?255:Math.round(t)||0}function B(t){return t<=0||t>0?t<0?0:t>1?1:Math.round(1e4*t)/1e4:0}var L=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,F=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,E=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,V=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;function O(t){var i;if((t=t.toLowerCase())in A&&(t=A[t]),i=V.exec(t)||E.exec(t))return[T(parseInt(i[1],10)),T(parseInt(i[2],10)),T(parseInt(i[3],10)),B(i.length<5?1:parseFloat(i[4]))];if(i=F.exec(t))return[T(parseInt(i[1],16)),T(parseInt(i[2],16)),T(parseInt(i[3],16)),1];if(i=L.exec(t))return[T(17*parseInt(i[1],16)),T(17*parseInt(i[2],16)),T(17*parseInt(i[3],16)),1];throw new Error("Cannot parse color: "+t)}function W(t){var i,n=O(t);return{yt:"rgb("+n[0]+", "+n[1]+", "+n[2]+")",kt:(i=n,.199*i[0]+.687*i[1]+.114*i[2]>160?"black":"white")}}function z(t,i,n,s,h,r){t.fillRect(i+r,n,s-2*r,r),t.fillRect(i+r,n+h-r,s-2*r,r),t.fillRect(i,n,r,h),t.fillRect(i+s-r,n,r,h)}function P(t,i,n){t.save(),t.scale(i,i),n(),t.restore()}function R(t,i,n,s,h,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(i,n,s,h),t.restore()}function I(t,i,n,s,h,r,e){t.save(),t.globalCompositeOperation="copy";var u=t.createLinearGradient(0,0,0,h);u.addColorStop(0,r),u.addColorStop(1,e),t.fillStyle=u,t.fillRect(i,n,s,h),t.restore()}var j,q=function(){function t(t,i){this._(t,i)}return t.prototype._=function(t,i){this.tt=t,this.Ct=i},t.prototype.h=function(t,i,n,s,h,r){if(this.tt.U){t.font=i.Nt;var e=this.tt.xt||!this.tt.St?i.Dt:0,u=i.At,a=i.Tt,o=i.Bt,l=i.Lt,f=i.Ft,c=this.tt.Et,v=Math.ceil(n.Vt(t,c)),_=i.Ot,d=i.Wt+a+o,w=Math.ceil(.5*d),M=u+v+l+f+e,b=this.Ct.zt;this.Ct.Pt&&(b=this.Ct.Pt);var m,p,g=(b=Math.round(b))-w,y=g+d,k="right"===h,C=k?s:0,N=Math.ceil(s*r),x=C;if(t.fillStyle=this.Ct.yt,t.lineWidth=1,t.lineCap="butt",c){k?(m=C-e,p=(x=C-M)+f):(x=C+M,m=C+e,p=C+u+e+l);var S=Math.max(1,Math.floor(r)),D=Math.max(1,Math.floor(u*r)),A=k?N:0,T=Math.round(g*r),B=Math.round(x*r),L=Math.round(b*r)-Math.floor(.5*r),F=L+S+(L-T),E=Math.round(m*r);t.save(),t.beginPath(),t.moveTo(A,T),t.lineTo(B,T),t.lineTo(B,F),t.lineTo(A,F),t.fill(),t.fillStyle=this.tt.Z,t.fillRect(k?N-D:0,T,D,F-T),this.tt.xt&&(t.fillStyle=this.Ct.et,t.fillRect(A,L,E-A,S)),t.textAlign="left",t.fillStyle=this.Ct.et,P(t,r,(function(){t.fillText(c,p,y-o-_)})),t.restore()}}},t.prototype.Mt=function(t,i){return this.tt.U?t.Wt+t.Tt+t.Bt:0},t}(),U=function(){function t(t){this.Rt={zt:0,et:"#FFF",yt:"#000"},this.It={Et:"",U:!1,xt:!0,St:!1,Z:""},this.jt={Et:"",U:!1,xt:!1,St:!0,Z:""},this.L=!0,this.qt=new(t||q)(this.It,this.Rt),this.Ut=new(t||q)(this.jt,this.Rt)}return t.prototype.Et=function(){return this.It.Et},t.prototype.zt=function(){return this.Ht(),this.Rt.zt},t.prototype.O=function(){this.L=!0},t.prototype.Mt=function(t,i){return void 0===i&&(i=!1),Math.max(this.qt.Mt(t,i),this.Ut.Mt(t,i))},t.prototype.Yt=function(){return this.Rt.Pt||0},t.prototype.Kt=function(t){this.Rt.Pt=t},t.prototype.$t=function(){return this.Ht(),this.It.U||this.jt.U},t.prototype.Xt=function(){return this.Ht(),this.It.U},t.prototype.P=function(t){return this.Ht(),this.It.xt=this.It.xt&&t.ct().drawTicks,this.jt.xt=this.jt.xt&&t.ct().drawTicks,this.qt._(this.It,this.Rt),this.Ut._(this.jt,this.Rt),this.qt},t.prototype.Zt=function(){return this.Ht(),this.qt._(this.It,this.Rt),this.Ut._(this.jt,this.Rt),this.Ut},t.prototype.Ht=function(){this.L&&(this.It.xt=!0,this.jt.xt=!1,this.Jt(this.It,this.jt,this.Rt))},t}(),H=function(t){function i(i,n,s){var h=t.call(this)||this;return h.lt=i,h.Gt=n,h.Qt=s,h}return e(i,t),i.prototype.Jt=function(t,i,n){t.U=!1;var s=this.lt.ct().horzLine;if(s.labelVisible){var h=this.Gt.H();if(this.lt.U()&&!this.Gt.ti()&&null!==h){var r=W(s.labelBackgroundColor);n.yt=r.yt,n.et=r.kt;var e=this.Qt(this.Gt);n.zt=e.zt,t.Et=this.Gt.ii(e.D,h),t.U=!0}}},i}(U),Y=/[1-9]/g,K=function(){function t(){this.tt=null}return t.prototype._=function(t){this.tt=t},t.prototype.h=function(t,i,n){var s=this;if(null!==this.tt&&!1!==this.tt.U&&0!==this.tt.Et.length){t.font=i.Nt;var h=Math.round(i.ni.Vt(t,this.tt.Et,Y));if(!(h<=0)){t.save();var r=i.si,e=h+2*r,u=e/2,a=this.tt.wt,o=this.tt.zt,l=Math.floor(o-u)+.5;l<0?(o+=Math.abs(0-l),l=Math.floor(o-u)+.5):l+e>a&&(o-=Math.abs(a-(l+e)),l=Math.floor(o-u)+.5);var c=l+e,v=0+i.At+i.Tt+i.Wt+i.Bt;t.fillStyle=this.tt.yt;var _=Math.round(l*n),d=Math.round(0*n),w=Math.round(c*n),M=Math.round(v*n);t.fillRect(_,d,w-_,M-d);var b=Math.round(this.tt.zt*n),m=d,p=Math.round((m+i.At+i.Dt)*n);t.fillStyle=this.tt.et;var g=Math.max(1,Math.floor(n)),y=Math.floor(.5*n);t.fillRect(b-y,m,g,p-m);var k=v-i.Ot-i.Bt;t.textAlign="left",t.fillStyle=this.tt.et,P(t,n,(function(){t.fillText(f(s.tt).Et,l+r,k)})),t.restore()}}},t}(),$=function(){function t(t,i,n){this.L=!0,this.ot=new K,this.at={U:!1,yt:"#4c525e",et:"white",Et:"",wt:0,zt:NaN},this.V=t,this.hi=i,this.Qt=n}return t.prototype.O=function(){this.L=!0},t.prototype.P=function(){return this.L&&(this.R(),this.L=!1),this.ot._(this.at),this.ot},t.prototype.R=function(){var t=this.at;t.U=!1;var i=this.V.ct().vertLine;if(i.labelVisible){var n=this.hi.j();if(!n.ti()){var s=n.ri(this.V.I());t.wt=n.wt();var h=this.Qt();if(h.S){t.zt=h.zt,t.Et=n.ei(f(s)),t.U=!0;var r=W(i.labelBackgroundColor);t.yt=r.yt,t.et=r.kt}}}},t}(),X=function(){function t(){this.ui=null,this.ai=0}return t.prototype.oi=function(){return this.ai},t.prototype.li=function(t){this.ai=t},t.prototype.$=function(){return this.ui},t.prototype.fi=function(t){this.ui=t},t.prototype.ci=function(){return[]},t.prototype.U=function(){return!0},t}();!function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet"}(j||(j={}));var Z=function(t){function i(i,n){var s=t.call(this)||this;s.vi=null,s._i=NaN,s.di=0,s.wi=!0,s.Mi=new Map,s.bi=!1,s.mi=NaN,s.pi=NaN,s.gi=NaN,s.yi=NaN,s.hi=i,s.ki=n,s.Ci=new x(i,s);var h,r;s.Ni=(h=function(){return s._i},r=function(){return s.pi},function(t){var i=r(),n=h();if(t===f(s.vi).xi())return{D:n,zt:i};var e=f(t.H());return{D:t.Si(i,e),zt:i}});var e=function(t,i){return function(){return{S:s.hi.j().ri(t()),zt:i()}}}((function(){return s.di}),(function(){return s.bt()}));return s.Di=new $(s,i,e),s.Ai=new D(s),s}return e(i,t),i.prototype.ct=function(){return this.ki},i.prototype.Ti=function(t,i){this.gi=t,this.yi=i},i.prototype.Bi=function(){this.gi=NaN,this.yi=NaN},i.prototype.Li=function(){return this.gi},i.prototype.Fi=function(){return this.yi},i.prototype.Ei=function(t,i,n){this.bi||(this.bi=!0),this.wi=!0,this.Vi(t,i,n)},i.prototype.I=function(){return this.di},i.prototype.bt=function(){return this.mi},i.prototype.gt=function(){return this.pi},i.prototype.U=function(){return this.wi},i.prototype.Oi=function(){this.wi=!1,this.Wi(),this._i=NaN,this.mi=NaN,this.pi=NaN,this.vi=null,this.Bi()},i.prototype.zi=function(t){return null!==this.vi?[this.Ai,this.Ci]:[]},i.prototype._t=function(t){return t===this.vi&&this.ki.horzLine.visible},i.prototype.dt=function(){return this.ki.vertLine.visible},i.prototype.Pi=function(t,i){this.wi&&this.vi===t||this.Mi.clear();var n=[];return this.vi===t&&n.push(this.Ri(this.Mi,i,this.Ni)),n},i.prototype.ci=function(){return this.wi?[this.Di]:[]},i.prototype.ft=function(){return this.vi},i.prototype.Ii=function(){this.Ai.O(),this.Mi.forEach((function(t){return t.O()})),this.Di.O(),this.Ci.O()},i.prototype.ji=function(t){return t&&!t.xi().ti()?t.xi():null},i.prototype.Vi=function(t,i,n){this.qi(t,i,n)&&this.Ii()},i.prototype.qi=function(t,i,n){var s=this.mi,h=this.pi,r=this._i,e=this.di,u=this.vi,a=this.ji(n);this.di=t,this.mi=isNaN(t)?NaN:this.hi.j().G(t),this.vi=n;var o=null!==a?a.H():null;return null!==a&&null!==o?(this._i=i,this.pi=a.K(i,o)):(this._i=NaN,this.pi=NaN),s!==this.mi||h!==this.pi||e!==this.di||r!==this._i||u!==this.vi},i.prototype.Wi=function(){var t=this.hi.W().map((function(t){return t.Hi().Ui()})).filter(m),i=0===t.length?null:Math.max.apply(Math,t);this.di=null!==i?i:NaN},i.prototype.Ri=function(t,i,n){var s=t.get(i);return void 0===s&&(s=new H(this,i,n),t.set(i,s)),s},i}(X),J=".";function G(t,i){if(!_(t))return"n/a";if(!d(i))throw new TypeError("invalid length");if(i<0||i>16)throw new TypeError("invalid length");if(0===i)return t.toString();return("0000000000000000"+t.toString()).slice(-i)}var Q=function(){function t(t,i){if(i||(i=1),_(t)&&d(t)||(t=100),t<0)throw new TypeError("invalid base");this.Gt=t,this.Yi=i,this.Ki()}return t.prototype.format=function(t){var i=t<0?"−":"";return t=Math.abs(t),i+this.$i(t)},t.prototype.Ki=function(){if(this.Xi=0,this.Gt>0&&this.Yi>0)for(var t=this.Gt;t>1;)t/=10,this.Xi++},t.prototype.$i=function(t){var i=this.Gt/this.Yi,n=Math.floor(t),s="",h=void 0!==this.Xi?this.Xi:NaN;if(i>1){var r=+(Math.round(t*i)-n*i).toFixed(this.Xi);r>=i&&(r-=i,n+=1),s=J+G(+r.toFixed(this.Xi)*this.Yi,h)}else n=Math.round(n*i)/i,h>0&&(s=J+G(0,h));return n.toFixed(0)+s},t}(),tt=function(t){function i(i){return void 0===i&&(i=100),t.call(this,i)||this}return e(i,t),i.prototype.format=function(i){return t.prototype.format.call(this,i)+"%"},i}(Q),it=function(){function t(){this.Zi=[]}return t.prototype.Ji=function(t,i,n){var s={Gi:t,Qi:i,tn:!0===n};this.Zi.push(s)},t.prototype.nn=function(t){var i=this.Zi.findIndex((function(i){return t===i.Gi}));i>-1&&this.Zi.splice(i,1)},t.prototype.sn=function(t){this.Zi=this.Zi.filter((function(i){return i.Qi===t}))},t.prototype.hn=function(t,i){var n=a([],this.Zi,!0);this.Zi=this.Zi.filter((function(t){return!t.tn})),n.forEach((function(n){return n.Gi(t,i)}))},t.prototype.rn=function(){return this.Zi.length>0},t.prototype.en=function(){this.Zi=[]},t}(),nt=function(){function t(t,i){this.un=t,this.an=i}return t.prototype.on=function(t){return null!==t&&(this.un===t.un&&this.an===t.an)},t.prototype.ln=function(){return new t(this.un,this.an)},t.prototype.fn=function(){return this.un},t.prototype.cn=function(){return this.an},t.prototype.vn=function(){return this.an-this.un},t.prototype.ti=function(){return this.an===this.un||Number.isNaN(this.an)||Number.isNaN(this.un)},t.prototype._n=function(i){return null===i?this:new t(Math.min(this.fn(),i.fn()),Math.max(this.cn(),i.cn()))},t.prototype.dn=function(t){if(_(t)&&0!==this.an-this.un){var i=.5*(this.an+this.un),n=this.an-i,s=this.un-i;n*=t,s*=t,this.an=i+n,this.un=i+s}},t.prototype.wn=function(t){_(t)&&(this.an+=t,this.un+=t)},t.prototype.Mn=function(){return{minValue:this.un,maxValue:this.an}},t.bn=function(i){return null===i?null:new t(i.minValue,i.maxValue)},t}();function st(t,i,n){return Math.min(Math.max(t,i),n)}function ht(t,i,n){return i-t<=n}function rt(t){return t<=0?NaN:Math.log(t)/Math.log(10)}function et(t){var i=Math.ceil(t);return i%2!=0?i-1:i}function ut(t){var i=Math.ceil(t);return i%2==0?i-1:i}function at(t,i){var n=100*(t-i)/i;return i<0?-n:n}function ot(t,i){var n=at(t.fn(),i),s=at(t.cn(),i);return new nt(n,s)}function lt(t,i){var n=100*(t-i)/i+100;return i<0?-n:n}function ft(t,i){var n=lt(t.fn(),i),s=lt(t.cn(),i);return new nt(n,s)}function ct(t){var i=Math.abs(t);if(i<1e-8)return 0;var n=rt(i+1e-4)+4;return t<0?-n:n}function vt(t){var i=Math.abs(t);if(i<1e-8)return 0;var n=Math.pow(10,i-4)-1e-4;return t<0?-n:n}function _t(t){if(null===t)return null;var i=ct(t.fn()),n=ct(t.cn());return new nt(i,n)}var dt,wt=function(){function t(t,i){if(this.mn=t,this.pn=i,function(t){if(t<0)return!1;for(var i=t;i>1;i/=10)if(i%10!=0)return!1;return!0}(this.mn))this.gn=[2,2.5,2];else{this.gn=[];for(var n=this.mn;1!==n;){if(n%2==0)this.gn.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.gn.push(2,2.5),n/=5}if(this.gn.length>100)throw new Error("something wrong with base")}}}return t.prototype.yn=function(t,i,n){for(var s,h,r,e=0===this.mn?0:1/this.mn,u=Math.pow(10,Math.max(0,Math.ceil(rt(t-i)))),a=0,o=this.pn[0];;){var l=ht(u,e,1e-14)&&u>e+1e-14,f=ht(u,n*o,1e-14),c=ht(u,1,1e-14);if(!(l&&f&&c))break;u/=o,o=this.pn[++a%this.pn.length]}if(u<=e+1e-14&&(u=e),u=Math.max(1,u),this.gn.length>0&&(s=u,h=1,r=1e-14,Math.abs(s-h)<r))for(a=0,o=this.gn[0];ht(u,n*o,1e-14)&&u>e+1e-14;)u/=o,o=this.gn[++a%this.gn.length];return u},t}(),Mt=function(){function t(t,i,n,s){this.kn=[],this.Gt=t,this.mn=i,this.Cn=n,this.Nn=s}return t.prototype.yn=function(t,i){if(t<i)throw new Error("high < low");var n=this.Gt.Mt(),s=(t-i)*this.xn()/n,h=new wt(this.mn,[2,2.5,2]),r=new wt(this.mn,[2,2,2.5]),e=new wt(this.mn,[2.5,2,2]),u=[];return u.push(h.yn(t,i,s),r.yn(t,i,s),e.yn(t,i,s)),function(t){if(t.length<1)throw Error("array is empty");for(var i=t[0],n=1;n<t.length;++n)t[n]<i&&(i=t[n]);return i}(u)},t.prototype.Sn=function(){var t=this.Gt,i=t.H();if(null!==i){var n=t.Mt(),s=this.Cn(n-1,i),h=this.Cn(0,i),r=this.Gt.ct().entireTextOnly?this.Dn()/2:0,e=r,u=n-1-r,a=Math.max(s,h),o=Math.min(s,h);if(a!==o){for(var l=this.yn(a,o),f=a%l,c=a>=o?1:-1,v=null,_=0,d=a-(f+=f<0?l:0);d>o;d-=l){var w=this.Nn(d,i,!0);null!==v&&Math.abs(w-v)<this.xn()||(w<e||w>u||(_<this.kn.length?(this.kn[_].An=w,this.kn[_].Tn=t.Bn(d)):this.kn.push({An:w,Tn:t.Bn(d)}),_++,v=w,t.Ln()&&(l=this.yn(d*c,o))))}this.kn.length=_}else this.kn=[]}else this.kn=[]},t.prototype.Fn=function(){return this.kn},t.prototype.Dn=function(){return this.Gt.Wt()},t.prototype.xn=function(){return Math.ceil(2.5*this.Dn())},t}();function bt(t){return t.slice().sort((function(t,i){return f(t.oi())-f(i.oi())}))}!function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"}(dt||(dt={}));var mt,pt,gt=new tt,yt=new Q(100,1),kt=function(){function t(t,i,n,s){this.En=0,this.Vn=null,this.On=null,this.Wn=null,this.zn={Pn:!1,Rn:null},this.In=0,this.jn=0,this.qn=new it,this.Un=new it,this.Hn=[],this.Yn=null,this.Kn=null,this.$n=null,this.Xn=null,this.Zn=yt,this.Jn=t,this.ki=i,this.Gn=n,this.Qn=s,this.ts=new Mt(this,100,this.ns.bind(this),this.ss.bind(this))}return t.prototype.hs=function(){return this.Jn},t.prototype.ct=function(){return this.ki},t.prototype.rs=function(t){if(v(this.ki,t),this.es(),void 0!==t.mode&&this.us({os:t.mode}),void 0!==t.scaleMargins){var i=l(t.scaleMargins.top),n=l(t.scaleMargins.bottom);if(i<0||i>1)throw new Error("Invalid top margin - expect value between 0 and 1, given="+i);if(n<0||n>1||i+n>1)throw new Error("Invalid bottom margin - expect value between 0 and 1, given="+n);if(i+n>1)throw new Error("Invalid margins - sum of margins must be less than 1, given="+(i+n));this.ls(),this.Kn=null}},t.prototype.fs=function(){return this.ki.autoScale},t.prototype.Ln=function(){return 1===this.ki.mode},t.prototype.cs=function(){return 2===this.ki.mode},t.prototype.vs=function(){return 3===this.ki.mode},t.prototype.os=function(){return{_s:this.ki.autoScale,ds:this.ki.invertScale,os:this.ki.mode}},t.prototype.us=function(t){var i=this.os(),n=null;void 0!==t._s&&(this.ki.autoScale=t._s),void 0!==t.os&&(this.ki.mode=t.os,2!==t.os&&3!==t.os||(this.ki.autoScale=!0),this.zn.Pn=!1),1===i.os&&t.os!==i.os&&(!function(t){if(null===t)return!1;var i=vt(t.fn()),n=vt(t.cn());return isFinite(i)&&isFinite(n)}(this.On)?this.ki.autoScale=!0:(n=function(t){if(null===t)return null;var i=vt(t.fn()),n=vt(t.cn());return new nt(i,n)}(this.On),null!==n&&this.ws(n))),1===t.os&&t.os!==i.os&&null!==(n=_t(this.On))&&this.ws(n);var s=i.os!==this.ki.mode;s&&(2===i.os||this.cs())&&this.es(),s&&(3===i.os||this.vs())&&this.es(),void 0!==t.ds&&i.ds!==t.ds&&(this.ki.invertScale=t.ds,this.Ms()),this.Un.hn(i,this.os())},t.prototype.bs=function(){return this.Un},t.prototype.Wt=function(){return this.Gn.fontSize},t.prototype.Mt=function(){return this.En},t.prototype.ps=function(t){this.En!==t&&(this.En=t,this.ls(),this.Kn=null)},t.prototype.gs=function(){if(this.Vn)return this.Vn;var t=this.Mt()-this.ys()-this.ks();return this.Vn=t,t},t.prototype.Cs=function(){return this.Ns(),this.On},t.prototype.ws=function(t,i){var n=this.On;(i||null===n&&null!==t||null!==n&&!n.on(t))&&(this.Kn=null,this.On=t)},t.prototype.ti=function(){return this.Ns(),0===this.En||!this.On||this.On.ti()},t.prototype.xs=function(t){return this.ds()?t:this.Mt()-1-t},t.prototype.K=function(t,i){return this.cs()?t=at(t,i):this.vs()&&(t=lt(t,i)),this.ss(t,i)},t.prototype.Ss=function(t,i,n){this.Ns();for(var s=this.ks(),h=f(this.Cs()),r=h.fn(),e=h.cn(),u=this.gs()-1,a=this.ds(),o=u/(e-r),l=void 0===n?0:n.from,c=void 0===n?t.length:n.to,v=this.Ds(),_=l;_<c;_++){var d=t[_],w=d.D;if(!isNaN(w)){var M=w;null!==v&&(M=v(d.D,i));var b=s+o*(M-r),m=a?b:this.En-1-b;d.g=m}}},t.prototype.As=function(t,i,n){this.Ns();for(var s=this.ks(),h=f(this.Cs()),r=h.fn(),e=h.cn(),u=this.gs()-1,a=this.ds(),o=u/(e-r),l=void 0===n?0:n.from,c=void 0===n?t.length:n.to,v=this.Ds(),_=l;_<c;_++){var d=t[_],w=d.open,M=d.high,b=d.low,m=d.close;null!==v&&(w=v(d.open,i),M=v(d.high,i),b=v(d.low,i),m=v(d.close,i));var p=s+o*(w-r),g=a?p:this.En-1-p;d.Ts=g,p=s+o*(M-r),g=a?p:this.En-1-p,d.Bs=g,p=s+o*(b-r),g=a?p:this.En-1-p,d.Ls=g,p=s+o*(m-r),g=a?p:this.En-1-p,d.Fs=g}},t.prototype.Si=function(t,i){var n=this.ns(t,i);return this.Es(n,i)},t.prototype.Es=function(t,i){var n=t;return this.cs()?n=function(t,i){return i<0&&(t=-t),t/100*i+i}(n,i):this.vs()&&(n=function(t,i){return t-=100,i<0&&(t=-t),t/100*i+i}(n,i)),n},t.prototype.Vs=function(){return this.Hn},t.prototype.Os=function(){if(this.Yn)return this.Yn;for(var t=[],i=0;i<this.Hn.length;i++){var n=this.Hn[i];null===n.oi()&&n.li(i+1),t.push(n)}return t=bt(t),this.Yn=t,this.Yn},t.prototype.Ws=function(t){-1===this.Hn.indexOf(t)&&(this.Hn.push(t),this.es(),this.zs())},t.prototype.Ps=function(t){var i=this.Hn.indexOf(t);if(-1===i)throw new Error("source is not attached to scale");this.Hn.splice(i,1),0===this.Hn.length&&(this.us({_s:!0}),this.ws(null)),this.es(),this.zs()},t.prototype.H=function(){for(var t=null,i=0,n=this.Hn;i<n.length;i++){var s=n[i].H();null!==s&&((null===t||s.Rs<t.Rs)&&(t=s))}return null===t?null:t.X},t.prototype.ds=function(){return this.ki.invertScale},t.prototype.Fn=function(){return this.Kn||(this.ts.Sn(),this.Kn=this.ts.Fn(),this.qn.hn()),this.Kn},t.prototype.Is=function(){return this.qn},t.prototype.js=function(t){this.cs()||this.vs()||null===this.$n&&null===this.Wn&&(this.ti()||(this.$n=this.En-t,this.Wn=f(this.Cs()).ln()))},t.prototype.qs=function(t){if(!this.cs()&&!this.vs()&&null!==this.$n){this.us({_s:!1}),(t=this.En-t)<0&&(t=0);var i=(this.$n+.2*(this.En-1))/(t+.2*(this.En-1)),n=f(this.Wn).ln();i=Math.max(i,.1),n.dn(i),this.ws(n)}},t.prototype.Us=function(){this.cs()||this.vs()||(this.$n=null,this.Wn=null)},t.prototype.Hs=function(t){this.fs()||null===this.Xn&&null===this.Wn&&(this.ti()||(this.Xn=t,this.Wn=f(this.Cs()).ln()))},t.prototype.Ys=function(t){if(!this.fs()&&null!==this.Xn){var i=f(this.Cs()).vn()/(this.gs()-1),n=t-this.Xn;this.ds()&&(n*=-1);var s=n*i,h=f(this.Wn).ln();h.wn(s),this.ws(h,!0),this.Kn=null}},t.prototype.Ks=function(){this.fs()||null!==this.Xn&&(this.Xn=null,this.Wn=null)},t.prototype.$s=function(){return this.Zn||this.es(),this.Zn},t.prototype.ii=function(t,i){switch(this.ki.mode){case 2:return this.$s().format(at(t,i));case 3:return this.$s().format(lt(t,i));default:return this.Xs(t)}},t.prototype.Bn=function(t){switch(this.ki.mode){case 2:case 3:return this.$s().format(t);default:return this.Xs(t)}},t.prototype.Zs=function(t){return this.Xs(t,f(this.Js()).$s())},t.prototype.Gs=function(t,i){return t=at(t,i),gt.format(t)},t.prototype.Qs=function(){return this.Hn},t.prototype.th=function(t){this.zn={Rn:t,Pn:!1}},t.prototype.Ii=function(){this.Hn.forEach((function(t){return t.Ii()}))},t.prototype.es=function(){this.Kn=null;var t=this.Js(),i=100;null!==t&&(i=Math.round(1/t.ih())),this.Zn=yt,this.cs()?(this.Zn=gt,i=100):this.vs()?(this.Zn=new Q(100,1),i=100):null!==t&&(this.Zn=t.$s()),this.ts=new Mt(this,i,this.ns.bind(this),this.ss.bind(this)),this.ts.Sn()},t.prototype.zs=function(){this.Yn=null},t.prototype.Js=function(){return this.Hn[0]||null},t.prototype.ys=function(){return this.ds()?this.ki.scaleMargins.bottom*this.Mt()+this.jn:this.ki.scaleMargins.top*this.Mt()+this.In},t.prototype.ks=function(){return this.ds()?this.ki.scaleMargins.top*this.Mt()+this.In:this.ki.scaleMargins.bottom*this.Mt()+this.jn},t.prototype.Ns=function(){this.zn.Pn||(this.zn.Pn=!0,this.nh())},t.prototype.ls=function(){this.Vn=null},t.prototype.ss=function(t,i){if(this.Ns(),this.ti())return 0;t=this.Ln()&&t?ct(t):t;var n=f(this.Cs()),s=this.ks()+(this.gs()-1)*(t-n.fn())/n.vn();return this.xs(s)},t.prototype.ns=function(t,i){if(this.Ns(),this.ti())return 0;var n=this.xs(t),s=f(this.Cs()),h=s.fn()+s.vn()*((n-this.ks())/(this.gs()-1));return this.Ln()?vt(h):h},t.prototype.Ms=function(){this.Kn=null,this.ts.Sn()},t.prototype.nh=function(){var t=this.zn.Rn;if(null!==t){for(var i=null,n=0,s=0,h=0,r=this.Qs();h<r.length;h++){var e=r[h];if(e.U()){var u=e.H();if(null!==u){var a=e.sh(t.hh(),t.rh()),o=a&&a.Cs();if(null!==o){switch(this.ki.mode){case 1:o=_t(o);break;case 2:o=ot(o,u.X);break;case 3:o=ft(o,u.X)}if(i=null===i?o:i._n(f(o)),null!==a){var l=a.eh();null!==l&&(n=Math.max(n,l.above),s=Math.max(n,l.below))}}}}}if(n===this.In&&s===this.jn||(this.In=n,this.jn=s,this.Kn=null,this.ls()),null!==i){if(i.fn()===i.cn()){var c=this.Js(),v=5*(null===c||this.cs()||this.vs()?1:c.ih());i=new nt(i.fn()-v,i.cn()+v)}this.ws(i)}else null===this.On&&this.ws(new nt(-.5,.5));this.zn.Pn=!0}},t.prototype.Ds=function(){return this.cs()?at:this.vs()?lt:this.Ln()?ct:null},t.prototype.Xs=function(t,i){return void 0===this.Qn.priceFormatter?(void 0===i&&(i=this.$s()),i.format(t)):this.Qn.priceFormatter(t)},t}();function Ct(t){void 0!==t.borderColor&&(t.borderUpColor=t.borderColor,t.borderDownColor=t.borderColor),void 0!==t.wickColor&&(t.wickUpColor=t.wickColor,t.wickDownColor=t.wickColor)}!function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"}(mt||(mt={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(pt||(pt={}));var Nt=function(t){return t.getUTCFullYear()};function xt(t,i,n){return i.replace(/yyyy/g,function(t){return G(Nt(t),4)}(t)).replace(/yy/g,function(t){return G(Nt(t)%100,2)}(t)).replace(/MMMM/g,function(t,i){return new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(i,{month:"long"})}(t,n)).replace(/MMM/g,function(t,i){return new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(i,{month:"short"})}(t,n)).replace(/MM/g,function(t){return G(function(t){return t.getUTCMonth()+1}(t),2)}(t)).replace(/dd/g,function(t){return G(function(t){return t.getUTCDate()}(t),2)}(t))}var St=function(){function t(t,i){void 0===t&&(t="yyyy-MM-dd"),void 0===i&&(i="default"),this.uh=t,this.ah=i}return t.prototype.oh=function(t){return xt(t,this.uh,this.ah)},t}(),Dt=function(){function t(t){this.lh=t||"%h:%m:%s"}return t.prototype.oh=function(t){return this.lh.replace("%h",G(t.getUTCHours(),2)).replace("%m",G(t.getUTCMinutes(),2)).replace("%s",G(t.getUTCSeconds(),2))},t}(),At={fh:"yyyy-MM-dd",_h:"%h:%m:%s",dh:" ",wh:"default"},Tt=function(){function t(t){void 0===t&&(t={});var i=u(u({},At),t);this.Mh=new St(i.fh,i.wh),this.bh=new Dt(i._h),this.mh=i.dh}return t.prototype.oh=function(t){return""+this.Mh.oh(t)+this.mh+this.bh.oh(t)},t}();function Bt(t,i,n,s,h){void 0===s&&(s=0),void 0===h&&(h=t.length);for(var r=h-s;0<r;){var e=r>>1,u=s+e;n(t[u],i)?(s=u+1,r-=e+1):r=e}return s}function Lt(t,i,n,s,h){void 0===s&&(s=0),void 0===h&&(h=t.length);for(var r=h-s;0<r;){var e=r>>1,u=s+e;n(i,t[u])?r=e:(s=u+1,r-=e+1)}return s}var Ft=function(){function t(t,i){void 0===i&&(i=50),this.ph=0,this.gh=1,this.yh=1,this.kh=new Map,this.Ch=new Map,this.Nh=t,this.xh=i}return t.prototype.oh=function(t){var i=void 0===t.Sh?new Date(1e3*t.Dh).getTime():new Date(Date.UTC(t.Sh.year,t.Sh.month-1,t.Sh.day)).getTime(),n=this.kh.get(i);if(void 0!==n)return n.Ah;if(this.ph===this.xh){var s=this.Ch.get(this.yh);this.Ch.delete(this.yh),this.kh.delete(l(s)),this.yh++,this.ph--}var h=this.Nh(t);return this.kh.set(i,{Ah:h,Th:this.gh}),this.Ch.set(this.gh,i),this.ph++,this.gh++,h},t}(),Et=function(){function t(t,i){o(t<=i,"right should be >= left"),this.Bh=t,this.Lh=i}return t.prototype.hh=function(){return this.Bh},t.prototype.rh=function(){return this.Lh},t.prototype.Fh=function(){return this.Lh-this.Bh+1},t.prototype.Eh=function(t){return this.Bh<=t&&t<=this.Lh},t.prototype.on=function(t){return this.Bh===t.hh()&&this.Lh===t.rh()},t}();function Vt(t,i){return null===t||null===i?t===i:t.on(i)}var Ot,Wt=function(){function t(){this.Vh=new Map,this.kh=null}return t.prototype.Oh=function(t,i){this.Wh(i),this.kh=null;for(var n=i;n<t.length;++n){var s=t[n],h=this.Vh.get(s.zh);void 0===h&&(h=[],this.Vh.set(s.zh,h)),h.push({Ph:n,S:s.S,Rh:s.zh})}},t.prototype.Ih=function(t,i){var n=Math.ceil(i/t);return null!==this.kh&&this.kh.jh===n||(this.kh={Fn:this.qh(n),jh:n}),this.kh.Fn},t.prototype.Wh=function(t){if(0!==t){var i=[];this.Vh.forEach((function(n,s){t<=n[0].Ph?i.push(s):n.splice(Bt(n,t,(function(i){return i.Ph<t})),1/0)}));for(var n=0,s=i;n<s.length;n++){var h=s[n];this.Vh.delete(h)}}else this.Vh.clear()},t.prototype.qh=function(t){for(var i=[],n=0,s=Array.from(this.Vh.keys()).sort((function(t,i){return i-t}));n<s.length;n++){var h=s[n];if(this.Vh.get(h)){var r=i;i=[];for(var e=r.length,u=0,a=l(this.Vh.get(h)),o=a.length,f=1/0,c=-1/0,v=0;v<o;v++){for(var _=a[v],d=_.Ph;u<e;){var w=r[u],M=w.Ph;if(!(M<d)){f=M;break}u++,i.push(w),c=M,f=1/0}f-d>=t&&d-c>=t&&(i.push(_),c=d)}for(;u<e;u++)i.push(r[u])}}return i},t}(),zt=function(){function t(t){this.Uh=t}return t.prototype.Hh=function(){return null===this.Uh?null:new Et(Math.floor(this.Uh.hh()),Math.ceil(this.Uh.rh()))},t.prototype.Yh=function(){return this.Uh},t.Kh=function(){return new t(null)},t}();!function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(Ot||(Ot={}));var Pt,Rt=function(){function t(t,i,n){this.$h=0,this.Xh=null,this.Zh=[],this.Xn=null,this.$n=null,this.Jh=new Wt,this.Gh=new Map,this.Qh=zt.Kh(),this.tr=!0,this.ir=new it,this.nr=new it,this.sr=new it,this.hr=null,this.rr=null,this.er=[],this.ki=i,this.Qn=n,this.ur=i.rightOffset,this.ar=i.barSpacing,this.hi=t,this.lr()}return t.prototype.ct=function(){return this.ki},t.prototype.cr=function(t){v(this.Qn,t),this.vr(),this.lr()},t.prototype.rs=function(t,i){var n;v(this.ki,t),this.ki.fixLeftEdge&&this._r(),this.ki.fixRightEdge&&this.dr(),void 0!==t.barSpacing&&this.hi.wr(t.barSpacing),void 0!==t.rightOffset&&this.hi.Mr(t.rightOffset),void 0!==t.minBarSpacing&&this.hi.wr(null!==(n=t.barSpacing)&&void 0!==n?n:this.ar),this.vr(),this.lr(),this.sr.hn()},t.prototype.ri=function(t){var i;return(null===(i=this.Zh[t])||void 0===i?void 0:i.S)||null},t.prototype.br=function(t,i){if(this.Zh.length<1)return null;if(t.Dh>this.Zh[this.Zh.length-1].S.Dh)return i?this.Zh.length-1:null;var n=Bt(this.Zh,t.Dh,(function(t,i){return t.S.Dh<i}));return t.Dh<this.Zh[n].S.Dh?i?n:null:n},t.prototype.ti=function(){return 0===this.$h||0===this.Zh.length},t.prototype.mr=function(){return this.pr(),this.Qh.Hh()},t.prototype.gr=function(){return this.pr(),this.Qh.Yh()},t.prototype.yr=function(){var t=this.mr();if(null===t)return null;var i={from:t.hh(),to:t.rh()};return this.kr(i)},t.prototype.kr=function(t){var i=Math.round(t.from),n=Math.round(t.to),s=f(this.Cr()),h=f(this.Nr());return{from:f(this.ri(Math.max(s,i))),to:f(this.ri(Math.min(h,n)))}},t.prototype.Sr=function(t){return{from:f(this.br(t.from,!0)),to:f(this.br(t.to,!0))}},t.prototype.wt=function(){return this.$h},t.prototype.Dr=function(t){if(isFinite(t)&&!(t<=0)&&this.$h!==t){if(this.ki.lockVisibleTimeRangeOnResize&&this.$h){var i=this.ar*t/this.$h;this.ar=i}if(this.ki.fixLeftEdge){var n=this.mr();if(null!==n)if(n.hh()<=0){var s=this.$h-t;this.ur-=Math.round(s/this.ar)+1}}this.$h=t,this.tr=!0,this.Ar(),this.Tr()}},t.prototype.G=function(t){if(this.ti()||!d(t))return 0;var i=this.Br()+this.ur-t;return this.$h-(i+.5)*this.ar-1},t.prototype.Lr=function(t,i){for(var n=this.Br(),s=void 0===i?0:i.from,h=void 0===i?t.length:i.to,r=s;r<h;r++){var e=t[r].S,u=n+this.ur-e,a=this.$h-(u+.5)*this.ar-1;t[r].p=a}},t.prototype.Fr=function(t){return Math.ceil(this.Er(t))},t.prototype.Mr=function(t){this.tr=!0,this.ur=t,this.Tr(),this.hi.Vr(),this.hi.Or()},t.prototype.Wr=function(){return this.ar},t.prototype.wr=function(t){this.zr(t),this.Tr(),this.hi.Vr(),this.hi.Or()},t.prototype.Pr=function(){return this.ur},t.prototype.Fn=function(){if(this.ti())return null;if(null!==this.rr)return this.rr;for(var t=this.ar,i=5*(this.hi.ct().layout.fontSize+4),n=Math.round(i/t),s=f(this.mr()),h=Math.max(s.hh(),s.hh()-n),r=Math.max(s.rh(),s.rh()-n),e=this.Jh.Ih(t,i),u=this.Cr()+n,a=this.Nr()-n,o=0,l=0,c=e;l<c.length;l++){var v=c[l];if(h<=v.Ph&&v.Ph<=r){var _=void 0;o<this.er.length?((_=this.er[o]).An=this.G(v.Ph),_.Tn=this.Rr(v.S,v.Rh),_.Rh=v.Rh):(_={Ir:!1,An:this.G(v.Ph),Tn:this.Rr(v.S,v.Rh),Rh:v.Rh},this.er.push(_)),this.ar>i/2?_.Ir=!1:_.Ir=this.ki.fixLeftEdge&&v.Ph<=u||this.ki.fixRightEdge&&v.Ph>=a,o++}}return this.er.length=o,this.rr=this.er,this.er},t.prototype.jr=function(){this.tr=!0,this.wr(this.ki.barSpacing),this.Mr(this.ki.rightOffset)},t.prototype.qr=function(t){this.tr=!0,this.Xh=t,this.Tr(),this._r()},t.prototype.Ur=function(t,i){var n=this.Er(t),s=this.Wr(),h=s+i*(s/10);this.wr(h),this.ki.rightBarStaysOnScroll||this.Mr(this.Pr()+(n-this.Er(t)))},t.prototype.js=function(t){this.Xn&&this.Ks(),null===this.$n&&null===this.hr&&(this.ti()||(this.$n=t,this.Hr()))},t.prototype.qs=function(t){if(null!==this.hr){var i=st(this.$h-t,0,this.$h),n=st(this.$h-f(this.$n),0,this.$h);0!==i&&0!==n&&this.wr(this.hr.Wr*i/n)}},t.prototype.Us=function(){null!==this.$n&&(this.$n=null,this.Yr())},t.prototype.Hs=function(t){null===this.Xn&&null===this.hr&&(this.ti()||(this.Xn=t,this.Hr()))},t.prototype.Ys=function(t){if(null!==this.Xn){var i=(this.Xn-t)/this.Wr();this.ur=f(this.hr).Pr+i,this.tr=!0,this.Tr()}},t.prototype.Ks=function(){null!==this.Xn&&(this.Xn=null,this.Yr())},t.prototype.Kr=function(){this.$r(this.ki.rightOffset)},t.prototype.$r=function(t,i){var n=this;if(void 0===i&&(i=400),!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");var s=this.ur,h=performance.now(),r=function(){var e=(performance.now()-h)/i,u=e>=1,a=u?t:s+(t-s)*e;n.Mr(a),u||setTimeout(r,20)};r()},t.prototype.O=function(t,i){this.tr=!0,this.Zh=t,this.Jh.Oh(t,i),this.Tr()},t.prototype.Xr=function(){return this.ir},t.prototype.Zr=function(){return this.nr},t.prototype.Jr=function(){return this.sr},t.prototype.Br=function(){return this.Xh||0},t.prototype.Gr=function(t){var i=t.Fh();this.zr(this.$h/i),this.ur=t.rh()-this.Br(),this.Tr(),this.tr=!0,this.hi.Vr(),this.hi.Or()},t.prototype.Qr=function(){var t=this.Cr(),i=this.Nr();null!==t&&null!==i&&this.Gr(new Et(t,i+this.ki.rightOffset))},t.prototype.te=function(t){var i=new Et(t.from,t.to);this.Gr(i)},t.prototype.ei=function(t){return void 0!==this.Qn.timeFormatter?this.Qn.timeFormatter(t.Sh||t.Dh):this.ie.oh(new Date(1e3*t.Dh))},t.prototype.Cr=function(){return 0===this.Zh.length?null:0},t.prototype.Nr=function(){return 0===this.Zh.length?null:this.Zh.length-1},t.prototype.ne=function(t){return(this.$h-1-t)/this.ar},t.prototype.Er=function(t){var i=this.ne(t),n=this.Br()+this.ur-i;return Math.round(1e6*n)/1e6},t.prototype.zr=function(t){var i=this.ar;this.ar=t,this.Ar(),i!==this.ar&&(this.tr=!0,this.se())},t.prototype.pr=function(){if(this.tr)if(this.tr=!1,this.ti())this.he(zt.Kh());else{var t=this.Br(),i=this.$h/this.ar,n=this.ur+t,s=new Et(n-i+1,n);this.he(new zt(s))}},t.prototype.Ar=function(){var t=this.re();if(this.ar<t&&(this.ar=t,this.tr=!0),0!==this.$h){var i=.5*this.$h;this.ar>i&&(this.ar=i,this.tr=!0)}},t.prototype.re=function(){return this.ki.fixLeftEdge&&this.ki.fixRightEdge&&0!==this.Zh.length?this.$h/this.Zh.length:this.ki.minBarSpacing},t.prototype.Tr=function(){var t=this.ee();this.ur>t&&(this.ur=t,this.tr=!0);var i=this.ue();null!==i&&this.ur<i&&(this.ur=i,this.tr=!0)},t.prototype.ue=function(){var t=this.Cr(),i=this.Xh;return null===t||null===i?null:t-i-1+(this.ki.fixLeftEdge?this.$h/this.ar:Math.min(2,this.Zh.length))},t.prototype.ee=function(){return this.ki.fixRightEdge?0:this.$h/this.ar-Math.min(2,this.Zh.length)},t.prototype.Hr=function(){this.hr={Wr:this.Wr(),Pr:this.Pr()}},t.prototype.Yr=function(){this.hr=null},t.prototype.Rr=function(t,i){var n=this,s=this.Gh.get(i);return void 0===s&&(s=new Ft((function(t){return n.ae(t,i)})),this.Gh.set(i,s)),s.oh(t)},t.prototype.ae=function(t,i){var n,s=function(t,i,n){switch(t){case 0:case 10:return i?n?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return i?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(i,this.ki.timeVisible,this.ki.secondsVisible);return void 0!==this.ki.tickMarkFormatter?this.ki.tickMarkFormatter(null!==(n=t.Sh)&&void 0!==n?n:t.Dh,s,this.Qn.locale):function(t,i,n){var s={};switch(i){case 0:s.year="numeric";break;case 1:s.month="short";break;case 2:s.day="numeric";break;case 3:s.hour12=!1,s.hour="2-digit",s.minute="2-digit";break;case 4:s.hour12=!1,s.hour="2-digit",s.minute="2-digit",s.second="2-digit"}var h=void 0===t.Sh?new Date(1e3*t.Dh):new Date(Date.UTC(t.Sh.year,t.Sh.month-1,t.Sh.day));return new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()).toLocaleString(n,s)}(t,s,this.Qn.locale)},t.prototype.he=function(t){var i=this.Qh;this.Qh=t,Vt(i.Hh(),this.Qh.Hh())||this.ir.hn(),Vt(i.Yh(),this.Qh.Yh())||this.nr.hn(),this.se()},t.prototype.se=function(){this.rr=null},t.prototype.vr=function(){this.se(),this.Gh.clear()},t.prototype.lr=function(){var t=this.Qn.dateFormat;this.ki.timeVisible?this.ie=new Tt({fh:t,_h:this.ki.secondsVisible?"%h:%m:%s":"%h:%m",dh:"   ",wh:this.Qn.locale}):this.ie=new St(t,this.Qn.locale)},t.prototype._r=function(){if(this.ki.fixLeftEdge){var t=this.Cr();if(null!==t){var i=this.mr();if(null!==i){var n=i.hh()-t;if(n<0){var s=this.ur-n-1;this.Mr(s)}this.Ar()}}}},t.prototype.dr=function(){this.Tr(),this.Ar()},t}();function It(t){return!_(t)&&!w(t)}function jt(t){return _(t)}!function(t){t.Solid="solid",t.VerticalGradient="gradient"}(Pt||(Pt={}));var qt="'Trebuchet MS', Roboto, Ubuntu, sans-serif";function Ut(t,i,n){return void 0!==n?n+=" ":n="",void 0===i&&(i=qt),""+n+t+"px "+i}var Ht=function(){function t(t){this.oe={At:1,Dt:4,Wt:NaN,Nt:"",le:"",et:"",Bt:0,Lt:0,Ft:0,Tt:0,Ot:0},this.F=t}return t.prototype.ct=function(){var t=this.oe,i=this.fe(),n=this.ce();return t.Wt===i&&t.le===n||(t.Wt=i,t.le=n,t.Nt=Ut(i,n),t.Tt=Math.floor(i/3.5),t.Bt=t.Tt,t.Lt=Math.max(Math.ceil(i/2-t.Dt/2),0),t.Ft=Math.ceil(i/2+t.Dt/2),t.Ot=Math.round(i/10)),t.et=this.ve(),this.oe},t.prototype.ve=function(){return this.F.ct().layout.textColor},t.prototype.fe=function(){return this.F.ct().layout.fontSize},t.prototype.ce=function(){return this.F.ct().layout.fontFamily},t}();function Yt(t){return"left"===t||"right"===t}var Kt=function(){function t(t){this._e=new Map,this.de=!1,this.we=[],this.Me=t}return t.prototype.be=function(t,i){var n=function(t,i){return void 0===t?i:{me:Math.max(t.me,i.me),_s:t._s||i._s}}(this._e.get(t),i);this._e.set(t,n)},t.prototype.pe=function(){return this.Me},t.prototype.ge=function(t){var i=this._e.get(t);return void 0===i?{me:this.Me}:{me:Math.max(this.Me,i.me),_s:i._s}},t.prototype.ye=function(){this.we=[{ke:0}]},t.prototype.Ce=function(t){this.we=[{ke:1,X:t}]},t.prototype.Ne=function(){this.we=[{ke:4}]},t.prototype.wr=function(t){this.we.push({ke:2,X:t})},t.prototype.Mr=function(t){this.we.push({ke:3,X:t})},t.prototype.xe=function(){return this.we},t.prototype._n=function(t){var i=this;this.de=this.de||t.de,this.we=this.we.concat(t.we);for(var n=0,s=t.we;n<s.length;n++){var h=s[n];this.Se(h)}this.Me=Math.max(this.Me,t.Me),t._e.forEach((function(t,n){i.be(n,t)}))},t.prototype.Se=function(t){switch(t.ke){case 0:this.ye();break;case 1:this.Ce(t.X);break;case 2:this.wr(t.X);break;case 3:this.Mr(t.X);break;case 4:this.Ne()}},t}(),$t=function(){function t(t){this.De=t}return t.prototype.format=function(t){var i="";return t<0&&(i="-",t=-t),t<995?i+this.Ae(t):t<999995?i+this.Ae(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),i+this.Ae(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),i+this.Ae(t/1e9)+"B")},t.prototype.Ae=function(t){var i=Math.pow(10,this.De);return((t=Math.round(t*i)/i)>=1e-15&&t<1?t.toFixed(this.De).replace(/\.?0+$/,""):String(t)).replace(/(\.[1-9]*)0+$/,(function(t,i){return i}))},t}();function Xt(t,i,n,s){if(0!==i.length){var h=i[s.from].p,r=i[s.from].g;t.moveTo(h,r);for(var e=s.from+1;e<s.to;++e){var u=i[e];if(1===n){var a=i[e-1].g,o=u.p;t.lineTo(o,a)}t.lineTo(u.p,u.g)}}}var Zt=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.v=null,i}return e(i,t),i.prototype._=function(t){this.v=t},i.prototype.u=function(t){if(null!==this.v&&0!==this.v.m.length&&null!==this.v.M){if(t.lineCap="butt",t.lineJoin="round",t.lineWidth=this.v.rt,s(t,this.v.ut),t.lineWidth=1,t.beginPath(),1===this.v.m.length){var i=this.v.m[0],n=this.v.Te/2;t.moveTo(i.p-n,this.v.Be),t.lineTo(i.p-n,i.g),t.lineTo(i.p+n,i.g),t.lineTo(i.p+n,this.v.Be)}else t.moveTo(this.v.m[this.v.M.from].p,this.v.Be),t.lineTo(this.v.m[this.v.M.from].p,this.v.m[this.v.M.from].g),Xt(t,this.v.m,this.v.Le,this.v.M),this.v.M.to>this.v.M.from&&(t.lineTo(this.v.m[this.v.M.to-1].p,this.v.Be),t.lineTo(this.v.m[this.v.M.from].p,this.v.Be));t.closePath(),t.fillStyle=this.Fe(t),t.fill()}},i}(y),Jt=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.Fe=function(t){var i=this.v,n=t.createLinearGradient(0,0,0,i.Ee);return n.addColorStop(0,i.Ve),n.addColorStop(1,i.Oe),n},i}(Zt),Gt=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.v=null,i}return e(i,t),i.prototype._=function(t){this.v=t},i.prototype.u=function(t){if(null!==this.v&&0!==this.v.m.length&&null!==this.v.M){if(t.lineCap="butt",t.lineWidth=this.v.rt,s(t,this.v.ut),t.strokeStyle=this.We(t),t.lineJoin="round",t.beginPath(),1===this.v.m.length){var i=this.v.m[0];t.moveTo(i.p-this.v.Te/2,i.g),t.lineTo(i.p+this.v.Te/2,i.g)}else Xt(t,this.v.m,this.v.Le,this.v.M);t.stroke()}},i}(y),Qt=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.We=function(){return this.v.N},i}(Gt);function ti(t,i){return t.S<i}function ii(t,i){return t<i.S}function ni(t,i,n){var s=i.hh(),h=i.rh(),r=Bt(t,s,ti),e=Lt(t,h,ii);if(!n)return{from:r,to:e};var u=r,a=e;return r>0&&r<t.length&&t[r].S>=s&&(u=r-1),e>0&&e<t.length&&t[e-1].S<=h&&(a=e+1),{from:u,to:a}}var si=function(){function t(t,i,n){this.ze=!0,this.Pe=!0,this.Re=!0,this.Ie=[],this.je=null,this.qe=t,this.Ue=i,this.He=n}return t.prototype.O=function(t){this.ze=!0,"data"===t&&(this.Pe=!0),"options"===t&&(this.Re=!0)},t.prototype.Ye=function(){this.Pe&&(this.Ke(),this.Pe=!1),this.ze&&(this.$e(),this.ze=!1),this.Re&&(this.Xe(),this.Re=!1)},t.prototype.Ze=function(){this.je=null},t.prototype.$e=function(){var t=this.qe.$(),i=this.Ue.j();if(this.Ze(),!i.ti()&&!t.ti()){var n=i.mr();if(null!==n&&0!==this.qe.Hi().Je()){var s=this.qe.H();null!==s&&(this.je=ni(this.Ie,n,this.He),this.Ge(t,i,s.X))}}},t}(),hi=function(t){function i(i,n){return t.call(this,i,n,!0)||this}return e(i,t),i.prototype.Ge=function(t,i,n){i.Lr(this.Ie,p(this.je)),t.Ss(this.Ie,n,p(this.je))},i.prototype.Qe=function(t,i){return{S:t,D:i,p:NaN,g:NaN}},i.prototype.Xe=function(){},i.prototype.Ke=function(){var t=this,i=this.qe.tu();this.Ie=this.qe.Hi().iu().map((function(n){var s=n.X[3];return t.nu(n.Ph,s,i)}))},i}(si),ri=function(t){function i(i,n){var s=t.call(this,i,n)||this;return s.ot=new g,s.su=new Jt,s.hu=new Qt,s.ot.i([s.su,s.hu]),s}return e(i,t),i.prototype.P=function(t,i){if(!this.qe.U())return null;var n=this.qe.ct();return this.Ye(),this.su._({Le:n.lineType,m:this.Ie,ut:n.lineStyle,rt:n.lineWidth,Ve:n.topColor,Oe:n.bottomColor,Be:t,Ee:t,M:this.je,Te:this.Ue.j().Wr()}),this.hu._({Le:n.lineType,m:this.Ie,N:n.lineColor,ut:n.lineStyle,rt:n.lineWidth,M:this.je,Te:this.Ue.j().Wr()}),this.ot},i.prototype.nu=function(t,i){return this.Qe(t,i)},i}(hi);var ei=function(){function t(){this.tt=null,this.ru=0,this.eu=0}return t.prototype._=function(t){this.tt=t},t.prototype.h=function(t,i,n,s){if(null!==this.tt&&0!==this.tt.Hi.length&&null!==this.tt.M){if(this.ru=this.uu(i),this.ru>=2)Math.max(1,Math.floor(i))%2!=this.ru%2&&this.ru--;this.eu=this.tt.au?Math.min(this.ru,Math.floor(i)):this.ru;for(var h=null,r=this.eu<=this.ru&&this.tt.Wr>=Math.floor(1.5*i),e=this.tt.M.from;e<this.tt.M.to;++e){var u=this.tt.Hi[e];h!==u.et&&(t.fillStyle=u.et,h=u.et);var a=Math.floor(.5*this.eu),o=Math.round(u.p*i),l=o-a,f=this.eu,c=l+f-1,v=Math.min(u.Bs,u.Ls),_=Math.max(u.Bs,u.Ls),d=Math.round(v*i)-a,w=Math.round(_*i)+a,M=Math.max(w-d,this.eu);t.fillRect(l,d,f,M);var b=Math.ceil(1.5*this.ru);if(r){if(this.tt.ou){var m=o-b,p=Math.max(d,Math.round(u.Ts*i)-a),g=p+f-1;g>d+M-1&&(p=(g=d+M-1)-f+1),t.fillRect(m,p,l-m,g-p+1)}var y=o+b,k=Math.max(d,Math.round(u.Fs*i)-a),C=k+f-1;C>d+M-1&&(k=(C=d+M-1)-f+1),t.fillRect(c+1,k,y-c,C-k+1)}}}},t.prototype.uu=function(t){var i=Math.floor(t);return Math.max(i,Math.floor(function(t,i){return Math.floor(.3*t*i)}(f(this.tt).Wr,t)))},t}(),ui=function(t){function i(i,n){return t.call(this,i,n,!1)||this}return e(i,t),i.prototype.Ge=function(t,i,n){i.Lr(this.Ie,p(this.je)),t.As(this.Ie,n,p(this.je))},i.prototype.lu=function(t,i,n){return{S:t,open:i.X[0],high:i.X[1],low:i.X[2],close:i.X[3],p:NaN,Ts:NaN,Bs:NaN,Ls:NaN,Fs:NaN}},i.prototype.Ke=function(){var t=this,i=this.qe.tu();this.Ie=this.qe.Hi().iu().map((function(n){return t.nu(n.Ph,n,i)}))},i}(si),ai=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ot=new ei,i}return e(i,t),i.prototype.P=function(t,i){if(!this.qe.U())return null;var n=this.qe.ct();this.Ye();var s={Hi:this.Ie,Wr:this.Ue.j().Wr(),ou:n.openVisible,au:n.thinBars,M:this.je};return this.ot._(s),this.ot},i.prototype.Xe=function(){var t=this;this.Ie.forEach((function(i){i.et=t.qe.tu().cu(i.S).fu}))},i.prototype.nu=function(t,i,n){return u(u({},this.lu(t,i,n)),{et:n.cu(t).fu})},i}(ui),oi=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.Fe=function(t){var i=this.v,n=t.createLinearGradient(0,0,0,i.Ee),s=st(i.Be/i.Ee,0,1);return n.addColorStop(0,i.vu),n.addColorStop(s,i._u),n.addColorStop(s,i.du),n.addColorStop(1,i.wu),n},i}(Zt),li=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.We=function(t){var i=this.v,n=t.createLinearGradient(0,0,0,i.Ee),s=st(i.Be/i.Ee,0,1);return n.addColorStop(0,i.Ve),n.addColorStop(s,i.Ve),n.addColorStop(s,i.Oe),n.addColorStop(1,i.Oe),n},i}(Gt),fi=function(t){function i(i,n){var s=t.call(this,i,n)||this;return s.Mu=new oi,s.bu=new li,s.A=new g,s.A.i([s.Mu,s.bu]),s}return e(i,t),i.prototype.P=function(t,i){if(!this.qe.U())return null;var n=this.qe.H();if(null===n)return null;var s=this.qe.ct();this.Ye();var h=this.qe.$().K(s.baseValue.price,n.X),r=this.Ue.j().Wr();return this.Mu._({m:this.Ie,vu:s.topFillColor1,_u:s.topFillColor2,du:s.bottomFillColor1,wu:s.bottomFillColor2,rt:s.lineWidth,ut:s.lineStyle,Le:0,Be:h,Ee:t,M:this.je,Te:r}),this.bu._({m:this.Ie,Ve:s.topLineColor,Oe:s.bottomLineColor,rt:s.lineWidth,ut:s.lineStyle,Le:0,Be:h,Ee:t,M:this.je,Te:r}),this.A},i.prototype.nu=function(t,i){return this.Qe(t,i)},i}(hi),ci=function(){function t(){this.tt=null,this.ru=0}return t.prototype._=function(t){this.tt=t},t.prototype.h=function(t,i,n,s){if(null!==this.tt&&0!==this.tt.Hi.length&&null!==this.tt.M){if(this.ru=function(t,i){if(t>=2.5&&t<=4)return Math.floor(3*i);var n=1-.2*Math.atan(Math.max(4,t)-4)/(.5*Math.PI),s=Math.floor(t*n*i),h=Math.floor(t*i),r=Math.min(s,h);return Math.max(Math.floor(i),r)}(this.tt.Wr,i),this.ru>=2)Math.floor(i)%2!=this.ru%2&&this.ru--;var h=this.tt.Hi;this.tt.mu&&this.pu(t,h,this.tt.M,i),this.tt.gu&&this.yu(t,h,this.tt.M,this.tt.Wr,i);var r=this.ku(i);(!this.tt.gu||this.ru>2*r)&&this.Cu(t,h,this.tt.M,i)}},t.prototype.pu=function(t,i,n,s){if(null!==this.tt){var h="",r=Math.min(Math.floor(s),Math.floor(this.tt.Wr*s));r=Math.max(Math.floor(s),Math.min(r,this.ru));for(var e=Math.floor(.5*r),u=null,a=n.from;a<n.to;a++){var o=i[a];o.Nu!==h&&(t.fillStyle=o.Nu,h=o.Nu);var l=Math.round(Math.min(o.Ts,o.Fs)*s),f=Math.round(Math.max(o.Ts,o.Fs)*s),c=Math.round(o.Bs*s),v=Math.round(o.Ls*s),_=Math.round(s*o.p)-e,d=_+r-1;null!==u&&(_=Math.max(u+1,_),_=Math.min(_,d));var w=d-_+1;t.fillRect(_,c,w,l-c),t.fillRect(_,f+1,w,v-f),u=d}}},t.prototype.ku=function(t){var i=Math.floor(1*t);this.ru<=2*i&&(i=Math.floor(.5*(this.ru-1)));var n=Math.max(Math.floor(t),i);return this.ru<=2*n?Math.max(Math.floor(t),Math.floor(1*t)):n},t.prototype.yu=function(t,i,n,s,h){if(null!==this.tt)for(var r="",e=this.ku(h),u=null,a=n.from;a<n.to;a++){var o=i[a];o.Z!==r&&(t.fillStyle=o.Z,r=o.Z);var l=Math.round(o.p*h)-Math.floor(.5*this.ru),f=l+this.ru-1,c=Math.round(Math.min(o.Ts,o.Fs)*h),v=Math.round(Math.max(o.Ts,o.Fs)*h);if(null!==u&&(l=Math.max(u+1,l),l=Math.min(l,f)),this.tt.Wr*h>2*e)z(t,l,c,f-l+1,v-c+1,e);else{var _=f-l+1;t.fillRect(l,c,_,v-c+1)}u=f}},t.prototype.Cu=function(t,i,n,s){if(null!==this.tt)for(var h="",r=this.ku(s),e=n.from;e<n.to;e++){var u=i[e],a=Math.round(Math.min(u.Ts,u.Fs)*s),o=Math.round(Math.max(u.Ts,u.Fs)*s),l=Math.round(u.p*s)-Math.floor(.5*this.ru),f=l+this.ru-1;if(u.et!==h){var c=u.et;t.fillStyle=c,h=c}this.tt.gu&&(l+=r,a+=r,f-=r,o-=r),a>o||t.fillRect(l,a,f-l+1,o-a+1)}},t}(),vi=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.ot=new ci,i}return e(i,t),i.prototype.P=function(t,i){if(!this.qe.U())return null;var n=this.qe.ct();this.Ye();var s={Hi:this.Ie,Wr:this.Ue.j().Wr(),mu:n.wickVisible,gu:n.borderVisible,M:this.je};return this.ot._(s),this.ot},i.prototype.Xe=function(){var t=this;this.Ie.forEach((function(i){var n=t.qe.tu().cu(i.S);i.et=n.fu,i.Nu=n.xu,i.Z=n.Su}))},i.prototype.nu=function(t,i,n){var s=n.cu(t);return u(u({},this.lu(t,i,n)),{et:s.fu,Nu:s.xu,Z:s.Su})},i}(ui),_i=function(){function t(){this.tt=null,this.Du=[]}return t.prototype._=function(t){this.tt=t,this.Du=[]},t.prototype.h=function(t,i,n,s){if(null!==this.tt&&0!==this.tt.m.length&&null!==this.tt.M){this.Du.length||this.Au(i);for(var h=Math.max(1,Math.floor(i)),r=Math.round(this.tt.Tu*i)-Math.floor(h/2),e=r+h,u=this.tt.M.from;u<this.tt.M.to;u++){var a=this.tt.m[u],o=this.Du[u-this.tt.M.from],l=Math.round(a.g*i);t.fillStyle=a.et;var f=void 0,c=void 0;l<=r?(f=l,c=e):(f=r,c=l-Math.floor(h/2)+h),t.fillRect(o.hh,f,o.rh-o.hh+1,c-f)}}},t.prototype.Au=function(t){if(null!==this.tt&&0!==this.tt.m.length&&null!==this.tt.M){var i=Math.ceil(this.tt.Wr*t)<=1?0:Math.max(1,Math.floor(t)),n=Math.round(this.tt.Wr*t)-i;this.Du=new Array(this.tt.M.to-this.tt.M.from);for(var s=this.tt.M.from;s<this.tt.M.to;s++){var h,r=this.tt.m[s],e=Math.round(r.p*t),u=void 0,a=void 0;if(n%2)u=e-(h=(n-1)/2),a=e+h;else u=e-(h=n/2),a=e+h-1;this.Du[s-this.tt.M.from]={hh:u,rh:a,Bu:e,Lu:r.p*t,S:r.S}}for(s=this.tt.M.from+1;s<this.tt.M.to;s++){var o=this.Du[s-this.tt.M.from],l=this.Du[s-this.tt.M.from-1];o.S===l.S+1&&(o.hh-l.rh!==i+1&&(l.Bu>l.Lu?l.rh=o.hh-i-1:o.hh=l.rh+i+1))}var f=Math.ceil(this.tt.Wr*t);for(s=this.tt.M.from;s<this.tt.M.to;s++){(o=this.Du[s-this.tt.M.from]).rh<o.hh&&(o.rh=o.hh);var c=o.rh-o.hh+1;f=Math.min(c,f)}if(i>0&&f<4)for(s=this.tt.M.from;s<this.tt.M.to;s++){(c=(o=this.Du[s-this.tt.M.from]).rh-o.hh+1)>f&&(o.Bu>o.Lu?o.rh-=1:o.hh+=1)}}else this.Du=[]},t}();function di(t){return{m:[],Wr:t,Tu:NaN,M:null}}function wi(t,i,n){return{S:t,D:i,p:NaN,g:NaN,et:n}}var Mi=function(t){function i(i,n){var s=t.call(this,i,n,!1)||this;return s.A=new g,s.Fu=di(0),s.ot=new _i,s}return e(i,t),i.prototype.P=function(t,i){return this.qe.U()?(this.Ye(),this.A):null},i.prototype.Ke=function(){var t=this.Ue.j().Wr();this.Fu=di(t);for(var i=0,n=0,s=this.qe.ct().color,h=0,r=this.qe.Hi().iu();h<r.length;h++){var e=r[h],u=e.X[3],a=void 0!==e.et?e.et:s,o=wi(e.Ph,u,a);++i<this.Fu.m.length?this.Fu.m[i]=o:this.Fu.m.push(o),this.Ie[n++]={S:e.Ph,p:0}}this.ot._(this.Fu),this.A.i([this.ot])},i.prototype.Xe=function(){},i.prototype.Ze=function(){t.prototype.Ze.call(this),this.Fu.M=null},i.prototype.Ge=function(t,i,n){if(null!==this.je){var s=i.Wr(),h=f(i.mr()),r=t.K(this.qe.ct().base,n);i.Lr(this.Fu.m),t.Ss(this.Fu.m,n),this.Fu.Tu=r,this.Fu.M=ni(this.Fu.m,h,!1),this.Fu.Wr=s,this.ot._(this.Fu)}},i}(si),bi=function(t){function i(i,n){var s=t.call(this,i,n)||this;return s.hu=new Qt,s}return e(i,t),i.prototype.P=function(t,i){if(!this.qe.U())return null;var n=this.qe.ct();this.Ye();var s={m:this.Ie,N:n.color,ut:n.lineStyle,Le:n.lineType,rt:n.lineWidth,M:this.je,Te:this.Ue.j().Wr()};return this.hu._(s),this.hu},i.prototype.nu=function(t,i){return this.Qe(t,i)},i}(hi),mi=/[2-9]/g,pi=function(){function t(t){void 0===t&&(t=50),this.kh=new Map,this.Eu=0,this.Vu=Array.from(new Array(t))}return t.prototype.Ou=function(){this.kh.clear(),this.Vu.fill(void 0)},t.prototype.Vt=function(t,i,n){var s=n||mi,h=String(i).replace(s,"0"),r=this.kh.get(h);if(void 0===r){if(0===(r=t.measureText(h).width)&&0!==i.length)return 0;var e=this.Vu[this.Eu];void 0!==e&&this.kh.delete(e),this.Vu[this.Eu]=h,this.Eu=(this.Eu+1)%this.Vu.length,this.kh.set(h,r)}return r},t}(),gi=function(){function t(t){this.Wu=null,this.oe=null,this.zu="right",this.$h=0,this.Pu=t}return t.prototype.Ru=function(t,i,n,s){this.Wu=t,this.oe=i,this.$h=n,this.zu=s},t.prototype.h=function(t,i){null!==this.oe&&null!==this.Wu&&this.Wu.h(t,this.oe,this.Pu,this.$h,this.zu,i)},t}(),yi=function(){function t(t,i,n){this.Iu=t,this.Pu=new pi(50),this.ju=i,this.F=n,this.fe=-1,this.ot=new gi(this.Pu)}return t.prototype.P=function(t,i){var n=this.F.qu(this.ju);if(null===n)return null;var s=n.Uu(this.ju)?n.xi():this.ju.$();if(null===s)return null;var h=n.Hu(s);if("overlay"===h)return null;var r=this.F.Yu();return r.Wt!==this.fe&&(this.fe=r.Wt,this.Pu.Ou()),this.ot.Ru(this.Iu.Zt(),r,i,h),this.ot},t}(),ki=function(){function t(){this.tt=null}return t.prototype._=function(t){this.tt=t},t.prototype.h=function(t,i,n,r){if(null!==this.tt&&!1!==this.tt.U){var e=Math.round(this.tt.g*i);if(!(e<0||e>Math.ceil(this.tt.Mt*i))){var u=Math.ceil(this.tt.wt*i);t.lineCap="butt",t.strokeStyle=this.tt.et,t.lineWidth=Math.floor(this.tt.rt*i),s(t,this.tt.ut),h(t,e,0,u)}}},t}(),Ci=function(){function t(t){this.Ku={wt:0,Mt:0,g:0,et:"rgba(0, 0, 0, 0)",rt:1,ut:0,U:!1},this.$u=new ki,this.L=!0,this.qe=t,this.Ue=t.vt(),this.$u._(this.Ku)}return t.prototype.O=function(){this.L=!0},t.prototype.P=function(t,i){return this.qe.U()?(this.L&&(this.Xu(t,i),this.L=!1),this.$u):null},t}(),Ni=function(t){function i(i){return t.call(this,i)||this}return e(i,t),i.prototype.Xu=function(t,i){this.Ku.U=!1;var n=this.qe.$(),s=n.os().os;if(2===s||3===s){var h=this.qe.ct();if(h.baseLineVisible&&this.qe.U()){var r=this.qe.H();null!==r&&(this.Ku.U=!0,this.Ku.g=n.K(r.X,r.X),this.Ku.wt=i,this.Ku.Mt=t,this.Ku.et=h.baseLineColor,this.Ku.rt=h.baseLineWidth,this.Ku.ut=h.baseLineStyle)}}},i}(Ci),xi=function(){function t(){this.tt=null}return t.prototype._=function(t){this.tt=t},t.prototype.Zu=function(){return this.tt},t.prototype.h=function(t,i,n,s){var h=this.tt;if(null!==h){t.save();var r=Math.max(1,Math.floor(i)),e=r%2/2,u=Math.round(h.Lu.x*i)+e,a=h.Lu.y*i;t.fillStyle=h.Ju,t.beginPath();var o=Math.max(2,1.5*h.Gu)*i;t.arc(u,a,o,0,2*Math.PI,!1),t.fill(),t.fillStyle=h.Qu,t.beginPath(),t.arc(u,a,h.C*i,0,2*Math.PI,!1),t.fill(),t.lineWidth=r,t.strokeStyle=h.ta,t.beginPath(),t.arc(u,a,h.C*i+r/2,0,2*Math.PI,!1),t.stroke(),t.restore()}},t}(),Si=[{ia:0,na:.25,sa:4,ha:10,ra:.25,ea:0,ua:.4,aa:.8},{ia:.25,na:.525,sa:10,ha:14,ra:0,ea:0,ua:.8,aa:0},{ia:.525,na:1,sa:14,ha:14,ra:0,ea:0,ua:0,aa:0}];function Di(t,i,n,s){return function(t,i){if("transparent"===t)return t;var n=O(t),s=n[3];return"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+i*s+")"}(t,n+(s-n)*i)}function Ai(t,i){for(var n,s=t%2600/2600,h=0,r=Si;h<r.length;h++){var e=r[h];if(s>=e.ia&&s<=e.na){n=e;break}}o(void 0!==n,"Last price animation internal logic error");var u,a,l,f=(s-n.ia)/(n.na-n.ia);return{Qu:Di(i,f,n.ra,n.ea),ta:Di(i,f,n.ua,n.aa),C:(u=f,a=n.sa,l=n.ha,a+(l-a)*u)}}var Ti=function(){function t(t){this.ot=new xi,this.L=!0,this.oa=!0,this.la=performance.now(),this.fa=this.la-1,this.ca=t}return t.prototype.O=function(t){if(this.L=!0,"data"===t&&2===this.ca.ct().lastPriceAnimation){var i=performance.now(),n=this.fa-i;if(n>0)return void(n<650&&(this.fa+=2600));this.la=i,this.fa=i+2600}},t.prototype.va=function(){this.oa=!0},t.prototype.U=function(){return 0!==this.ca.ct().lastPriceAnimation},t.prototype._a=function(){switch(this.ca.ct().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.fa}},t.prototype.P=function(t,i){return this.L?(this.R(t,i),this.L=!1,this.oa=!1):this.oa&&(this.da(),this.oa=!1),this.ot},t.prototype.R=function(t,i){this.ot._(null);var n=this.ca.vt().j(),s=n.mr(),h=this.ca.H();if(null!==s&&null!==h){var r=this.ca.wa(!0);if(!r.Ma&&s.Eh(r.Ph)){var e={x:n.G(r.Ph),y:this.ca.$().K(r.D,h.X)},u=r.et,a=this.ca.ct().lineWidth,o=Ai(this.ba(),u);this.ot._({Ju:u,Gu:a,Qu:o.Qu,ta:o.ta,C:o.C,Lu:e})}}},t.prototype.da=function(){var t=this.ot.Zu();if(null!==t){var i=Ai(this.ba(),t.Ju);t.Qu=i.Qu,t.ta=i.ta,t.C=i.C}},t.prototype.ba=function(){return this._a()?performance.now()-this.la:2599},t}();function Bi(t,i){return ut(Math.min(Math.max(t,12),30)*i)}function Li(t,i){switch(t){case"arrowDown":case"arrowUp":return Bi(i,1);case"circle":return Bi(i,.8);case"square":return Bi(i,.7)}}function Fi(t){return et(Bi(t,1))}function Ei(t){return Math.max(Bi(t,.1),3)}function Vi(t,i,n,s,h){var r=Li("square",n),e=(r-1)/2,u=t-e,a=i-e;return s>=u&&s<=u+r&&h>=a&&h<=a+r}function Oi(t,i,n,s,h){var r=(Li("arrowUp",h)-1)/2,e=(ut(h/2)-1)/2;i.beginPath(),t?(i.moveTo(n-r,s),i.lineTo(n,s-r),i.lineTo(n+r,s),i.lineTo(n+e,s),i.lineTo(n+e,s+r),i.lineTo(n-e,s+r),i.lineTo(n-e,s)):(i.moveTo(n-r,s),i.lineTo(n,s+r),i.lineTo(n+r,s),i.lineTo(n+e,s),i.lineTo(n+e,s-r),i.lineTo(n-e,s-r),i.lineTo(n-e,s)),i.fill()}function Wi(t,i,n,s,h,r){return Vi(i,n,s,h,r)}var zi=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.tt=null,i.Pu=new pi,i.fe=-1,i.ce="",i.ma="",i}return e(i,t),i.prototype._=function(t){this.tt=t},i.prototype.Ru=function(t,i){this.fe===t&&this.ce===i||(this.fe=t,this.ce=i,this.ma=Ut(t,i),this.Pu.Ou())},i.prototype.pa=function(t,i){if(null===this.tt||null===this.tt.M)return null;for(var n=this.tt.M.from;n<this.tt.M.to;n++){var s=this.tt.m[n];if(Ri(s,t,i))return{ga:s.ya,ka:s.ka}}return null},i.prototype.u=function(t,i,n){if(null!==this.tt&&null!==this.tt.M){t.textBaseline="middle",t.font=this.ma;for(var s=this.tt.M.from;s<this.tt.M.to;s++){var h=this.tt.m[s];void 0!==h.Et&&(h.Et.wt=this.Pu.Vt(t,h.Et.Ca),h.Et.Mt=this.fe),Pi(h,t)}}},i}(y);function Pi(t,i){i.fillStyle=t.et,void 0!==t.Et&&function(t,i,n,s){t.fillText(i,n,s)}(i,t.Et.Ca,t.p-t.Et.wt/2,t.Et.g),function(t,i){if(0===t.Je)return;switch(t.Na){case"arrowDown":return void Oi(!1,i,t.p,t.g,t.Je);case"arrowUp":return void Oi(!0,i,t.p,t.g,t.Je);case"circle":return void function(t,i,n,s){var h=(Li("circle",s)-1)/2;t.beginPath(),t.arc(i,n,h,0,2*Math.PI,!1),t.fill()}(i,t.p,t.g,t.Je);case"square":return void function(t,i,n,s){var h=Li("square",s),r=(h-1)/2,e=i-r,u=n-r;t.fillRect(e,u,h,h)}(i,t.p,t.g,t.Je)}t.Na}(t,i)}function Ri(t,i,n){return!(void 0===t.Et||!function(t,i,n,s,h,r){var e=s/2;return h>=t&&h<=t+n&&r>=i-e&&r<=i+e}(t.p,t.Et.g,t.Et.wt,t.Et.Mt,i,n))||function(t,i,n){if(0===t.Je)return!1;switch(t.Na){case"arrowDown":case"arrowUp":return Wi(0,t.p,t.g,t.Je,i,n);case"circle":return function(t,i,n,s,h){var r=2+Li("circle",n)/2,e=t-s,u=i-h;return Math.sqrt(e*e+u*u)<=r}(t.p,t.g,t.Je,i,n);case"square":return Vi(t.p,t.g,t.Je,i,n)}}(t,i,n)}function Ii(t,i,n,s,h,r,e,u,a){var o=_(n)?n:n.close,l=_(n)?n:n.high,f=_(n)?n:n.low,c=_(i.size)?Math.max(i.size,0):1,v=Fi(u.Wr())*c,d=v/2;switch(t.Je=v,i.position){case"inBar":return t.g=e.K(o,a),void(void 0!==t.Et&&(t.Et.g=t.g+d+r+.6*h));case"aboveBar":return t.g=e.K(l,a)-d-s.xa,void 0!==t.Et&&(t.Et.g=t.g-d-.6*h,s.xa+=1.2*h),void(s.xa+=v+r);case"belowBar":return t.g=e.K(f,a)+d+s.Sa,void 0!==t.Et&&(t.Et.g=t.g+d+r+.6*h,s.Sa+=1.2*h),void(s.Sa+=v+r)}i.position}var ji=function(){function t(t,i){this.L=!0,this.Da=!0,this.Aa=!0,this.Ta=null,this.ot=new zi,this.ca=t,this.hi=i,this.tt={m:[],M:null}}return t.prototype.O=function(t){this.L=!0,this.Aa=!0,"data"===t&&(this.Da=!0)},t.prototype.P=function(t,i,n){if(!this.ca.U())return null;this.L&&this.Ye();var s=this.hi.ct().layout;return this.ot.Ru(s.fontSize,s.fontFamily),this.ot._(this.tt),this.ot},t.prototype.Ba=function(){if(this.Aa){if(this.ca.La().length>0){var t=this.hi.j().Wr(),i=Ei(t),n=1.5*Fi(t)+2*i;this.Ta={above:n,below:n}}else this.Ta=null;this.Aa=!1}return this.Ta},t.prototype.Ye=function(){var t=this.ca.$(),i=this.hi.j(),n=this.ca.La();this.Da&&(this.tt.m=n.map((function(t){return{S:t.time,p:0,g:0,Je:0,Na:t.shape,et:t.color,ya:t.ya,ka:t.id,Et:void 0}})),this.Da=!1);var s=this.hi.ct().layout;this.tt.M=null;var h=i.mr();if(null!==h){var r=this.ca.H();if(null!==r&&0!==this.tt.m.length){var e=NaN,u=Ei(i.Wr()),a={xa:u,Sa:u};this.tt.M=ni(this.tt.m,h,!0);for(var o=this.tt.M.from;o<this.tt.M.to;o++){var l=n[o];l.time!==e&&(a.xa=u,a.Sa=u,e=l.time);var f=this.tt.m[o];f.p=i.G(l.time),void 0!==l.text&&l.text.length>0&&(f.Et={Ca:l.text,g:0,wt:0,Mt:0});var c=this.ca.Fa(l.time);null!==c&&Ii(f,l,c,a,s.fontSize,u,t,i,r.X)}this.L=!1}}},t}(),qi=function(t){function i(i){return t.call(this,i)||this}return e(i,t),i.prototype.Xu=function(t,i){var n=this.Ku;n.U=!1;var s=this.qe.ct();if(s.priceLineVisible&&this.qe.U()){var h=this.qe.wa(0===s.priceLineSource);h.Ma||(n.U=!0,n.g=h.zt,n.et=this.qe.Ea(h.et),n.wt=i,n.Mt=t,n.rt=s.priceLineWidth,n.ut=s.priceLineStyle)}},i}(Ci),Ui=function(t){function i(i){var n=t.call(this)||this;return n.lt=i,n}return e(i,t),i.prototype.Jt=function(t,i,n){t.U=!1,i.U=!1;var s=this.lt;if(s.U()){var h=s.ct(),r=h.lastValueVisible,e=""!==s.Va(),u=0===h.seriesLastValueMode,a=s.wa(!1);if(!a.Ma){r&&(t.Et=this.Oa(a,r,u),t.U=0!==t.Et.length),(e||u)&&(i.Et=this.Wa(a,r,e,u),i.U=i.Et.length>0);var o=s.Ea(a.et),l=W(o);n.yt=l.yt,n.et=l.kt,n.zt=a.zt,i.Z=s.vt().J(a.zt/s.$().Mt()),t.Z=o}}},i.prototype.Wa=function(t,i,n,s){var h="",r=this.lt.Va();return n&&0!==r.length&&(h+=r+" "),i&&s&&(h+=this.lt.$().cs()?t.za:t.Pa),h.trim()},i.prototype.Oa=function(t,i,n){return i?n?this.lt.$().cs()?t.Pa:t.za:t.Et:""},i}(U),Hi=function(){function t(t,i){this.On=t,this.Ra=i||null}return t.prototype.Cs=function(){return this.On},t.prototype.eh=function(){return this.Ra},t.prototype.Mn=function(){return null===this.On?null:{priceRange:this.On.Mn(),margins:this.Ra||void 0}},t.bn=function(i){return null===i?null:new t(nt.bn(i.priceRange),i.margins)},t}(),Yi=function(t){function i(i,n){var s=t.call(this,i)||this;return s.Ia=n,s}return e(i,t),i.prototype.Xu=function(t,i){var n=this.Ku;if(n.U=!1,this.qe.U()){var s=this.Ia.ja();if(null!==s){var h=this.Ia.ct();n.U=!0,n.g=s,n.et=h.color,n.wt=i,n.Mt=t,n.rt=h.lineWidth,n.ut=h.lineStyle}}},i}(Ci),Ki=function(t){function i(i,n){var s=t.call(this)||this;return s.ca=i,s.Ia=n,s}return e(i,t),i.prototype.Jt=function(t,i,n){t.U=!1,i.U=!1;var s=this.Ia.ct(),h=s.axisLabelVisible,r=""!==s.title,e=this.ca;if(h&&e.U()){var u=this.Ia.ja();if(null!==u){r&&(i.Et=s.title,i.U=!0),i.Z=e.vt().J(u/e.$().Mt()),t.Et=e.$().Zs(s.price),t.U=!0;var a=W(s.color);n.yt=a.yt,n.et=a.kt,n.zt=u}}},i}(U),$i=function(){function t(t,i){this.ca=t,this.ki=i,this.qa=new Yi(t,this),this.Iu=new Ki(t,this),this.Ua=new yi(this.Iu,t,t.vt())}return t.prototype.rs=function(t){v(this.ki,t),this.O(),this.ca.vt().Or()},t.prototype.ct=function(){return this.ki},t.prototype.zi=function(){return[this.qa,this.Ua]},t.prototype.Ha=function(){return this.Iu},t.prototype.O=function(){this.qa.O(),this.Iu.O()},t.prototype.ja=function(){var t=this.ca,i=t.$();if(t.vt().j().ti()||i.ti())return null;var n=t.H();return null===n?null:i.K(this.ki.price,n.X)},t}(),Xi=function(t){function i(i){var n=t.call(this)||this;return n.hi=i,n}return e(i,t),i.prototype.vt=function(){return this.hi},i}(X),Zi={fu:"",Su:"",xu:""},Ji=function(){function t(t){this.ca=t}return t.prototype.cu=function(t,i){var n=this.ca.Ya(),s=this.ca.ct();switch(n){case"Line":return this.Ka(s);case"Area":return this.$a(s);case"Baseline":return this.Xa(s,t,i);case"Bar":return this.Za(s,t,i);case"Candlestick":return this.Ja(s,t,i);case"Histogram":return this.Ga(s,t,i)}throw new Error("Unknown chart style")},t.prototype.Za=function(t,i,n){var s=u({},Zi),h=t.upColor,r=t.downColor,e=h,a=r,o=f(this.Qa(i,n)),l=c(o.X[0])<=c(o.X[3]);return s.fu=l?h:r,s.Su=l?e:a,s},t.prototype.Ja=function(t,i,n){var s=u({},Zi),h=t.upColor,r=t.downColor,e=t.borderUpColor,a=t.borderDownColor,o=t.wickUpColor,l=t.wickDownColor,v=f(this.Qa(i,n)),_=c(v.X[0])<=c(v.X[3]);return s.fu=_?h:r,s.Su=_?e:a,s.xu=_?o:l,s},t.prototype.$a=function(t){return u(u({},Zi),{fu:t.lineColor})},t.prototype.Xa=function(t,i,n){var s=f(this.Qa(i,n)).X[3]>=t.baseValue.price;return u(u({},Zi),{fu:s?t.topLineColor:t.bottomLineColor})},t.prototype.Ka=function(t){return u(u({},Zi),{fu:t.color})},t.prototype.Ga=function(t,i,n){var s=u({},Zi),h=f(this.Qa(i,n));return s.fu=void 0!==h.et?h.et:t.color,s},t.prototype.Qa=function(t,i){return void 0!==i?i.X:this.ca.Hi().io(t)},t}(),Gi=function(){function t(){this.no=[],this.so=new Map,this.ho=new Map}return t.prototype.ro=function(){return this.Je()>0?this.no[this.no.length-1]:null},t.prototype.eo=function(){return this.Je()>0?this.uo(0):null},t.prototype.Ui=function(){return this.Je()>0?this.uo(this.no.length-1):null},t.prototype.Je=function(){return this.no.length},t.prototype.ti=function(){return 0===this.Je()},t.prototype.Eh=function(t){return null!==this.ao(t,0)},t.prototype.io=function(t){return this.oo(t)},t.prototype.oo=function(t,i){void 0===i&&(i=0);var n=this.ao(t,i);return null===n?null:u(u({},this.lo(n)),{Ph:this.uo(n)})},t.prototype.iu=function(){return this.no},t.prototype.fo=function(t,i,n){if(this.ti())return null;for(var s=null,h=0,r=n;h<r.length;h++){var e=r[h];s=Qi(s,this.co(t,i,e))}return s},t.prototype._=function(t){this.ho.clear(),this.so.clear(),this.no=t},t.prototype.uo=function(t){return this.no[t].Ph},t.prototype.lo=function(t){return this.no[t]},t.prototype.ao=function(t,i){var n=this.vo(t);if(null===n&&0!==i)switch(i){case-1:return this._o(t);case 1:return this.do(t);default:throw new TypeError("Unknown search mode")}return n},t.prototype._o=function(t){var i=this.wo(t);return i>0&&(i-=1),i!==this.no.length&&this.uo(i)<t?i:null},t.prototype.do=function(t){var i=this.Mo(t);return i!==this.no.length&&t<this.uo(i)?i:null},t.prototype.vo=function(t){var i=this.wo(t);return i===this.no.length||t<this.no[i].Ph?null:i},t.prototype.wo=function(t){return Bt(this.no,t,(function(t,i){return t.Ph<i}))},t.prototype.Mo=function(t){return Lt(this.no,t,(function(t,i){return i.Ph>t}))},t.prototype.bo=function(t,i,n){for(var s=null,h=t;h<i;h++){var r=this.no[h].X[n];Number.isNaN(r)||(null===s?s={mo:r,po:r}:(r<s.mo&&(s.mo=r),r>s.po&&(s.po=r)))}return s},t.prototype.co=function(t,i,n){if(this.ti())return null;var s=null,h=f(this.eo()),r=f(this.Ui()),e=Math.max(t,h),u=Math.min(i,r),a=30*Math.ceil(e/30),o=Math.max(a,30*Math.floor(u/30)),l=this.wo(e),c=this.Mo(Math.min(u,a,i));s=Qi(s,this.bo(l,c,n));var v=this.so.get(n);void 0===v&&(v=new Map,this.so.set(n,v));for(var _=Math.max(a+1,e);_<o;_+=30){var d=Math.floor(_/30),w=v.get(d);if(void 0===w){var M=this.wo(30*d),b=this.Mo(30*(d+1)-1);w=this.bo(M,b,n),v.set(d,w)}s=Qi(s,w)}l=this.wo(o),c=this.Mo(u);return s=Qi(s,this.bo(l,c,n))},t}();function Qi(t,i){return null===t?i:null===i?t:{mo:Math.min(t.mo,i.mo),po:Math.max(t.po,i.po)}}var tn=function(t){function i(i,n,s){var h=t.call(this,i)||this;h.tt=new Gi,h.qa=new qi(h),h.yo=[],h.ko=new Ni(h),h.Co=null,h.No=null,h.xo=[],h.So=[],h.Do=null,h.ki=n,h.Ao=s;var r=new Ui(h);return h.Mi=[r],h.Ua=new yi(r,h,i),"Area"!==s&&"Line"!==s&&"Baseline"!==s||(h.Co=new Ti(h)),h.To(),h.Bo(),h}return e(i,t),i.prototype.en=function(){null!==this.Do&&clearTimeout(this.Do)},i.prototype.Ea=function(t){return this.ki.priceLineColor||t},i.prototype.wa=function(t){var i={Ma:!0},n=this.$();if(this.vt().j().ti()||n.ti()||this.tt.ti())return i;var s,h,r=this.vt().j().mr(),e=this.H();if(null===r||null===e)return i;if(t){var u=this.tt.ro();if(null===u)return i;s=u,h=u.Ph}else{var a=this.tt.oo(r.rh(),-1);if(null===a)return i;if(null===(s=this.tt.io(a.Ph)))return i;h=a.Ph}var o=s.X[3],l=this.tu().cu(h,{X:s}),f=n.K(o,e.X);return{Ma:!1,D:o,Et:n.ii(o,e.X),za:n.Zs(o),Pa:n.Gs(o,e.X),et:l.fu,zt:f,Ph:h}},i.prototype.tu=function(){return null!==this.No||(this.No=new Ji(this)),this.No},i.prototype.ct=function(){return this.ki},i.prototype.rs=function(t){var i=t.priceScaleId;void 0!==i&&i!==this.ki.priceScaleId&&this.vt().Lo(this,i),v(this.ki,t),null!==this.ui&&void 0!==t.scaleMargins&&this.ui.rs({scaleMargins:t.scaleMargins}),void 0!==t.priceFormat&&this.To(),this.vt().Fo(this),this.vt().Eo(),this.Ai.O("options")},i.prototype._=function(t){var i;this.tt._(t),this.Vo(),this.Ai.O("data"),this.Ci.O("data"),null===(i=this.Co)||void 0===i||i.O("data");var n=this.vt().qu(this);this.vt().Oo(n),this.vt().Fo(this),this.vt().Eo(),this.vt().Or()},i.prototype.Wo=function(t){this.xo=t.map((function(t){return u({},t)})),this.Vo();var i=this.vt().qu(this);this.Ci.O("data"),this.vt().Oo(i),this.vt().Fo(this),this.vt().Eo(),this.vt().Or()},i.prototype.La=function(){return this.So},i.prototype.zo=function(t){var i=new $i(this,t);return this.yo.push(i),this.vt().Fo(this),i},i.prototype.Po=function(t){var i=this.yo.indexOf(t);-1!==i&&this.yo.splice(i,1),this.vt().Fo(this)},i.prototype.Ya=function(){return this.Ao},i.prototype.H=function(){var t=this.Ro();return null===t?null:{X:t.X[3],Rs:t.S}},i.prototype.Ro=function(){var t=this.vt().j().mr();if(null===t)return null;var i=t.hh();return this.tt.oo(i,1)},i.prototype.Hi=function(){return this.tt},i.prototype.Fa=function(t){var i=this.tt.io(t);return null===i?null:"Bar"===this.Ao||"Candlestick"===this.Ao?{open:i.X[0],high:i.X[1],low:i.X[2],close:i.X[3]}:i.X[3]},i.prototype.Io=function(t){var i=this,n=this.Co;return null!==n&&n.U()?(null===this.Do&&n._a()&&(this.Do=setTimeout((function(){i.Do=null,i.vt().jo()}),0)),n.va(),[n]):[]},i.prototype.zi=function(){var t=[];this.qo()||t.push(this.ko);for(var i=0,n=this.yo;i<n.length;i++){var s=n[i];t.push.apply(t,s.zi())}return t.push(this.Ai,this.qa,this.Ua,this.Ci),t},i.prototype.Pi=function(t,i){if(i!==this.ui&&!this.qo())return[];for(var n=a([],this.Mi,!0),s=0,h=this.yo;s<h.length;s++){var r=h[s];n.push(r.Ha())}return n},i.prototype.sh=function(t,i){var n=this;if(void 0!==this.ki.autoscaleInfoProvider){var s=this.ki.autoscaleInfoProvider((function(){var s=n.Uo(t,i);return null===s?null:s.Mn()}));return Hi.bn(s)}return this.Uo(t,i)},i.prototype.ih=function(){return this.ki.priceFormat.minMove},i.prototype.$s=function(){return this.Zn},i.prototype.Ii=function(){var t;this.Ai.O(),this.Ci.O();for(var i=0,n=this.Mi;i<n.length;i++){n[i].O()}for(var s=0,h=this.yo;s<h.length;s++){h[s].O()}this.qa.O(),this.ko.O(),null===(t=this.Co)||void 0===t||t.O()},i.prototype.$=function(){return f(t.prototype.$.call(this))},i.prototype.q=function(t){if(!(("Line"===this.Ao||"Area"===this.Ao||"Baseline"===this.Ao)&&this.ki.crosshairMarkerVisible))return null;var i=this.tt.io(t);return null===i?null:{D:i.X[3],C:this.Ho(),Z:this.Yo(),Y:this.Ko(t)}},i.prototype.Va=function(){return this.ki.title},i.prototype.U=function(){return this.ki.visible},i.prototype.qo=function(){return!Yt(this.$().hs())},i.prototype.Uo=function(t,i){if(!d(t)||!d(i)||this.tt.ti())return null;var n="Line"===this.Ao||"Area"===this.Ao||"Baseline"===this.Ao||"Histogram"===this.Ao?[3]:[2,1],s=this.tt.fo(t,i,n),h=null!==s?new nt(s.mo,s.po):null;if("Histogram"===this.Ya()){var r=this.ki.base,e=new nt(r,r);h=null!==h?h._n(e):e}return new Hi(h,this.Ci.Ba())},i.prototype.Ho=function(){switch(this.Ao){case"Line":case"Area":case"Baseline":return this.ki.crosshairMarkerRadius}return 0},i.prototype.Yo=function(){switch(this.Ao){case"Line":case"Area":case"Baseline":var t=this.ki.crosshairMarkerBorderColor;if(0!==t.length)return t}return null},i.prototype.Ko=function(t){switch(this.Ao){case"Line":case"Area":case"Baseline":var i=this.ki.crosshairMarkerBackgroundColor;if(0!==i.length)return i}return this.tu().cu(t).fu},i.prototype.To=function(){switch(this.ki.priceFormat.type){case"custom":this.Zn={format:this.ki.priceFormat.formatter};break;case"volume":this.Zn=new $t(this.ki.priceFormat.precision);break;case"percent":this.Zn=new tt(this.ki.priceFormat.precision);break;default:var t=Math.pow(10,this.ki.priceFormat.precision);this.Zn=new Q(t,this.ki.priceFormat.minMove*t)}null!==this.ui&&this.ui.es()},i.prototype.Vo=function(){var t=this,i=this.vt().j();if(i.ti()||0===this.tt.Je())this.So=[];else{var n=f(this.tt.eo());this.So=this.xo.map((function(s,h){var r=f(i.br(s.time,!0)),e=r<n?1:-1;return{time:f(t.tt.oo(r,e)).Ph,position:s.position,shape:s.shape,color:s.color,id:s.id,ya:h,text:s.text,size:s.size}}))}},i.prototype.Bo=function(){switch(this.Ci=new ji(this,this.vt()),this.Ao){case"Bar":this.Ai=new ai(this,this.vt());break;case"Candlestick":this.Ai=new vi(this,this.vt());break;case"Line":this.Ai=new bi(this,this.vt());break;case"Area":this.Ai=new ri(this,this.vt());break;case"Baseline":this.Ai=new fi(this,this.vt());break;case"Histogram":this.Ai=new Mi(this,this.vt());break;default:throw Error("Unknown chart style assigned: "+this.Ao)}},i}(Xi),nn=function(){function t(t){this.ki=t}return t.prototype.$o=function(t,i,n){var s=t;if(0===this.ki.mode)return s;var h=n.xi(),r=h.H();if(null===r)return s;var e=h.K(t,r),u=n.Vs().filter((function(t){return t instanceof tn})).reduce((function(t,s){if(n.Uu(s)||!s.U())return t;var h=s.$(),r=s.Hi();if(h.ti()||!r.Eh(i))return t;var e=r.io(i);if(null===e)return t;var u=c(s.H());return t.concat([h.K(e.X[3],u.X)])}),[]);if(0===u.length)return s;u.sort((function(t,i){return Math.abs(t-e)-Math.abs(i-e)}));var a=u[0];return s=h.Si(a,r)},t}(),sn=function(){function t(){this.tt=null}return t.prototype._=function(t){this.tt=t},t.prototype.h=function(t,i,n,h){var r=this;if(null!==this.tt){var e=Math.max(1,Math.floor(i));t.lineWidth=e;var u=Math.ceil(this.tt.ht*i),a=Math.ceil(this.tt.st*i);!function(t,i){t.save(),t.lineWidth%2&&t.translate(.5,.5),i(),t.restore()}(t,(function(){var n=f(r.tt);if(n.Xo){t.strokeStyle=n.Zo,s(t,n.Jo),t.beginPath();for(var h=0,o=n.Go;h<o.length;h++){var l=o[h],c=Math.round(l.An*i);t.moveTo(c,-e),t.lineTo(c,u+e)}t.stroke()}if(n.Qo){t.strokeStyle=n.tl,s(t,n.il),t.beginPath();for(var v=0,_=n.nl;v<_.length;v++){var d=_[v],w=Math.round(d.An*i);t.moveTo(-e,w),t.lineTo(a+e,w)}t.stroke()}}))}},t}(),hn=function(){function t(t){this.ot=new sn,this.L=!0,this.vi=t}return t.prototype.O=function(){this.L=!0},t.prototype.P=function(t,i){if(this.L){var n=this.vi.vt().ct().grid,s={ht:t,st:i,Qo:n.horzLines.visible,Xo:n.vertLines.visible,tl:n.horzLines.color,Zo:n.vertLines.color,il:n.horzLines.style,Jo:n.vertLines.style,nl:this.vi.xi().Fn(),Go:this.vi.vt().j().Fn()||[]};this.ot._(s),this.L=!1}return this.ot},t}(),rn=function(){function t(t){this.Ai=new hn(t)}return t.prototype.sl=function(){return this.Ai},t}(),en=function(){function t(t,i){this.Hn=[],this.hl=new Map,this.En=0,this.$h=0,this.rl=1e3,this.Yn=null,this.el=new it,this.ul=t,this.hi=i,this.al=new rn(this);var n=i.ct();this.ol=this.ll("left",n.leftPriceScale),this.fl=this.ll("right",n.rightPriceScale),this.ol.bs().Ji(this.cl.bind(this,this.ol),this),this.fl.bs().Ji(this.cl.bind(this,this.ol),this),this.vl(n)}return t.prototype.vl=function(t){if(t.leftPriceScale&&this.ol.rs(t.leftPriceScale),t.rightPriceScale&&this.fl.rs(t.rightPriceScale),t.localization&&(this.ol.es(),this.fl.es()),t.overlayPriceScales)for(var i=0,n=Array.from(this.hl.values());i<n.length;i++){var s=f(n[i][0].$());s.rs(t.overlayPriceScales),t.localization&&s.es()}},t.prototype._l=function(t){switch(t){case"left":return this.ol;case"right":return this.fl}return this.hl.has(t)?l(this.hl.get(t))[0].$():null},t.prototype.en=function(){this.vt().dl().sn(this),this.ol.bs().sn(this),this.fl.bs().sn(this),this.Hn.forEach((function(t){t.en&&t.en()})),this.el.hn()},t.prototype.wl=function(){return this.rl},t.prototype.Ml=function(t){this.rl=t},t.prototype.vt=function(){return this.hi},t.prototype.wt=function(){return this.$h},t.prototype.Mt=function(){return this.En},t.prototype.Dr=function(t){this.$h=t,this.bl()},t.prototype.ps=function(t){var i=this;this.En=t,this.ol.ps(t),this.fl.ps(t),this.Hn.forEach((function(n){if(i.Uu(n)){var s=n.$();null!==s&&s.ps(t)}})),this.bl()},t.prototype.Vs=function(){return this.Hn},t.prototype.Uu=function(t){var i=t.$();return null===i||this.ol!==i&&this.fl!==i},t.prototype.Ws=function(t,i,n){var s=void 0!==n?n:this.pl().ml+1;this.gl(t,i,s)},t.prototype.Ps=function(t){var i=this.Hn.indexOf(t);o(-1!==i,"removeDataSource: invalid data source"),this.Hn.splice(i,1);var n=f(t.$()).hs();if(this.hl.has(n)){var s=l(this.hl.get(n)),h=s.indexOf(t);-1!==h&&(s.splice(h,1),0===s.length&&this.hl.delete(n))}var r=t.$();r&&r.Vs().indexOf(t)>=0&&r.Ps(t),null!==r&&(r.zs(),this.yl(r)),this.Yn=null},t.prototype.Hu=function(t){return t===this.ol?"left":t===this.fl?"right":"overlay"},t.prototype.kl=function(){return this.ol},t.prototype.Cl=function(){return this.fl},t.prototype.Nl=function(t,i){t.js(i)},t.prototype.xl=function(t,i){t.qs(i),this.bl()},t.prototype.Sl=function(t){t.Us()},t.prototype.Dl=function(t,i){t.Hs(i)},t.prototype.Al=function(t,i){t.Ys(i),this.bl()},t.prototype.Tl=function(t){t.Ks()},t.prototype.bl=function(){this.Hn.forEach((function(t){t.Ii()}))},t.prototype.xi=function(){var t=null;return this.hi.ct().rightPriceScale.visible&&0!==this.fl.Vs().length?t=this.fl:this.hi.ct().leftPriceScale.visible&&0!==this.ol.Vs().length?t=this.ol:0!==this.Hn.length&&(t=this.Hn[0].$()),null===t&&(t=this.fl),t},t.prototype.yl=function(t){null!==t&&t.fs()&&this.Bl(t)},t.prototype.Ll=function(t){var i=this.ul.mr();t.us({_s:!0}),null!==i&&t.th(i),this.bl()},t.prototype.Fl=function(){this.Bl(this.ol),this.Bl(this.fl)},t.prototype.El=function(){var t=this;this.yl(this.ol),this.yl(this.fl),this.Hn.forEach((function(i){t.Uu(i)&&t.yl(i.$())})),this.bl(),this.hi.Or()},t.prototype.Os=function(){return null===this.Yn&&(this.Yn=bt(this.Hn)),this.Yn},t.prototype.Vl=function(){return this.el},t.prototype.Ol=function(){return this.al},t.prototype.Bl=function(t){var i=t.Qs();if(i&&i.length>0&&!this.ul.ti()){var n=this.ul.mr();null!==n&&t.th(n)}t.Ii()},t.prototype.pl=function(){var t=this.Os();if(0===t.length)return{Wl:0,ml:0};for(var i=0,n=0,s=0;s<t.length;s++){var h=t[s].oi();null!==h&&(h<i&&(i=h),h>n&&(n=h))}return{Wl:i,ml:n}},t.prototype.gl=function(t,i,n){var s=this._l(i);if(null===s&&(s=this.ll(i,this.hi.ct().overlayPriceScales)),this.Hn.push(t),!Yt(i)){var h=this.hl.get(i)||[];h.push(t),this.hl.set(i,h)}s.Ws(t),t.fi(s),t.li(n),this.yl(s),this.Yn=null},t.prototype.cl=function(t,i,n){i.os!==n.os&&this.Bl(t)},t.prototype.ll=function(t,i){var n=u({visible:!0,autoScale:!0},b(i)),s=new kt(t,n,this.hi.ct().layout,this.hi.ct().localization);return s.ps(this.Mt()),s},t}(),un=function(t){function i(i){var n=t.call(this)||this;return n.zl=new Map,n.tt=i,n}return e(i,t),i.prototype.u=function(t){},i.prototype.l=function(t){if(this.tt.U){t.save();for(var i=0,n=0,s=this.tt.Pl;n<s.length;n++){if(0!==(a=s[n]).Et.length){t.font=a.Nt;var h=this.Rl(t,a.Et);h>this.tt.wt?a.Ur=this.tt.wt/h:a.Ur=1,i+=a.Il*a.Ur}}var r=0;switch(this.tt.jl){case"top":r=0;break;case"center":r=Math.max((this.tt.Mt-i)/2,0);break;case"bottom":r=Math.max(this.tt.Mt-i,0)}t.fillStyle=this.tt.et;for(var e=0,u=this.tt.Pl;e<u.length;e++){var a=u[e];t.save();var o=0;switch(this.tt.ql){case"left":t.textAlign="left",o=a.Il/2;break;case"center":t.textAlign="center",o=this.tt.wt/2;break;case"right":t.textAlign="right",o=this.tt.wt-1-a.Il/2}t.translate(o,r),t.textBaseline="top",t.font=a.Nt,t.scale(a.Ur,a.Ur),t.fillText(a.Et,0,a.Ul),t.restore(),r+=a.Il*a.Ur}t.restore()}},i.prototype.Rl=function(t,i){var n=this.Hl(t.font),s=n.get(i);return void 0===s&&(s=t.measureText(i).width,n.set(i,s)),s},i.prototype.Hl=function(t){var i=this.zl.get(t);return void 0===i&&(i=new Map,this.zl.set(t,i)),i},i}(y),an=function(){function t(t){this.L=!0,this.at={U:!1,et:"",Mt:0,wt:0,Pl:[],jl:"center",ql:"center"},this.ot=new un(this.at),this.lt=t}return t.prototype.O=function(){this.L=!0},t.prototype.P=function(t,i){return this.L&&(this.R(t,i),this.L=!1),this.ot},t.prototype.R=function(t,i){var n=this.lt.ct(),s=this.at;s.U=n.visible,s.U&&(s.et=n.color,s.wt=i,s.Mt=t,s.ql=n.horzAlign,s.jl=n.vertAlign,s.Pl=[{Et:n.text,Nt:Ut(n.fontSize,n.fontFamily,n.fontStyle),Il:1.2*n.fontSize,Ul:0,Ur:0}])},t}(),on=function(t){function i(i,n){var s=t.call(this)||this;return s.ki=n,s.Ai=new an(s),s}return e(i,t),i.prototype.Pi=function(){return[]},i.prototype.zi=function(){return[this.Ai]},i.prototype.ct=function(){return this.ki},i.prototype.Ii=function(){this.Ai.O()},i}(X),ln=function(){function t(t,i){this.Yl=[],this.Kl=[],this.$h=0,this.$l=null,this.Xl=null,this.Zl=new it,this.Jl=new it,this.Gl=null,this.Ql=t,this.ki=i,this.tf=new Ht(this),this.ul=new Rt(this,i.timeScale,this.ki.localization),this.V=new Z(this,i.crosshair),this.if=new nn(i.crosshair),this.nf=new on(this,i.watermark),this.sf(),this.Yl[0].Ml(2e3),this.hf=this.rf(0),this.ef=this.rf(1)}return t.prototype.uf=function(){this.af(new Kt(3))},t.prototype.Or=function(){this.af(new Kt(2))},t.prototype.jo=function(){this.af(new Kt(1))},t.prototype.Fo=function(t){var i=this.lf(t);this.af(i)},t.prototype.ff=function(){return this.Xl},t.prototype.cf=function(t){var i=this.Xl;this.Xl=t,null!==i&&this.Fo(i.vf),null!==t&&this.Fo(t.vf)},t.prototype.ct=function(){return this.ki},t.prototype.rs=function(t){v(this.ki,t),this.Yl.forEach((function(i){return i.vl(t)})),void 0!==t.timeScale&&this.ul.rs(t.timeScale),void 0!==t.localization&&this.ul.cr(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.Zl.hn(),this.hf=this.rf(0),this.ef=this.rf(1),this.uf()},t.prototype._f=function(t,i){var n=this.df(t);null!==n&&(n.$.rs(i),this.Zl.hn())},t.prototype.df=function(t){for(var i=0,n=this.Yl;i<n.length;i++){var s=n[i],h=s._l(t);if(null!==h)return{ft:s,$:h}}return null},t.prototype.j=function(){return this.ul},t.prototype.wf=function(){return this.Yl},t.prototype.Mf=function(){return this.nf},t.prototype.bf=function(){return this.V},t.prototype.mf=function(){return this.Jl},t.prototype.pf=function(t,i){t.ps(i),this.Vr()},t.prototype.Dr=function(t){this.$h=t,this.ul.Dr(this.$h),this.Yl.forEach((function(i){return i.Dr(t)})),this.Vr()},t.prototype.sf=function(t){var i=new en(this.ul,this);void 0!==t?this.Yl.splice(t,0,i):this.Yl.push(i);var n=void 0===t?this.Yl.length-1:t,s=new Kt(3);return s.be(n,{me:0,_s:!0}),this.af(s),i},t.prototype.Nl=function(t,i,n){t.Nl(i,n)},t.prototype.xl=function(t,i,n){t.xl(i,n),this.Eo(),this.af(this.gf(t,2))},t.prototype.Sl=function(t,i){t.Sl(i),this.af(this.gf(t,2))},t.prototype.Dl=function(t,i,n){i.fs()||t.Dl(i,n)},t.prototype.Al=function(t,i,n){i.fs()||(t.Al(i,n),this.Eo(),this.af(this.gf(t,2)))},t.prototype.Tl=function(t,i){i.fs()||(t.Tl(i),this.af(this.gf(t,2)))},t.prototype.Ll=function(t,i){t.Ll(i),this.af(this.gf(t,2))},t.prototype.yf=function(t){this.ul.js(t)},t.prototype.kf=function(t,i){var n=this.j();if(!n.ti()&&0!==i){var s=n.wt();t=Math.max(1,Math.min(t,s)),n.Ur(t,i),this.Vr()}},t.prototype.Cf=function(t){this.Nf(0),this.xf(t),this.Sf()},t.prototype.Df=function(t){this.ul.qs(t),this.Vr()},t.prototype.Af=function(){this.ul.Us(),this.Or()},t.prototype.Nf=function(t){this.$l=t,this.ul.Hs(t)},t.prototype.xf=function(t){var i=!1;return null!==this.$l&&Math.abs(t-this.$l)>20&&(this.$l=null,i=!0),this.ul.Ys(t),this.Vr(),i},t.prototype.Sf=function(){this.ul.Ks(),this.Or(),this.$l=null},t.prototype.W=function(){return this.Kl},t.prototype.Tf=function(t,i,n){this.V.Ti(t,i);var s=NaN,h=this.ul.Fr(t),r=this.ul.mr();null!==r&&(h=Math.min(Math.max(r.hh(),h),r.rh()));var e=n.xi(),u=e.H();null!==u&&(s=e.Si(i,u)),s=this.if.$o(s,h,n),this.V.Ei(h,s,n),this.jo(),this.Jl.hn(this.V.I(),{x:t,y:i})},t.prototype.Bf=function(){this.bf().Oi(),this.jo(),this.Jl.hn(null,null)},t.prototype.Eo=function(){var t=this.V.ft();if(null!==t){var i=this.V.Li(),n=this.V.Fi();this.Tf(i,n,t)}this.V.Ii()},t.prototype.Lf=function(t,i,n){var s=this.ul.ri(0);void 0!==i&&void 0!==n&&this.ul.O(i,n);var h=this.ul.ri(0),r=this.ul.Br(),e=this.ul.mr();if(null!==e&&null!==s&&null!==h){var u=e.Eh(r),a=s.Dh>h.Dh,o=null!==t&&t>r&&!a,l=u&&this.ul.ct().shiftVisibleRangeOnNewBar;if(o&&!l){var f=t-r;this.ul.Mr(this.ul.Pr()-f)}}this.ul.qr(t)},t.prototype.Oo=function(t){null!==t&&t.El()},t.prototype.qu=function(t){var i=this.Yl.find((function(i){return i.Os().includes(t)}));return void 0===i?null:i},t.prototype.Vr=function(){this.nf.Ii(),this.Yl.forEach((function(t){return t.El()})),this.Eo()},t.prototype.en=function(){this.Yl.forEach((function(t){return t.en()})),this.Yl.length=0,this.ki.localization.priceFormatter=void 0,this.ki.localization.timeFormatter=void 0},t.prototype.Ff=function(){return this.tf},t.prototype.Yu=function(){return this.tf.ct()},t.prototype.dl=function(){return this.Zl},t.prototype.Ef=function(t,i){var n=this.Yl[0],s=this.Vf(i,t,n);return this.Kl.push(s),1===this.Kl.length?this.uf():this.Or(),s},t.prototype.Of=function(t){var i=this.qu(t),n=this.Kl.indexOf(t);o(-1!==n,"Series not found"),this.Kl.splice(n,1),f(i).Ps(t),t.en&&t.en()},t.prototype.Lo=function(t,i){var n=f(this.qu(t));n.Ps(t);var s=this.df(i);if(null===s){var h=t.oi();n.Ws(t,i,h)}else{h=s.ft===n?t.oi():void 0;s.ft.Ws(t,i,h)}},t.prototype.Qr=function(){var t=new Kt(2);t.ye(),this.af(t)},t.prototype.Wf=function(t){var i=new Kt(2);i.Ce(t),this.af(i)},t.prototype.Ne=function(){var t=new Kt(2);t.Ne(),this.af(t)},t.prototype.wr=function(t){var i=new Kt(2);i.wr(t),this.af(i)},t.prototype.Mr=function(t){var i=new Kt(2);i.Mr(t),this.af(i)},t.prototype.zf=function(){return this.ki.rightPriceScale.visible?"right":"left"},t.prototype.Pf=function(){return this.ef},t.prototype.Rf=function(){return this.hf},t.prototype.J=function(t){var i=this.ef,n=this.hf;if(i===n)return i;if(t=Math.max(0,Math.min(100,Math.round(100*t))),null===this.Gl||this.Gl.Ve!==n||this.Gl.Oe!==i)this.Gl={Ve:n,Oe:i,If:new Map};else{var s=this.Gl.If.get(t);if(void 0!==s)return s}var h=function(t,i,n){var s=O(t),h=s[0],r=s[1],e=s[2],u=s[3],a=O(i),o=a[0],l=a[1],f=a[2],c=a[3],v=[T(h+n*(o-h)),T(r+n*(l-r)),T(e+n*(f-e)),B(u+n*(c-u))];return"rgba("+v[0]+", "+v[1]+", "+v[2]+", "+v[3]+")"}(n,i,t/100);return this.Gl.If.set(t,h),h},t.prototype.gf=function(t,i){var n=new Kt(i);if(null!==t){var s=this.Yl.indexOf(t);n.be(s,{me:i})}return n},t.prototype.lf=function(t,i){return void 0===i&&(i=2),this.gf(this.qu(t),i)},t.prototype.af=function(t){this.Ql&&this.Ql(t),this.Yl.forEach((function(t){return t.Ol().sl().O()}))},t.prototype.Vf=function(t,i,n){var s=new tn(this,t,i),h=void 0!==t.priceScaleId?t.priceScaleId:this.zf();return n.Ws(s,h),Yt(h)||s.rs(t),s},t.prototype.rf=function(t){var i=this.ki.layout;return"gradient"===i.background.type?0===t?i.background.topColor:i.background.bottomColor:i.background.color},t}(),fn=function(){function t(t,i){this.st=t,this.ht=i}return t.prototype.on=function(t){return this.st===t.st&&this.ht===t.ht},t}();function cn(t){return t.ownerDocument&&t.ownerDocument.defaultView&&t.ownerDocument.defaultView.devicePixelRatio||1}function vn(t){var i=f(t.getContext("2d"));return i.setTransform(1,0,0,1,0,0),i}function _n(t,i){var n=t.createElement("canvas"),s=cn(n);return n.style.width=i.st+"px",n.style.height=i.ht+"px",n.width=i.st*s,n.height=i.ht*s,n}function dn(i,n){var s=f(i.ownerDocument).createElement("canvas");i.appendChild(s);var h=(0,fancy_canvas_coordinate_space__WEBPACK_IMPORTED_MODULE_0__.bindToDevicePixelRatio)(s);return h.resizeCanvas({width:n.st,height:n.ht}),h}function wn(t,i){return t.jf-i.jf}function Mn(t,i,n){var s=(t.jf-i.jf)/(t.S-i.S);return Math.sign(s)*Math.min(Math.abs(s),n)}var bn=function(){function t(t,i,n,s){this.qf=null,this.Uf=null,this.Hf=null,this.Yf=null,this.Kf=null,this.$f=0,this.Xf=0,this.Zf=!1,this.Jf=t,this.Gf=i,this.Qf=n,this.Yi=s}return t.prototype.tc=function(t,i){if(null!==this.qf){if(this.qf.S===i)return void(this.qf.jf=t);if(Math.abs(this.qf.jf-t)<this.Yi)return}this.Yf=this.Hf,this.Hf=this.Uf,this.Uf=this.qf,this.qf={S:i,jf:t}},t.prototype.ia=function(t,i){if(null!==this.qf&&null!==this.Uf&&!(i-this.qf.S>50)){var n=0,s=Mn(this.qf,this.Uf,this.Gf),h=wn(this.qf,this.Uf),r=[s],e=[h];if(n+=h,null!==this.Hf){var u=Mn(this.Uf,this.Hf,this.Gf);if(Math.sign(u)===Math.sign(s)){var a=wn(this.Uf,this.Hf);if(r.push(u),e.push(a),n+=a,null!==this.Yf){var o=Mn(this.Hf,this.Yf,this.Gf);if(Math.sign(o)===Math.sign(s)){var l=wn(this.Hf,this.Yf);r.push(o),e.push(l),n+=l}}}}for(var f,c,v,_=0,d=0;d<r.length;++d)_+=e[d]/n*r[d];if(!(Math.abs(_)<this.Jf))this.Kf={jf:t,S:i},this.Xf=_,this.$f=(f=Math.abs(_),c=this.Qf,v=Math.log(c),Math.log(1*v/-f)/v)}},t.prototype.ic=function(t){var i=f(this.Kf),n=t-i.S;return i.jf+this.Xf*(Math.pow(this.Qf,n)-1)/Math.log(this.Qf)},t.prototype.nc=function(t){return null===this.Kf||this.sc(t)===this.$f},t.prototype.hc=function(){return this.Zf},t.prototype.rc=function(){this.Zf=!0},t.prototype.sc=function(t){var i=t-f(this.Kf).S;return Math.min(i,this.$f)},t}(),mn="undefined"!=typeof window;var pn=function(){if(!mn)return!1;var t=!!navigator.maxTouchPoints||!!navigator.msMaxTouchPoints||!!mn&&("ontouchstart"in window||Boolean(window.DocumentTouch&&document instanceof window.DocumentTouch));return"onorientationchange"in window&&t}();var gn=function(){if(!mn)return!1;var t=/Android/i.test(navigator.userAgent),i=/iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);return t||i}(),yn=function(){function t(t,i,n){this.ec=0,this.uc=null,this.ac=null,this.oc=!1,this.lc=null,this.fc=!1,this.cc=!1,this.vc=null,this._c=null,this.dc=null,this.wc=null,this.Mc=0,this.bc=!1,this.mc=!1,this.gc=!1,this.yc=t,this.kc=i,this.ki=n,this.Cc()}return t.prototype.en=function(){null!==this.vc&&(this.vc(),this.vc=null),null!==this._c&&(this._c(),this._c=null),null!==this.dc&&(this.dc(),this.dc=null),this.Nc(),this.xc()},t.prototype.Sc=function(t){var i=this;this._c&&this._c();var n=this.Dc.bind(this);this._c=function(){i.yc.removeEventListener("mousemove",n)},this.yc.addEventListener("mousemove",n),Nn(t)&&this.Dc(t);var s=this.Ac(t);this.Tc(s,this.kc.Bc)},t.prototype.xc=function(){null!==this.uc&&clearTimeout(this.uc),this.ec=0,this.uc=null},t.prototype.Dc=function(t){if(!this.gc||Nn(t)){var i=this.Ac(t);this.Tc(i,this.kc.Lc)}},t.prototype.Fc=function(t){if((!("button"in t)||0===t.button)&&null===this.wc){var i=Nn(t);if(!this.mc||!i){this.bc=!0;var n=this.Ac(t),s=c(this.lc),h=Math.abs(s.p-n.Ec),r=Math.abs(s.g-n.Vc),e=h+r>5;if(e||!i){if(e&&!this.fc&&i){var u=.5*h,a=r>=u&&!this.ki.Oc,o=u>r&&!this.ki.Wc;a||o||(this.mc=!0)}e&&(this.fc=!0,this.cc=!0,i&&this.Nc()),this.mc||(this.Tc(n,this.kc.zc),i&&xn(t))}}}},t.prototype.Pc=function(t){if(!("button"in t)||0===t.button){var i=this.Ac(t);this.Nc(),this.lc=null,this.gc=!1,this.dc&&(this.dc(),this.dc=null),Nn(t)&&this.Rc(t),this.Tc(i,this.kc.Ic),++this.ec,this.uc&&this.ec>1?(this.Tc(i,this.kc.jc),this.xc()):this.cc||this.Tc(i,this.kc.qc),Nn(t)&&(xn(t),this.Rc(t),0===t.touches.length&&(this.oc=!1))}},t.prototype.Nc=function(){null!==this.ac&&(clearTimeout(this.ac),this.ac=null)},t.prototype.Uc=function(t){if(!("button"in t)||0===t.button){var i=this.Ac(t);this.cc=!1,this.fc=!1,this.mc=!1,Nn(t)&&this.Sc(t),this.lc={p:i.Ec,g:i.Vc},this.dc&&(this.dc(),this.dc=null);var n=this.Fc.bind(this),s=this.Pc.bind(this),h=this.yc.ownerDocument.documentElement;this.dc=function(){h.removeEventListener("touchmove",n),h.removeEventListener("touchend",s),h.removeEventListener("mousemove",n),h.removeEventListener("mouseup",s)},h.addEventListener("touchmove",n,{passive:!1}),h.addEventListener("touchend",s,{passive:!1}),this.Nc(),Nn(t)&&1===t.touches.length?this.ac=setTimeout(this.Hc.bind(this,t),240):(h.addEventListener("mousemove",n),h.addEventListener("mouseup",s)),this.gc=!0,this.Tc(i,this.kc.Yc),this.uc||(this.ec=0,this.uc=setTimeout(this.xc.bind(this),500))}},t.prototype.Cc=function(){var t=this;this.yc.addEventListener("mouseenter",this.Sc.bind(this)),this.yc.addEventListener("touchcancel",this.Nc.bind(this));var i=this.yc.ownerDocument,n=function(i){t.kc.Kc&&(i.composed&&t.yc.contains(i.composedPath()[0])||i.target&&t.yc.contains(i.target)||t.kc.Kc())};this.vc=function(){i.removeEventListener("mousedown",n),i.removeEventListener("touchstart",n)},i.addEventListener("mousedown",n),i.addEventListener("touchstart",n,{passive:!0}),this.yc.addEventListener("mouseleave",this.Rc.bind(this)),this.yc.addEventListener("touchstart",this.Uc.bind(this),{passive:!0}),pn||this.yc.addEventListener("mousedown",this.Uc.bind(this)),this.$c(),this.yc.addEventListener("touchmove",(function(){}),{passive:!1})},t.prototype.$c=function(){var t=this;void 0===this.kc.Xc&&void 0===this.kc.Zc&&void 0===this.kc.Jc||(this.yc.addEventListener("touchstart",(function(i){return t.Gc(i.touches)}),{passive:!0}),this.yc.addEventListener("touchmove",(function(i){if(2===i.touches.length&&null!==t.wc&&void 0!==t.kc.Zc){var n=Cn(i.touches[0],i.touches[1])/t.Mc;t.kc.Zc(t.wc,n),xn(i)}}),{passive:!1}),this.yc.addEventListener("touchend",(function(i){t.Gc(i.touches)})))},t.prototype.Gc=function(t){1===t.length&&(this.bc=!1),2!==t.length||this.bc||this.oc?this.Qc():this.tv(t)},t.prototype.tv=function(t){var i=kn(this.yc);this.wc={p:(t[0].clientX-i.left+(t[1].clientX-i.left))/2,g:(t[0].clientY-i.top+(t[1].clientY-i.top))/2},this.Mc=Cn(t[0],t[1]),void 0!==this.kc.Xc&&this.kc.Xc(),this.Nc()},t.prototype.Qc=function(){null!==this.wc&&(this.wc=null,void 0!==this.kc.Jc&&this.kc.Jc())},t.prototype.Rc=function(t){this._c&&this._c();var i=this.Ac(t);this.Tc(i,this.kc.iv)},t.prototype.Hc=function(t){var i=this.Ac(t);this.Tc(i,this.kc.nv),this.cc=!0,this.oc=!0},t.prototype.Tc=function(t,i){i&&i.call(this.kc,t)},t.prototype.Ac=function(t){var i;i="touches"in t&&t.touches.length?t.touches[0]:"changedTouches"in t&&t.changedTouches.length?t.changedTouches[0]:t;var n=kn(this.yc);return{sv:i.clientX,hv:i.clientY,Ec:i.pageX,Vc:i.pageY,rv:i.screenX,ev:i.screenY,uv:i.clientX-n.left,av:i.clientY-n.top,ov:t.ctrlKey,lv:t.altKey,fv:t.shiftKey,cv:t.metaKey,ke:t.type.startsWith("mouse")?"mouse":"touch",vv:t.view}},t}();function kn(t){return t.getBoundingClientRect()||{left:0,top:0}}function Cn(t,i){var n=t.clientX-i.clientX,s=t.clientY-i.clientY;return Math.sqrt(n*n+s*s)}function Nn(t){return Boolean(t.touches)}function xn(t){t.cancelable&&t.preventDefault()}var Sn=function(){function t(t,i,n,s){this.Pu=new pi(200),this.fe=0,this._v="",this.ma="",this.Vu=[],this.dv=new Map,this.fe=t,this._v=i,this.ma=Ut(t,n,s)}return t.prototype.en=function(){this.Pu.Ou(),this.Vu=[],this.dv.clear()},t.prototype.wv=function(t,i,n,s,h){var r=this.Mv(t,i);if("left"!==h){var e=cn(t.canvas);n-=Math.floor(r.bv*e)}s-=Math.floor(r.Mt/2),t.drawImage(r.mv,n,s,r.wt,r.Mt)},t.prototype.Mv=function(t,i){var n,s=this;if(this.dv.has(i))n=l(this.dv.get(i));else{if(this.Vu.length>=200){var h=l(this.Vu.shift());this.dv.delete(h)}var r=cn(t.canvas),e=Math.ceil(this.fe/4.5),u=Math.round(this.fe/10),a=Math.ceil(this.Pu.Vt(t,i)),o=et(Math.round(a+2*e)),f=et(this.fe+2*e),c=_n(document,new fn(o,f));n={Et:i,bv:Math.round(Math.max(1,a)),wt:Math.ceil(o*r),Mt:Math.ceil(f*r),mv:c},0!==a&&(this.Vu.push(n.Et),this.dv.set(n.Et,n)),P(t=vn(n.mv),r,(function(){t.font=s.ma,t.fillStyle=s._v,t.fillText(i,0,f-e-u)}))}return n},t}(),Dn=function(){function t(t,i,n,s){var h=this;this.Gt=null,this.pv=null,this.gv=null,this.yv=!1,this.kv=new pi(50),this.Cv=new Sn(11,"#000"),this._v=null,this.ma=null,this.Nv=0,this.xv=function(){h.Sv(h.tf.ct()),h.vi.Dv().vt().Or()},this.Av=function(){h.vi.Dv().vt().Or()},this.vi=t,this.ki=i,this.tf=n,this.Tv="left"===s,this.Bv=document.createElement("div"),this.Bv.style.height="100%",this.Bv.style.overflow="hidden",this.Bv.style.width="25px",this.Bv.style.left="0",this.Bv.style.position="relative",this.Lv=dn(this.Bv,new fn(16,16)),this.Lv.subscribeCanvasConfigured(this.xv);var r=this.Lv.canvas;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Fv=dn(this.Bv,new fn(16,16)),this.Fv.subscribeCanvasConfigured(this.Av);var e=this.Fv.canvas;e.style.position="absolute",e.style.zIndex="2",e.style.left="0",e.style.top="0";var u={Yc:this.Ev.bind(this),zc:this.Vv.bind(this),Kc:this.Ov.bind(this),Ic:this.Wv.bind(this),jc:this.zv.bind(this),Bc:this.Pv.bind(this),iv:this.Rv.bind(this)};this.Iv=new yn(this.Fv.canvas,u,{Oc:!1,Wc:!0})}return t.prototype.en=function(){this.Iv.en(),this.Fv.unsubscribeCanvasConfigured(this.Av),this.Fv.destroy(),this.Lv.unsubscribeCanvasConfigured(this.xv),this.Lv.destroy(),null!==this.Gt&&this.Gt.Is().sn(this),this.Gt=null,null!==this.gv&&(clearTimeout(this.gv),this.gv=null),this.Cv.en()},t.prototype.jv=function(){return this.Bv},t.prototype.N=function(){return f(this.Gt).ct().borderColor},t.prototype.qv=function(){return this.ki.textColor},t.prototype.Wt=function(){return this.ki.fontSize},t.prototype.Uv=function(){return Ut(this.Wt(),this.ki.fontFamily)},t.prototype.Hv=function(){var t=this.tf.ct(),i=this._v!==t.et,n=this.ma!==t.Nt;return(i||n)&&(this.Sv(t),this._v=t.et),n&&(this.kv.Ou(),this.ma=t.Nt),t},t.prototype.Yv=function(){if(null===this.Gt)return 0;var t=34,i=this.Hv(),n=vn(this.Lv.canvas),s=this.Gt.Fn();n.font=this.Uv(),s.length>0&&(t=Math.max(this.kv.Vt(n,s[0].Tn),this.kv.Vt(n,s[s.length-1].Tn)));for(var h=this.Kv(),r=h.length;r--;){var e=this.kv.Vt(n,h[r].Et());e>t&&(t=e)}var u=this.Gt.H();if(null!==u&&null!==this.pv){var a=this.Gt.Si(1,u),o=this.Gt.Si(this.pv.ht-2,u);t=Math.max(t,this.kv.Vt(n,this.Gt.ii(Math.floor(Math.min(a,o))+.11111111111111,u)),this.kv.Vt(n,this.Gt.ii(Math.ceil(Math.max(a,o))-.11111111111111,u)))}var l=Math.ceil(i.At+i.Dt+i.Lt+i.Ft+t);return l+=l%2},t.prototype.$v=function(t){if(t.st<0||t.ht<0)throw new Error("Try to set invalid size to PriceAxisWidget "+JSON.stringify(t));null!==this.pv&&this.pv.on(t)||(this.pv=t,this.Lv.resizeCanvas({width:t.st,height:t.ht}),this.Fv.resizeCanvas({width:t.st,height:t.ht}),this.Bv.style.width=t.st+"px",this.Bv.style.height=t.ht+"px",this.Bv.style.minWidth=t.st+"px")},t.prototype.Xv=function(){return f(this.pv).st},t.prototype.fi=function(t){this.Gt!==t&&(null!==this.Gt&&this.Gt.Is().sn(this),this.Gt=t,t.Is().Ji(this.qn.bind(this),this))},t.prototype.$=function(){return this.Gt},t.prototype.Ou=function(){var t=this.vi.Zv();this.vi.Dv().vt().Ll(t,f(this.$()))},t.prototype.Jv=function(t){if(null!==this.pv){if(1!==t){var i=vn(this.Lv.canvas);this.Gv(),this.Qv(i,this.Lv.pixelRatio),this.yu(i,this.Lv.pixelRatio),this.t_(i,this.Lv.pixelRatio),this.i_(i,this.Lv.pixelRatio)}var n=vn(this.Fv.canvas),s=this.pv.st,h=this.pv.ht;P(n,this.Fv.pixelRatio,(function(){n.clearRect(0,0,s,h)})),this.n_(n,this.Fv.pixelRatio)}},t.prototype.s_=function(){return this.Lv.canvas},t.prototype.Ev=function(t){if(null!==this.Gt&&!this.Gt.ti()&&this.vi.Dv().ct().handleScale.axisPressedMouseMove.price){var i=this.vi.Dv().vt(),n=this.vi.Zv();this.yv=!0,i.Nl(n,this.Gt,t.av)}},t.prototype.Vv=function(t){if(null!==this.Gt&&this.vi.Dv().ct().handleScale.axisPressedMouseMove.price){var i=this.vi.Dv().vt(),n=this.vi.Zv(),s=this.Gt;i.xl(n,s,t.av)}},t.prototype.Ov=function(){if(null!==this.Gt&&this.vi.Dv().ct().handleScale.axisPressedMouseMove.price){var t=this.vi.Dv().vt(),i=this.vi.Zv(),n=this.Gt;this.yv&&(this.yv=!1,t.Sl(i,n))}},t.prototype.Wv=function(t){if(null!==this.Gt&&this.vi.Dv().ct().handleScale.axisPressedMouseMove.price){var i=this.vi.Dv().vt(),n=this.vi.Zv();this.yv=!1,i.Sl(n,this.Gt)}},t.prototype.zv=function(t){this.vi.Dv().ct().handleScale.axisDoubleClickReset&&this.Ou()},t.prototype.Pv=function(t){null!==this.Gt&&(!this.vi.Dv().vt().ct().handleScale.axisPressedMouseMove.price||this.Gt.cs()||this.Gt.vs()||this.h_(1))},t.prototype.Rv=function(t){this.h_(0)},t.prototype.Kv=function(){var t=this,i=[],n=null===this.Gt?void 0:this.Gt;return function(s){for(var h=0;h<s.length;++h)for(var r=s[h].Pi(t.vi.Zv(),n),e=0;e<r.length;e++)i.push(r[e])}(this.vi.Zv().Os()),i},t.prototype.Qv=function(t,i){var n=this;if(null!==this.pv){var s=this.pv.st,h=this.pv.ht;P(t,i,(function(){var i=n.vi.Zv().vt(),r=i.Rf(),e=i.Pf();r===e?R(t,0,0,s,h,r):I(t,0,0,s,h,r,e)}))}},t.prototype.yu=function(t,i){if(null!==this.pv&&null!==this.Gt&&this.Gt.ct().borderVisible){t.save(),t.fillStyle=this.N();var n,s=Math.max(1,Math.floor(this.Hv().At*i));n=this.Tv?Math.floor(this.pv.st*i)-s:0,t.fillRect(n,0,s,Math.ceil(this.pv.ht*i)),t.restore()}},t.prototype.t_=function(t,i){if(null!==this.pv&&null!==this.Gt){var n=this.Gt.Fn();t.save(),t.strokeStyle=this.N(),t.font=this.Uv(),t.fillStyle=this.N();var s=this.Hv(),h=this.Gt.ct().borderVisible&&this.Gt.ct().drawTicks,r=this.Tv?Math.floor((this.pv.st-s.Dt)*i-s.At*i):Math.floor(s.At*i),e=this.Tv?Math.round(r-s.Lt*i):Math.round(r+s.Dt*i+s.Lt*i),u=this.Tv?"right":"left",a=Math.max(1,Math.floor(i)),o=Math.floor(.5*i);if(h){var l=Math.round(s.Dt*i);t.beginPath();for(var f=0,c=n;f<c.length;f++){var v=c[f];t.rect(r,Math.round(v.An*i)-o,l,a)}t.fill()}t.fillStyle=this.qv();for(var _=0,d=n;_<d.length;_++){v=d[_];this.Cv.wv(t,v.Tn,e,Math.round(v.An*i),u)}t.restore()}},t.prototype.Gv=function(){if(null!==this.pv&&null!==this.Gt){var t=this.pv.ht/2,i=[],n=this.Gt.Os().slice(),s=this.vi.Zv(),h=this.Hv();this.Gt===s.xi()&&this.vi.Zv().Os().forEach((function(t){s.Uu(t)&&n.push(t)}));var r=this.Gt.Vs()[0],e=this.Gt;n.forEach((function(n){var h=n.Pi(s,e);h.forEach((function(t){t.Kt(null),t.$t()&&i.push(t)})),r===n&&h.length>0&&(t=h[0].zt())}));var u=i.filter((function(i){return i.zt()<=t})),a=i.filter((function(i){return i.zt()>t}));if(u.sort((function(t,i){return i.zt()-t.zt()})),u.length&&a.length&&a.push(u[0]),a.sort((function(t,i){return t.zt()-i.zt()})),i.forEach((function(t){return t.Kt(t.zt())})),this.Gt.ct().alignLabels){for(var o=1;o<u.length;o++){var l=u[o],f=(v=u[o-1]).Mt(h,!1);l.zt()>(_=v.Yt())-f&&l.Kt(_-f)}for(var c=1;c<a.length;c++){var v,_;l=a[c],f=(v=a[c-1]).Mt(h,!0);l.zt()<(_=v.Yt())+f&&l.Kt(_+f)}}}},t.prototype.i_=function(t,i){var n=this;if(null!==this.pv){t.save();var s=this.pv,h=this.Kv(),r=this.Hv(),e=this.Tv?"right":"left";h.forEach((function(h){if(h.Xt()){var u=h.P(f(n.Gt));t.save(),u.h(t,r,n.kv,s.st,e,i),t.restore()}})),t.restore()}},t.prototype.n_=function(t,i){var n=this;if(null!==this.pv&&null!==this.Gt){t.save();var s=this.pv,h=this.vi.Dv().vt(),r=[],e=this.vi.Zv(),u=h.bf().Pi(e,this.Gt);u.length&&r.push(u);var a=this.Hv(),o=this.Tv?"right":"left";r.forEach((function(h){h.forEach((function(h){t.save(),h.P(f(n.Gt)).h(t,a,n.kv,s.st,o,i),t.restore()}))})),t.restore()}},t.prototype.h_=function(t){this.Bv.style.cursor=1===t?"ns-resize":"default"},t.prototype.qn=function(){var t=this,i=this.Yv();if(this.Nv<i){var n=this.vi.Dv();null===this.gv&&(this.gv=setTimeout((function(){n&&n.vt().uf(),t.gv=null}),100))}this.Nv=i},t.prototype.Sv=function(t){this.Cv.en(),this.Cv=new Sn(t.Wt,t.et,t.le)},t}(),An=gn;function Tn(t,i,n,s,h){t.o&&t.o(i,n,s,h)}function Bn(t,i,n,s,h){t.h(i,n,s,h)}function Ln(t,i){return t.zi(i)}function Fn(t,i){return void 0!==t.Io?t.Io(i):[]}var En=function(){function t(t,i){var n=this;this.pv=new fn(0,0),this.r_=null,this.e_=null,this.u_=null,this.a_=!1,this.o_=new it,this.l_=0,this.f_=!1,this.c_=null,this.v_=!1,this.__=null,this.d_=null,this.xv=function(){return n.w_&&n.hi().Or()},this.Av=function(){return n.w_&&n.hi().Or()},this.M_=t,this.w_=i,this.w_.Vl().Ji(this.b_.bind(this),this,!0),this.m_=document.createElement("td"),this.m_.style.padding="0",this.m_.style.position="relative";var s=document.createElement("div");s.style.width="100%",s.style.height="100%",s.style.position="relative",s.style.overflow="hidden",this.p_=document.createElement("td"),this.p_.style.padding="0",this.g_=document.createElement("td"),this.g_.style.padding="0",this.m_.appendChild(s),this.Lv=dn(s,new fn(16,16)),this.Lv.subscribeCanvasConfigured(this.xv);var h=this.Lv.canvas;h.style.position="absolute",h.style.zIndex="1",h.style.left="0",h.style.top="0",this.Fv=dn(s,new fn(16,16)),this.Fv.subscribeCanvasConfigured(this.Av);var r=this.Fv.canvas;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.y_=document.createElement("tr"),this.y_.appendChild(this.p_),this.y_.appendChild(this.m_),this.y_.appendChild(this.g_),this.k_();var e=this.Dv().ct().handleScroll;this.Iv=new yn(this.Fv.canvas,this,{Oc:!e.vertTouchDrag,Wc:!e.horzTouchDrag})}return t.prototype.en=function(){null!==this.r_&&this.r_.en(),null!==this.e_&&this.e_.en(),this.Fv.unsubscribeCanvasConfigured(this.Av),this.Fv.destroy(),this.Lv.unsubscribeCanvasConfigured(this.xv),this.Lv.destroy(),null!==this.w_&&this.w_.Vl().sn(this),this.Iv.en()},t.prototype.Zv=function(){return f(this.w_)},t.prototype.C_=function(i){null!==this.w_&&this.w_.Vl().sn(this),this.w_=i,null!==this.w_&&this.w_.Vl().Ji(t.prototype.b_.bind(this),this,!0),this.k_()},t.prototype.Dv=function(){return this.M_},t.prototype.jv=function(){return this.y_},t.prototype.k_=function(){if(null!==this.w_&&(this.N_(),0!==this.hi().W().length)){if(null!==this.r_){var t=this.w_.kl();this.r_.fi(f(t))}if(null!==this.e_){var i=this.w_.Cl();this.e_.fi(f(i))}}},t.prototype.wl=function(){return null!==this.w_?this.w_.wl():0},t.prototype.Ml=function(t){this.w_&&this.w_.Ml(t)},t.prototype.Bc=function(t){if(this.w_){var i=t.uv,n=t.av;pn||this.x_(i,n)}},t.prototype.Yc=function(t){if(this.f_=!1,this.v_=null!==this.c_,this.w_){if(this.S_(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)f(document.activeElement).blur();else{var i=document.getSelection();null!==i&&i.removeAllRanges()}var n=this.hi();if(!this.w_.xi().ti()&&!n.j().ti()){if(null!==this.c_){var s=n.bf();this.__={x:s.bt(),y:s.gt()},this.c_={x:t.uv,y:t.av}}pn||this.x_(t.uv,t.av)}}},t.prototype.Lc=function(t){if(this.w_){var i=t.uv,n=t.av;if(this.D_()&&this.A_(),!pn){this.x_(i,n);var s=this.pa(i,n);this.hi().cf(s&&{vf:s.vf,T_:s.T_})}}},t.prototype.qc=function(t){if(null!==this.w_){var i=t.uv,n=t.av;if(this.o_.rn()){var s=this.hi().bf().I();this.o_.hn(s,{x:i,y:n})}this.B_()}},t.prototype.zc=function(t){if(null!==this.w_){var i=this.hi(),n=t.uv,s=t.av;if(null!==this.c_){this.v_=!1;var h=f(this.__),r=h.x+(n-this.c_.x),e=h.y+(s-this.c_.y);this.x_(r,e)}else this.D_()||this.x_(n,s);if(!i.j().ti()){var u=this.M_.ct(),a=u.handleScroll,o=u.kineticScroll;if(a.pressedMouseMove&&"touch"!==t.ke||(a.horzTouchDrag||a.vertTouchDrag)&&"mouse"!==t.ke){var l=this.w_.xi(),c=performance.now();null!==this.u_||this.L_()||(this.u_={x:t.sv,y:t.hv,Dh:c,uv:t.uv,av:t.av}),null!==this.d_&&this.d_.tc(t.uv,c),null===this.u_||this.a_||this.u_.x===t.sv&&this.u_.y===t.hv||(null===this.d_&&("touch"===t.ke&&o.touch||"mouse"===t.ke&&o.mouse)&&(this.d_=new bn(.2,7,.997,15),this.d_.tc(this.u_.uv,this.u_.Dh),this.d_.tc(t.uv,c)),l.ti()||i.Dl(this.w_,l,t.av),i.Nf(t.uv),this.a_=!0),this.a_&&(l.ti()||i.Al(this.w_,l,t.av),i.xf(t.uv))}}}},t.prototype.Ic=function(t){null!==this.w_&&(this.f_=!1,this.F_(t))},t.prototype.nv=function(t){if(this.f_=!0,null===this.c_&&An){var i={x:t.uv,y:t.av};this.E_(i,i)}},t.prototype.iv=function(t){null!==this.w_&&(this.w_.vt().cf(null),gn||this.A_())},t.prototype.V_=function(){return this.o_},t.prototype.Xc=function(){this.l_=1,this.S_()},t.prototype.Zc=function(t,i){if(this.M_.ct().handleScale.pinch){var n=5*(i-this.l_);this.l_=i,this.hi().kf(t.p,n)}},t.prototype.pa=function(t,i){var n=this.w_;if(null===n)return null;for(var s=0,h=n.Os();s<h.length;s++){var r=h[s],e=this.O_(r.zi(n),t,i);if(null!==e)return{vf:r,vv:e.vv,T_:e.T_}}return null},t.prototype.W_=function(t,i){f("left"===i?this.r_:this.e_).$v(new fn(t,this.pv.ht))},t.prototype.z_=function(){return this.pv},t.prototype.$v=function(t){if(t.st<0||t.ht<0)throw new Error("Try to set invalid size to PaneWidget "+JSON.stringify(t));this.pv.on(t)||(this.pv=t,this.Lv.resizeCanvas({width:t.st,height:t.ht}),this.Fv.resizeCanvas({width:t.st,height:t.ht}),this.m_.style.width=t.st+"px",this.m_.style.height=t.ht+"px")},t.prototype.P_=function(){var t=f(this.w_);t.yl(t.kl()),t.yl(t.Cl());for(var i=0,n=t.Vs();i<n.length;i++){var s=n[i];if(t.Uu(s)){var h=s.$();null!==h&&t.yl(h),s.Ii()}}},t.prototype.s_=function(){return this.Lv.canvas},t.prototype.Jv=function(t){if(0!==t&&null!==this.w_){if(t>1&&this.P_(),null!==this.r_&&this.r_.Jv(t),null!==this.e_&&this.e_.Jv(t),1!==t){var i=vn(this.Lv.canvas);i.save(),this.Qv(i,this.Lv.pixelRatio),this.w_&&(this.R_(i,this.Lv.pixelRatio),this.I_(i,this.Lv.pixelRatio),this.j_(i,this.Lv.pixelRatio,Ln)),i.restore()}var n=vn(this.Fv.canvas);n.clearRect(0,0,Math.ceil(this.pv.st*this.Fv.pixelRatio),Math.ceil(this.pv.ht*this.Fv.pixelRatio)),this.j_(n,this.Lv.pixelRatio,Fn),this.q_(n,this.Fv.pixelRatio)}},t.prototype.U_=function(){return this.r_},t.prototype.H_=function(){return this.e_},t.prototype.b_=function(){null!==this.w_&&this.w_.Vl().sn(this),this.w_=null},t.prototype.Qv=function(t,i){var n=this;P(t,i,(function(){var i=n.hi(),s=i.Rf(),h=i.Pf();s===h?R(t,0,0,n.pv.st,n.pv.ht,h):I(t,0,0,n.pv.st,n.pv.ht,s,h)}))},t.prototype.R_=function(t,i){var n=f(this.w_),s=n.Ol().sl().P(n.Mt(),n.wt());null!==s&&(t.save(),s.h(t,i,!1),t.restore())},t.prototype.I_=function(t,i){var n=this.hi().Mf();this.Y_(t,i,Ln,Tn,n),this.Y_(t,i,Ln,Bn,n)},t.prototype.q_=function(t,i){this.Y_(t,i,Ln,Bn,this.hi().bf())},t.prototype.j_=function(t,i,n){for(var s=f(this.w_).Os(),h=0,r=s;h<r.length;h++){var e=r[h];this.Y_(t,i,n,Tn,e)}for(var u=0,a=s;u<a.length;u++){e=a[u];this.Y_(t,i,n,Bn,e)}},t.prototype.Y_=function(t,i,n,s,h){for(var r=f(this.w_),e=n(h,r),u=r.Mt(),a=r.wt(),o=r.vt().ff(),l=null!==o&&o.vf===h,c=null!==o&&l&&void 0!==o.T_?o.T_.ga:void 0,v=0,_=e;v<_.length;v++){var d=_[v].P(u,a);null!==d&&(t.save(),s(d,t,i,l,c),t.restore())}},t.prototype.O_=function(t,i,n){for(var s=0,h=t;s<h.length;s++){var r=h[s],e=r.P(this.pv.ht,this.pv.st);if(null!==e&&e.pa){var u=e.pa(i,n);if(null!==u)return{vv:r,T_:u}}}return null},t.prototype.N_=function(){if(null!==this.w_){var t=this.M_,i=this.w_.kl().ct().visible,n=this.w_.Cl().ct().visible;i||null===this.r_||(this.p_.removeChild(this.r_.jv()),this.r_.en(),this.r_=null),n||null===this.e_||(this.g_.removeChild(this.e_.jv()),this.e_.en(),this.e_=null);var s=t.vt().Ff();i&&null===this.r_&&(this.r_=new Dn(this,t.ct().layout,s,"left"),this.p_.appendChild(this.r_.jv())),n&&null===this.e_&&(this.e_=new Dn(this,t.ct().layout,s,"right"),this.g_.appendChild(this.e_.jv()))}},t.prototype.D_=function(){return An&&null===this.c_},t.prototype.L_=function(){return An&&this.f_||null!==this.c_},t.prototype.K_=function(t){return Math.max(0,Math.min(t,this.pv.st-1))},t.prototype.X_=function(t){return Math.max(0,Math.min(t,this.pv.ht-1))},t.prototype.x_=function(t,i){this.hi().Tf(this.K_(t),this.X_(i),f(this.w_))},t.prototype.A_=function(){this.hi().Bf()},t.prototype.B_=function(){this.v_&&(this.c_=null,this.A_())},t.prototype.E_=function(t,i){this.c_=t,this.v_=!1,this.x_(i.x,i.y);var n=this.hi().bf();this.__={x:n.bt(),y:n.gt()}},t.prototype.hi=function(){return this.M_.vt()},t.prototype.Z_=function(){var t=this.hi(),i=this.Zv(),n=i.xi();t.Tl(i,n),t.Sf(),this.u_=null,this.a_=!1},t.prototype.F_=function(t){var i=this;if(this.a_){var n=performance.now();if(null!==this.d_&&this.d_.ia(t.uv,n),null===this.d_||this.d_.nc(n))this.Z_();else{var s=this.hi(),h=s.j(),r=this.d_,e=function(){if(!r.hc()){var t=performance.now(),n=r.nc(t);if(!r.hc()){var u=h.Pr();s.xf(r.ic(t)),u===h.Pr()&&(n=!0,i.d_=null)}n?i.Z_():requestAnimationFrame(e)}};requestAnimationFrame(e)}}},t.prototype.S_=function(){var t=performance.now(),i=null===this.d_||this.d_.nc(t);null!==this.d_&&(i||this.Z_()),null!==this.d_&&(this.d_.rc(),this.d_=null)},t}(),Vn=function(){function t(t,i,n,s,h){var r=this;this.L=!0,this.pv=new fn(0,0),this.xv=function(){return r.Jv(3)},this.Tv="left"===t,this.tf=n.Ff,this.ki=i,this.J_=s,this.G_=h,this.Bv=document.createElement("div"),this.Bv.style.width="25px",this.Bv.style.height="100%",this.Bv.style.overflow="hidden",this.Lv=dn(this.Bv,new fn(16,16)),this.Lv.subscribeCanvasConfigured(this.xv)}return t.prototype.en=function(){this.Lv.unsubscribeCanvasConfigured(this.xv),this.Lv.destroy()},t.prototype.jv=function(){return this.Bv},t.prototype.z_=function(){return this.pv},t.prototype.$v=function(t){if(t.st<0||t.ht<0)throw new Error("Try to set invalid size to PriceAxisStub "+JSON.stringify(t));this.pv.on(t)||(this.pv=t,this.Lv.resizeCanvas({width:t.st,height:t.ht}),this.Bv.style.width=t.st+"px",this.Bv.style.minWidth=t.st+"px",this.Bv.style.height=t.ht+"px",this.L=!0)},t.prototype.Jv=function(t){if((!(t<3)||this.L)&&0!==this.pv.st&&0!==this.pv.ht){this.L=!1;var i=vn(this.Lv.canvas);this.Qv(i,this.Lv.pixelRatio),this.yu(i,this.Lv.pixelRatio)}},t.prototype.s_=function(){return this.Lv.canvas},t.prototype.yu=function(t,i){if(this.J_()){var n=this.pv.st;t.save(),t.fillStyle=this.ki.timeScale.borderColor;var s=Math.floor(this.tf.ct().At*i),h=this.Tv?Math.round(n*i)-s:0;t.fillRect(h,0,s,s),t.restore()}},t.prototype.Qv=function(t,i){var n=this;P(t,i,(function(){R(t,0,0,n.pv.st,n.pv.ht,n.G_())}))},t}();function On(t,i){return t.Rh>i.Rh?t:i}var Wn=function(){function t(t){var i=this;this.Q_=null,this.td=null,this.oe=null,this.nd=!1,this.pv=new fn(0,0),this.sd=new it,this.kv=new pi(5),this.xv=function(){return i.M_.vt().Or()},this.Av=function(){return i.M_.vt().Or()},this.M_=t,this.ki=t.ct().layout,this.hd=document.createElement("tr"),this.rd=document.createElement("td"),this.rd.style.padding="0",this.ed=document.createElement("td"),this.ed.style.padding="0",this.Bv=document.createElement("td"),this.Bv.style.height="25px",this.Bv.style.padding="0",this.ud=document.createElement("div"),this.ud.style.width="100%",this.ud.style.height="100%",this.ud.style.position="relative",this.ud.style.overflow="hidden",this.Bv.appendChild(this.ud),this.Lv=dn(this.ud,new fn(16,16)),this.Lv.subscribeCanvasConfigured(this.xv);var n=this.Lv.canvas;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Fv=dn(this.ud,new fn(16,16)),this.Fv.subscribeCanvasConfigured(this.Av);var s=this.Fv.canvas;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.hd.appendChild(this.rd),this.hd.appendChild(this.Bv),this.hd.appendChild(this.ed),this.ad(),this.M_.vt().dl().Ji(this.ad.bind(this),this),this.Iv=new yn(this.Fv.canvas,this,{Oc:!0,Wc:!1})}return t.prototype.en=function(){this.Iv.en(),null!==this.Q_&&this.Q_.en(),null!==this.td&&this.td.en(),this.Fv.unsubscribeCanvasConfigured(this.Av),this.Fv.destroy(),this.Lv.unsubscribeCanvasConfigured(this.xv),this.Lv.destroy()},t.prototype.jv=function(){return this.hd},t.prototype.od=function(){return this.Q_},t.prototype.ld=function(){return this.td},t.prototype.Yc=function(t){if(!this.nd){this.nd=!0;var i=this.M_.vt();!i.j().ti()&&this.M_.ct().handleScale.axisPressedMouseMove.time&&i.yf(t.uv)}},t.prototype.Kc=function(){var t=this.M_.vt();!t.j().ti()&&this.nd&&(this.nd=!1,this.M_.ct().handleScale.axisPressedMouseMove.time&&t.Af())},t.prototype.zc=function(t){var i=this.M_.vt();!i.j().ti()&&this.M_.ct().handleScale.axisPressedMouseMove.time&&i.Df(t.uv)},t.prototype.Ic=function(t){this.nd=!1;var i=this.M_.vt();i.j().ti()&&!this.M_.ct().handleScale.axisPressedMouseMove.time||i.Af()},t.prototype.jc=function(){this.M_.ct().handleScale.axisDoubleClickReset&&this.M_.vt().Ne()},t.prototype.Bc=function(t){this.M_.vt().ct().handleScale.axisPressedMouseMove.time&&this.h_(1)},t.prototype.iv=function(t){this.h_(0)},t.prototype.z_=function(){return this.pv},t.prototype.fd=function(){return this.sd},t.prototype.vd=function(t,i,n){this.pv&&this.pv.on(t)||(this.pv=t,this.Lv.resizeCanvas({width:t.st,height:t.ht}),this.Fv.resizeCanvas({width:t.st,height:t.ht}),this.Bv.style.width=t.st+"px",this.Bv.style.height=t.ht+"px",this.sd.hn(t)),null!==this.Q_&&this.Q_.$v(new fn(i,t.ht)),null!==this.td&&this.td.$v(new fn(n,t.ht))},t.prototype._d=function(){var t=this.dd();return Math.ceil(t.At+t.Dt+t.Wt+t.Tt+t.Bt)},t.prototype.O=function(){this.M_.vt().j().Fn()},t.prototype.s_=function(){return this.Lv.canvas},t.prototype.Jv=function(t){if(0!==t){if(1!==t){var i=vn(this.Lv.canvas);this.Qv(i,this.Lv.pixelRatio),this.yu(i,this.Lv.pixelRatio),this.t_(i,this.Lv.pixelRatio),null!==this.Q_&&this.Q_.Jv(t),null!==this.td&&this.td.Jv(t)}var n=vn(this.Fv.canvas),s=this.Fv.pixelRatio;n.clearRect(0,0,Math.ceil(this.pv.st*s),Math.ceil(this.pv.ht*s)),this.wd([this.M_.vt().bf()],n,s)}},t.prototype.Qv=function(t,i){var n=this;P(t,i,(function(){R(t,0,0,n.pv.st,n.pv.ht,n.M_.vt().Pf())}))},t.prototype.yu=function(t,i){if(this.M_.ct().timeScale.borderVisible){t.save(),t.fillStyle=this.Md();var n=Math.max(1,Math.floor(this.dd().At*i));t.fillRect(0,0,Math.ceil(this.pv.st*i),n),t.restore()}},t.prototype.t_=function(t,i){var n=this,s=this.M_.vt().j().Fn();if(s&&0!==s.length){var h=s.reduce(On,s[0]).Rh;h>30&&h<50&&(h=30),t.save(),t.strokeStyle=this.Md();var r=this.dd(),e=r.At+r.Dt+r.Tt+r.Wt-r.Ot;t.textAlign="center",t.fillStyle=this.Md();var u=Math.floor(this.dd().At*i),a=Math.max(1,Math.floor(i)),o=Math.floor(.5*i);if(this.M_.vt().j().ct().borderVisible){t.beginPath();for(var l=Math.round(r.Dt*i),f=s.length;f--;){var c=Math.round(s[f].An*i);t.rect(c-o,u,a,l)}t.fill()}t.fillStyle=this.ve(),P(t,i,(function(){t.font=n.bd();for(var i=0,r=s;i<r.length;i++){if((l=r[i]).Rh<h){var u=l.Ir?n.md(t,l.An,l.Tn):l.An;t.fillText(l.Tn,u,e)}}t.font=n.pd();for(var a=0,o=s;a<o.length;a++){var l;if((l=o[a]).Rh>=h){u=l.Ir?n.md(t,l.An,l.Tn):l.An;t.fillText(l.Tn,u,e)}}}))}},t.prototype.md=function(t,i,n){var s=this.kv.Vt(t,n),h=s/2,r=Math.floor(i-h)+.5;return r<0?i+=Math.abs(0-r):r+s>this.pv.st&&(i-=Math.abs(this.pv.st-(r+s))),i},t.prototype.wd=function(t,i,n){for(var s=this.dd(),h=0,r=t;h<r.length;h++)for(var e=0,u=r[h].ci();e<u.length;e++){var a=u[e];i.save(),a.P().h(i,s,n),i.restore()}},t.prototype.Md=function(){return this.M_.ct().timeScale.borderColor},t.prototype.ve=function(){return this.ki.textColor},t.prototype.fe=function(){return this.ki.fontSize},t.prototype.bd=function(){return Ut(this.fe(),this.ki.fontFamily)},t.prototype.pd=function(){return Ut(this.fe(),this.ki.fontFamily,"bold")},t.prototype.dd=function(){null===this.oe&&(this.oe={At:1,Ot:NaN,Tt:NaN,Bt:NaN,si:NaN,Dt:3,Wt:NaN,Nt:"",ni:new pi});var t=this.oe,i=this.bd();if(t.Nt!==i){var n=this.fe();t.Wt=n,t.Nt=i,t.Tt=Math.ceil(n/2.5),t.Bt=t.Tt,t.si=Math.ceil(n/2),t.Ot=Math.round(this.fe()/5),t.ni.Ou()}return this.oe},t.prototype.h_=function(t){this.Bv.style.cursor=1===t?"ew-resize":"default"},t.prototype.ad=function(){var t=this.M_.vt(),i=t.ct();i.leftPriceScale.visible||null===this.Q_||(this.rd.removeChild(this.Q_.jv()),this.Q_.en(),this.Q_=null),i.rightPriceScale.visible||null===this.td||(this.ed.removeChild(this.td.jv()),this.td.en(),this.td=null);var n={Ff:this.M_.vt().Ff()},s=function(){return i.leftPriceScale.borderVisible&&t.j().ct().borderVisible},h=function(){return t.Pf()};i.leftPriceScale.visible&&null===this.Q_&&(this.Q_=new Vn("left",i,n,s,h),this.rd.appendChild(this.Q_.jv())),i.rightPriceScale.visible&&null===this.td&&(this.td=new Vn("right",i,n,s,h),this.ed.appendChild(this.td.jv()))},t}(),zn=function(){function t(t,i){var n;this.gd=[],this.yd=0,this.En=0,this.$h=0,this.kd=0,this.Cd=0,this.Nd=null,this.xd=!1,this.o_=new it,this.Jl=new it,this.ki=i,this.hd=document.createElement("div"),this.hd.classList.add("tv-lightweight-charts"),this.hd.style.overflow="hidden",this.hd.style.width="100%",this.hd.style.height="100%",(n=this.hd).style.userSelect="none",n.style.webkitUserSelect="none",n.style.msUserSelect="none",n.style.MozUserSelect="none",n.style.webkitTapHighlightColor="transparent",this.Sd=document.createElement("table"),this.Sd.setAttribute("cellspacing","0"),this.hd.appendChild(this.Sd),this.Dd=this.Ad.bind(this),this.hd.addEventListener("wheel",this.Dd,{passive:!1}),this.hi=new ln(this.Ql.bind(this),this.ki),this.vt().mf().Ji(this.Td.bind(this),this),this.Bd=new Wn(this),this.Sd.appendChild(this.Bd.jv());var s=this.ki.width,h=this.ki.height;if(0===s||0===h){var r=t.getBoundingClientRect();0===s&&(s=Math.floor(r.width),s-=s%2),0===h&&(h=Math.floor(r.height),h-=h%2)}this.Ld(s,h),this.Fd(),t.appendChild(this.hd),this.Ed(),this.hi.j().Jr().Ji(this.hi.uf.bind(this.hi),this),this.hi.dl().Ji(this.hi.uf.bind(this.hi),this)}return t.prototype.vt=function(){return this.hi},t.prototype.ct=function(){return this.ki},t.prototype.Vd=function(){return this.gd},t.prototype.Od=function(){return this.Bd},t.prototype.en=function(){this.hd.removeEventListener("wheel",this.Dd),0!==this.yd&&window.cancelAnimationFrame(this.yd),this.hi.mf().sn(this),this.hi.j().Jr().sn(this),this.hi.dl().sn(this),this.hi.en();for(var t=0,i=this.gd;t<i.length;t++){var n=i[t];this.Sd.removeChild(n.jv()),n.V_().sn(this),n.en()}this.gd=[],f(this.Bd).en(),null!==this.hd.parentElement&&this.hd.parentElement.removeChild(this.hd),this.Jl.en(),this.o_.en()},t.prototype.Ld=function(t,i,n){if(void 0===n&&(n=!1),this.En!==i||this.$h!==t){this.En=i,this.$h=t;var s=i+"px",h=t+"px";f(this.hd).style.height=s,f(this.hd).style.width=h,this.Sd.style.height=s,this.Sd.style.width=h,n?this.Wd(new Kt(3)):this.hi.uf()}},t.prototype.Jv=function(t){void 0===t&&(t=new Kt(3));for(var i=0;i<this.gd.length;i++)this.gd[i].Jv(t.ge(i).me);this.ki.timeScale.visible&&this.Bd.Jv(t.pe())},t.prototype.rs=function(t){this.hi.rs(t),this.Ed();var i=t.width||this.$h,n=t.height||this.En;this.Ld(i,n)},t.prototype.V_=function(){return this.o_},t.prototype.mf=function(){return this.Jl},t.prototype.zd=function(){var t=this;null!==this.Nd&&(this.Wd(this.Nd),this.Nd=null);var i=this.gd[0],n=_n(document,new fn(this.$h,this.En)),s=vn(n),h=cn(n);return P(s,h,(function(){var n=0,h=0,r=function(i){for(var r=0;r<t.gd.length;r++){var e=t.gd[r],u=e.z_().ht,a=f("left"===i?e.U_():e.H_()),o=a.s_();s.drawImage(o,n,h,a.Xv(),u),h+=u}};t.Pd()&&(r("left"),n=f(i.U_()).Xv()),h=0;for(var e=0;e<t.gd.length;e++){var u=t.gd[e],a=u.z_(),o=u.s_();s.drawImage(o,n,h,a.st,a.ht),h+=a.ht}n+=i.z_().st,t.Rd()&&(h=0,r("right"));var l=function(i){var r=f("left"===i?t.Bd.od():t.Bd.ld()),e=r.z_(),u=r.s_();s.drawImage(u,n,h,e.st,e.ht)};if(t.ki.timeScale.visible){n=0,t.Pd()&&(l("left"),n=f(i.U_()).Xv());var c=t.Bd.z_();o=t.Bd.s_();s.drawImage(o,n,h,c.st,c.ht),t.Rd()&&(n+=i.z_().st,l("right"),s.restore())}})),n},t.prototype.Id=function(t){return"none"===t?0:("left"!==t||this.Pd())&&("right"!==t||this.Rd())?0===this.gd.length?0:f("left"===t?this.gd[0].U_():this.gd[0].H_()).Xv():0},t.prototype.jd=function(){for(var t=0,i=0,n=0,s=0,h=this.gd;s<h.length;s++){var r=h[s];this.Pd()&&(i=Math.max(i,f(r.U_()).Yv())),this.Rd()&&(n=Math.max(n,f(r.H_()).Yv())),t+=r.wl()}var e=this.$h,u=this.En,a=Math.max(e-i-n,0),o=this.ki.timeScale.visible,l=o?this.Bd._d():0;l%2&&(l+=1);for(var c=0+l,v=u<c?0:u-c,_=v/t,d=0,w=0;w<this.gd.length;++w){(r=this.gd[w]).C_(this.hi.wf()[w]);var M,b=0;b=w===this.gd.length-1?v-d:Math.round(r.wl()*_),d+=M=Math.max(b,2),r.$v(new fn(a,M)),this.Pd()&&r.W_(i,"left"),this.Rd()&&r.W_(n,"right"),r.Zv()&&this.hi.pf(r.Zv(),M)}this.Bd.vd(new fn(o?a:0,l),o?i:0,o?n:0),this.hi.Dr(a),this.kd!==i&&(this.kd=i),this.Cd!==n&&(this.Cd=n)},t.prototype.Ad=function(t){var i=t.deltaX/100,n=-t.deltaY/100;if(0!==i&&this.ki.handleScroll.mouseWheel||0!==n&&this.ki.handleScale.mouseWheel){switch(t.cancelable&&t.preventDefault(),t.deltaMode){case t.DOM_DELTA_PAGE:i*=120,n*=120;break;case t.DOM_DELTA_LINE:i*=32,n*=32}if(0!==n&&this.ki.handleScale.mouseWheel){var s=Math.sign(n)*Math.min(1,Math.abs(n)),h=t.clientX-this.hd.getBoundingClientRect().left;this.vt().kf(h,s)}0!==i&&this.ki.handleScroll.mouseWheel&&this.vt().Cf(-80*i)}},t.prototype.Wd=function(t){var i=t.pe();if(3===i&&this.qd(),3===i||2===i){for(var n=this.hi.wf(),s=0;s<n.length;s++)t.ge(s)._s&&n[s].Fl();for(var h=t.xe(),r=0,e=h;r<e.length;r++){var u=e[r];this.Se(u)}h.length>0&&(this.hi.Vr(),this.hi.Eo(),this.hi.Or()),this.Bd.O()}this.Jv(t)},t.prototype.Se=function(t){var i=this.hi.j();switch(t.ke){case 0:i.Qr();break;case 1:i.te(t.X);break;case 2:i.wr(t.X);break;case 3:i.Mr(t.X);break;case 4:i.jr()}},t.prototype.Ql=function(t){var i=this;null!==this.Nd?this.Nd._n(t):this.Nd=t,this.xd||(this.xd=!0,this.yd=window.requestAnimationFrame((function(){i.xd=!1,i.yd=0,null!==i.Nd&&(i.Wd(i.Nd),i.Nd=null)})))},t.prototype.qd=function(){this.Fd()},t.prototype.Fd=function(){for(var t=this.hi.wf(),i=t.length,n=this.gd.length,s=i;s<n;s++){var h=l(this.gd.pop());this.Sd.removeChild(h.jv()),h.V_().sn(this),h.en()}for(s=n;s<i;s++){(h=new En(this,t[s])).V_().Ji(this.Ud.bind(this),this),this.gd.push(h),this.Sd.insertBefore(h.jv(),this.Bd.jv())}for(s=0;s<i;s++){var r=t[s];(h=this.gd[s]).Zv()!==r?h.C_(r):h.k_()}this.Ed(),this.jd()},t.prototype.Hd=function(t,i){var n,s=new Map;null!==t&&this.hi.W().forEach((function(i){var n=i.Fa(t);null!==n&&s.set(i,n)}));if(null!==t){var h=this.hi.j().ri(t);null!==h&&(n=h)}var r=this.vt().ff(),e=null!==r&&r.vf instanceof tn?r.vf:void 0,u=null!==r&&void 0!==r.T_?r.T_.ka:void 0;return{S:n,Yd:i||void 0,Kd:e,$d:s,Xd:u}},t.prototype.Ud=function(t,i){var n=this;this.o_.hn((function(){return n.Hd(t,i)}))},t.prototype.Td=function(t,i){var n=this;this.Jl.hn((function(){return n.Hd(t,i)}))},t.prototype.Ed=function(){var t=this.ki.timeScale.visible?"":"none";this.Bd.jv().style.display=t},t.prototype.Pd=function(){return this.gd[0].Zv().kl().ct().visible},t.prototype.Rd=function(){return this.gd[0].Zv().Cl().ct().visible},t}();function Pn(t,i,n){var s=n.value,h={Ph:i,S:t,X:[s,s,s,s]};return"color"in n&&void 0!==n.color&&(h.et=n.color),h}function Rn(t,i,n){return{Ph:i,S:t,X:[n.open,n.high,n.low,n.close]}}function In(t){return void 0!==t.X}function jn(t){return function(i,n,s){return void 0===(h=s).open&&void 0===h.value?{S:i,Ph:n}:t(i,n,s);var h}}var qn={Candlestick:jn(Rn),Bar:jn(Rn),Area:jn(Pn),Baseline:jn(Pn),Histogram:jn(Pn),Line:jn(Pn)};function Un(t){return qn[t]}function Hn(t){return 60*t*60*1e3}function Yn(t){return 60*t*1e3}var Kn,$n=[{Zd:(Kn=1,1e3*Kn),Rh:10},{Zd:Yn(1),Rh:20},{Zd:Yn(5),Rh:21},{Zd:Yn(30),Rh:22},{Zd:Hn(1),Rh:30},{Zd:Hn(3),Rh:31},{Zd:Hn(6),Rh:32},{Zd:Hn(12),Rh:33}];function Xn(t,i){if(t.getUTCFullYear()!==i.getUTCFullYear())return 70;if(t.getUTCMonth()!==i.getUTCMonth())return 60;if(t.getUTCDate()!==i.getUTCDate())return 50;for(var n=$n.length-1;n>=0;--n)if(Math.floor(i.getTime()/$n[n].Zd)!==Math.floor(t.getTime()/$n[n].Zd))return $n[n].Rh;return 0}function Zn(t,i){if(void 0===i&&(i=0),0!==t.length){for(var n=0===i?null:t[i-1].S.Dh,s=null!==n?new Date(1e3*n):null,h=0,r=i;r<t.length;++r){var e=t[r],u=new Date(1e3*e.S.Dh);null!==s&&(e.zh=Xn(u,s)),h+=e.S.Dh-(n||e.S.Dh),n=e.S.Dh,s=u}if(0===i&&t.length>1){var a=Math.ceil(h/(t.length-1)),o=new Date(1e3*(t[0].S.Dh-a));t[0].zh=Xn(new Date(1e3*t[0].S.Dh),o)}}}function Jn(t){if(!It(t))throw new Error("time must be of type BusinessDay");var i=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0,0));return{Dh:Math.round(i.getTime()/1e3),Sh:t}}function Gn(t){if(!jt(t))throw new Error("time must be of type isUTCTimestamp");return{Dh:t}}function Qn(t){return 0===t.length?null:It(t[0].time)?Jn:Gn}function ts(t){return jt(t)?Gn(t):It(t)?Jn(t):Jn(is(t))}function is(t){var i=new Date(t);if(isNaN(i.getTime()))throw new Error("Invalid date string="+t+", expected format=yyyy-mm-dd");return{day:i.getUTCDate(),month:i.getUTCMonth()+1,year:i.getUTCFullYear()}}function ns(t){w(t.time)&&(t.time=is(t.time))}function ss(t){return{Ph:0,Jd:new Map,Rs:t}}var hs=function(){function t(){this.Gd=new Map,this.Qd=new Map,this.tw=new Map,this.iw=[]}return t.prototype.en=function(){this.Gd.clear(),this.Qd.clear(),this.tw.clear(),this.iw=[]},t.prototype.nw=function(t,i){var n=this,s=0!==this.Gd.size,h=!1;if(this.Qd.has(t))if(1===this.Qd.size)s=!1,h=!0,this.Gd.clear();else for(var r=0,e=this.iw;r<e.length;r++){e[r].pointData.Jd.delete(t)&&(h=!0)}var u=[];if(0!==i.length){!function(t){t.forEach(ns)}(i);var a=f(Qn(i)),o=Un(t.Ya());u=i.map((function(i){var s=a(i.time),r=n.Gd.get(s.Dh);void 0===r&&(r=ss(s),n.Gd.set(s.Dh,r),h=!0);var e=o(s,r.Ph,i);return r.Jd.set(t,e),e}))}s&&this.sw(),this.hw(t,u);var l=-1;if(h){var c=[];this.Gd.forEach((function(t){c.push({zh:0,S:t.Rs,pointData:t})})),c.sort((function(t,i){return t.S.Dh-i.S.Dh})),l=this.rw(c)}return this.ew(t,l)},t.prototype.Of=function(t){return this.nw(t,[])},t.prototype.uw=function(t,i){ns(i);var n=f(Qn([i]))(i.time),s=this.tw.get(t);if(void 0!==s&&n.Dh<s.Dh)throw new Error("Cannot update oldest data, last time="+s.Dh+", new time="+n.Dh);var h=this.Gd.get(n.Dh),r=void 0===h;void 0===h&&(h=ss(n),this.Gd.set(n.Dh,h));var e=Un(t.Ya())(n,h.Ph,i);if(h.Jd.set(t,e),this.aw(t,e),!r)return this.ew(t,-1);var u={zh:0,S:h.Rs,pointData:h},a=Bt(this.iw,u.S.Dh,(function(t,i){return t.S.Dh<i}));this.iw.splice(a,0,u);for(var o=a;o<this.iw.length;++o)rs(this.iw[o].pointData,o);return Zn(this.iw,a),this.ew(t,a)},t.prototype.aw=function(t,i){var n=this.Qd.get(t);void 0===n&&(n=[],this.Qd.set(t,n));var s=0!==n.length?n[n.length-1]:null;null===s||i.S.Dh>s.S.Dh?In(i)&&n.push(i):In(i)?n[n.length-1]=i:n.splice(-1,1),this.tw.set(t,i.S)},t.prototype.hw=function(t,i){0!==i.length?(this.Qd.set(t,i.filter(In)),this.tw.set(t,i[i.length-1].S)):(this.Qd.delete(t),this.tw.delete(t))},t.prototype.sw=function(){for(var t=0,i=this.iw;t<i.length;t++){var n=i[t];0===n.pointData.Jd.size&&this.Gd.delete(n.S.Dh)}},t.prototype.rw=function(t){for(var i=-1,n=0;n<this.iw.length&&n<t.length;++n){var s=this.iw[n],h=t[n];if(s.S.Dh!==h.S.Dh){i=n;break}h.zh=s.zh,rs(h.pointData,n)}if(-1===i&&this.iw.length!==t.length&&(i=Math.min(this.iw.length,t.length)),-1===i)return-1;for(n=i;n<t.length;++n)rs(t[n].pointData,n);return Zn(t,i),this.iw=t,i},t.prototype.ow=function(){if(0===this.Qd.size)return null;var t=0;return this.Qd.forEach((function(i){0!==i.length&&(t=Math.max(t,i[i.length-1].Ph))})),t},t.prototype.ew=function(t,i){var n={lw:new Map,j:{Br:this.ow()}};if(-1!==i)this.Qd.forEach((function(t,i){n.lw.set(i,{Zu:t})})),this.Qd.has(t)||n.lw.set(t,{Zu:[]}),n.j.fw=this.iw,n.j.cw=i;else{var s=this.Qd.get(t);n.lw.set(t,{Zu:s||[]})}return n},t}();function rs(t,i){t.Ph=i,t.Jd.forEach((function(t){t.Ph=i}))}var es={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,axisLabelVisible:!0,title:""},us=function(){function t(t){this.Ia=t}return t.prototype.applyOptions=function(t){this.Ia.rs(t)},t.prototype.options=function(){return this.Ia.ct()},t.prototype._w=function(){return this.Ia},t}();function as(t){var i=t.overlay,n=function(t,i){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var h=0;for(s=Object.getOwnPropertySymbols(t);h<s.length;h++)i.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(t,s[h])&&(n[s[h]]=t[s[h]])}return n}(t,["overlay"]);return i&&(n.priceScaleId=""),n}var os=function(){function t(t,i,n){this.qe=t,this.dw=i,this.ww=n}return t.prototype.priceFormatter=function(){return this.qe.$s()},t.prototype.priceToCoordinate=function(t){var i=this.qe.H();return null===i?null:this.qe.$().K(t,i.X)},t.prototype.coordinateToPrice=function(t){var i=this.qe.H();return null===i?null:this.qe.$().Si(t,i.X)},t.prototype.barsInLogicalRange=function(t){if(null===t)return null;var i=new zt(new Et(t.from,t.to)).Hh(),n=this.qe.Hi();if(n.ti())return null;var s=n.oo(i.hh(),1),h=n.oo(i.rh(),-1),r=f(n.eo()),e=f(n.Ui());if(null!==s&&null!==h&&s.Ph>h.Ph)return{barsBefore:t.from-r,barsAfter:e-t.to};var u={barsBefore:null===s||s.Ph===r?t.from-r:s.Ph-r,barsAfter:null===h||h.Ph===e?e-t.to:e-h.Ph};return null!==s&&null!==h&&(u.from=s.S.Sh||s.S.Dh,u.to=h.S.Sh||h.S.Dh),u},t.prototype.setData=function(t){this.qe.Ya(),this.dw.Mw(this.qe,t)},t.prototype.update=function(t){this.qe.Ya(),this.dw.bw(this.qe,t)},t.prototype.setMarkers=function(t){var i=t.map((function(t){return u(u({},t),{time:ts(t.time)})}));this.qe.Wo(i)},t.prototype.applyOptions=function(t){var i=as(t);this.qe.rs(i)},t.prototype.options=function(){return b(this.qe.ct())},t.prototype.priceScale=function(){return this.ww.priceScale(this.qe.$().hs())},t.prototype.createPriceLine=function(t){var i=v(b(es),t),n=this.qe.zo(i);return new us(n)},t.prototype.removePriceLine=function(t){this.qe.Po(t._w())},t.prototype.seriesType=function(){return this.qe.Ya()},t}(),ls=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.applyOptions=function(i){Ct(i),t.prototype.applyOptions.call(this,i)},i}(os),fs={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,drawTicks:!0,scaleMargins:{bottom:.1,top:.2}},cs={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:qt,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"},vs={width:0,height:0,layout:{background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:11,fontFamily:qt},crosshair:{vertLine:{color:"#758696",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#4c525e"},horzLine:{color:"#758696",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#4c525e"},mode:1},grid:{vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},overlayPriceScales:u({},fs),leftPriceScale:u(u({},fs),{visible:!1}),rightPriceScale:u(u({},fs),{visible:!0}),timeScale:{rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0},watermark:cs,localization:{locale:mn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:!0,mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0}},_s={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},ds={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},ws={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBackgroundColor:"",lastPriceAnimation:0},Ms={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBackgroundColor:"",lastPriceAnimation:0},bs={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBackgroundColor:"",lastPriceAnimation:0},ms={color:"#26a69a",base:0},ps={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}},gs=function(){function t(t,i){this.mw=t,this.pw=i}return t.prototype.applyOptions=function(t){this.mw.vt()._f(this.pw,t)},t.prototype.options=function(){return this.Gt().ct()},t.prototype.width=function(){return Yt(this.pw)?this.mw.Id("left"===this.pw?"left":"right"):0},t.prototype.Gt=function(){return f(this.mw.vt().df(this.pw)).$},t}(),ys=function(){function t(t,i){this.gw=new it,this.nr=new it,this.sd=new it,this.hi=t,this.ul=t.j(),this.Bd=i,this.ul.Xr().Ji(this.yw.bind(this)),this.ul.Zr().Ji(this.kw.bind(this)),this.Bd.fd().Ji(this.Cw.bind(this))}return t.prototype.en=function(){this.ul.Xr().sn(this),this.ul.Zr().sn(this),this.Bd.fd().sn(this),this.gw.en(),this.nr.en(),this.sd.en()},t.prototype.scrollPosition=function(){return this.ul.Pr()},t.prototype.scrollToPosition=function(t,i){i?this.ul.$r(t,1e3):this.hi.Mr(t)},t.prototype.scrollToRealTime=function(){this.ul.Kr()},t.prototype.getVisibleRange=function(){var t,i,n=this.ul.yr();return null===n?null:{from:null!==(t=n.from.Sh)&&void 0!==t?t:n.from.Dh,to:null!==(i=n.to.Sh)&&void 0!==i?i:n.to.Dh}},t.prototype.setVisibleRange=function(t){var i={from:ts(t.from),to:ts(t.to)},n=this.ul.Sr(i);this.hi.Wf(n)},t.prototype.getVisibleLogicalRange=function(){var t=this.ul.gr();return null===t?null:{from:t.hh(),to:t.rh()}},t.prototype.setVisibleLogicalRange=function(t){o(t.from<=t.to,"The from index cannot be after the to index."),this.hi.Wf(t)},t.prototype.resetTimeScale=function(){this.hi.Ne()},t.prototype.fitContent=function(){this.hi.Qr()},t.prototype.logicalToCoordinate=function(t){var i=this.hi.j();return i.ti()?null:i.G(t)},t.prototype.coordinateToLogical=function(t){return this.ul.ti()?null:this.ul.Fr(t)},t.prototype.timeToCoordinate=function(t){var i=ts(t),n=this.ul.br(i,!1);return null===n?null:this.ul.G(n)},t.prototype.coordinateToTime=function(t){var i,n=this.hi.j(),s=n.Fr(t),h=n.ri(s);return null===h?null:null!==(i=h.Sh)&&void 0!==i?i:h.Dh},t.prototype.width=function(){return this.Bd.z_().st},t.prototype.height=function(){return this.Bd.z_().ht},t.prototype.subscribeVisibleTimeRangeChange=function(t){this.gw.Ji(t)},t.prototype.unsubscribeVisibleTimeRangeChange=function(t){this.gw.nn(t)},t.prototype.subscribeVisibleLogicalRangeChange=function(t){this.nr.Ji(t)},t.prototype.unsubscribeVisibleLogicalRangeChange=function(t){this.nr.nn(t)},t.prototype.subscribeSizeChange=function(t){this.sd.Ji(t)},t.prototype.unsubscribeSizeChange=function(t){this.sd.nn(t)},t.prototype.applyOptions=function(t){this.ul.rs(t)},t.prototype.options=function(){return b(this.ul.ct())},t.prototype.yw=function(){this.gw.rn()&&this.gw.hn(this.getVisibleRange())},t.prototype.kw=function(){this.nr.rn()&&this.nr.hn(this.getVisibleLogicalRange())},t.prototype.Cw=function(t){this.sd.hn(t.st,t.ht)},t}();function ks(t){if(void 0!==t&&"custom"!==t.type){var i=t;void 0!==i.minMove&&void 0===i.precision&&(i.precision=function(t){if(t>=1)return 0;for(var i=0;i<8;i++){var n=Math.round(t);if(Math.abs(n-t)<1e-8)return i;t*=10}return i}(i.minMove))}}function Cs(t){return function(t){if(M(t.handleScale)){var i=t.handleScale;t.handleScale={axisDoubleClickReset:i,axisPressedMouseMove:{time:i,price:i},mouseWheel:i,pinch:i}}else if(void 0!==t.handleScale&&M(t.handleScale.axisPressedMouseMove)){var n=t.handleScale.axisPressedMouseMove;t.handleScale.axisPressedMouseMove={time:n,price:n}}var s=t.handleScroll;M(s)&&(t.handleScroll={horzTouchDrag:s,vertTouchDrag:s,mouseWheel:s,pressedMouseMove:s})}(t),function(t){if(t.priceScale){t.leftPriceScale=t.leftPriceScale||{},t.rightPriceScale=t.rightPriceScale||{};var i=t.priceScale.position;delete t.priceScale.position,t.leftPriceScale=v(t.leftPriceScale,t.priceScale),t.rightPriceScale=v(t.rightPriceScale,t.priceScale),"left"===i&&(t.leftPriceScale.visible=!0,t.rightPriceScale.visible=!1),"right"===i&&(t.leftPriceScale.visible=!1,t.rightPriceScale.visible=!0),"none"===i&&(t.leftPriceScale.visible=!1,t.rightPriceScale.visible=!1),t.overlayPriceScales=t.overlayPriceScales||{},void 0!==t.priceScale.invertScale&&(t.overlayPriceScales.invertScale=t.priceScale.invertScale),void 0!==t.priceScale.scaleMargins&&(t.overlayPriceScales.scaleMargins=t.priceScale.scaleMargins)}}(t),function(t){t.layout&&t.layout.backgroundColor&&!t.layout.background&&(t.layout.background={type:"solid",color:t.layout.backgroundColor})}(t),t}var Ns=function(){function t(t,i){var n=this;this.Nw=new hs,this.xw=new Map,this.Sw=new Map,this.Dw=new it,this.Aw=new it;var s=void 0===i?b(vs):v(b(vs),Cs(i));this.mw=new zn(t,s),this.mw.V_().Ji((function(t){n.Dw.rn()&&n.Dw.hn(n.Tw(t()))}),this),this.mw.mf().Ji((function(t){n.Aw.rn()&&n.Aw.hn(n.Tw(t()))}),this);var h=this.mw.vt();this.Bw=new ys(h,this.mw.Od())}return t.prototype.remove=function(){this.mw.V_().sn(this),this.mw.mf().sn(this),this.Bw.en(),this.mw.en(),this.xw.clear(),this.Sw.clear(),this.Dw.en(),this.Aw.en(),this.Nw.en()},t.prototype.resize=function(t,i,n){this.mw.Ld(t,i,n)},t.prototype.addAreaSeries=function(t){void 0===t&&(t={}),ks((t=as(t)).priceFormat);var i=v(b(ps),Ms,t),n=this.mw.vt().Ef("Area",i),s=new os(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.addBaselineSeries=function(t){void 0===t&&(t={}),ks((t=as(t)).priceFormat);var i=v(b(ps),bs,t),n=this.mw.vt().Ef("Baseline",i),s=new os(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.addBarSeries=function(t){void 0===t&&(t={}),ks((t=as(t)).priceFormat);var i=v(b(ps),ds,t),n=this.mw.vt().Ef("Bar",i),s=new os(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.addCandlestickSeries=function(t){void 0===t&&(t={}),Ct(t=as(t)),ks(t.priceFormat);var i=v(b(ps),_s,t),n=this.mw.vt().Ef("Candlestick",i),s=new ls(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.addHistogramSeries=function(t){void 0===t&&(t={}),ks((t=as(t)).priceFormat);var i=v(b(ps),ms,t),n=this.mw.vt().Ef("Histogram",i),s=new os(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.addLineSeries=function(t){void 0===t&&(t={}),ks((t=as(t)).priceFormat);var i=v(b(ps),ws,t),n=this.mw.vt().Ef("Line",i),s=new os(n,this,this);return this.xw.set(s,n),this.Sw.set(n,s),s},t.prototype.removeSeries=function(t){var i=l(this.xw.get(t)),n=this.Nw.Of(i);this.mw.vt().Of(i),this.Lw(n),this.xw.delete(t),this.Sw.delete(i)},t.prototype.Mw=function(t,i){this.Lw(this.Nw.nw(t,i))},t.prototype.bw=function(t,i){this.Lw(this.Nw.uw(t,i))},t.prototype.subscribeClick=function(t){this.Dw.Ji(t)},t.prototype.unsubscribeClick=function(t){this.Dw.nn(t)},t.prototype.subscribeCrosshairMove=function(t){this.Aw.Ji(t)},t.prototype.unsubscribeCrosshairMove=function(t){this.Aw.nn(t)},t.prototype.priceScale=function(t){return void 0===t&&(t=this.mw.vt().zf()),new gs(this.mw,t)},t.prototype.timeScale=function(){return this.Bw},t.prototype.applyOptions=function(t){this.mw.rs(Cs(t))},t.prototype.options=function(){return this.mw.ct()},t.prototype.takeScreenshot=function(){return this.mw.zd()},t.prototype.Lw=function(t){var i=this.mw.vt();i.Lf(t.j.Br,t.j.fw,t.j.cw),t.lw.forEach((function(t,i){return i._(t.Zu)})),i.Vr()},t.prototype.Fw=function(t){return l(this.Sw.get(t))},t.prototype.Tw=function(t){var i=this,n=new Map;t.$d.forEach((function(t,s){n.set(i.Fw(s),t)}));var s=void 0===t.Kd?void 0:this.Fw(t.Kd);return{time:t.S&&(t.S.Sh||t.S.Dh),point:t.Yd,hoveredSeries:s,hoveredMarkerId:t.Xd,seriesPrices:n}},t}();function xs(t,i){var n;if(w(t)){var s=document.getElementById(t);o(null!==s,"Cannot find element in DOM with id="+t),n=s}else n=t;return new Ns(n,i)}function Ss(){return"3.7.0"}


/***/ }),

/***/ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$DEVCOMP": () => (/* binding */ $DEVCOMP),
/* harmony export */   "$PROXY": () => (/* binding */ $PROXY),
/* harmony export */   "DEV": () => (/* binding */ DEV),
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary),
/* harmony export */   "For": () => (/* binding */ For),
/* harmony export */   "Index": () => (/* binding */ Index),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Show": () => (/* binding */ Show),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "SuspenseList": () => (/* binding */ SuspenseList),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "batch": () => (/* binding */ batch),
/* harmony export */   "cancelCallback": () => (/* binding */ cancelCallback),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createComputed": () => (/* binding */ createComputed),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createDeferred": () => (/* binding */ createDeferred),
/* harmony export */   "createEffect": () => (/* binding */ createEffect),
/* harmony export */   "createMemo": () => (/* binding */ createMemo),
/* harmony export */   "createReaction": () => (/* binding */ createReaction),
/* harmony export */   "createRenderEffect": () => (/* binding */ createRenderEffect),
/* harmony export */   "createResource": () => (/* binding */ createResource),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSignal": () => (/* binding */ createSignal),
/* harmony export */   "createUniqueId": () => (/* binding */ createUniqueId),
/* harmony export */   "enableExternalSource": () => (/* binding */ enableExternalSource),
/* harmony export */   "enableHydration": () => (/* binding */ enableHydration),
/* harmony export */   "enableScheduling": () => (/* binding */ enableScheduling),
/* harmony export */   "equalFn": () => (/* binding */ equalFn),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "getListener": () => (/* binding */ getListener),
/* harmony export */   "getOwner": () => (/* binding */ getOwner),
/* harmony export */   "indexArray": () => (/* binding */ indexArray),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "mapArray": () => (/* binding */ mapArray),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "onCleanup": () => (/* binding */ onCleanup),
/* harmony export */   "onError": () => (/* binding */ onError),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "refetchResources": () => (/* binding */ refetchResources),
/* harmony export */   "requestCallback": () => (/* binding */ requestCallback),
/* harmony export */   "runWithOwner": () => (/* binding */ runWithOwner),
/* harmony export */   "sharedConfig": () => (/* binding */ sharedConfig),
/* harmony export */   "splitProps": () => (/* binding */ splitProps),
/* harmony export */   "startTransition": () => (/* binding */ startTransition),
/* harmony export */   "untrack": () => (/* binding */ untrack),
/* harmony export */   "useContext": () => (/* binding */ useContext),
/* harmony export */   "useTransition": () => (/* binding */ useTransition)
/* harmony export */ });
let taskIdCounter = 1,
    isCallbackScheduled = false,
    isPerformingWork = false,
    taskQueue = [],
    currentTask = null,
    shouldYieldToHost = null,
    yieldInterval = 5,
    deadline = 0,
    maxYieldInterval = 300,
    scheduleCallback = null,
    scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
  const channel = new MessageChannel(),
        port = channel.port2;
  scheduleCallback = () => port.postMessage(null);
  channel.port1.onmessage = () => {
    if (scheduledCallback !== null) {
      const currentTime = performance.now();
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;
      try {
        const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
        if (!hasMoreWork) {
          scheduledCallback = null;
        } else port.postMessage(null);
      } catch (error) {
        port.postMessage(null);
        throw error;
      }
    }
  };
  if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    const scheduling = navigator.scheduling;
    shouldYieldToHost = () => {
      const currentTime = performance.now();
      if (currentTime >= deadline) {
        if (scheduling.isInputPending()) {
          return true;
        }
        return currentTime >= maxYieldInterval;
      } else {
        return false;
      }
    };
  } else {
    shouldYieldToHost = () => performance.now() >= deadline;
  }
}
function enqueue(taskQueue, task) {
  function findIndex() {
    let m = 0;
    let n = taskQueue.length - 1;
    while (m <= n) {
      const k = n + m >> 1;
      const cmp = task.expirationTime - taskQueue[k].expirationTime;
      if (cmp > 0) m = k + 1;else if (cmp < 0) n = k - 1;else return k;
    }
    return m;
  }
  taskQueue.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
  if (!scheduleCallback) setupScheduler();
  let startTime = performance.now(),
      timeout = maxSigned31BitInt;
  if (options && options.timeout) timeout = options.timeout;
  const newTask = {
    id: taskIdCounter++,
    fn,
    startTime,
    expirationTime: startTime + timeout
  };
  enqueue(taskQueue, newTask);
  if (!isCallbackScheduled && !isPerformingWork) {
    isCallbackScheduled = true;
    scheduledCallback = flushWork;
    scheduleCallback();
  }
  return newTask;
}
function cancelCallback(task) {
  task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
  isCallbackScheduled = false;
  isPerformingWork = true;
  try {
    return workLoop(hasTimeRemaining, initialTime);
  } finally {
    currentTask = null;
    isPerformingWork = false;
  }
}
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  currentTask = taskQueue[0] || null;
  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      break;
    }
    const callback = currentTask.fn;
    if (callback !== null) {
      currentTask.fn = null;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      callback(didUserCallbackTimeout);
      currentTime = performance.now();
      if (currentTask === taskQueue[0]) {
        taskQueue.shift();
      }
    } else taskQueue.shift();
    currentTask = taskQueue[0] || null;
  }
  return currentTask !== null;
}

const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return { ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}.`,
    count: 0
  };
}

const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $DEVCOMP = Symbol("solid-dev-component");
const signalOptions = {
  equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const [transPending, setTransPending] = /*@__PURE__*/createSignal(false);
var Owner = null;
let Transition = null;
let Scheduler = null;
let ExternalSourceFactory = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
let rootCount = 0;
function createRoot(fn, detachedOwner) {
  detachedOwner && (Owner = detachedOwner);
  const listener = Listener,
        owner = Owner,
        root = fn.length === 0 && !"_SOLID_DEV_" ? 0 : {
    owned: null,
    cleanups: null,
    context: null,
    owner
  };
  if (owner) root.name = `${owner.name}-r${rootCount++}`;
  Owner = root;
  Listener = null;
  try {
    return runUpdates(() => fn(() => cleanNode(root)), true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: options.equals || undefined
  };
  if (!options.internal) s.name = registerGraph(options.name || hashValue(value), s);
  const setter = value => {
    if (typeof value === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.pending !== NOTPENDING ? s.pending : s.tValue);else value = value(s.pending !== NOTPENDING ? s.pending : s.value);
    }
    return writeSignal(s, value);
  };
  return [readSignal.bind(s), setter];
}
function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE, options );
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE, options );
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE, options ),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  Effects ? Effects.push(c) : queueMicrotask(() => updateComputation(c));
}
function createReaction(onInvalidate, options) {
  let fn;
  const c = createComputation(() => {
    fn ? fn() : untrack(onInvalidate);
    fn = undefined;
  }, undefined, false, 0, options ),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  return tracking => {
    fn = tracking;
    updateComputation(c);
  };
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0, options );
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else updateComputation(c);
  return readSignal.bind(c);
}
function createResource(source, fetcher, options) {
  if (arguments.length === 2) {
    if (typeof fetcher === "object") {
      options = fetcher;
      fetcher = source;
      source = true;
    }
  } else if (arguments.length === 1) {
    fetcher = source;
    source = true;
  }
  options ||= {};
  if (options.globalRefetch !== false) {
    Resources || (Resources = new Set());
    Resources.add(load);
    Owner && onCleanup(() => Resources.delete(load));
  }
  const contexts = new Set(),
        [s, set] = createSignal(options.initialValue),
        [track, trigger] = createSignal(undefined, {
    equals: false
  }),
        [loading, setLoading] = createSignal(false),
        [error, setError] = createSignal();
  let err = undefined,
      pr = null,
      initP = null,
      id = null,
      loadedUnderTransition = false,
      dynamic = typeof source === "function";
  if (sharedConfig.context) {
    id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
    if (sharedConfig.load) initP = sharedConfig.load(id);
  }
  function loadEnd(p, v, e, key) {
    if (pr === p) {
      pr = null;
      if (initP && p === initP && options.onHydrated) options.onHydrated(key, {
        value: v
      });
      initP = null;
      setError(err = e);
      if (Transition && p && loadedUnderTransition) {
        Transition.promises.delete(p);
        loadedUnderTransition = false;
        runUpdates(() => {
          Transition.running = true;
          if (!Transition.promises.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
          completeLoad(v);
        }, false);
      } else completeLoad(v);
    }
    return v;
  }
  function completeLoad(v) {
    batch(() => {
      set(() => v);
      setLoading(false);
      for (const c of contexts.keys()) c.decrement();
      contexts.clear();
    });
  }
  function read() {
    const c = SuspenseContext && lookup(Owner, SuspenseContext.id),
          v = s();
    if (err) throw err;
    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();
        if (pr) {
          if (c.resolved && Transition) Transition.promises.add(pr);else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }
    return v;
  }
  function load(refetching = true) {
    setError(err = undefined);
    const lookup = dynamic ? source() : source;
    loadedUnderTransition = Transition && Transition.running;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(s));
      return;
    }
    if (Transition && pr) Transition.promises.delete(pr);
    const p = initP || untrack(() => fetcher(lookup, {
      value: s(),
      refetching
    }));
    if (typeof p !== "object" || !("then" in p)) {
      loadEnd(pr, p);
      return p;
    }
    pr = p;
    batch(() => {
      setLoading(true);
      trigger();
    });
    return p.then(v => loadEnd(p, v, undefined, lookup), e => loadEnd(p, e, e));
  }
  Object.defineProperties(read, {
    loading: {
      get() {
        return loading();
      }
    },
    error: {
      get() {
        return error();
      }
    }
  });
  if (dynamic) createComputed(() => load(false));else load(false);
  return [read, {
    refetch: load,
    mutate: set
  }];
}
let Resources;
function refetchResources(info) {
  return Resources && Promise.all([...Resources].map(fn => fn(info)));
}
function createDeferred(source, options) {
  let t,
      timeout = options ? options.timeoutMs : undefined;
  const node = createComputation(() => {
    if (!t || !t.fn) t = requestCallback(() => setDeferred(() => node.value), timeout !== undefined ? {
      timeout
    } : undefined);
    return source();
  }, undefined, true);
  const [deferred, setDeferred] = createSignal(node.value, options);
  updateComputation(node);
  setDeferred(() => node.value);
  return deferred;
}
function createSelector(source, fn = equalFn, options) {
  const subs = new Map();
  const node = createComputation(p => {
    const v = source();
    for (const key of subs.keys()) if (fn(key, v) !== (p !== undefined && fn(key, p))) {
      const l = subs.get(key);
      for (const c of l.values()) {
        c.state = STALE;
        if (c.pure) Updates.push(c);else Effects.push(c);
      }
    }
    return v;
  }, undefined, true, STALE, options );
  updateComputation(node);
  return key => {
    let listener;
    if (listener = Listener) {
      let l;
      if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
      onCleanup(() => {
        l.size > 1 ? l.delete(listener) : subs.delete(key);
      });
    }
    return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
  };
}
function batch(fn) {
  if (Pending) return fn();
  let result;
  const q = Pending = [];
  try {
    result = fn();
  } finally {
    Pending = null;
  }
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}
function untrack(fn) {
  let result,
      listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}
function on(deps, fn,
options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return prevValue => {
    let input;
    if (isArray) {
      input = [];
      for (let i = 0; i < deps.length; i++) input.push(deps[i]());
    } else input = deps();
    if (defer) {
      defer = false;
      return undefined;
    }
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) console.warn("cleanups created outside a `createRoot` or `render` will never be run");else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function onError(fn) {
  ERROR || (ERROR = Symbol("error"));
  if (Owner === null) console.warn("error handlers created outside a `createRoot` or `render` will never be run");else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}
function getListener() {
  return Listener;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;
  try {
    return runUpdates(fn, true);
  } finally {
    Owner = prev;
  }
}
function enableScheduling(scheduler = requestCallback) {
  Scheduler = scheduler;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: new Set(),
        effects: [],
        promises: new Set(),
        disposed: new Set(),
        queue: new Set(),
        running: true
      });
      t.done ||= new Promise(res => t.resolve = res);
      t.running = true;
    }
    batch(fn);
    return t ? t.done : undefined;
  });
}
function useTransition() {
  return [transPending, startTransition];
}
function resumeEffects(e) {
  Effects.push.apply(Effects, e);
  e.length = 0;
}
function devComponent(Comp, props) {
  const c = createComputation(() => untrack(() => {
    Object.assign(Comp, {
      [$DEVCOMP]: true
    });
    return Comp(props);
  }), undefined, true);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.state = 0;
  c.componentName = Comp.name;
  updateComputation(c);
  return c.tValue !== undefined ? c.tValue : c.value;
}
function hashValue(v) {
  const s = new Set();
  return `s${typeof v === "string" ? hash(v) : hash(JSON.stringify(v, (k, v) => {
    if (typeof v === "object" && v != null) {
      if (s.has(v)) return;
      s.add(v);
      const keys = Object.keys(v);
      const desc = Object.getOwnPropertyDescriptors(v);
      const newDesc = keys.reduce((memo, key) => {
        const value = desc[key];
        if (!value.get) memo[key] = value;
        return memo;
      }, {});
      v = Object.create({}, newDesc);
    }
    if (typeof v === "bigint") {
      return `${v.toString()}n`;
    }
    return v;
  }) || "")}`;
}
function registerGraph(name, value) {
  let tryName = name;
  if (Owner) {
    let i = 0;
    Owner.sourceMap || (Owner.sourceMap = {});
    while (Owner.sourceMap[tryName]) tryName = `${name}-${++i}`;
    Owner.sourceMap[tryName] = value;
  }
  return tryName;
}
function serializeGraph(owner) {
  owner || (owner = Owner);
  if (!owner) return {};
  return { ...serializeValues(owner.sourceMap),
    ...(owner.owned ? serializeChildren(owner) : {})
  };
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return lookup(Owner, context.id) || context.defaultValue;
}
function children(fn) {
  const children = createMemo(fn);
  return createMemo(() => resolveChildren(children()));
}
let SuspenseContext;
function getSuspenseContext() {
  return SuspenseContext || (SuspenseContext = createContext({}));
}
function enableExternalSource(factory) {
  if (ExternalSourceFactory) {
    const oldFactory = ExternalSourceFactory;
    ExternalSourceFactory = (fn, trigger) => {
      const oldSource = oldFactory(fn, trigger);
      const source = factory(x => oldSource.track(x), trigger);
      return {
        track: x => source.track(x),
        dispose() {
          source.dispose();
          oldSource.dispose();
        }
      };
    };
  } else {
    ExternalSourceFactory = factory;
  }
}
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
    const updates = Updates;
    Updates = null;
    !runningTransition && this.state === STALE || runningTransition && this.tState === STALE ? updateComputation(this) : lookDownstream(this);
    Updates = updates;
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  if (node.comparator) {
    if (Transition && Transition.running && Transition.sources.has(node)) {
      if (node.comparator(node.tValue, value)) return value;
    } else if (node.comparator(node.value, value)) return value;
  }
  if (Pending) {
    if (node.pending === NOTPENDING) Pending.push(node);
    node.pending = value;
    return value;
  }
  let TransitionRunning = false;
  if (Transition) {
    TransitionRunning = Transition.running;
    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
      Transition.sources.add(node);
      node.tValue = value;
    }
    if (!TransitionRunning) node.value = value;
  } else node.value = value;
  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o)) continue;
        if (o.pure) Updates.push(o);else Effects.push(o);
        if (o.observers && (TransitionRunning && !o.tState || !TransitionRunning && !o.state)) markUpstream(o);
        if (TransitionRunning) o.tState = STALE;else o.state = STALE;
      }
      if (Updates.length > 10e5) {
        Updates = [];
        if (true) throw new Error("Potential Infinite Loop Detected.");
        throw new Error();
      }
    }, false);
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
        listener = Listener,
        time = ExecCount;
  Listener = Owner = node;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        runComputation(node, node.tValue, time);
      }, false);
    });
  }
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) console.warn("computations created outside a `createRoot` or `render` will never be disposed");else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }
    c.name = options && options.name || `${Owner.name || "c"}-${(Owner.owned || Owner.tOwned).length}`;
  }
  if (ExternalSourceFactory) {
    const [track, trigger] = createSignal(undefined, {
      equals: false
    });
    const ordinary = ExternalSourceFactory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
    c.fn = x => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if (!runningTransition && node.state !== STALE) return node.state = 0;
  if (runningTransition && node.tState !== STALE) return node.tState = 0;
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (!runningTransition && node.state || runningTransition && node.tState) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node,
          prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) {
      updateComputation(node);
    } else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
      const updates = Updates;
      Updates = null;
      lookDownstream(node, ancestors[0]);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    completeUpdates(wait);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition && Transition.running) {
    if (Transition.promises.size || Transition.queue.size) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
    const sources = Transition.sources;
    res = Transition.resolve;
    Effects.forEach(e => {
      "tState" in e && (e.state = e.tState);
      delete e.tState;
    });
    Transition = null;
    batch(() => {
      sources.forEach(v => {
        v.value = v.tValue;
        if (v.owned) {
          for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
        }
        if (v.tOwned) v.owned = v.tOwned;
        delete v.tValue;
        delete v.tOwned;
        v.tState = 0;
      });
      setTransPending(false);
    });
  }
  if (Effects.length) batch(() => {
    runEffects(Effects);
    Effects = null;
  });else {
    Effects = null;
    globalThis._$afterUpdate && globalThis._$afterUpdate();
  }
  if (res) res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
          if (!tasks.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i,
      userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }
  const resume = queue.length;
  for (i = 0; i < userLength; i++) runTop(queue[i]);
  for (i = resume; i < queue.length; i++) runTop(queue[i]);
}
function lookDownstream(node, ignore) {
  node.state = 0;
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
        if (source !== ignore) runTop(source);
      } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING) lookDownstream(source, ignore);
    }
  }
}
function markUpstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!runningTransition && !o.state || runningTransition && !o.tState) {
      if (runningTransition) o.tState = PENDING;else o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markUpstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
            index = node.sourceSlots.pop(),
            obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
              s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = 0; i < node.tOwned.length; i++) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;else node.state = 0;
  node.context = null;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function handleError(err) {
  const fns = ERROR && lookup(Owner, ERROR);
  if (!fns) throw err;
  fns.forEach(f => f(err));
}
function lookup(owner, key) {
  return owner && (owner.context && owner.context[key] !== undefined ? owner.context[key] : owner.owner && lookup(owner.owner, key));
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    let res;
    createComputed(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }));
    return res;
  };
}
function hash(s) {
  for (var i = 0, h = 9; i < s.length;) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return `${h ^ h >>> 9}`;
}
function serializeValues(sources = {}) {
  const k = Object.keys(sources);
  const result = {};
  for (let i = 0; i < k.length; i++) {
    const key = k[i];
    result[key] = sources[key].value;
  }
  return result;
}
function serializeChildren(root) {
  const result = {};
  for (let i = 0, len = root.owned.length; i < len; i++) {
    const node = root.owned[i];
    result[node.componentName ? `${node.componentName}:${node.name}` : node.name] = { ...serializeValues(node.sourceMap),
      ...(node.owned ? serializeChildren(node) : {})
    };
  }
  return result;
}

function getSymbol() {
  const SymbolCopy = Symbol;
  return SymbolCopy.observable || "@@observable";
}
function observable(input) {
  const $$observable = getSymbol();
  return {
    subscribe(observer) {
      if (!(observer instanceof Object) || observer == null) {
        throw new TypeError("Expected the observer to be an object.");
      }
      const handler = "next" in observer ? observer.next : observer;
      let complete = false;
      createComputed(() => {
        if (complete) return;
        const v = input();
        untrack(() => handler(v));
      });
      return {
        unsubscribe() {
          complete = true;
        }
      };
    },
    [$$observable]() {
      return this;
    }
  };
}
function from(producer) {
  const [s, set] = createSignal(undefined, {
    equals: false
  });
  if ("subscribe" in producer) {
    const unsub = producer.subscribe(v => set(() => v));
    onCleanup(() => "unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
  } else {
    const clean = producer(set);
    onCleanup(clean);
  }
  return s;
}

const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [],
        i,
        j;
    return untrack(() => {
      let newLen = newItems.length,
          newIndices,
          newIndicesNext,
          temp,
          tempdisposers,
          tempIndexes,
          start,
          end,
          newEnd,
          item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      }
      else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === undefined ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== undefined && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function indexArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      signals = [],
      len = 0,
      i;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [];
    return untrack(() => {
      if (newItems.length === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
        return mapped;
      }
      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }
      for (i = 0; i < newItems.length; i++) {
        if (i < items.length && items[i] !== newItems[i]) {
          signals[i](() => newItems[i]);
        } else if (i >= items.length) {
          mapped[i] = createRoot(mapper);
        }
      }
      for (; i < items.length; i++) {
        disposers[i]();
      }
      len = signals.length = disposers.length = newItems.length;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });
    function mapper(disposer) {
      disposers[i] = disposer;
      const [s, set] = createSignal(newItems[i]);
      signals[i] = set;
      return mapFn(s, i);
    }
  };
}

let hydrationEnabled = false;
function enableHydration() {
  hydrationEnabled = true;
}
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = devComponent(Comp, props) ;
      setHydrateContext(c);
      return r;
    }
  }
  return devComponent(Comp, props);
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return typeof s === "function" ? s() : s;
}
function mergeProps(...sources) {
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = resolveSource(sources[i])[property];
        if (v !== undefined) return v;
      }
    },
    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in resolveSource(sources[i])) return true;
      }
      return false;
    },
    keys() {
      const keys = [];
      for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
      return [...new Set(keys)];
    }
  }, propTraps);
}
function splitProps(props, ...keys) {
  const blocked = new Set(keys.flat());
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const res = keys.map(k => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
        get() {
          return props[key];
        },
        set() {
          return true;
        }
      });
    }
    return clone;
  });
  res.push(new Proxy({
    get(property) {
      return blocked.has(property) ? undefined : props[property];
    },
    has(property) {
      return blocked.has(property) ? false : property in props;
    },
    keys() {
      return Object.keys(props).filter(k => !blocked.has(k));
    }
  }, propTraps));
  return res;
}
function lazy(fn) {
  let comp;
  let p;
  const wrap = props => {
    const ctx = sharedConfig.context;
    if (ctx) {
      ctx.count++;
      const [s, set] = createSignal();
      (p || (p = fn())).then(mod => {
        setHydrateContext(ctx);
        set(() => mod.default);
        setHydrateContext();
      });
      comp = s;
    } else if (!comp) {
      const [s] = createResource(() => (p || (p = fn())).then(mod => mod.default), {
        globalRefetch: false
      });
      comp = s;
    } else {
      const c = comp();
      if (c) return c(props);
    }
    let Comp;
    return createMemo(() => (Comp = comp()) && untrack(() => {
      if (!ctx) return Comp(props);
      const c = sharedConfig.context;
      setHydrateContext(ctx);
      const r = Comp(props);
      setHydrateContext(c);
      return r;
    }));
  };
  wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), p);
  return wrap;
}
let counter = 0;
function createUniqueId() {
  const ctx = sharedConfig.context;
  return ctx ? `${ctx.id}${ctx.count++}` : `cl:${counter++}`;
}

function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Show(props) {
  let strictEqual = false;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => strictEqual ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      return (strictEqual = typeof child === "function" && child.length > 0) ? untrack(() => child(c)) : child;
    }
    return props.fallback;
  });
}
function Switch(props) {
  let strictEqual = false;
  const conditions = children(() => props.children),
        evalConditions = createMemo(() => {
    let conds = conditions();
    if (!Array.isArray(conds)) conds = [conds];
    for (let i = 0; i < conds.length; i++) {
      const c = conds[i].when;
      if (c) return [i, c, conds[i]];
    }
    return [-1];
  }, undefined, {
    equals: (a, b) => a[0] === b[0] && (strictEqual ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2]
  });
  return createMemo(() => {
    const [index, when, cond] = evalConditions();
    if (index < 0) return props.fallback;
    const c = cond.children;
    return (strictEqual = typeof c === "function" && c.length > 0) ? untrack(() => c(when)) : c;
  });
}
function Match(props) {
  return props;
}
function ErrorBoundary(props) {
  let err = undefined;
  if (sharedConfig.context && sharedConfig.load) {
    err = sharedConfig.load(sharedConfig.context.id + sharedConfig.context.count);
  }
  const [errored, setErrored] = createSignal(err);
  let e;
  return createMemo(() => {
    if ((e = errored()) != null) {
      const f = props.fallback;
      return typeof f === "function" && f.length ? untrack(() => f(e, () => setErrored(null))) : f;
    }
    onError(setErrored);
    return props.children;
  });
}

const SuspenseListContext = createContext();
function SuspenseList(props) {
  let index = 0,
      suspenseSetter,
      showContent,
      showFallback;
  const listContext = useContext(SuspenseListContext);
  if (listContext) {
    const [inFallback, setFallback] = createSignal(false);
    suspenseSetter = setFallback;
    [showContent, showFallback] = listContext.register(inFallback);
  }
  const registry = [],
        comp = createComponent(SuspenseListContext.Provider, {
    value: {
      register: inFallback => {
        const [showingContent, showContent] = createSignal(false),
              [showingFallback, showFallback] = createSignal(false);
        registry[index++] = {
          inFallback,
          showContent,
          showFallback
        };
        return [showingContent, showingFallback];
      }
    },
    get children() {
      return props.children;
    }
  });
  createComputed(() => {
    const reveal = props.revealOrder,
          tail = props.tail,
          visibleContent = showContent ? showContent() : true,
          visibleFallback = showFallback ? showFallback() : true,
          reverse = reveal === "backwards";
    if (reveal === "together") {
      const all = registry.every(i => !i.inFallback());
      suspenseSetter && suspenseSetter(!all);
      registry.forEach(i => {
        i.showContent(all && visibleContent);
        i.showFallback(visibleFallback);
      });
      return;
    }
    let stop = false;
    for (let i = 0, len = registry.length; i < len; i++) {
      const n = reverse ? len - i - 1 : i,
            s = registry[n].inFallback();
      if (!stop && !s) {
        registry[n].showContent(visibleContent);
        registry[n].showFallback(visibleFallback);
      } else {
        const next = !stop;
        if (next && suspenseSetter) suspenseSetter(true);
        if (!tail || next && tail === "collapsed") {
          registry[n].showFallback(visibleFallback);
        } else registry[n].showFallback(false);
        stop = true;
        registry[n].showContent(next);
      }
    }
    if (!stop && suspenseSetter) suspenseSetter(false);
  });
  return comp;
}
function Suspense(props) {
  let counter = 0,
      showContent,
      showFallback,
      ctx,
      p,
      flicker,
      error;
  const [inFallback, setFallback] = createSignal(false),
        SuspenseContext = getSuspenseContext(),
        store = {
    increment: () => {
      if (++counter === 1) setFallback(true);
    },
    decrement: () => {
      if (--counter === 0) setFallback(false);
    },
    inFallback,
    effects: [],
    resolved: false
  },
        owner = getOwner();
  if (sharedConfig.context) {
    const key = sharedConfig.context.id + sharedConfig.context.count;
    p = sharedConfig.load(key);
    if (p) {
      if (typeof p !== "object" || !("then" in p)) error = p;else {
        const [s, set] = createSignal(undefined, {
          equals: false
        });
        flicker = s;
        p.then(err => {
          if (error = err) return set();
          sharedConfig.gather(key);
          setHydrateContext(ctx);
          set();
          setHydrateContext();
          p = undefined;
        });
      }
    }
  }
  const listContext = useContext(SuspenseListContext);
  if (listContext) [showContent, showFallback] = listContext.register(store.inFallback);
  let dispose;
  onCleanup(() => dispose && dispose());
  return createComponent(SuspenseContext.Provider, {
    value: store,
    get children() {
      return createMemo(() => {
        if (error) throw error;
        ctx = sharedConfig.context;
        if (flicker) {
          flicker();
          return flicker = undefined;
        }
        if (ctx && p === undefined) setHydrateContext();
        const rendered = untrack(() => props.children);
        return createMemo(() => {
          const inFallback = store.inFallback(),
                visibleContent = showContent ? showContent() : true,
                visibleFallback = showFallback ? showFallback() : true;
          dispose && dispose();
          if ((!inFallback || p !== undefined) && visibleContent) {
            store.resolved = true;
            resumeEffects(store.effects);
            return rendered;
          }
          if (!visibleFallback) return;
          return createRoot(disposer => {
            dispose = disposer;
            if (ctx) {
              setHydrateContext({
                id: ctx.id + "f",
                count: 0
              });
              ctx = undefined;
            }
            return props.fallback;
          }, owner);
        });
      });
    }
  });
}

let DEV;
{
  DEV = {
    writeSignal,
    serializeGraph,
    registerGraph,
    hashValue
  };
}
if (globalThis) {
  if (!globalThis.Solid$$) globalThis.Solid$$ = true;else console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior.");
}




/***/ }),

/***/ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/web/dist/dev.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/web/dist/dev.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   "For": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.For),
/* harmony export */   "Index": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Index),
/* harmony export */   "Match": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Match),
/* harmony export */   "Show": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Show),
/* harmony export */   "Suspense": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "SuspenseList": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.SuspenseList),
/* harmony export */   "Switch": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "createComponent": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createComponent),
/* harmony export */   "effect": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect),
/* harmony export */   "getOwner": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.getOwner),
/* harmony export */   "mergeProps": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "Aliases": () => (/* binding */ Aliases),
/* harmony export */   "Assets": () => (/* binding */ Assets),
/* harmony export */   "ChildProperties": () => (/* binding */ ChildProperties),
/* harmony export */   "DelegatedEvents": () => (/* binding */ DelegatedEvents),
/* harmony export */   "Dynamic": () => (/* binding */ Dynamic),
/* harmony export */   "HydrationScript": () => (/* binding */ Assets),
/* harmony export */   "NoHydration": () => (/* binding */ NoHydration),
/* harmony export */   "Portal": () => (/* binding */ Portal),
/* harmony export */   "PropAliases": () => (/* binding */ PropAliases),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "SVGElements": () => (/* binding */ SVGElements),
/* harmony export */   "SVGNamespace": () => (/* binding */ SVGNamespace),
/* harmony export */   "addEventListener": () => (/* binding */ addEventListener),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "classList": () => (/* binding */ classList),
/* harmony export */   "clearDelegatedEvents": () => (/* binding */ clearDelegatedEvents),
/* harmony export */   "delegateEvents": () => (/* binding */ delegateEvents),
/* harmony export */   "dynamicProperty": () => (/* binding */ dynamicProperty),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "generateHydrationScript": () => (/* binding */ generateHydrationScript),
/* harmony export */   "getHydrationKey": () => (/* binding */ getHydrationKey),
/* harmony export */   "getNextElement": () => (/* binding */ getNextElement),
/* harmony export */   "getNextMarker": () => (/* binding */ getNextMarker),
/* harmony export */   "getNextMatch": () => (/* binding */ getNextMatch),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isServer": () => (/* binding */ isServer),
/* harmony export */   "memo": () => (/* binding */ memo),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderToStream": () => (/* binding */ renderToStream),
/* harmony export */   "renderToString": () => (/* binding */ renderToString),
/* harmony export */   "renderToStringAsync": () => (/* binding */ renderToStringAsync),
/* harmony export */   "resolveSSRNode": () => (/* binding */ resolveSSRNode),
/* harmony export */   "runHydrationEvents": () => (/* binding */ runHydrationEvents),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "setAttributeNS": () => (/* binding */ setAttributeNS),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "ssr": () => (/* binding */ ssr),
/* harmony export */   "ssrBoolean": () => (/* binding */ ssrBoolean),
/* harmony export */   "ssrClassList": () => (/* binding */ ssrClassList),
/* harmony export */   "ssrHydrationKey": () => (/* binding */ ssrHydrationKey),
/* harmony export */   "ssrSpread": () => (/* binding */ ssrSpread),
/* harmony export */   "ssrStyle": () => (/* binding */ ssrStyle),
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js */ "./node_modules/.pnpm/solid-js@1.3.1/node_modules/solid-js/dist/dev.js");



const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};
const PropAliases = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
const DelegatedEvents = new Set(["beforeinput", "click", "dblclick", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGElements = new Set([
"altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
"set", "stop",
"svg", "switch", "symbol", "text", "textPath",
"tref", "tspan", "use", "view", "vkern"]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};

function memo(fn, equals) {
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(fn, undefined, !equals ? {
    equals
  } : undefined);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) parentNode.removeChild(a[aStart]);
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
              sequence = 1,
              t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else parentNode.removeChild(a[aStart++]);
    }
  }
}

const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init) {
  let disposer;
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => {
    disposer = dispose;
    element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
  });
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  if (check && t.innerHTML.split("<").length - 1 !== check) throw `The browser resolved template HTML does not match JSX input:\n${t.innerHTML}\n\n${html}. Is your HTML properly formed?`;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}
function delegateEvents(eventNames, document = window.document) {
  const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}
function clearDelegatedEvents(document = window.document) {
  if (document[$$EVENTS]) {
    for (let name of document[$$EVENTS].keys()) document.removeEventListener(name, eventHandler);
    delete document[$$EVENTS];
  }
}
function setAttribute(node, name, value) {
  if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    node.addEventListener(name, e => handler[0](handler[1], e));
  } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}),
        prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev = {}) {
  const nodeStyle = node.style;
  if (value == null || typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (prev = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}
function dynamicProperty(props, key) {
  const src = props[key];
  Object.defineProperty(props, key, {
    get() {
      return src();
    },
    enumerable: true
  });
  return props;
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}) {
  for (const prop in prevProps) {
    if (!(prop in props)) {
      if (prop === "children") continue;
      assignProp(node, prop, null, prevProps[prop], isSVG);
    }
  }
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG);
  }
}
function hydrate$1(code, element, options = {}) {
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed = globalThis._$HY.completed;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events = globalThis._$HY.events;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.load = globalThis._$HY.load;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.gather = root => gatherHydratable(element, root);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry = new Map();
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = {
    id: options.renderId || "",
    count: 0
  };
  gatherHydratable(element, options.renderId);
  const dispose = render(code, element, [...element.childNodes]);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = null;
  return dispose;
}
function getNextElement(template) {
  let node, key;
  if (!solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context || !(node = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.get(key = getHydrationKey()))) {
    return template.cloneNode(true);
  }
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed.add(node);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry["delete"](key);
  return node;
}
function getNextMatch(el, nodeName) {
  while (el && el.localName !== nodeName) el = el.nextSibling;
  return el;
}
function getNextMarker(start) {
  let end = start,
      count = 0,
      current = [];
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#") count++;else if (v === "/") {
          if (count === 0) return [end, current];
          count--;
        }
      }
      current.push(end);
      end = end.nextSibling;
    }
  }
  return [end, current];
}
function runHydrationEvents() {
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events && !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued) {
    queueMicrotask(() => {
      const {
        completed,
        events
      } = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig;
      events.queued = false;
      while (events.length) {
        const [el, e] = events[0];
        if (!completed.has(el)) return;
        eventHandler(e);
        events.shift();
      }
    });
    solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued = true;
  }
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG) {
  let isCE, isProp, isChildProp;
  if (prop === "style") return style(node, value, prev);
  if (prop === "classList") return classList(node, value, prev);
  if (value === prev) return prev;
  if (prop === "ref") {
    value(node);
  } else if (prop.slice(0, 3) === "on:") {
    node.addEventListener(prop.slice(3), value);
  } else if (prop.slice(0, 10) === "oncapture:") {
    node.addEventListener(prop.slice(10), value, true);
  } else if (prop.slice(0, 2) === "on") {
    const name = prop.slice(2).toLowerCase();
    const delegate = DelegatedEvents.has(name);
    addEventListener(node, name, value, delegate);
    delegate && delegateEvents([name]);
  } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
    if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[PropAliases[prop] || prop] = value;
  } else {
    const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
    if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
  }
  return value;
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== undefined ? handler(data, e) : handler(e);
      if (e.cancelBubble) return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  if (!skipChildren && "children" in props) {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => assign(node, props, isSVG, true, prevProps));
  return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
        multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    if (normalizeIncomingArray(array, value, unwrapArray)) {
      (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && current && current.length) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentNode) return current = array;
      }
      return current;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else if (current == null || current === "") {
        appendNodes(parent, array);
      } else {
        reconcileArrays(parent, multi && current || [parent.firstChild], array);
      }
    }
    current = array;
  } else if (value instanceof Node) {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current = value.parentNode ? value : current;
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, multi ? current : parent.firstChild);
    current = value;
  } else console.warn(`Unrecognized value. Skipped inserting`, value);
  return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
        t;
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) ; else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else normalized.push(document.createTextNode(item.toString()));
  }
  return dynamic;
}
function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && parent.removeChild(el);
      } else inserted = true;
    }
  } else if (current instanceof Node) parent.replaceChild(node, current);else parent.insertBefore(node, marker);
  return [node];
}
function gatherHydratable(element, root) {
  const templates = element.querySelectorAll(`*[data-hk]`);
  for (let i = 0; i < templates.length; i++) {
    const node = templates[i];
    const key = node.getAttribute("data-hk");
    if (!root || key.startsWith(root)) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.set(key, node);
  }
}
function getHydrationKey() {
  const hydrate = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context;
  return `${hydrate.id}${hydrate.count++}`;
}
function Assets() {
  return;
}
function NoHydration(props) {
  return solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? undefined : props.children;
}

function renderToString(fn, options) {}
function renderToStringAsync(fn, options) {}
function renderToStream(fn, options) {}
function ssr(template, ...nodes) {}
function resolveSSRNode(node) {}
function ssrClassList(value) {}
function ssrStyle(value) {}
function ssrSpread(accessor) {}
function ssrBoolean(key, value) {}
function ssrHydrationKey() {}
function escape(html) {}
function generateHydrationScript() {}

const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
const hydrate = (...args) => {
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.enableHydration)();
  return hydrate$1(...args);
};
function Portal(props) {
  const {
    useShadow
  } = props,
        marker = document.createTextNode(""),
        mount = props.mount || document.body;
  function renderPortal() {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
      const [s, set] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);
      queueMicrotask(() => set(true));
      return () => s() && props.children;
    } else return () => props.children;
  }
  if (mount instanceof HTMLHeadElement) {
    const [clean, setClean] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);
    const cleanup = () => setClean(true);
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => insert(mount, () => !clean() ? renderPortal()() : dispose(), null));
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => {
      if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) queueMicrotask(cleanup);else cleanup();
    });
  } else {
    const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
          renderRoot = useShadow && container.attachShadow ? container.attachShadow({
      mode: "open"
    }) : container;
    Object.defineProperty(container, "host", {
      get() {
        return marker.parentNode;
      }
    });
    insert(renderRoot, renderPortal());
    mount.appendChild(container);
    props.ref && props.ref(container);
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => mount.removeChild(container));
  }
  return marker;
}
function Dynamic(props) {
  const [p, others] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.splitProps)(props, ["component"]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(() => {
    const component = p.component;
    switch (typeof component) {
      case "function":
        return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(() => component(others));
      case "string":
        const isSvg = SVGElements.has(component);
        const el = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? getNextElement() : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;
    }
  });
}




/***/ })

}]);
//# sourceMappingURL=vendors.js.map