(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(14),n(2)),s=n(3),l=n(5),u=n(4),h=n(1),m=n(6),f=(n(15),"https://hn.algolia.com/api/v1"),d="".concat(f).concat("/search","?").concat("query=").concat("redux");console.log(d);var v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={result:null,searchTerm:"redux"},n.setSearchTopStories=n.setSearchTopStories.bind(Object(h.a)(n)),n.onDismiss=n.onDismiss.bind(Object(h.a)(n)),n.onSearchChange=n.onSearchChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setSearchTopStories",value:function(e){this.setState({result:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.searchTerm;fetch("".concat(f).concat("/search","?").concat("query=").concat(t)).then((function(e){return e.json()})).then((function(t){return e.setSearchTopStories(t)})).catch((function(e){return e}))}},{key:"onDismiss",value:function(e){alert((function(t){return t.objectID!==e}));var t=this.state.list.filter((function(t){return t.objectID!==e}));this.setState({list:t})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.searchTerm,n=e.result;return n?r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(p,{value:t,onChange:this.onSearchChange},"Search")),r.a.createElement(y,{list:n.hits,pattern:t,onDismiss:this.onDismiss})):null}}]),t}(a.Component),p=function(e){var t=e.value,n=e.onChange,a=e.children;return r.a.createElement("form",null,a,r.a.createElement("input",{type:"text",value:t,onChange:n}))},b={width:"40%"},g={width:"30%"},w={width:"10%"},y=function(e){var t,n=e.list,a=e.pattern,o=e.onDismiss;return r.a.createElement("div",{className:"table"},n.filter((t=a,function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:b},r.a.createElement("a",{href:e.url},e.title),r.a.createElement("br",null)),r.a.createElement("span",{style:g},"Author: ",e.author),r.a.createElement("br",null),r.a.createElement("span",{style:w},"Comments: ",e.num_comments),r.a.createElement("br",null),r.a.createElement("span",{style:w},"Points: ",e.points),r.a.createElement("br",null),r.a.createElement("span",{style:w},r.a.createElement(E,{onClick:function(){return o(e.objectID)},className:"button-inline"},"Dismiss")))})))},E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.className,a=void 0===n?"":n,o=e.children;return r.a.createElement("button",{onClick:t,className:a,type:"button"},o)}}]),t}(a.Component),k=v,j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4f8303d4.chunk.js.map