_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{P7bw:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("lmm/"),s=n("J+Fc"),o=a.a.createElement;function c(e){var t=e.curentView,n=e.getCurrentView,a=e.getCurrentSort,c=Object(r.useState)(t||s.b.DEFAULT_VIEW),u=c[0],l=c[1];return Object(r.useEffect)((function(){n&&n(u)}),[u]),o("div",{className:"shop-header"},o("div",{className:"shop-header__view"},o("div",{className:"shop-header__view__icon"},o("a",{href:"#",className:"grid"===u?"active":"",onClick:function(e){e.preventDefault(),l("grid")}},o("i",{className:"fas fa-th"})),o("a",{href:"#",className:"list"===u?"active":"",onClick:function(e){e.preventDefault(),l("list")}},o("i",{className:"fas fa-bars"}))),"grid"===u&&o("h5",{className:"shop-header__page"},"Shop Roasted Coffee")),o(i.a,{options:s.b.SORT_TYPES,getValue:a}))}},"Xnt+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/grid-3col",function(){return n("pfno")}])},"fg+H":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("cpVT"),a=n("q1tI"),i=n.n(a),s=n("/LDh"),o=n("TSYQ"),c=n.n(o),u=i.a.createElement;function l(e){for(var t=e.gridColClass,n=e.listColClass,a=e.fiveCol,i=e.view,o=e.data,l=[5],f=0;f<Math.round(o.length/5);f++)l.push(l[f]+6);return u("div",{className:"shop-products"},"grid"===i?u("div",{className:"shop-products__grid"},o&&u("div",{className:"row"},o.map((function(e,n){return a&&l.includes(n)?u("div",{key:n,className:"w-100"}):u("div",{key:n,className:c()(t,{"five-col":a})},u(s.a,{data:e}))})))):u("div",{className:"shop-products__list"},o&&u("div",{className:"row"},o.map((function(e,t){return u("div",{key:t,className:n},u(s.a,Object(r.a)({type:i,data:e},"type","list")))})))))}},"mK+b":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o}));var r=function(e,t){return t?e.find((function(e){return e.slug.toLowerCase()===t.toLowerCase()})):null},a=function(e,t,n){function r(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=a?-1:1;return e.slice(0,n||e.length).sort((function(e,t){return e[r]<t[r]?-1*i:e[r]>t[r]?1*i:0}))}return t&&"default"!==t?"az"===t?r(e,"name"):"za"===t?r(e,"name",!0):"lowToHigh"===t?r(e,"price"):"highToLow"===t?r(e,"price",!0):e.slice(0,n||e.length):e},i=function(e,t,n,r){return t&&!n?e.filter((function(e){return e.price>t})):!t&&n?e.filter((function(e){return e.price<n})):t||n?e.filter((function(e){return e.price>t&&e.price<n})):e},s=function(e,t){return t?e.filter((function(e){return e.brand.toLowerCase()===t.toLowerCase()})):e},o=function(e,t,n,r,o,c,u){var l;if(n){var f=function(e,t,n,r){var a=(t=t&&"all"===t.toLowerCase()?"":t)?e.filter((function(e){return e.category.toLowerCase()===t.toLowerCase()})):e;if(n&&"new"===n){var i=a.filter((function(e){return e.new}));return i.slice(0,r||i.length)}return a&&a.slice(0,r||a.length)}(e,n);if(o&&!c){var d=i(f,r,o);l=a(d,t)}else if(!o&&c){var p=s(f,c);l=a(p,t)}else if(o&&c){var v=s(f,c),h=i(f,r,o),m=v.filter((function(e){return h.some((function(t){return e.id===t.id}))}));l=a(m,t)}else l=a(f,t)}else l=a(e,t);return l.slice(0,u||e.length)}},pfno:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("2vfM"),s=n("m9Y6"),o=n("mK+b"),c=n("6QH/"),u=n("iagI"),l=n("fg+H"),f=n("P7bw"),d=n("Npp4"),p=a.a.createElement;t.default=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],a=Object(r.useState)(),v=a[0],h=a[1],m=Object(r.useState)(),g=m[0],w=m[1],C=Object(r.useState)(1),_=C[0],b=C[1],N=Object(r.useState)([]),S=N[0],E=N[1];return Object(r.useEffect)((function(){var e=Object(o.b)(u,g);E(e.slice(t,t+9))}),[t,g]),p(c.a,{title:"Shop Grid 3 columns"},p(s.a,{title:"Shop"},p(s.b,{name:"Home"}),p(s.b,{name:"Shop",current:!0})),p("div",{className:"shop"},p("div",{className:"container"},p(f.a,{view:v,getCurrentSort:w,getCurrentView:function(e){return h(e)}}),p(l.a,{gridColClass:"col-12 col-sm-6 col-md-4 ",listColClass:"col-12",view:v,data:S}),p(i.a,{pageContainerClass:"paginator",totalRecords:u.length,pageLimit:9,pageNeighbours:2,setOffset:n,currentPage:_,setCurrentPage:b}))),p(d.a,null))}}},[["Xnt+",1,2,0,3,4,5,6,7,8]]]);