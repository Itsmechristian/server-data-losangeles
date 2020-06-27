var app=function(){"use strict";function e(){}function l(e){return e()}function t(){return Object.create(null)}function a(e){e.forEach(l)}function n(e){return"function"==typeof e}function o(e,l){return e!=e?l==l:e!==l||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}function b(e,l){e.appendChild(l)}function f(e,l,t){e.insertBefore(l,t||null)}function u(e){e.parentNode.removeChild(e)}function r(e){return document.createElement(e)}function s(e){return document.createTextNode(e)}function d(){return s(" ")}function c(){return s("")}function p(e,l,t,a){return e.addEventListener(l,t,a),()=>e.removeEventListener(l,t,a)}function m(e,l,t){null==t?e.removeAttribute(l):e.getAttribute(l)!==t&&e.setAttribute(l,t)}function v(e,l){l=""+l,e.data!==l&&(e.data=l)}function y(e,l){(null!=l||e.value)&&(e.value=l)}let h;function g(e){h=e}function x(){if(!h)throw new Error("Function called outside component initialization");return h}const $=[],_=[],w=[],k=[],E=Promise.resolve();let N=!1;function M(e){w.push(e)}let j=!1;const A=new Set;function S(){if(!j){j=!0;do{for(let e=0;e<$.length;e+=1){const l=$[e];g(l),L(l.$$)}for($.length=0;_.length;)_.pop()();for(let e=0;e<w.length;e+=1){const l=w[e];A.has(l)||(A.add(l),l())}w.length=0}while($.length);for(;k.length;)k.pop()();N=!1,j=!1,A.clear()}}function L(e){if(null!==e.fragment){e.update(),a(e.before_update);const l=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,l),e.after_update.forEach(M)}}const O=new Set;function z(e,l){-1===e.$$.dirty[0]&&($.push(e),N||(N=!0,E.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[l/31|0]|=1<<l%31}function C(o,i,b,f,r,s,d=[-1]){const c=h;g(o);const p=i.props||{},m=o.$$={fragment:null,ctx:null,props:s,update:e,not_equal:r,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:t(),dirty:d};let v=!1;if(m.ctx=b?b(o,p,(e,l,...t)=>{const a=t.length?t[0]:l;return m.ctx&&r(m.ctx[e],m.ctx[e]=a)&&(m.bound[e]&&m.bound[e](a),v&&z(o,e)),l}):[],m.update(),v=!0,a(m.before_update),m.fragment=!!f&&f(m.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);m.fragment&&m.fragment.l(e),e.forEach(u)}else m.fragment&&m.fragment.c();i.intro&&((y=o.$$.fragment)&&y.i&&(O.delete(y),y.i(x))),function(e,t,o){const{fragment:i,on_mount:b,on_destroy:f,after_update:u}=e.$$;i&&i.m(t,o),M(()=>{const t=b.map(l).filter(n);f?f.push(...t):a(t),e.$$.on_mount=[]}),u.forEach(M)}(o,i.target,i.anchor),S()}var y,x;g(c)}function P(e,l,t){const a=e.slice();return a[15]=l[t],a[16]=l,a[17]=t,a}function U(e){let l,t,a,n,o=("default"===e[15].type||"button"===e[15].type)&&X(e),i="slider"===e[15].type&&Y(e),b="check"===e[15].type&&q(e),r="text"===e[15].type&&B(e);return{c(){o&&o.c(),l=d(),i&&i.c(),t=d(),b&&b.c(),a=d(),r&&r.c(),n=c()},m(e,u){o&&o.m(e,u),f(e,l,u),i&&i.m(e,u),f(e,t,u),b&&b.m(e,u),f(e,a,u),r&&r.m(e,u),f(e,n,u)},p(e,f){"default"===e[15].type||"button"===e[15].type?o?o.p(e,f):(o=X(e),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null),"slider"===e[15].type?i?i.p(e,f):(i=Y(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),"check"===e[15].type?b?b.p(e,f):(b=q(e),b.c(),b.m(a.parentNode,a)):b&&(b.d(1),b=null),"text"===e[15].type?r?r.p(e,f):(r=B(e),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(e){o&&o.d(e),e&&u(l),i&&i.d(e),e&&u(t),b&&b.d(e),e&&u(a),r&&r.d(e),e&&u(n)}}}function X(e){let l,t,a,n,o=e[15].label+"";function d(...l){return e[7](e[15],e[17],...l)}return{c(){l=r("item"),t=s(o),m(l,"class",a=i("button"===e[15].type?"button":"")+" svelte-3v9ux8")},m(e,a,o){f(e,l,a),b(l,t),o&&n(),n=p(l,"click",d)},p(n,b){e=n,4&b&&o!==(o=e[15].label+"")&&v(t,o),4&b&&a!==(a=i("button"===e[15].type?"button":"")+" svelte-3v9ux8")&&m(l,"class",a)},d(e){e&&u(l),n()}}}function Y(e){let l,t,n,o,i,c,h,g,x,$=e[15].label+"";function _(){e[8].call(c,e[15])}function w(...l){return e[9](e[15],e[17],...l)}function k(...l){return e[10](e[15],e[17],...l)}return{c(){l=r("item"),t=r("div"),n=s($),o=d(),i=r("div"),c=r("input"),m(t,"class","svelte-3v9ux8"),m(c,"type","range"),m(c,"min",h=e[15].min),m(c,"max",g=e[15].max),m(c,"class","svelte-3v9ux8"),m(i,"class","svelte-3v9ux8"),m(l,"class","slider svelte-3v9ux8")},m(u,r,s){f(u,l,r),b(l,t),b(t,n),b(l,o),b(l,i),b(i,c),y(c,e[15].value),s&&a(x),x=[p(c,"change",_),p(c,"input",_),p(l,"click",w),p(l,"wheel",k)]},p(l,t){e=l,4&t&&$!==($=e[15].label+"")&&v(n,$),4&t&&h!==(h=e[15].min)&&m(c,"min",h),4&t&&g!==(g=e[15].max)&&m(c,"max",g),4&t&&y(c,e[15].value)},d(e){e&&u(l),a(x)}}}function q(e){let l,t,n,o,i,c=e[15].label+"";function y(){e[11].call(o,e[15])}function h(...l){return e[12](e[15],e[17],...l)}return{c(){l=r("item"),t=s(c),n=d(),o=r("input"),m(o,"type","checkbox"),m(o,"class","svelte-3v9ux8"),m(l,"class","check svelte-3v9ux8")},m(u,r,s){f(u,l,r),b(l,t),b(l,n),b(l,o),o.checked=e[15].value,s&&a(i),i=[p(o,"change",y),p(l,"click",h)]},p(l,a){e=l,4&a&&c!==(c=e[15].label+"")&&v(t,c),4&a&&(o.checked=e[15].value)},d(e){e&&u(l),a(i)}}}function B(e){let l,t,n,o,i,c,h,g,x,$=e[15].label+"";function _(){e[13].call(c,e[15])}function w(...l){return e[14](e[15],e[17],...l)}return{c(){l=r("item"),t=r("div"),n=s($),o=d(),i=r("div"),c=r("input"),g=d(),m(t,"class","svelte-3v9ux8"),m(c,"type","text"),m(c,"placeholder",h=e[15].placeholder||""),m(c,"autocomplete","off"),m(c,"autocorrect","off"),m(c,"autocapitalize","off"),m(c,"spellcheck","false"),m(c,"class","svelte-3v9ux8"),m(i,"class","svelte-3v9ux8"),m(l,"class","text svelte-3v9ux8")},m(u,r,s){f(u,l,r),b(l,t),b(t,n),b(l,o),b(l,i),b(i,c),y(c,e[15].value),b(l,g),s&&a(x),x=[p(c,"input",_),p(l,"click",w)]},p(l,t){e=l,4&t&&$!==($=e[15].label+"")&&v(n,$),4&t&&h!==(h=e[15].placeholder||"")&&m(c,"placeholder",h),4&t&&c.value!==e[15].value&&y(c,e[15].value)},d(e){e&&u(l),a(x)}}}function F(e){let l,t=e[15].visible&&U(e);return{c(){t&&t.c(),l=c()},m(e,a){t&&t.m(e,a),f(e,l,a)},p(e,a){e[15].visible?t?t.p(e,a):(t=U(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&u(l)}}}function K(l){let t,a,n,o,c,p,y=l[2],h=[];for(let e=0;e<y.length;e+=1)h[e]=F(P(l,y,e));return{c(){t=r("main"),a=r("main-wrap"),n=r("item"),o=s(l[1]),c=d();for(let e=0;e<h.length;e+=1)h[e].c();var e,b,f;m(n,"class","title svelte-3v9ux8"),f="svelte-3v9ux8",(b="class")in(e=a)?e[b]=f:m(e,b,f),m(t,"class",p=i(l[0].split("|").map(T).join(" "))+" svelte-3v9ux8")},m(e,l){f(e,t,l),b(t,a),b(a,n),b(n,o),b(a,c);for(let e=0;e<h.length;e+=1)h[e].m(a,null)},p(e,[l]){if(2&l&&v(o,e[1]),28&l){let t;for(y=e[2],t=0;t<y.length;t+=1){const n=P(e,y,t);h[t]?h[t].p(n,l):(h[t]=F(n),h[t].c(),h[t].m(a,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=y.length}1&l&&p!==(p=i(e[0].split("|").map(T).join(" "))+" svelte-3v9ux8")&&m(t,"class",p)},i:e,o:e,d(e){e&&u(t),function(e,l){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(l)}(h,e)}}}const T=e=>"float-"+e;function D(e,l,t){let{float:a="left|top"}=l,{title:n="Untitled ESX Menu"}=l,{items:o=[{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0},{name:"foo",label:"bar",type:"default",visible:!0}]}=l,{_items:i=[]}=l;window.addEventListener("message",e=>{const l=e.data;switch(l.action){case"set":t(0,a=l.data.float||"left|top"),t(1,n=l.data.title||"Untitled ESX Menu"),t(5,o=l.data.items||[]);break;case"set_item":t(5,o[l.index][l.prop]=l.val,o),t(5,o=[...o])}});const b=()=>{t(2,i.length=0,i);for(let e=0;e<o.length;e++)(e=>{t(2,i[e]=new Proxy(o[e],{get:(e,l)=>e[l],set:(l,t,a)=>(l[t]=a,window.parent.postMessage({action:"item.change",index:e,prop:t,val:a},"*"),!0),has:(e,l)=>void 0!==e[l],ownKeys:e=>Object.keys(e)}),i)})(e);t(2,i=[...i])};var f;f=()=>{window.parent.postMessage({action:"ready"},"*")},x().$$.on_mount.push(f),function(e){x().$$.before_update.push(e)}(b);const u=(e,l,t)=>{window.parent.postMessage({action:"item.click",index:t},"*")},r=(e,l,t)=>{e.deltaY>0&&l.value>l.min?l.value--:e.deltaY<0&&l.value<l.max&&l.value++};return e.$set=e=>{"float"in e&&t(0,a=e.float),"title"in e&&t(1,n=e.title),"items"in e&&t(5,o=e.items),"_items"in e&&t(2,i=e._items)},[a,n,i,u,r,o,b,(e,l,t)=>u(0,0,l),function(e){var l;e.value=""===(l=this.value)?void 0:+l,t(2,i)},(e,l,t)=>u(0,0,l),(e,l,t)=>r(t,e),function(e){e.value=this.checked,t(2,i)},(e,l,a)=>{u(0,0,l),t(2,e.value=!e.value,i)},function(e){e.value=this.value,t(2,i)},(e,l,t)=>u(0,0,l)]}return new class extends class{$destroy(){!function(e,l){const t=e.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(l),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=e}$on(e,l){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(l),()=>{const e=t.indexOf(l);-1!==e&&t.splice(e,1)}}$set(){}}{constructor(e){super(),C(this,e,D,K,o,{float:0,title:1,items:5,_items:2})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
