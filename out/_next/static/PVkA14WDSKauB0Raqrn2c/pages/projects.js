(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4mXO":function(t,e,a){t.exports=a("7TPF")},"7TPF":function(t,e,a){a("AUvm"),t.exports=a("WEpk").Object.getOwnPropertySymbols},SpL8:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),o=a("R/WZ"),i=a("ZBNC"),c=a("TX+L"),s=a("vYYK"),l=a("VD++"),p=a("kOwS"),u=a("4mXO"),d=a.n(u),m=a("pLtp"),h=a.n(m);function g(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=h()(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(d.a){var o=d()(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var f=a("mVKy"),b=a("ofer"),w=Object(o.a)(function(t){return Object(i.a)({markedH2:{height:4,width:73,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH3:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH4:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH6:{height:2,width:28,display:"block",marginTop:t.spacing(.5),background:"currentColor"}})}),k={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function v(t){var e=w(),a=t.children,n=t.marked,o=void 0!==n&&n,i=t.variant,c=g(t,["children","marked","variant"]);return r.a.createElement(b.a,Object(p.a)({variantMapping:k,variant:i},c),a,o?r.a.createElement("span",{className:e["marked".concat(Object(f.a)(i))]}):null)}var j=a("YFqc"),y=a.n(j),O=Object(o.a)(function(t){var e,a,n;return Object(i.a)({tileWrapper:(e={position:"relative",display:"block",padding:t.spacing(0),borderRadius:0,height:"40vh"},Object(s.a)(e,t.breakpoints.down("sm"),{width:"100% !important",height:400}),Object(s.a)(e,"&:hover",{zIndex:1}),Object(s.a)(e,"&:hover $tileBackdrop",{opacity:.15}),Object(s.a)(e,"&:hover $tileMarked",{opacity:0}),Object(s.a)(e,"&:hover $tileTitle",{border:"4px solid currentColor"}),e),tileSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},tileBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,background:t.palette.common.black,opacity:.5,transition:t.transitions.create("opacity")},tileButton:(a={position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:t.spacing(2)},Object(s.a)(a,t.breakpoints.down("md"),{padding:t.spacing(1)}),Object(s.a)(a,"color",t.palette.primary.contrastText),a),tileTitle:Object(s.a)({position:"relative",padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},t.breakpoints.down("md"),{padding:t.spacing(1)}),tileSubtitle:(n={padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},Object(s.a)(n,t.breakpoints.down("md"),{padding:t.spacing(1)}),Object(s.a)(n,"width","85%"),n),tileMarked:{height:3,width:"65%",background:t.palette.common.white,position:"absolute",bottom:-2,left:"10",transition:t.transitions.create("opacity")}})});function x(t){var e=O(),a=t.tile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{href:"/projects/[pid]",as:"/projects/".concat(a.slug),passHref:!0},r.a.createElement(l.a,{className:e.tileWrapper,style:{width:a.width}},r.a.createElement("div",{className:e.tileSrc,style:{backgroundImage:"url(".concat(a.imageUrl,")")}}),r.a.createElement("div",{className:e.tileBackdrop}),r.a.createElement("div",{className:e.tileButton},r.a.createElement(v,{component:"h3",variant:"h2",color:"inherit",align:"left",className:e.tileTitle},a.title,r.a.createElement("div",{className:e.tileMarked})),r.a.createElement(v,{component:"p",variant:"subtitle1",className:e.tileSubtitle,color:"inherit"},a.subtitle)))))}var E=Object(o.a)(function(t){return Object(i.a)({tiles:{marginTop:t.spacing(4),display:"flex",flexWrap:"wrap"}})});function P(){var t=E(),e=c.a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.tiles},e.map(function(t){return r.a.createElement(x,{tile:t,key:t.slug})})))}function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))}a.d(e,"default",function(){return S})},"TX+L":function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"c",function(){return p}),a.d(e,"b",function(){return d});var n=a("ln6h"),r=a.n(n),o=a("eVuF"),i=a.n(o),c=a("O40h"),s=a("WC4K"),l=(a("zgjP"),s);function p(t){return u.apply(this,arguments)}function u(){return(u=Object(c.default)(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t,a){var n=l.find(function(t){return t.slug===e});n?fetch("https://raw.githubusercontent.com/stefanosAgelastos".concat(n.markdownUrlPath,"/README.md"),{headers:{Accept:"text/plain; charset=utf-8"}}).then(function(t){return t.text()}).then(function(e){return t(e)}):a(new Error("No project matches the slug"))}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t){var e=l.find(function(e){return e.slug===t});return e?e.imageUrl:"https://source.unsplash.com/user/erondu"}},Tk32:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var t=a("SpL8");return{page:t.default||t}}])},WC4K:function(t){t.exports=JSON.parse('[{"imageUrl":"https://images.unsplash.com/photo-1565277562170-6628d4c5a69e?auto=format&fit=crop&w=400&q=80","title":"Next.js & Markdown","subtitle":"Get under the hood of my homepage, STEFWORKS. You\'ll find typescript, material-ui and more..","slug":"next-js-homepage","markdownUrlPath":"/stefanosAgelastos.github.io/local-development","width":"60%"},{"imageUrl":"https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=400&q=80","title":"P5.js, jQuery SPA","subtitle":"I coded my previous homepage with P5.js, wanna see it? With vector graphics & custom made navbar","slug":"static-homepage-p5-js","markdownUrlPath":"/static-homepage-p5-js/master","width":"40%"},{"imageUrl":"https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=400&q=80","title":"AR Prototype System","subtitle":"An AR prototype app, for a Copenhagen business. A cool multidiciplinary team project!","slug":"ar-admin-page","markdownUrlPath":"/gps-tourist-app/master","width":"70%"},{"imageUrl":"https://images.unsplash.com/photo-1550151103-0135d8e13537?auto=format&fit=crop&w=400&q=80","title":"Sockets, Node & JWT","subtitle":"Although not a SoMe revolution, this custom webapp chat still makes me proud :D","slug":"chat-webapp-node-js","markdownUrlPath":"/chatNodejs/master","width":"30%"},{"imageUrl":"https://images.unsplash.com/photo-1563874093519-ca5eda5cd776?auto=format&fit=crop&w=400&q=80","title":"Angular 5 Client App","subtitle":"This Angular5 app was the first webapp I developed. I got fascinated with JWT authentication and SPA architecture.","slug":"angular-crud","markdownUrlPath":"/cvEditorFront/master","width":"65%"},{"imageUrl":"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=400&q=80","title":"Spring Boot Rest","subtitle":"Java taught me strict types are fun. This is my Spring Boot Rest API to support the Angular5 front.","slug":"spring-api-java","markdownUrlPath":"/personalRest/master","width":"35%"}]')},kOwS:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("UXZV"),r=a.n(n);function o(){return(o=r.a||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}},zgjP:function(t,e,a){t.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}},[["Tk32",1,0]]]);