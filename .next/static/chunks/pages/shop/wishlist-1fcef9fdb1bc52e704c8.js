_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"6QH/":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),i=n("g4pe"),s=n.n(i),l=n("PmzM"),c=n("zlC1"),u=n("YFqc"),o=n.n(u),d=n("VOjt"),m=n("brf1"),h=n("kLkQ"),f=r.a.createElement;function p(t){var e=t.hide,n=t.container;return f("div",{className:"menu -style-3"},f("div",{className:Object(h.c)(n)},f("div",{className:"menu__wrapper"},f(o.a,{href:"/"},f("a",{className:"menu__wrapper__logo"},f("img",{src:"/assets/images/logo-white.png",alt:"Logo"}))),f(d.a,{className:"-white"}),f(m.a,{hide:e,white:!0,className:"-white"}))))}var w=r.a.createElement;var b=r.a.createElement,_=Object(l.a)((function(t){return w(r.a.Fragment,null,w(p,t))}));function g(t){return b(r.a.Fragment,null,b(s.a,null,b("title",null,t.title||"Yego Coffee")),b(_,{container:t.container}),t.children,b(c.a,null))}},"8hBj":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=n("g9Xf"),r=function(t){return{type:a.c.ADD_TO_WISHLIST,product:t}},i=function(t){return{type:a.c.REMOVE_FROM_WISHLIST,productId:t}}},GDHa:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),i=n("/MKj"),s=n("YFqc"),l=n.n(s),c=n("FGyW"),u=n("6QH/"),o=n("m9Y6"),d=n("kLkQ"),m=n("wQtD"),h=n("8hBj"),f=n("Npp4"),p=r.a.createElement;e.default=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.wishlistReducer})),n=Object(i.c)((function(t){return t.cartReducer})),a=function(t){return n.find((function(e){return e.id===t}))};return p(u.a,{title:"Wishlist"},p(o.a,{title:"Wishlist"},p(o.b,{name:"Home"}),p(o.b,{name:"Shop"}),p(o.b,{name:"Wishlist",current:!0})),p("div",{className:"wishlist"},p("div",{className:"container"},e&&0!==e.length?p("div",{className:"wishlist__table"},p("div",{className:"wishlist__table__wrapper"},p("table",null,p("colgroup",null,p("col",{style:{width:"40%"}}),p("col",{style:{width:"20%"}}),p("col",{style:{width:"20%"}}),p("col",{style:{width:"20%"}})),p("thead",null,p("tr",null,p("th",null,"Product"),p("th",null,"Unit Price"),p("th",null,"Stock"),p("th",null))),p("tbody",null,e.map((function(e){return p("tr",{key:e.id},p("td",null,p("div",{className:"wishlist-product"},p("div",{className:"wishlist-product__image"},p("img",{src:e.thumbImage[0],alt:e.name})),p("div",{className:"wishlist-product__content"},p("h5",null,e.category),p(l.a,{href:"/shop/product/[slug]",as:"/shop/product/"+e.slug},p("a",null,e.name))))),p("td",null,Object(d.a)(e.price)),p("td",null,e.quantity>0?"In stock":"Out stock"),p("td",null,p("a",{href:"#",className:"btn -dark ".concat(a(e.id)?"-disable":""),onClick:function(n){return function(e,n){if(e.preventDefault(),!a(n.id))return t(Object(m.a)(n)),c.b.success("Product added to cart !")}(n,e)}},a(e.id)?"Added to cart":"Add to cart"),p("a",{className:"remove-btn",href:"#",onClick:function(n){return function(e,n){return e.preventDefault(),t(Object(h.b)(n)),c.b.error("Product removed from wishlist")}(n,e.id)}},p("i",{className:"fal fa-times"}))))})))))):p("div",{className:"wishlist__empty"},p("h3",null,"No product in wishlist")))),p(f.a,null))}},Npp4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=n("OS56"),s=n.n(i),l=r.a.createElement;function c(){return l("div",{className:"instagram-two"},l(s.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},Array.from(Array(6),(function(t,e){return l("a",{key:e,href:"https://www.instagram.com/",className:"slider-item"},l("img",{src:""+"/assets/images/instagram/InstagramTwo/".concat(e+1,".png"),alt:"Instagram image"}))}))))}},m8Ji:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/wishlist",function(){return n("GDHa")}])},m9Y6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a).a.createElement,i=function(t){var e=t.name,n=t.current;return r("li",{className:n&&"active"},e)},s=function(t){var e=t.title,n=t.children;return r("div",{className:"breadcrumb"},r("div",{className:"container"},r("h2",null,e),r("ul",null,n)))}}},[["m8Ji",1,2,0,3,4,5,6]]]);