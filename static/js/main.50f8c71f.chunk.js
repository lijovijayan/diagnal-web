(this["webpackJsonpdiagnal-web"]=this["webpackJsonpdiagnal-web"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),o=(n(24),n(25),n(5)),s=n(16),l=n(17),u=n(9),f=n(6),d=n(15),b=n(2),j=n.n(b),g=n(8),v=n(3),h=n(4),p=function(){function e(){Object(v.a)(this,e)}return Object(h.a)(e,null,[{key:"createAction",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{type:e,payload:t,error:n,meta:c}}}]),e}(),O=function(){function e(){Object(v.a)(this,e)}return Object(h.a)(e,null,[{key:"fetchMovies",value:function(){var e=Object(g.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("/diagnal-web","/repository/CONTENTLISTINGPAGE-PAGE").concat(t,".json"));case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,r=c.page,e.abrupt("return",{page:r["page-num-requested"],pageSize:r["page-size-requested"],totalRecords:r["total-content-items"],movies:r["content-items"].content.filter((function(e){return e.name.trim().toLowerCase().includes(n.trim().toLowerCase())})),searchKey:n});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),m=function(){function e(){Object(v.a)(this,e)}return Object(h.a)(e,null,[{key:"fetchMovies",value:function(t){return function(){var n=Object(g.a)(j.a.mark((function n(c,r){var a,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=r(),i=a.movies.searchKey,c(p.createAction(e.SET_LOADER,!0)),O.fetchMovies(t,i).then((function(t){c(p.createAction(e.FETCH_MOVIES,t))})).catch((function(t){c(p.createAction(e.FETCH_MOVIES,{},t))})).finally((function(){c(p.createAction(e.SET_LOADER,!1))}));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}},{key:"searchMovies",value:function(t){return function(){var n=Object(g.a)(j.a.mark((function n(c,r){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(p.createAction(e.SET_LOADER,!0)),O.fetchMovies(1,t).then((function(t){c(p.createAction(e.FETCH_MOVIES,t))})).catch((function(t){c(p.createAction(e.FETCH_MOVIES,{},t))})).finally((function(){c(p.createAction(e.SET_LOADER,!1))}));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]),e}();m.FETCH_MOVIES="MoviesAction.FETCH_MOVIES",m.SEARCH_MOVIES="MoviesAction.SEARCH_MOVIES",m.SET_LOADER="MoviesAction.SET_LOADER";var x={page:0,pageSize:20,totalRecords:0,movies:[],loading:!1,searchKey:""};var E=Object(o.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.FETCH_MOVIES:var n=e.movies;return n=t.payload.movies&&t.payload.page>1?[].concat(Object(d.a)(n),Object(d.a)(t.payload.movies)):t.payload.movies||[],Object(f.a)(Object(f.a)(Object(f.a)({},e),t.payload),{},{movies:n});case m.SET_LOADER:return Object(f.a)(Object(f.a)({},e),{},{loading:t.payload});default:return e}}}),y=(n(33),n(10)),S=(n(34),n(1)),w="/diagnal-web/images/placeholder_for_missing_posters.png",M=function(e){var t=e.src,n=e.alt,r=e.className,a=void 0===r?"":r,i=Object(c.useState)(w),o=Object(y.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)(),f=Object(y.a)(u,2),d=f[0],b=f[1],j=Object(c.useRef)();return Object(c.useEffect)((function(){return d&&s!==t&&null!==j.current&&(IntersectionObserver?(j.current=new IntersectionObserver((function(e){e.forEach((function(e){(e.intersectionRatio>0||e.isIntersecting)&&(l(t),j.current.unobserve(d))}))}),{threshold:.01,rootMargin:"75%"}),j.current.observe(d)):l(t)),function(){j.current&&j.current.unobserve&&(j.current.unobserve(d),j.current=null)}}),[t,s,d]),Object(S.jsx)("img",{className:"".concat(a," lazy-image"),ref:b,src:s,alt:n,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){var t;e.target.classList.add("failed-loading"),l(w),null===(t=j.current)||void 0===t||t.unobserve(d),j.current=null},draggable:!1})},A=n(19),C="".concat("/diagnal-web","/images/search.png"),T="".concat("/diagnal-web","/images/Back.png");function R(e){var t=e.onChange,n=e.title,r=Object(c.useState)(!1),a=Object(y.a)(r,2),i=a[0],o=a[1],s=Object(c.useCallback)(Object(A.debounce)(t,400),[]);return Object(S.jsxs)("div",{class:"search-bar flex flex-row items-center ".concat(i?"show-search":""),children:[Object(S.jsx)("img",{className:"back-icon ml-3",src:T,alt:"search",draggable:!1}),Object(S.jsxs)("div",{className:"flex-1 text-xl text-left flex flex-row justify-between items-center",children:[Object(S.jsx)("span",{className:"pl-3 header-title",children:n}),i&&Object(S.jsx)("input",{type:"text",class:"text-base search-input mx-3 px-3 flex-1",onChange:function(e){return s(e.target.value)},placeholder:"search here..."})]}),Object(S.jsx)("img",{className:"search-icon mr-3",src:C,alt:"search",draggable:!1,onClick:function(){i&&t(""),o(!i)}})]})}function _(e){var t=e.imageURL,n=e.name;return Object(S.jsxs)("div",{className:"movie-card flex flex-col xl:mb-6 lg:mb-6 md:mb-5 mb-4  xl:p-3 lg:p-3 md:p-2 p-2",children:[Object(S.jsx)(M,{src:t,alt:n,className:"mb-1"}),Object(S.jsx)("div",{children:n}),Object(S.jsx)("div",{className:"play-button",children:Object(S.jsx)("div",{className:"play"})})]})}n(38);function N(){var e=Object(u.b)(),t=Object(c.useRef)(null),n=Object(u.c)((function(e){return e.movies})),r=n.movies,a=n.page,i=n.pageSize,o=n.totalRecords,s=n.searchKey,l=Object(c.useMemo)((function(){return a*i<o}),[a,i,o]);return Object(c.useEffect)((function(){e(m.fetchMovies(1))}),[e]),Object(c.useEffect)((function(){t.current.scrollHeight<=t.current.clientHeight&&(null===s||void 0===s?void 0:s.length)>0&&l&&e(m.fetchMovies(+a+1))}),[e,l,r,a,s]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(R,{onChange:function(t){t!==s&&e(m.searchMovies(t))},title:"Romantic Comedy"}),Object(S.jsx)("div",{ref:t,className:"home-container xl:px-12 lg:px-9 md:px-6 px-3",onScroll:function(){return function(){if(t.current){var n=t.current,c=n.scrollTop,r=n.scrollHeight;c+n.clientHeight===r&&l&&e(m.fetchMovies(+a+1))}}()},children:r.length>0?Object(S.jsx)("div",{className:"grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 xl:gap-x-6 lg:gap-x-5 md:gap-x-4 gap-x-3",children:r.map((function(e){return Object(S.jsx)(_,{imageURL:"".concat("/diagnal-web","/images/").concat(e["poster-image"]),name:e.name})}))}):Object(S.jsx)("div",{className:"flex items-center justify-center h-full w-full",children:Object(S.jsx)("span",{children:"No Results found !"})})})]})}var L=Object(l.composeWithDevTools)(Object(o.applyMiddleware)(s.a)),I=Object(o.createStore)(E,L);var k=function(){return Object(S.jsx)(u.a,{store:I,children:Object(S.jsx)("div",{className:"app-container",children:Object(S.jsx)(N,{})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(k,{})}),document.getElementById("root")),H()}},[[39,1,2]]]);
//# sourceMappingURL=main.50f8c71f.chunk.js.map