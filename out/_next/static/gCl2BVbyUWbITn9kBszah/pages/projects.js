(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},SpL8:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("ZBNC"),c=n("TX+L"),s=n("vYYK"),l=n("VD++"),p=n("kOwS"),u=n("qNsG"),h=n("mVKy"),f=n("ofer"),d=Object(o.a)(function(t){return Object(i.a)({markedH2:{height:4,width:73,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH3:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH4:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH6:{height:2,width:28,display:"block",marginTop:t.spacing(.5),background:"currentColor"}})}),m={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function g(t){var e=d(),n=t.children,a=t.marked,o=void 0!==a&&a,i=t.variant,c=Object(u.a)(t,["children","marked","variant"]);return r.a.createElement(f.a,Object(p.a)({variantMapping:m,variant:i},c),n,o?r.a.createElement("span",{className:e["marked".concat(Object(h.a)(i))]}):null)}var v=n("YFqc"),b=n.n(v),w=Object(o.a)(function(t){var e,n,a;return Object(i.a)({tileWrapper:(e={position:"relative",display:"block",padding:t.spacing(0),borderRadius:0,height:"40vh"},Object(s.a)(e,t.breakpoints.down("sm"),{width:"100% !important",height:400}),Object(s.a)(e,"&:hover",{zIndex:1}),Object(s.a)(e,"&:hover $tileBackdrop",{opacity:.15}),Object(s.a)(e,"&:hover $tileMarked",{opacity:0}),Object(s.a)(e,"&:hover $tileTitle",{border:"4px solid currentColor"}),e),tileSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},tileBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,background:t.palette.common.black,opacity:.5,transition:t.transitions.create("opacity")},tileButton:(n={position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:t.spacing(2)},Object(s.a)(n,t.breakpoints.down("md"),{padding:t.spacing(1)}),Object(s.a)(n,"color",t.palette.primary.contrastText),n),tileTitle:Object(s.a)({position:"relative",padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},t.breakpoints.down("md"),{padding:t.spacing(1)}),tileSubtitle:(a={padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},Object(s.a)(a,t.breakpoints.down("md"),{padding:t.spacing(1)}),Object(s.a)(a,"width","85%"),a),tileMarked:{height:3,width:"65%",background:t.palette.common.white,position:"absolute",bottom:-2,left:"10",transition:t.transitions.create("opacity")}})});function k(t){var e=w(),n=t.tile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{href:"/projects/[pid]",as:"/projects/".concat(n.slug),passHref:!0},r.a.createElement(l.a,{className:e.tileWrapper,style:{width:n.width}},r.a.createElement("div",{className:e.tileSrc,style:{backgroundImage:"url(".concat(n.imageUrl,")")}}),r.a.createElement("div",{className:e.tileBackdrop}),r.a.createElement("div",{className:e.tileButton},r.a.createElement(g,{component:"h3",variant:"h2",color:"inherit",align:"left",className:e.tileTitle},n.title,r.a.createElement("div",{className:e.tileMarked})),r.a.createElement(g,{component:"p",variant:"subtitle1",className:e.tileSubtitle,color:"inherit"},n.subtitle)))))}var y=Object(o.a)(function(t){return Object(i.a)({tiles:{marginTop:t.spacing(4),display:"flex",flexWrap:"wrap"}})});function j(){var t=y(),e=c.a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.tiles},e.map(function(t){return r.a.createElement(k,{tile:t,key:t.slug})})))}function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))}n.d(e,"default",function(){return O})},"TX+L":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"c",function(){return p}),n.d(e,"b",function(){return h});var a=n("ln6h"),r=n.n(a),o=n("eVuF"),i=n.n(o),c=n("O40h"),s=n("WC4K"),l=(n("zgjP"),s);function p(t){return u.apply(this,arguments)}function u(){return(u=Object(c.default)(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t,n){var a=l.find(function(t){return t.slug===e});a?fetch("https://raw.githubusercontent.com/stefanosAgelastos".concat(a.markdownUrlPath,"/README.md"),{headers:{Accept:"text/plain; charset=utf-8"}}).then(function(t){return t.text()}).then(function(e){return t(e)}):n(new Error("No project matches the slug"))}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t){var e=l.find(function(e){return e.slug===t});return e?e.imageUrl:"https://source.unsplash.com/user/erondu"}},Tk32:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var t=n("SpL8");return{page:t.default||t}}])},WC4K:function(t){t.exports=JSON.parse('[{"imageUrl":"https://images.unsplash.com/photo-1565277562170-6628d4c5a69e?auto=format&fit=crop&w=500&q=80","title":"Next.js & Markdown","subtitle":"Get under the hood of my homepage, STEFWORKS. You\'ll find typescript, material-ui and more..","slug":"next-js-homepage","markdownUrlPath":"/stefanosAgelastos.github.io/local-development","width":"60%"},{"imageUrl":"https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=500&q=80","title":"P5.js, jQuery SPA","subtitle":"I coded my previous homepage with P5.js, wanna see it? With vector graphics & custom made navbar","slug":"static-homepage-p5-js","markdownUrlPath":"/static-homepage-p5-js/master","width":"40%"},{"imageUrl":"https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=500&q=80","title":"AR Prototype System","subtitle":"An AR prototype app, for a Copenhagen business. A cool multidiciplinary team project!","slug":"ar-admin-page","markdownUrlPath":"/gps-tourist-app/master","width":"70%"},{"imageUrl":"https://images.unsplash.com/photo-1550151103-0135d8e13537?auto=format&fit=crop&w=500&q=80","title":"Sockets, Node & JWT","subtitle":"Although not a SoMe revolution, this custom webapp chat still makes me proud :D","slug":"chat-webapp-node-js","markdownUrlPath":"/chatNodejs/master","width":"30%"},{"imageUrl":"https://images.unsplash.com/photo-1563874093519-ca5eda5cd776?auto=format&fit=crop&w=500&q=80","title":"Angular 5 Client App","subtitle":"This Angular5 app was the first webapp I developed. I got fascinated with JWT authentication and SPA architecture.","slug":"angular-crud","markdownUrlPath":"/cvEditorFront/master","width":"65%"},{"imageUrl":"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=500&q=80","title":"Spring Boot Rest","subtitle":"Java taught me strict types are fun. This is my Spring Boot Rest API to support the Angular5 front.","slug":"spring-api-java","markdownUrlPath":"/personalRest/master","width":"35%"}]')},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var a=n("KI45"),r=a(n("0iUn")),o=a(n("sLSF")),i=a(n("MI3g")),c=a(n("a7VT")),s=a(n("Tit0")),l=n("5Uuq"),p=n("KI45");e.__esModule=!0,e.default=void 0;var u,h=p(n("LX0d")),f=n("CxY0"),d=l(n("q1tI")),m=(p(n("17x9")),p(n("nOHt"))),g=(n("KA3u"),n("Bu4q"));function v(t){return t&&"object"===typeof t?(0,g.formatWithValidation)(t):t}var b=new h.default,w=window.IntersectionObserver;function k(){return u||(w?u=new w(function(t){t.forEach(function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(t.target),b.delete(t.target),e())}})},{rootMargin:"200px"}):void 0)}var y=function(t){function e(){var t;return(0,r.default)(this,e),(t=(0,i.default)(this,(0,c.default)(e).apply(this,arguments))).cleanUpListeners=function(){},t.formatUrls=function(t){var e=null,n=null,a=null;return function(r,o){if(a&&r===e&&o===n)return a;var i=t(r,o);return e=r,n=o,a=i,i}}(function(t,e){return{href:v(t),as:e?v(e):e}}),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,c=o.as;if(function(t){var e=(0,f.parse)(t,!1,!0),n=(0,f.parse)((0,g.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var s=window.location.pathname;i=(0,f.resolve)(s,i),c=c?(0,f.resolve)(s,c):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=c.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,c,{shallow:t.props.shallow}).then(function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())})}}},t}return(0,s.default)(e,t),(0,o.default)(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.props.prefetch&&w&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),b.set(t,e),function(){n.unobserve(t),b.delete(t)}):function(){}}(t,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(t,e);m.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),i={ref:function(e){return t.handleRef(e)},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),d.default.cloneElement(o,i)}}]),e}(d.Component);y.propTypes=void 0,y.defaultProps={prefetch:!0};var j=y;e.default=j},kOwS:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n("UXZV"),r=n.n(a);function o(){return(o=r.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}},qNsG:function(t,e,n){"use strict";var a=n("4mXO"),r=n.n(a),o=n("pLtp"),i=n.n(o);function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,r={},o=i()(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(r.a){var c=r()(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",function(){return c})},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n("hfKm"),r=n.n(a);function o(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},zgjP:function(t,e,n){t.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["Tk32",1,0]]]);