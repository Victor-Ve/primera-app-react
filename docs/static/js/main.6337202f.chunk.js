(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=n(1),l=n(8),o=function(e){var t=e.setCategorias,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},className:"indigo lighten-5"}))},s=n(4),m=n.n(s),p=n(7),d=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=15&api_key=4Hlg5kdvpZ7JtxswAPz2GtQNBpkJ7zOA"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__zoomInDown"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.categoria,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif Expert app"),r.a.createElement(o,{setCategorias:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{categoria:e,key:e})}))))};n(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6337202f.chunk.js.map