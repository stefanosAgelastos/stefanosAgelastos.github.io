(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4mXO":function(t,e,r){t.exports=r("7TPF")},"7TPF":function(t,e,r){r("AUvm"),t.exports=r("WEpk").Object.getOwnPropertySymbols},SpL8:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),o=r("R/WZ"),i=r("ZBNC"),c=r("TX+L"),s=r("vYYK"),l=r("VD++"),p=r("kOwS"),u=r("4mXO"),h=r.n(u),f=r("pLtp"),d=r.n(f);function m(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=d()(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(h.a){var o=h()(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var g=r("mVKy"),v=r("ofer"),w=Object(o.a)(function(t){return Object(i.a)({markedH2:{height:4,width:73,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH3:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH4:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH6:{height:2,width:28,display:"block",marginTop:t.spacing(.5),background:"currentColor"}})}),b={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function k(t){var e=w(),r=t.children,n=t.marked,o=void 0!==n&&n,i=t.variant,c=m(t,["children","marked","variant"]);return a.a.createElement(v.a,Object(p.a)({variantMapping:b,variant:i},c),r,o?a.a.createElement("span",{className:e["marked".concat(Object(g.a)(i))]}):null)}var y=r("YFqc"),j=r.n(y),E=Object(o.a)(function(t){var e;return Object(i.a)({tileWrapper:(e={position:"relative",display:"block",padding:0,borderRadius:0,height:"40vh"},Object(s.a)(e,t.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(s.a)(e,"&:hover",{zIndex:1}),Object(s.a)(e,"&:hover $tileBackdrop",{opacity:.15}),Object(s.a)(e,"&:hover $tileMarked",{opacity:0}),Object(s.a)(e,"&:hover $tileTitle",{border:"4px solid currentColor"}),e),tileButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.common.white},tileSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},tileBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,background:t.palette.common.black,opacity:.5,transition:t.transitions.create("opacity")},tileTitle:{position:"relative",padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},tileMarked:{height:3,width:18,background:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}})});function O(t){var e=E(),r=t.tile;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{href:"/projects/[pid]",as:"/projects/".concat(r.slug),passHref:!0},a.a.createElement(l.a,{className:e.tileWrapper,style:{width:r.width}},a.a.createElement("div",{className:e.tileSrc,style:{backgroundImage:"url(".concat(r.imageUrl,")")}}),a.a.createElement("div",{className:e.tileBackdrop}),a.a.createElement("div",{className:e.tileButton},a.a.createElement(k,{component:"h3",variant:"h6",color:"inherit",className:e.tileTitle},r.title,a.a.createElement("div",{className:e.tileMarked}))))))}var x=Object(o.a)(function(t){return Object(i.a)({tiles:{marginTop:t.spacing(8),display:"flex",flexWrap:"wrap"}})});function U(){var t=x(),e=c.a;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:t.tiles},e.map(function(t){return a.a.createElement(O,{tile:t,key:t.slug})})))}function P(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null))}r.d(e,"default",function(){return P})},"TX+L":function(t,e,r){"use strict";r.d(e,"a",function(){return l}),r.d(e,"b",function(){return p});var n=r("ln6h"),a=r.n(n),o=r("eVuF"),i=r.n(o),c=r("O40h"),s=r("WC4K"),l=(r("zgjP"),s);function p(t){return u.apply(this,arguments)}function u(){return(u=Object(c.default)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t,r){var n=l.find(function(t){return t.slug===e});n?fetch("https://raw.githubusercontent.com/stefanosAgelastos".concat(n.markdownUrlPath,"/README.md"),{headers:{Accept:"text/plain; charset=utf-8"}}).then(function(t){return t.text()}).then(function(e){return t(e)}):r(new Error("No project matches the slug"))}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}},Tk32:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var t=r("SpL8");return{page:t.default||t}}])},WC4K:function(t){t.exports=JSON.parse('[{"imageUrl":"https://images.unsplash.com/photo-1565277562170-6628d4c5a69e?auto=format&fit=crop&w=400&q=80","title":"Next.js homepage","slug":"next-js-homepage","markdownUrlPath":"/stefanosAgelastos.github.io/local-development","width":"60%"},{"imageUrl":"https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=400&q=80","title":"Static homepage with P5.js","slug":"static-homepage-p5-js","markdownUrlPath":"/static-homepage-p5-js/master","width":"40%"},{"imageUrl":"https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=400&q=80","title":"Final project, AR app","slug":"mern-admin-page","markdownUrlPath":"/gps-tourist-app/master","width":"70%"},{"imageUrl":"https://images.unsplash.com/photo-1531161339673-a943dd10e29f?auto=format&fit=crop&w=400&q=80","title":"Chat webapp with Node.js","slug":"chat-webapp-node-js","markdownUrlPath":"/chatNodejs/master","width":"30%"},{"imageUrl":"https://images.unsplash.com/photo-1563874093519-ca5eda5cd776?auto=format&fit=crop&w=400&q=80","title":"Angular","slug":"angular-crud","markdownUrlPath":"/cvEditorFront/master","width":"65%"},{"imageUrl":"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=400&q=80","title":"Spring API","slug":"spring-api-java","markdownUrlPath":"/personalRest/master","width":"35%"}]')},YFqc:function(t,e,r){t.exports=r("cTJO")},cTJO:function(t,e,r){"use strict";var n=r("KI45"),a=n(r("0iUn")),o=n(r("sLSF")),i=n(r("MI3g")),c=n(r("a7VT")),s=n(r("Tit0")),l=r("5Uuq"),p=r("KI45");e.__esModule=!0,e.default=void 0;var u,h=p(r("LX0d")),f=r("CxY0"),d=l(r("q1tI")),m=(p(r("17x9")),p(r("nOHt"))),g=(r("KA3u"),r("Bu4q"));function v(t){return t&&"object"===typeof t?(0,g.formatWithValidation)(t):t}var w=new h.default,b=window.IntersectionObserver;function k(){return u||(b?u=new b(function(t){t.forEach(function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(t.target),w.delete(t.target),e())}})},{rootMargin:"200px"}):void 0)}var y=function(t){function e(){var t;return(0,a.default)(this,e),(t=(0,i.default)(this,(0,c.default)(e).apply(this,arguments))).cleanUpListeners=function(){},t.formatUrls=function(t){var e=null,r=null,n=null;return function(a,o){if(n&&a===e&&o===r)return n;var i=t(a,o);return e=a,r=o,n=i,i}}(function(t,e){return{href:v(t),as:e?v(e):e}}),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,a=r.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,c=o.as;if(function(t){var e=(0,f.parse)(t,!1,!0),r=(0,f.parse)((0,g.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(i)){var s=window.location.pathname;i=(0,f.resolve)(s,i),c=c?(0,f.resolve)(s,c):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=c.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,c,{shallow:t.props.shallow}).then(function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}},t}return(0,s.default)(e,t),(0,o.default)(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.props.prefetch&&b&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var r=k();return r?(r.observe(t),w.set(t,e),function(){r.unobserve(t),w.delete(t)}):function(){}}(t,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=(0,f.resolve)(t,e);m.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),i={ref:function(e){return t.handleRef(e)},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||n),d.default.cloneElement(o,i)}}]),e}(d.Component);y.propTypes=void 0,y.defaultProps={prefetch:!0};var j=y;e.default=j},kOwS:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("UXZV"),a=r.n(n);function o(){return(o=a.a||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}},zgjP:function(t,e,r){t.exports=window.fetch||(window.fetch=r("m/Gl").default||r("m/Gl"))}},[["Tk32",1,0]]]);