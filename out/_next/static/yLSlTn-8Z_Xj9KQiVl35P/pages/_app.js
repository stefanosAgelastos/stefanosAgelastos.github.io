(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"0iUn":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3JuP":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.AmpStateContext=a.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),i=n("K47E"),c=n("WaGi"),l=n("N9n2"),u=n("TbGu"),s=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new s;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){function s(e){var c;return r(this,s),c=o(this,a(s).call(this,e)),d&&(t.add(i(c)),n(i(c))),c}return l(s,u),c(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),c(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("cha2");return{page:e.default||e}}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},As0B:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("wx14"),o=n("q1tI"),a=n.n(o),i=n("HR5l");function c(e,t){var n=a.a.memo(a.a.forwardRef(function(t,n){return a.a.createElement(i.a,Object(r.a)({},t,{ref:n}),e)}));return n.muiName=i.a.muiName,n}},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),c=n("N9n2"),l=n("ln6h"),u=n("KI45");t.__esModule=!0,t.Container=function(e){return e.children},t.createUrl=x,t.default=void 0;var s=u(n("htGi")),f=u(n("+oT+")),d=u(n("q1tI")),p=u(n("17x9")),h=n("Bu4q");t.AppInitialProps=h.AppInitialProps;var v=n("nOHt");function m(e){return b.apply(this,arguments)}function b(){return(b=(0,f.default)(l.mark(function e(t){var n,r,o;return l.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g=function(e){function t(){return r(this,t),a(this,i(t).apply(this,arguments))}return c(t,e),o(t,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=x(t);return d.default.createElement(n,(0,s.default)({},r,{url:o}))}}]),t}(d.default.Component);t.default=g,g.childContextTypes={router:p.default.object},g.origGetInitialProps=m,g.getInitialProps=m;var y=(0,h.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return y(),r},get pathname(){return y(),t},get asPath(){return y(),n},back:function(){y(),e.back()},push:function(t,n){return y(),e.push(t,n)},pushTo:function(t,n){y();var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return y(),e.replace(t,n)},replaceTo:function(t,n){y();var r=n?t:"",o=n||t;return e.replace(r,o)}}}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},HR5l:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n.n(a),c=(n("17x9"),n("iuhU")),l=n("H2TA"),u=n("mVKy"),s=i.a.forwardRef(function(e,t){var n=e.children,a=e.classes,l=e.className,s=e.color,f=void 0===s?"inherit":s,d=e.component,p=void 0===d?"svg":d,h=e.fontSize,v=void 0===h?"default":h,m=e.htmlColor,b=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,x=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.a.createElement(p,Object(r.a)({className:Object(c.a)(a.root,l,"inherit"!==f&&a["color".concat(Object(u.a)(f))],"default"!==v&&a["fontSize".concat(Object(u.a)(v))]),focusable:"false",viewBox:y,color:m,"aria-hidden":b?"false":"true",role:b?"img":"presentation",ref:t},x),n,b?i.a.createElement("title",null,b):null)});s.muiName="SvgIcon",t.a=Object(l.a)(function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},{name:"MuiSvgIcon"})(s)},IClC:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.HeadManagerContext=a.createContext(null)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},MI3g:function(e,t,n){"use strict";var r=n("XVgq"),o=n.n(r),a=n("Z7t5"),i=n.n(a);function c(e){return(c="function"===typeof i.a&&"symbol"===typeof o.a?function(e){return typeof e}:function(e){return e&&"function"===typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof i.a&&"symbol"===c(o.a)?function(e){return c(e)}:function(e){return e&&"function"===typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":c(e)})(e)}function u(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return u})},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");e.exports=function(e){return r(e)||o(e)||a()}},Tit0:function(e,t,n){"use strict";var r=n("SqZg"),o=n.n(r),a=n("TRZx"),i=n.n(a);function c(e,t){return(c=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=o()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),c=n("NwJ3"),l=n("tEej"),u=n("IP1Z"),s=n("fNZA");o(o.S+o.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,d=a(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,b=0,g=s(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&c(g))for(n=new p(t=l(d.length));t>b;b++)u(n,b,m?v(d[b],b):d[b]);else for(f=g.call(d),n=new p;!(o=f.next()).done;b++)u(n,b,m?i(f,v,[o.value,b],!0):o.value);return n.length=b,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=o(n("q1tI")),i=n("3JuP");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(i.AmpStateContext))}},YFqc:function(e,t,n){e.exports=n("cTJO")},a7VT:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("Bhuq"),o=n.n(r),a=n("TRZx"),i=n.n(a);function c(e){return(c=i.a?o.a:function(e){return e.__proto__||o()(e)})(e)}},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),c=n("N9n2"),l=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var s,f=u(n("LX0d")),d=n("CxY0"),p=l(n("q1tI")),h=(u(n("17x9")),u(n("nOHt"))),v=(n("KA3u"),n("Bu4q"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new f.default,g=window.IntersectionObserver;function y(){return s||(g?s=new g(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var x=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}(function(e,t){return{href:m(e),as:t?m(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,c=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,d.resolve)(l,i),c=c?(0,d.resolve)(l,c):i,e.preventDefault();var u=n.props.scroll;null==u&&(u=c.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,c,{shallow:n.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return c(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),b.set(e,t),function(){n.unobserve(e),b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),t}(p.Component);x.propTypes=void 0;var w=x;t.default=w},cha2:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),c=n("Tit0"),l=n("q1tI"),u=n.n(l),s=n("8Bbg"),f=n.n(s),d=n("m/Pd"),p=n.n(d),h=n("wx14"),v=(n("17x9"),n("2W6z"),n("OKji")),m=n("aXM8"),b=n("hfi/");var g=function(e){var t=e.children,n=e.theme,r=Object(m.a)(),o=u.a.useMemo(function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(h.a)({},e,{},t)}(r,n);return null!==r&&e&&(e[b.a]=!0),e},[n,r]);return u.a.createElement(v.a.Provider,{value:o},t)},y=n("R/WZ"),x=Object(y.a)(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:"bolder"},body:Object(h.a)({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white},"&::backdrop":{backgroundColor:e.palette.background.default}})}}},{name:"MuiCssBaseline"});var w=function(e){var t=e.children,n=void 0===t?null:t;return x(),u.a.createElement(u.a.Fragment,null,n)},O=n("ynas"),j=n("ofer"),C=n("Ff2n"),k=n("rePB"),S=n("iuhU"),E=n("H2TA"),T=n("mVKy"),N=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.component,a=void 0===o?"div":o,i=e.fixed,c=void 0!==i&&i,l=e.maxWidth,s=void 0===l?"lg":l,f=Object(C.a)(e,["classes","className","component","fixed","maxWidth"]);return u.a.createElement(a,Object(h.a)({className:Object(S.a)(n.root,r,c&&n.fixed,!1!==s&&n["maxWidth".concat(Object(T.a)(String(s)))]),ref:t},f))}),W=Object(E.a)(function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(k.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(k.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),fixed:Object.keys(e.breakpoints.values).reduce(function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t},{}),maxWidthXs:Object(k.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(k.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(k.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(k.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(k.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(N),M=n("ODXe"),B=n("Z79C"),I=n("OMPe"),A=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.color,a=void 0===o?"primary":o,i=e.component,c=void 0===i?"a":i,l=e.onBlur,s=e.onFocus,f=e.TypographyClasses,d=e.underline,p=void 0===d?"hover":d,v=e.variant,m=void 0===v?"inherit":v,b=Object(C.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),g=Object(B.a)(),y=g.isFocusVisible,x=g.onBlurVisible,w=g.ref,O=u.a.useState(!1),k=Object(M.a)(O,2),E=k[0],N=k[1],W=Object(I.a)(t,w);return u.a.createElement(j.a,Object(h.a)({className:Object(S.a)(n.root,n["underline".concat(Object(T.a)(p))],r,E&&n.focusVisible,{button:n.button}[c]),classes:f,color:a,component:c,onBlur:function(e){E&&(x(),N(!1)),l&&l(e)},onFocus:function(e){y(e)&&N(!0),s&&s(e)},ref:W,variant:m},b))}),P=Object(E.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(A),R=u.a.createElement;function _(){return R(j.a,{variant:"body2",color:"secondary",align:"left"},"\xa9 Stefanos Agelastos ",(new Date).getFullYear(),", Copenhagen, DK. ",R("br",null),"Built with ",R(P,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")," & ",R(P,{color:"inherit",href:"https://nextjs.org/"},"Next.js"),".")}var D=Object(y.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},footer:{marginTop:"auto",padding:O.b.spacing(2)}}});function L(e){var t=D();return R("div",{className:t.root},e.children,R("footer",{className:t.footer},R(W,null,R(j.a,{variant:"body1"}),R(_,null))))}var z=n("kKAo"),F=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.color,a=void 0===o?"primary":o,i=e.position,c=void 0===i?"fixed":i,l=Object(C.a)(e,["classes","className","color","position"]);return u.a.createElement(z.a,Object(h.a)({square:!0,component:"header",elevation:4,className:Object(S.a)(n.root,n["position".concat(Object(T.a)(c))],r,"inherit"!==a&&n["color".concat(Object(T.a)(a))],{fixed:"mui-fixed"}[c]),ref:t},l))}),H=Object(E.a)(function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}},{name:"MuiAppBar"})(F);function V(e,t,n){var r,o=n.disableHysteresis,a=void 0!==o&&o,i=n.threshold,c=void 0===i?100:i,l=t.current;return t.current=e?void 0!==(r=e.currentTarget).pageYOffset?r.pageYOffset:r.scrollTop:l,!(!a&&void 0!==l&&t.current<l)&&t.current>c}var q="undefined"!==typeof window?window:null;var K=n("ZBNC"),U=n("doui");function Z(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=this;clearTimeout(t),t=setTimeout(function(){e.apply(i,o)},n)}return r.clear=function(){clearTimeout(t)},r}var G=n("gk1O");var J,X=function(e){return Object(G.a)(e).defaultView||window},Y=!("undefined"===typeof window||!window.document||!window.document.createElement);function Q(){if(J)return J;if(!Y||!window.document.body)return"indeterminate";var e=window.document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),J="reverse",e.scrollLeft>0?J="default":(e.scrollLeft=1,0===e.scrollLeft&&(J="negative")),document.body.removeChild(e),J}function $(e,t){var n=e.scrollLeft;if("rtl"!==t)return n;var r=Q();if("indeterminate"===r)return Number.NaN;switch(r){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n}return n}function ee(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var te=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=r.ease,i=void 0===a?ee:a,c=r.duration,l=void 0===c?300:c,u=null,s=t[e],f=!1,d=function(){f=!0};return s===n?(o(new Error("Element already at target position")),d):(requestAnimationFrame(function r(a){if(f)o(new Error("Animation cancelled"));else{null===u&&(u=a);var c=Math.min(1,(a-u)/l);t[e]=i(c)*(n-s)+s,c>=1?requestAnimationFrame(function(){o(null)}):requestAnimationFrame(r)}}),d)},ne={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function re(e){var t=e.onChange,n=Object(C.a)(e,["onChange"]),r=u.a.useRef(),o=u.a.useRef(null),a=function(){r.current=o.current.offsetHeight-o.current.clientHeight};return u.a.useEffect(function(){var e=Z(function(){var e=r.current;a(),e!==r.current&&t(r.current)});return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}},[t]),u.a.useEffect(function(){a(),t(r.current)},[t]),u.a.createElement("div",Object(h.a)({style:ne,ref:o},n))}var oe=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.color,a=e.orientation,i=Object(C.a)(e,["classes","className","color","orientation"]);return u.a.createElement("span",Object(h.a)({className:Object(S.a)(n.root,n["color".concat(Object(T.a)(o))],r,{vertical:n.vertical}[a]),ref:t},i))}),ae=Object(E.a)(function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}},{name:"PrivateTabIndicator"})(oe),ie=n("As0B"),ce=Object(ie.a)(u.a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),le=Object(ie.a)(u.a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),ue=n("VD++"),se=u.a.createElement(ce,{fontSize:"small"}),fe=u.a.createElement(le,{fontSize:"small"}),de=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.direction,a=e.orientation,i=e.visible,c=Object(C.a)(e,["classes","className","direction","orientation","visible"]),l=Object(S.a)(n.root,r,{vertical:n.vertical}[a]);return i?u.a.createElement(ue.a,Object(h.a)({component:"div",className:l,ref:t,role:null,tabIndex:null},c),"left"===o?se:fe):u.a.createElement("div",{className:l})}),pe=Object(E.a)({root:{width:40,flexShrink:0},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}}},{name:"PrivateTabScrollButton"})(de),he=n("Ovef"),ve=u.a.forwardRef(function(e,t){var n=e.action,r=e.centered,o=void 0!==r&&r,a=e.children,i=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,f=e.indicatorColor,d=void 0===f?"secondary":f,p=e.onChange,v=e.orientation,m=void 0===v?"horizontal":v,b=e.ScrollButtonComponent,g=void 0===b?pe:b,y=e.scrollButtons,x=void 0===y?"auto":y,w=e.TabIndicatorProps,O=void 0===w?{}:w,j=e.textColor,E=void 0===j?"inherit":j,T=e.theme,N=e.value,W=e.variant,B=void 0===W?"standard":W,I=Object(C.a)(e,["action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","TabIndicatorProps","textColor","theme","value","variant"]),A="scrollable"===B,P="rtl"===T.direction,R="vertical"===m,_=R?"scrollTop":"scrollLeft",D=R?"top":"left",L=R?"bottom":"right",z=R?"clientHeight":"clientWidth",F=R?"height":"width",H=u.a.useState(!1),V=Object(M.a)(H,2),q=V[0],K=V[1],U=u.a.useState({}),G=Object(M.a)(U,2),J=G[0],Y=G[1],ee=u.a.useState({start:!1,end:!1}),ne=Object(M.a)(ee,2),oe=ne[0],ie=ne[1],ce=u.a.useState({overflow:"hidden",marginBottom:null}),le=Object(M.a)(ce,2),ue=le[0],se=le[1],fe=new Map,de=u.a.useRef(null),ve=u.a.useRef(null),me=function(){var e,t,n=de.current;if(n){var r=n.getBoundingClientRect();e={clientWidth:n.clientWidth,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollLeftNormalized:$(n,T.direction),scrollWidth:n.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(n&&!1!==N){var o=ve.current.children;if(o.length>0){var a=o[fe.get(N)];t=a?a.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},be=Object(he.a)(function(){var e,t=me(),n=t.tabsMeta,r=t.tabMeta,o=0;if(r&&n)if(R)o=Math.round(r.top-n.top+n.scrollTop);else{var a=P?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;o=Math.round(r.left-n.left+a)}var i=(e={},Object(k.a)(e,D,o),Object(k.a)(e,F,r?Math.round(r[F]):0),e);i[D]===J[D]&&i[F]===J[F]||isNaN(i[D])||isNaN(i[F])||Y(i)}),ge=function(e){te(_,de.current,e)},ye=function(e){var t=de.current[_];R?t+=e:(t+=e*(P?-1:1),t*=P&&"reverse"===Q()?-1:1),ge(t)},xe=function(){ye(-de.current[z])},we=function(){ye(de.current[z])},Oe=u.a.useCallback(function(e){se({overflow:null,marginBottom:-e})},[]),je=Object(he.a)(function(){var e=me(),t=e.tabsMeta,n=e.tabMeta;if(n&&t)if(n[D]<t[D]){var r=t[_]+(n[D]-t[D]);ge(r)}else if(n[L]>t[L]){var o=t[_]+(n[L]-t[L]);ge(o)}}),Ce=Object(he.a)(function(){if(A&&"off"!==x){var e,t,n=de.current,r=n.scrollTop,o=n.scrollHeight,a=n.clientHeight,i=n.scrollWidth,c=n.clientWidth;if(R)e=r>1,t=r<o-a-1;else{var l=$(de.current,T.direction);e=P?l<i-c-1:l>1,t=P?l>1:l<i-c-1}e===oe.start&&t===oe.end||ie({start:e,end:t})}});u.a.useEffect(function(){var e=Z(function(){be(),Ce()}),t=X(de.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}},[be,Ce]);var ke=u.a.useCallback(Z(function(){Ce()}));u.a.useEffect(function(){return function(){ke.clear()}},[ke]),u.a.useEffect(function(){K(!0)},[]),u.a.useEffect(function(){be(),Ce()}),u.a.useEffect(function(){je()},[je,J]),u.a.useImperativeHandle(n,function(){return{updateIndicator:be}},[be]);var Se=u.a.createElement(ae,Object(h.a)({className:i.indicator,orientation:m,color:d},O,{style:Object(h.a)({},J,{},O.style)})),Ee=0,Te=u.a.Children.map(a,function(e){if(!u.a.isValidElement(e))return null;var t=void 0===e.props.value?Ee:e.props.value;fe.set(t,Ee);var n=t===N;return Ee+=1,u.a.cloneElement(e,{fullWidth:"fullWidth"===B,indicator:n&&!q&&Se,selected:n,onChange:p,textColor:E,value:t})}),Ne=function(){var e={};e.scrollbarSizeListener=A?u.a.createElement(re,{className:i.scrollable,onChange:Oe}):null;var t=oe.start||oe.end,n=A&&("auto"===x&&t||"desktop"===x||"on"===x);return e.scrollButtonStart=n?u.a.createElement(g,{orientation:m,direction:P?"right":"left",onClick:xe,visible:oe.start,className:Object(S.a)(i.scrollButtons,"on"!==x&&i.scrollButtonsDesktop)}):null,e.scrollButtonEnd=n?u.a.createElement(g,{orientation:m,direction:P?"left":"right",onClick:we,visible:oe.end,className:Object(S.a)(i.scrollButtons,"on"!==x&&i.scrollButtonsDesktop)}):null,e}();return u.a.createElement(s,Object(h.a)({className:Object(S.a)(i.root,c,R&&i.vertical),ref:t},I),Ne.scrollButtonStart,Ne.scrollbarSizeListener,u.a.createElement("div",{className:Object(S.a)(i.scroller,A?i.scrollable:i.fixed),style:ue,ref:de,onScroll:ke},u.a.createElement("div",{className:Object(S.a)(i.flexContainer,R&&i.flexContainerVertical,o&&!A&&i.centered),ref:ve,role:"tablist"},Te),q&&Se),Ne.scrollButtonEnd)}),me=Object(E.a)(function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(k.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}},{name:"MuiTabs",withTheme:!0})(ve),be=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=e.disabled,a=void 0!==o&&o,i=e.disableFocusRipple,c=void 0!==i&&i,l=e.fullWidth,s=e.icon,f=e.indicator,d=e.label,p=e.onChange,v=e.onClick,m=e.selected,b=e.textColor,g=void 0===b?"inherit":b,y=e.value,x=e.wrapped,w=void 0!==x&&x,O=Object(C.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","selected","textColor","value","wrapped"]);return u.a.createElement(ue.a,Object(h.a)({focusRipple:!c,className:Object(S.a)(n.root,n["textColor".concat(Object(T.a)(g))],r,a&&n.disabled,m&&n.selected,d&&s&&n.labelIcon,l&&n.fullWidth,w&&n.wrapped),ref:t,role:"tab","aria-selected":m,disabled:a,onClick:function(e){p&&p(e,y),v&&v(e)}},O),u.a.createElement("span",{className:n.wrapper},s,d),f)}),ge=Object(E.a)(function(e){var t;return{root:Object(h.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(k.a)(t,e.breakpoints.up("md"),{padding:"6px 24px"}),Object(k.a)(t,"overflow","hidden"),Object(k.a)(t,"whiteSpace","normal"),Object(k.a)(t,"textAlign","center"),Object(k.a)(t,e.breakpoints.up("md"),{fontSize:e.typography.pxToRem(13),minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.4}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}},{name:"MuiTab"})(be),ye=n("nOHt"),xe=n.n(ye),we=u.a.createElement,Oe=Object(y.a)(function(e){return Object(K.a)({root:{flexGrow:1,backgroundColor:"rgba(255,255,255,0)"},tabRoot:{color:e.palette.primary.main,"&:hover":{color:e.palette.primary.light,opacity:1}},tabIndicator:{backgroundColor:e.palette.primary.main}})});function je(){var e=u.a.useState("/"),t=Object(U.a)(e,2),n=t[0],r=t[1];Object(l.useEffect)(function(){"/"==xe.a.pathname?r("/"):"/contact"==xe.a.pathname?r("/contact"):r("/projects"),xe.a.events.on("routeChangeStart",function(e){r("/"==e?"/":"/contact"==e?"/contact":"/projects")})},[]);var o=Oe();return we(z.a,{className:o.root},we(me,{value:n,onChange:function(e,t){xe.a.push(t),r(t)},classes:{indicator:o.tabIndicator},centered:!0},we(ge,{classes:{root:o.tabRoot},label:"Home",value:"/"}),we(ge,{classes:{root:o.tabRoot},label:"My projects",value:"/projects"}),we(ge,{classes:{root:o.tabRoot},label:"Contact",value:"/contact"})))}var Ce=n("YFqc"),ke=n.n(Ce),Se=u.a.createElement,Ee=Object(y.a)(function(e){return Object(K.a)({appBar:{backgroundColor:e.palette.secondary.main,color:e.palette.primary.main,paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},spacer:{paddingTop:e.spacing(8),visibility:"hidden"},toolbarTitle:{flex:1,cursor:"pointer"}})});function Te(e){var t=e.children,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,n=void 0===t?V:t,r=e.target,o=void 0===r?q:r,a=Object(C.a)(e,["getTrigger","target"]),i=u.a.useRef(),c=u.a.useState(function(){return n(null,i,a)}),l=Object(M.a)(c,2),s=l[0],f=l[1];return u.a.useEffect(function(){var e=function(e){f(n(e,i,a))};return e(null),o.addEventListener("scroll",e),function(){o.removeEventListener("scroll",e)}},[o,n,JSON.stringify(a)]),s}({disableHysteresis:!0,threshold:0});return u.a.cloneElement(t,{elevation:n?4:0})}function Ne(){var e=Ee();return Se(u.a.Fragment,null,Se("div",{className:e.spacer}," ","spacer"," "),Se(Te,null,Se(H,{className:e.appBar},Se(ke.a,{href:"/"},Se(j.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle},"STEFWORKS")),Se(je,null))))}var We=u.a.createElement,Me=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return We(u.a.Fragment,null,We(p.a,null,We("title",null,"Stefanos Agelastos")),We(g,{theme:O.b},We(w,null),We(W,{maxWidth:"lg"},We(L,null,We(Ne,null),We(t,n)))))}}]),t}(f.a);t.default=Me},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},doui:function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);var a=n("XXOK"),i=n.n(a);function c(e,t){return function(e){if(o()(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=i()(e);!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return c})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r},gk1O:function(e,t,n){"use strict";t.a=function(e){return e&&e.ownerDocument||document}},ldVq:function(e,t,n){var r=n("QMMT"),o=n("UWiX")("iterator"),a=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=a(n("q1tI")),c=a(n("4hZ1")),l=n("3JuP"),u=n("IClC"),s=n("Wziy");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(a){if(a.key&&"number"!==typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(t.has(a.type))return!1;t.add(a.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var l=p[i];if(a.props.hasOwnProperty(l))if("charSet"===l){if(n.has(l))return!1;n.add(l)}else{var u=a.props[l],s=o[l]||new r;if(s.has(u))return!1;s.add(u),o[l]=s}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})})}var v=c.default();function m(e){var t=e.children;return i.default.createElement(l.AmpStateContext.Consumer,null,function(e){return i.default.createElement(u.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)})})}m.rewind=v.rewind,t.default=m},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("hfKm"),o=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")},yLu3:function(e,t,n){e.exports=n("VKFn")},ynas:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r,o=n("viY9"),a=n("fWIC"),i=n.n(a);!function(e){e.LivingCoral="#FF6F61",e.BlueDepths="#263056",e.TurtleGreen="#81894E",e.ViridianGreen="#009499",e.TurkishSea="#195190",e.SeaPink="#DE98AB",e.LimpetShell="#98DDDE",e.VibrantYellow="#FFDA29"}(r||(r={}));var c=Object(o.a)({palette:{primary:{main:r.BlueDepths},secondary:{main:r.LivingCoral},error:{main:i.a.A400},background:{default:r.BlueDepths,paper:"rgba(255, 255, 255, 0)"},text:{primary:"rgba(255, 255, 255, 0.87)",secondary:r.TurkishSea,disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}},typography:{fontFamily:"Raleway"},overrides:{MuiButton:{root:{fontSize:"1rem"},contained:{backgroundColor:r.LivingCoral,color:r.BlueDepths},outlined:{borderColor:r.TurkishSea,color:r.TurkishSea}}},props:{MuiTypography:{variantMapping:{h1:"h2",h2:"h2",h3:"h2",h4:"h2",h5:"h2",h6:"h2",subtitle1:"h2",subtitle2:"h2",body1:"span",body2:"span"}}}});t.b=c}},[["74v/",1,0]]]);