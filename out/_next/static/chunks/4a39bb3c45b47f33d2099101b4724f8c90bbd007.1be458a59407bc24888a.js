(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"2vfM":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var p=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,g=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function C(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case p:case o:case s:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case f:case c:return e;default:return t}}case y:case d:case a:return t}}}function O(e){return C(e)===p}t.typeOf=C,t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=f,t.Fragment=o,t.Lazy=y,t.Memo=d,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=m,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===p||e===s||e===i||e===m||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===b||e.$$typeof===h||e.$$typeof===v)},t.isAsyncMode=function(e){return O(e)||C(e)===u},t.isConcurrentMode=O,t.isContextConsumer=function(e){return C(e)===l},t.isContextProvider=function(e){return C(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===f},t.isFragment=function(e){return C(e)===o},t.isLazy=function(e){return C(e)===y},t.isMemo=function(e){return C(e)===d},t.isPortal=function(e){return C(e)===a},t.isProfiler=function(e){return C(e)===s},t.isStrictMode=function(e){return C(e)===i},t.isSuspense=function(e){return C(e)===m}}));l(p);p.typeOf,p.AsyncMode,p.ConcurrentMode,p.ContextConsumer,p.ContextProvider,p.Element,p.ForwardRef,p.Fragment,p.Lazy,p.Memo,p.Portal,p.Profiler,p.StrictMode,p.Suspense,p.isValidElementType,p.isAsyncMode,p.isConcurrentMode,p.isContextConsumer,p.isContextProvider,p.isElement,p.isForwardRef,p.isFragment,p.isLazy,p.isMemo,p.isPortal,p.isProfiler,p.isStrictMode,p.isSuspense;var f=u((function(e,t){0}));l(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,u((function(e){e.exports=p}));var m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function y(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}})()&&Object.assign;var b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(e,t,r,n,a){}h.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function C(){}C.resetWarningCache=v;var O=u((function(e){e.exports=function(){function e(e,t,r,n,a,o){if(o!==b){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C,resetWarningCache:v};return r.PropTypes=r,r}()})),P=O.number,w=O.string,S=O.func,j=O.oneOfType,k=O.node;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".react-hooks-paginator {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0; }\n  .react-hooks-paginator .page-item {\n    list-style: none; }\n    .react-hooks-paginator .page-item:first-child .page-link {\n      margin-left: 0;\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n    .react-hooks-paginator .page-item:last-child .page-link {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px; }\n    .react-hooks-paginator .page-item:hover .page-link, .react-hooks-paginator .page-item.active .page-link {\n      background-color: #3895d3;\n      border-color: #3895d3;\n      color: #fff; }\n  .react-hooks-paginator .page-link {\n    border: 1px solid #dee2e6;\n    color: #4a4a4a;\n    margin-left: -1px;\n    outline: none;\n    padding: 0.5rem 0.75rem;\n    text-decoration: none;\n    transition: all 0.2s; }\n");var x="LEFT",N="RIGHT",E=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,a=[];n<=t;)a.push(n),n+=r;return a};function T(e){var t=s(Object(n.useState)((function(){return function(){var t=e.totalRecords,r=void 0===t?null:t,n=e.pageLimit,a=void 0===n?20:n,o=e.pageNeighbours,i=void 0===o?0:o;return{pageLimit:a="number"===typeof a?a:20,totalRecords:r="number"===typeof r?r:0,pageNeighbours:i="number"===typeof i?Math.max(0,Math.min(i,2)):0,totalPages:Math.ceil(r/a)}}()})),2),r=t[0],l=t[1],u=Object(n.useRef)(!0),p=Object(n.useCallback)((function(t){var n=Math.max(1,Math.min(t,r.totalPages));e.setCurrentPage(n)}),[r.totalPages,e.pageLimit]);Object(n.useEffect)((function(){p(1)}),[p]),Object(n.useEffect)((function(){e.setOffset((e.currentPage-1)*e.pageLimit)}),[e.currentPage]),Object(n.useEffect)((function(){if(u.current)u.current=!1;else{var t=e.totalRecords,n=Math.ceil(t/r.pageLimit);l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{totalRecords:e.totalRecords,totalPages:n}))}}),[e.totalRecords]);var f=Object(n.useCallback)((function(t){t.preventDefault(),p(e.currentPage-2*r.pageNeighbours-1)}),[e.currentPage]),m=Object(n.useCallback)((function(t){t.preventDefault(),p(e.currentPage+2*r.pageNeighbours+1)}),[e.currentPage,r.pageNeighbours]),g=Object(n.useCallback)((function(){var t=r.totalPages,n=e.currentPage,a=r.pageNeighbours,o=2*r.pageNeighbours+3;if(t>o+2){var i=[],s=n-a,l=n+a,u=t-1,p=s>2?s:2,f=l<u?l:u,m=o-(i=E(p,f)).length-1,g=p>2,d=f<u,y=x,b=N;if(g&&!d){var h=E(p-m,p-1);i=[y].concat(c(h),c(i))}else if(!g&&d){var v=E(f+1,f+m);i=[].concat(c(i),c(v),[b])}else g&&d&&(i=[y].concat(c(i),[b]));return[1].concat(c(i),[t])}return E(1,t)}),[r.totalPages,e.currentPage,r.pageNeighbours]);if(!r.totalRecords)return null;if(1===r.totalPages)return null;var d=e.currentPage,y=g();return a.a.createElement("ul",{className:e.pageContainerClass},y.map((function(t,r){return t===x?a.a.createElement("li",{className:e.pageItemClass,key:r},a.a.createElement("button",{className:e.pagePrevClass,onClick:f},e.pagePrevText)):t===N?a.a.createElement("li",{className:e.pageItemClass,key:r},a.a.createElement("button",{className:e.pageNextClass,onClick:m},e.pageNextText)):a.a.createElement("li",{className:"".concat(e.pageItemClass," ").concat(d===t?e.pageActiveClass:null),key:r},a.a.createElement("button",{className:e.pageLinkClass,onClick:function(e){return function(e,t){t.preventDefault(),p(e)}(t,e)}},t))})))}T.defaultProps={pageContainerClass:"react-hooks-paginator",pageActiveClass:"active",pageItemClass:"page-item",pageLinkClass:"page-link",pageNextText:"Next \xbb",pagePrevText:"\xab Prev",pagePrevClass:"page-link",pageNextClass:"page-link"},T.propTypes={currentPage:P,pageActiveClass:w,pageNextText:j([w,k]),pagePrevText:j([w,k]),pagePrevClass:w,pageNextClass:w,pageContainerClass:w,pageItemClass:w,pageLimit:P,pageLinkClass:w,pageNeighbours:P,setCurrentPage:S,setOffset:S,totalRecords:P.isRequired},t.a=T},"6QH/":function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("q1tI"),a=r.n(n),o=r("g4pe"),i=r.n(o),s=r("PmzM"),c=r("zlC1"),l=r("YFqc"),u=r.n(l),p=r("VOjt"),f=r("brf1"),m=r("kLkQ"),g=a.a.createElement;function d(e){var t=e.hide,r=e.container;return g("div",{className:"menu -style-3"},g("div",{className:Object(m.c)(r)},g("div",{className:"menu__wrapper"},g(u.a,{href:"/"},g("a",{className:"menu__wrapper__logo"},g("img",{src:"/assets/images/logo-white.png",alt:"Logo"}))),g(p.a,{className:"-white"}),g(f.a,{hide:t,white:!0,className:"-white"}))))}var y=a.a.createElement;var b=a.a.createElement,h=Object(s.a)((function(e){return y(a.a.Fragment,null,y(d,e))}));function v(e){return b(a.a.Fragment,null,b(i.a,null,b("title",null,e.title||"Yego Coffee")),b(h,{container:e.container}),e.children,b(c.a,null))}},Npp4:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),o=r("OS56"),i=r.n(o),s=a.a.createElement;function c(){return s("div",{className:"instagram-two"},s(i.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},Array.from(Array(6),(function(e,t){return s("a",{key:t,href:"https://www.instagram.com/",className:"slider-item"},s("img",{src:""+"/assets/images/instagram/InstagramTwo/".concat(t+1,".png"),alt:"Instagram image"}))}))))}},m9Y6:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r("q1tI"),a=r.n(n).a.createElement,o=function(e){var t=e.name,r=e.current;return a("li",{className:r&&"active"},t)},i=function(e){var t=e.title,r=e.children;return a("div",{className:"breadcrumb"},a("div",{className:"container"},a("h2",null,t),a("ul",null,r)))}}}]);