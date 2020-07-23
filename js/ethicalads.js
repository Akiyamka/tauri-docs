var ethicalads=function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t,a){"use strict";(function(e){var n=a(2),o=setTimeout;function r(e){return Boolean(e&&void 0!==e.length)}function i(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function l(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var a=1===e._state?t.onFulfilled:t.onRejected;if(null!==a){var n;try{n=a(e._value)}catch(e){return void u(t.promise,e)}d(t.promise,n)}else(1===e._state?d:u)(t.promise,e._value)}))):e._deferreds.push(t)}function d(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var a=t.then;if(t instanceof c)return e._state=3,e._value=t,void s(e);if("function"==typeof a)return void p((n=a,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(t){u(e,t)}var n,o}function u(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,a=e._deferreds.length;t<a;t++)l(e,e._deferreds[t]);e._deferreds=null}function f(e,t,a){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=a}function p(e,t){var a=!1;try{e((function(e){a||(a=!0,d(t,e))}),(function(e){a||(a=!0,u(t,e))}))}catch(e){if(a)return;a=!0,u(t,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var a=new this.constructor(i);return l(this,new f(e,t,a)),a},c.prototype.finally=n.a,c.all=function(e){return new c((function(t,a){if(!r(e))return a(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var c=r.then;if("function"==typeof c)return void c.call(r,(function(t){i(e,t)}),a)}n[e]=r,0==--o&&t(n)}catch(e){a(e)}}for(var c=0;c<n.length;c++)i(c,n[c])}))},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,a){a(e)}))},c.race=function(e){return new c((function(t,a){if(!r(e))return a(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)c.resolve(e[n]).then(t,a)}))},c._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=c}).call(this,a(5).setImmediate)},function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t,a){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(a){return t.resolve(e()).then((function(){return a}))}),(function(a){return t.resolve(e()).then((function(){return t.reject(a)}))}))}},function(e,t,a){"use strict";a.r(t),function(e,n){a.d(t,"Placement",(function(){return h})),a.d(t,"load_placements",(function(){return m})),a.d(t,"wait",(function(){return y}));var o=a(0);a(8);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)})(e)}function l(e,t,a){return(l=d()?Reflect.construct:function(e,t,a){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return a&&u(o,a.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image",n=arguments.length>2?arguments[2]:void 0;f(this,e),this.publisher=t,this.ad_type=a,this.target=n}var t,a,n;return t=e,n=[{key:"from_element",value:function(t){var a=t.getAttribute("data-ea-publisher"),n=t.getAttribute("data-ea-type");return n||(n="image",t.setAttribute("data-ea-type","image")),new e(a,n+="-v1",t)}}],(a=[{key:"load",value:function(){var e=this;return this.fetch().then((function(t){if(void 0===t)throw new v("Ad decision request blocked");var a=e.target.className||"";for(a+=" loaded",e.target.className=a.trim();e.target.firstChild;)e.target.removeChild(e.target.firstChild);return e.target.appendChild(t),e}))}},{key:"fetch",value:function(){var e="ad_"+Date.now(),t=new URLSearchParams({publisher:this.publisher,ad_types:this.ad_type,div_ids:e,callback:e,format:"jsonp"}),a=new URL("https://server.ethicalads.io/api/v1/decision/?"+t.toString());return new o.a((function(t,n){window[e]=function(e){if(e&&e.html){var a=document.createElement("div");return a.innerHTML=e.html,t(a.firstChild)}return n(new Error("Placement is configured with invalid parameters."))};var o=document.createElement("script");o.src=a,o.type="text/javascript",o.async=!0,o.addEventListener("error",(function(e){return t()})),document.getElementsByTagName("head")[0].appendChild(o)}))}}])&&p(t.prototype,a),n&&p(t,n),e}();function m(){var e=document.querySelectorAll("[data-ea-publisher]"),t=Array.prototype.slice.call(e);if(0===t.length)throw new Error("No ad placements found.");return t.length>1&&(console.error("Multiple ad placements are not supported, only using the first ad placement."),t=t.slice(0,1)),o.a.all(t.map((function(e){return h.from_element(e).load()})))}var y,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,e);var t,a,n=(t=o,a=d(),function(){var e,n=s(t);if(a){var o=s(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return i(this,e)});function o(){return f(this,o),n.apply(this,arguments)}return o}(c(Error));if(a.c[a.s]!==e){var b=new o.a((function(e){if("interactive"===document.readyState||"complete"===document.readyState)return e();document.addEventListener("DOMContentLoaded",(function(){e()}),{capture:!0,once:!0,passive:!0})}));y=new o.a((function(e){b.then((function(){m().then((function(t){e(t)})).catch((function(t){e([]);var a=n.debug||window.debug||!1;if(t instanceof Error){if(t instanceof v&&!a)return;console.error(t.message)}}))}))}))}}.call(this,a(4)(e),a(1))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a(1))},function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,o,r,i,c,l=1,d={},u=!1,s=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){h(e.data)},n=function(e){r.port2.postMessage(e)}):s&&"onreadystatechange"in s.createElement("script")?(o=s.documentElement,n=function(e){var t=s.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):n=function(e){setTimeout(h,0,e)}:(i="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&h(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),n=function(t){e.postMessage(i+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var o={callback:e,args:t};return d[l]=o,n(l),l++},f.clearImmediate=p}function p(e){delete d[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=d[e];if(t){u=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(void 0,a)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(1),a(7))},function(e,t){var a,n,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===r||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:r}catch(e){a=r}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,d=[],u=!1,s=-1;function f(){u&&l&&(u=!1,l.length?d=l.concat(d):s=-1,d.length&&p())}function p(){if(!u){var e=c(f);u=!0;for(var t=d.length;t;){for(l=d,d=[];++s<t;)l&&l[s].run();s=-1,t=d.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];d.push(new h(e,t)),1!==d.length||u||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,a){var n=a(9),o=a(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);e.exports=o.locals||{}},function(e,t,a){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function c(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},n=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var s=c(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:u,updater:y(f,t),references:1}),n.push(u)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=a.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,a,n){var o=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t,a){var n=a.css,o=a.media,r=a.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function y(e,t){var a,n,o;if(t.singleton){var r=m++;a=h||(h=d(t)),n=f.bind(null,a,r,!1),o=f.bind(null,a,r,!0)}else a=d(t),n=p.bind(null,a,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var o=c(a[n]);i[o].references--}for(var r=l(e,t),d=0;d<a.length;d++){var u=c(a[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}a=r}}}},function(e,t,a){(t=a(11)(!1)).push([e.i,'[data-ea-publisher].loaded,[data-ea-type].loaded{font-size:14px;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-weight:normal;font-style:normal;leter-spacing:0px;vertical-align:baseline;line-height:1.3em}[data-ea-publisher].loaded a,[data-ea-type].loaded a{text-decoration:none}[data-ea-publisher].loaded .ea-pixel,[data-ea-type].loaded .ea-pixel{display:none}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{margin:1em 1em 0.5em 1em;padding:1em;background:rgba(0,0,0,0.03);color:#505050}[data-ea-publisher].loaded .ea-content a:link,[data-ea-type].loaded .ea-content a:link{color:#505050}[data-ea-publisher].loaded .ea-content a:visited,[data-ea-type].loaded .ea-content a:visited{color:#505050}[data-ea-publisher].loaded .ea-content a:hover,[data-ea-type].loaded .ea-content a:hover{color:#373737}[data-ea-publisher].loaded .ea-content a:active,[data-ea-type].loaded .ea-content a:active{color:#373737}[data-ea-publisher].loaded .ea-content a strong,[data-ea-publisher].loaded .ea-content a b,[data-ea-type].loaded .ea-content a strong,[data-ea-type].loaded .ea-content a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a:link,[data-ea-type].loaded .ea-callout a:link{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:visited,[data-ea-type].loaded .ea-callout a:visited{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:hover,[data-ea-type].loaded .ea-callout a:hover{color:#505050}[data-ea-publisher].loaded .ea-callout a:active,[data-ea-type].loaded .ea-callout a:active{color:#505050}[data-ea-publisher].loaded .ea-callout a strong,[data-ea-publisher].loaded .ea-callout a b,[data-ea-type].loaded .ea-callout a strong,[data-ea-type].loaded .ea-callout a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a,[data-ea-type].loaded .ea-callout a{font-size:0.8em}[data-ea-publisher].loaded.dark .ea-content,[data-ea-type].loaded.dark .ea-content{background:rgba(255,255,255,0.05);color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:link,[data-ea-type].loaded.dark .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:visited,[data-ea-type].loaded.dark .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:hover,[data-ea-type].loaded.dark .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a:active,[data-ea-type].loaded.dark .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a strong,[data-ea-publisher].loaded.dark .ea-content a b,[data-ea-type].loaded.dark .ea-content a strong,[data-ea-type].loaded.dark .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.dark .ea-callout a:link,[data-ea-type].loaded.dark .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:visited,[data-ea-type].loaded.dark .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:hover,[data-ea-type].loaded.dark .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a:active,[data-ea-type].loaded.dark .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a strong,[data-ea-publisher].loaded.dark .ea-callout a b,[data-ea-type].loaded.dark .ea-callout a strong,[data-ea-type].loaded.dark .ea-callout a b{color:#50baf9}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.raised .ea-content,[data-ea-type].loaded.raised .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.bordered .ea-content,[data-ea-type].loaded.bordered .ea-content{border:1px solid rgba(0,0,0,0.04);border-radius:3px;box-shadow:none}[data-ea-publisher].loaded.bordered.dark .ea-content,[data-ea-type].loaded.bordered.dark .ea-content{border:1px solid rgba(255,255,255,0.07)}[data-ea-publisher].loaded.flat .ea-content,[data-ea-type].loaded.flat .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-type="image"].loaded,[data-ea-publisher]:not([data-ea-type]).loaded,.ea-type-image{display:inline-block}[data-ea-type="image"].loaded .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content,.ea-type-image .ea-content{max-width:180px;overflow:auto;text-align:center}[data-ea-type="image"].loaded .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>a>img,.ea-type-image .ea-content>a>img{width:120px;height:90px;display:inline-block}[data-ea-type="image"].loaded .ea-content>.ea-text,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>.ea-text,.ea-type-image .ea-content>.ea-text{margin-top:1em;font-size:1em;text-align:center}[data-ea-type="image"].loaded .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded .ea-callout,.ea-type-image .ea-callout{max-width:180px;margin:0em 1em 1em 1em;padding-left:1em;padding-right:1em;font-style:italic;text-align:right}[data-ea-type="image"].loaded.horizontal .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content,.ea-type-image.horizontal .ea-content{max-width:320px}[data-ea-type="image"].loaded.horizontal .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content>a>img,.ea-type-image.horizontal .ea-content>a>img{float:left;margin-right:1em}[data-ea-type="image"].loaded.horizontal .ea-content .ea-text,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content .ea-text,.ea-type-image.horizontal .ea-content .ea-text{margin-top:0em;text-align:left;overflow:auto}[data-ea-type="image"].loaded.horizontal .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-callout,.ea-type-image.horizontal .ea-callout{max-width:320px;text-align:right}[data-ea-type="text"].loaded,.ea-type-text{font-size:14px}[data-ea-type="text"].loaded .ea-content,.ea-type-text .ea-content{text-align:left}[data-ea-type="text"].loaded .ea-callout,.ea-type-text .ea-callout{margin:0.5em 1em 1em 1em;padding-left:1em;padding-right:1em;text-align:right;font-style:italic}\n',""]),e.exports=t},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var o=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(r).concat([o]).join("\n")}var i,c,l;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&o[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}}]);