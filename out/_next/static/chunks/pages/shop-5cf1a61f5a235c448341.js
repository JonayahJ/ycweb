_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{P7bw:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("lmm/"),o=n("J+Fc"),s=a.a.createElement;function c(e){var t=e.curentView,n=e.getCurrentView,a=e.getCurrentSort,c=Object(r.useState)(t||o.b.DEFAULT_VIEW),u=c[0],l=c[1];return Object(r.useEffect)((function(){n&&n(u)}),[u]),s("div",{className:"shop-header"},s("div",{className:"shop-header__view"},s("div",{className:"shop-header__view__icon"},s("a",{href:"#",className:"grid"===u?"active":"",onClick:function(e){e.preventDefault(),l("grid")}},s("i",{className:"fas fa-th"})),s("a",{href:"#",className:"list"===u?"active":"",onClick:function(e){e.preventDefault(),l("list")}},s("i",{className:"fas fa-bars"}))),"grid"===u&&s("h5",{className:"shop-header__page"},"Shop Roasted Coffee")),s(i.a,{options:o.b.SORT_TYPES,getValue:a}))}},"fg+H":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("cpVT"),a=n("q1tI"),i=n.n(a),o=n("/LDh"),s=n("TSYQ"),c=n.n(s),u=i.a.createElement;function l(e){for(var t=e.gridColClass,n=e.listColClass,a=e.fiveCol,i=e.view,s=e.data,l=[5],f=0;f<Math.round(s.length/5);f++)l.push(l[f]+6);return u("div",{className:"shop-products"},"grid"===i?u("div",{className:"shop-products__grid"},s&&u("div",{className:"row"},s.map((function(e,n){return a&&l.includes(n)?u("div",{key:n,className:"w-100"}):u("div",{key:n,className:c()(t,{"five-col":a})},u(o.a,{data:e}))})))):u("div",{className:"shop-products__list"},s&&u("div",{className:"row"},s.map((function(e,t){return u("div",{key:t,className:n},u(o.a,Object(r.a)({type:i,data:e},"type","list")))})))))}},"mK+b":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));var r=function(e,t){return t?e.find((function(e){return e.slug.toLowerCase()===t.toLowerCase()})):null},a=function(e,t,n){function r(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=a?-1:1;return e.slice(0,n||e.length).sort((function(e,t){return e[r]<t[r]?-1*i:e[r]>t[r]?1*i:0}))}return t&&"default"!==t?"az"===t?r(e,"name"):"za"===t?r(e,"name",!0):"lowToHigh"===t?r(e,"price"):"highToLow"===t?r(e,"price",!0):e.slice(0,n||e.length):e},i=function(e,t,n,r){return t&&!n?e.filter((function(e){return e.price>t})):!t&&n?e.filter((function(e){return e.price<n})):t||n?e.filter((function(e){return e.price>t&&e.price<n})):e},o=function(e,t){return t?e.filter((function(e){return e.brand.toLowerCase()===t.toLowerCase()})):e},s=function(e,t,n,r,s,c,u){var l;if(n){var f=function(e,t,n,r){var a=(t=t&&"all"===t.toLowerCase()?"":t)?e.filter((function(e){return e.category.toLowerCase()===t.toLowerCase()})):e;if(n&&"new"===n){var i=a.filter((function(e){return e.new}));return i.slice(0,r||i.length)}return a&&a.slice(0,r||a.length)}(e,n);if(s&&!c){var d=i(f,r,s);l=a(d,t)}else if(!s&&c){var p=o(f,c);l=a(p,t)}else if(s&&c){var v=o(f,c),g=i(f,r,s),h=v.filter((function(e){return g.some((function(t){return e.id===t.id}))}));l=a(h,t)}else l=a(f,t)}else l=a(e,t);return l.slice(0,u||e.length)}},o96S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n("vg2q")}])},vg2q:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("2vfM"),o=n("m9Y6"),s=n("mK+b"),c=n("6QH/"),u=n("iagI"),l=n("fg+H"),f=n("P7bw"),d=n("Npp4"),p=a.a.createElement;t.default=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],a=Object(r.useState)(),v=a[0],g=a[1],h=Object(r.useState)(),m=h[0],w=h[1],C=Object(r.useState)(1),_=C[0],N=C[1],b=Object(r.useState)([]),S=b[0],O=b[1];return Object(r.useEffect)((function(){var e=Object(s.c)(u,m);O(e.slice(t,t+12))}),[t,m]),p(c.a,{title:"Shop Our Coffee",container:"wide"},p(o.a,{title:"Shop Our Coffee"},p(o.b,{name:"Home"}),p(o.b,{name:"Shop",current:!0})),p("div",{className:"shop"},p("div",{className:"container-full-half"},p(f.a,{view:v,getCurrentSort:w,getCurrentView:function(e){return g(e)}}),p(l.a,{gridColClass:"col-12 col-sm-6 col-md-4 col-lg-3",listColClass:"col-12 col-lg-6",view:v,data:S}),p(i.a,{pageContainerClass:"paginator",totalRecords:u.length,pageLimit:12,pageNeighbours:2,setOffset:n,currentPage:_,setCurrentPage:N}))),p(d.a,null))}}},[["o96S",1,2,0,3,4,5,6,7,8]]]);