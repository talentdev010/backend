(this["webpackJsonpqr-quebec"]=this["webpackJsonpqr-quebec"]||[]).push([[3],{1378:function(e,t,n){},1383:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(38),s=n.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,1814)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},l=n(35);n(61),n(1382);function d(){document.documentElement.style.setProperty("--scrollbar-width",window.innerWidth-document.documentElement.clientWidth+"px")}window.addEventListener("resize",d,!1),document.addEventListener("DOMContentLoaded",d,!1),window.addEventListener("load",d);var p,f=n(6),h=n(7),b=n(10),j=n(9),m=n(24),v=n(11),x=(n(62),n(63),n(4)),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"alert alert-great-danger invalid-crash--header mt-3",role:"alert",children:Object(x.jsx)("span",{className:"ms-2",children:"Erreur interne"})}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header",children:"Une erreur interne s'est produite"}),Object(x.jsxs)("div",{className:"card-body fs-6",children:["Une erreur interne s'est produite et QR Qu\xe9bec a plant\xe9.",Object(x.jsx)("div",{className:"mt-3 mb-3 text-center",children:Object(x.jsx)("a",{className:"btn btn-qrqc",href:"/",children:"Relancer l'application"})}),"Si cette erreur se reproduit de nouveau, veuillez envoyer les informations ci-dessous \xe0 l'adresse ",Object(x.jsx)("a",{href:"mailto:support@kyber.studio",children:"support@kyber.studio"})," afin que nous investiguions la situation."]}),Object(x.jsxs)("div",{className:"card-footer",children:[Object(x.jsx)("div",{className:"text-qrqc fw-bold",children:"Erreur technique:"}),Object(x.jsx)("div",{className:"text-muted fs-6 mt-1",children:Object(x.jsx)("pre",{children:this.props.error&&this.props.error.toString()})}),Object(x.jsx)("div",{className:"text-qrqc fw-bold mt-3",children:"Call stack:"}),Object(x.jsx)("div",{className:"text-muted fs-6 mt-1",children:Object(x.jsx)("pre",{children:this.props.error&&this.props.error.stack&&this.props.error.stack.toString()})}),Object(x.jsx)("div",{className:"text-qrqc fw-bold mt-3",children:"Component stack:"}),Object(x.jsx)("div",{className:"text-muted fs-6",children:Object(x.jsx)("pre",{children:this.props.errorInfo&&this.props.errorInfo.componentStack&&this.props.errorInfo.componentStack.toString()})})]})]}),Object(x.jsx)("br",{})]})}}]),n}(r.Component),g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1,error:null,errorInfo:null},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.hasError?Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)(O,{error:this.state.error,errorInfo:this.state.errorInfo})}):this.props.children}}]),n}(r.Component),y=(n(65),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return this.props.newServiceWorkerDetected?Object(x.jsxs)("div",{className:"toast show p-3",role:"alert","aria-live":"assertive","aria-atomic":"true",children:[Object(x.jsxs)("div",{className:"toast-header text-qrqc",children:[Object(x.jsx)("strong",{className:"me-auto",children:"Nouvelle version disponible !"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]}),Object(x.jsxs)("div",{className:"toast-body",children:["Une nouvelle version de ",Object(x.jsx)("span",{className:"text-qrqc fw-bold",children:"QR Qu\xe9bec"})," est maintenant install\xe9e !",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Relancez l'application pour en profiter !",Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("button",{type:"button",className:"btn btn-qrqc mt-4",onClick:this.props.onLoadNewServiceWorkerAccept,children:"Relancer"})})]})]}):null}}]),n}(r.Component)),w=Object(l.b)(y),N=n(45),k=n(18),q=n(20),P=n(44),C=n(49),I=n(29),S=n(5),E=n(8),z=n.n(E),A=n(13),D=(n(1378),n(31)),Q=["title","titleId"];function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H(e,t){var n=e.title,a=e.titleId,c=R(e,Q);return r.createElement("svg",L({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus",className:"svg-inline--fa fa-plus fa-w-12",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,p||(p=r.createElement("path",{fill:"currentColor",d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"})))}var U=r.forwardRef(H);n.p;n.p;var W,B=["title","titleId"];function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function F(e,t){var n=e.title,a=e.titleId,c=T(e,B);return r.createElement("svg",M({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"grip-lines",className:"svg-inline--fa fa-grip-lines fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,W||(W=r.createElement("path",{fill:"currentColor",d:"M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})))}var V=r.forwardRef(F),J=(n.p,n(36)),G=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={passports:[],loaded:!1},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.d)();case 2:t=e.sent,this.setState({passports:t,loaded:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:(this.state.loaded&&0===this.state.passports.length?"passports-home--empty":"")+" container-fluid",children:[this.state.loaded&&0===this.state.passports.length&&Object(x.jsx)("div",{className:"passports-home--empty-text",children:"Cliquez sur  + pour ajouter une preuve de vaccination !"}),this.state.passports.length>0&&Object(x.jsxs)("div",{className:"mt-3",children:[Object(x.jsx)(J.List,{values:this.state.passports,onChange:function(){var t=Object(A.a)(z.a.mark((function t(n){var r,a,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.oldIndex,a=n.newIndex,t.next=3,Object(q.h)(r,a);case 3:return t.next=5,Object(q.d)();case 5:c=t.sent,e.setState({passports:c});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),renderList:function(e){var t=e.children,n=e.props;return Object(x.jsx)("ol",Object(S.a)(Object(S.a)({},n),{},{className:"list-group mt-2",children:t}))},renderItem:function(t){var n=t.value,a=t.props;return Object(r.createElement)("div",Object(S.a)(Object(S.a)({},a),{},{className:"list-group-item list-group-item-action d-flex align-items-center no-select",key:"passport-"+n.uid.toString(),onClick:function(){e.props.history.push("/presenter/qr/"+n.uid)}}),Object(x.jsx)("div",{className:"me-3",children:Object(x.jsx)(I.QrCodeOutline,{height:"48px",width:"48px",color:D.a.qrqc})}),Object(x.jsx)("div",{className:"flex-fill",children:Object(x.jsx)("div",{className:"passport-home--name",children:n.name.toLocaleUpperCase()})}),Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center align-self-stretch",style:{width:"24px"},"data-movable-handle":!0,children:Object(x.jsx)(V,{height:"16px",width:"16px",color:D.a.disabled})}))}}),Object(x.jsx)("br",{})]}),Object(x.jsx)(m.b,{to:"/presenter/ajouter",children:Object(x.jsx)("button",{"aria-label":"Ajouter une preuve de vaccination",type:"button",className:"btn btn-qrqc btn-fab btn-fab-1st",children:Object(x.jsx)(U,{height:"32px",width:"32px",color:D.a.active})})}),!1]})}}]),n}(r.Component),X=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsAdd}}))})),Z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsAddConfirm}}))})),K=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsAddLimit}}))})),$=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsAddLimitPurchased}}))})),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsShow}}))})),Y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsDetail}}))})),ee=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsInvalidNotShc}}))})),te=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsInvalidAlg}}))})),ne=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsInvalidIssuer}}))})),re=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsInvalidSignature}}))})),ae=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1816)).then((function(e){return{default:e.PassportsInvalidError}}))})),ce=a.a.lazy((function(){return n.e(2).then(n.bind(null,1817)).then((function(e){return{default:e.HelpHome}}))})),se=a.a.lazy((function(){return n.e(2).then(n.bind(null,1817)).then((function(e){return{default:e.HelpRestorePurchases}}))}));var ie=a.a.lazy((function(){return n.e(6).then(n.bind(null,1818)).then((function(e){return{default:e.ErrorNotFound}}))})),oe=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(f.a)(this,n),r=t.call(this,e),k.config({name:"qr-quebec",version:1,size:4980736,storeName:"data",description:"QR Qu\xe9bec storage"}),Object(q.f)(),r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Object(P.a)()}},{key:"render",value:function(){return Object(x.jsx)(N.b,{options:{"client-id":"Ab1t1GgfHSTvD7HwDriRphBnIvRyP3tg9b2GfQiLCX8yRCkkAeQKGd3Z35kk2oF7umfDNl1473ZIiNvX",currency:"CAD",locale:"fr_CA"},children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)("nav",{className:"navbar navbar-dark fixed-top bg-qrqc",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"navbar-brand d-flex align-items-center",children:[Object(x.jsx)("div",{className:"navbar-appicon d-flex",children:Object(x.jsx)("img",{src:C.a,alt:"Logo",width:"30",height:"30"})}),Object(x.jsx)("span",{className:"navbar-apptitle ms-1",children:"QR Qu\xe9bec"}),""]})})}),Object(x.jsxs)("main",{children:[Object(x.jsx)("div",{id:"main-container",children:Object(x.jsx)(g,{children:Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{path:"/",exact:!0,children:Object(x.jsx)(v.a,{to:"/presenter"})}),Object(x.jsx)(v.b,{path:"/presenter",exact:!0,component:G}),Object(x.jsx)(r.Suspense,{fallback:Object(x.jsxs)("div",{className:"d-flex flex-column align-items-center my-5 py-5 w-100",children:[Object(x.jsx)("div",{className:"spinner-border text-qrqc",role:"status",children:Object(x.jsx)("span",{className:"visually-hidden",children:"Chargement..."})}),Object(x.jsx)("div",{className:"text-qrqc mt-3",children:"Chargement..."})]}),children:Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{path:"/presenter/ajouter",exact:!0,children:Object(x.jsx)(v.a,{to:"/presenter/ajouter/camera"})}),Object(x.jsx)(v.b,{path:"/presenter/ajouter/camera",exact:!0,component:X}),Object(x.jsx)(v.b,{path:"/presenter/confirmer",exact:!0,component:Z}),Object(x.jsx)(v.b,{path:"/presenter/ajouter/confirmer",exact:!0,component:Z}),Object(x.jsx)(v.b,{path:"/presenter/ajouter/limite",exact:!0,component:K}),Object(x.jsx)(v.b,{path:"/presenter/ajouter/limite/merci",exact:!0,component:$}),Object(x.jsx)(v.b,{path:"/presenter/qr/:uid",exact:!0,component:_}),Object(x.jsx)(v.b,{path:"/presenter/qr/:uid/detail",exact:!0,component:Y}),Object(x.jsx)(v.b,{path:"/presenter/invalide/format",exact:!0,component:ee}),Object(x.jsx)(v.b,{path:"/presenter/invalide/alg",exact:!0,component:te}),Object(x.jsx)(v.b,{path:"/presenter/invalide/issuer",exact:!0,component:ne}),Object(x.jsx)(v.b,{path:"/presenter/invalide/signature",exact:!0,component:re}),Object(x.jsx)(v.b,{path:"/presenter/invalide/erreur",exact:!0,component:ae}),Object(x.jsx)(v.b,{path:"/aide",exact:!0,component:ce}),Object(x.jsx)(v.b,{path:"/aide/recuperer",exact:!0,component:se}),!1,!1,Object(x.jsx)(v.b,{path:"*",component:ie})]})})]})})}),Object(x.jsx)(w,{})]}),Object(x.jsx)("footer",{className:"footer navbar-dark fixed-bottom bg-qrqc",children:Object(x.jsxs)("div",{className:"container-fluid d-flex justify-content-center align-items-center",children:[Object(x.jsxs)(m.c,{"aria-label":"Pr\xe9senter un passeport",className:"footer-item",activeClassName:"active",to:"/presenter",children:[Object(x.jsx)(I.QrCodeSharp,{}),Object(x.jsx)("br",{}),"Pr\xe9senter"]}),Object(x.jsxs)(m.c,{"aria-label":"Aide sur QR Qu\xe9bec",className:"footer-item",activeClassName:"active",to:"/aide",children:[Object(x.jsx)(I.HelpCircleSharp,{}),Object(x.jsx)("br",{}),"Aide"]})]})})]})})}}]),n}(r.Component);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):o(t,e)}))}}({onUpdate:l.a}),u()},20:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"h",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(13),s=n(18),i=n(23),o=n(50),u=n(1384),l=n(36),d=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getItem("userUuid");case 2:if(null!==(t=e.sent)){e.next=8;break}return n=Object(u.a)(),e.next=7,s.setItem("userUuid",n);case 7:return e.abrupt("return",n);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function p(){var e="lmpUs0RQXhhzIIHa";return e.split("").map((function(e){return e.charCodeAt(0)}))}function f(e){return o(e)}function h(e){var t=i.utils.utf8.toBytes(e),n=new i.ModeOfOperation.ctr(p()).encrypt(t);return i.utils.hex.fromBytes(n)}function b(e){var t=i.utils.hex.toBytes(e),n=new i.ModeOfOperation.ctr(p()).decrypt(t);return i.utils.utf8.fromBytes(n)}var j=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getItem("passports");case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.map((function(e){return e.qrData=b(e.encryptedQrData),e})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.encryptedQrData=h(e.qrData),e.qrData="",e})),e.next=3,s.setItem("passports",n);case 3:return e.next=5,s.setItem("passportCount",n.length);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=(n=e.sent).filter((function(e){return e.qrHash===f(t)})),e.abrupt("return",0!==n.length);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return r=e.sent,(c={}).name=t,c.qrData=n,c.qrHash=f(n),c.uid=Date.now().toString(),r.push(c),e.next=11,m(r);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=(n=e.sent).filter((function(e){return e.uid!==t})),e.next=6,m(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return r=e.sent,c=Object(l.arrayMove)(r,t,n),e.next=6,m(c);case 6:return e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getItem("passportCount");case 2:return t=e.sent,e.abrupt("return",t||0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,s.getItem("passportVersion");case 3:if((t=e.sent)&&!(t<2)){e.next=9;break}return e.next=7,m([]);case 7:return e.next=9,s.setItem("passportVersion",2);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={dark:"hsl(210, 11%, 15%)",qrqc:"hsl(218, 40%, 32%)",active:"hsl(210, 17%, 98%)",inactive:"hsl(208, 24%, 55%)",muted:"hsl(208, 7%, 46%)",disabled:"hsl(208, 7%, 80%)"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(8),a=n.n(r),c=n(13),s=n(20),i=n(48),o=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=fetch,e.t1="/sync/usage/stats",e.t2={"Content-Type":"application/json"},e.t3=JSON,e.next=7,Object(s.e)();case 7:return e.t4=e.sent,e.t5=i.a,e.t6=navigator.userAgent,e.next=12,Object(s.c)();case 12:return e.t7=e.sent,e.t8={userUuid:e.t4,appVersion:e.t5,userAgent:e.t6,passportCount:e.t7},e.t9=e.t3.stringify.call(e.t3,e.t8),e.t10={method:"POST",headers:e.t2,body:e.t9},e.next=18,(0,e.t0)(e.t1,e.t10);case 18:e.next=23;break;case 20:e.prev=20,e.t11=e.catch(0),console.error(e.t11);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},48:function(e){e.exports=JSON.parse('{"a":"1.0.1"}')},49:function(e,t,n){"use strict";t.a=n.p+"static/media/icon.d89d07a9.svg"},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){}},[[1383,4,5]],[0,1,6,2]]);
//# sourceMappingURL=main.d2e7c4fa.chunk.js.map