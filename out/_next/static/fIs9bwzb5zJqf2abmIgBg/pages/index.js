(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=o("23aj");return{page:e.default||e}}])},"23aj":function(e,t,o){"use strict";o.r(t);var a=o("q1tI"),r=o.n(a),n=o("RD7I"),i=o("ZBNC"),c=o("tRbT"),l=o("ofer"),s=o("Z3vd"),d=o("vYYK"),p=o("R/WZ"),u=o("kKAo"),f=r.a.createElement,h=Object(p.a)(function(e){return Object(i.a)({root:{position:"relative",backgroundColor:e.palette.background.default,opacity:.95,color:e.palette.common.white,marginTop:e.spacing(4),marginBottom:e.spacing(4)},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0},childrenWrapper:Object(d.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})})}),b=function(e){var t=e.children,o=h();return f(u.a,{elevation:0,className:o.root},f("div",{className:o.overlay}),f(c.a,{item:!0,xs:11,md:9},f("div",{className:o.childrenWrapper},t)))},m=o("YFqc"),v=o.n(m),y=r.a.createElement,g=Object(n.a)(function(e){return Object(i.a)({titleText:{},root:{height:"100%",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center"}})});t.default=function(){var e=g();return y(c.a,{className:e.root,container:!0},y(b,null,y(l.a,{className:e.titleText,component:"h1",variant:"h3",color:"secondary",gutterBottom:!0},"Hello. I'm Stefanos and this is my developer portfolio!"),y(l.a,{className:e.titleText,variant:"h5",color:"secondary",paragraph:!0},"Have a look at my projects"),y(v.a,{href:"/projects",passHref:!0},y(s.a,{variant:"contained",size:"medium"},"Project Gallery"))))}},YFqc:function(e,t,o){e.exports=o("cTJO")},Z3vd:function(e,t,o){"use strict";var a=o("Ff2n"),r=o("wx14"),n=o("q1tI"),i=o.n(n),c=(o("17x9"),o("iuhU")),l=o("H2TA"),s=o("ye/S"),d=o("VD++"),p=o("mVKy"),u=i.a.forwardRef(function(e,t){var o=e.children,n=e.classes,l=e.className,s=e.color,u=void 0===s?"default":s,f=e.component,h=void 0===f?"button":f,b=e.disabled,m=void 0!==b&&b,v=e.disableFocusRipple,y=void 0!==v&&v,g=e.focusVisibleClassName,x=e.fullWidth,k=void 0!==x&&x,C=e.size,w=void 0===C?"medium":C,O=e.type,j=void 0===O?"button":O,N=e.variant,R=void 0===N?"text":N,T=Object(a.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),E="text"===R,S="outlined"===R,I="contained"===R,P="primary"===u,U="secondary"===u,W=Object(c.a)(n.root,l,E&&[n.text,P&&n.textPrimary,U&&n.textSecondary],S&&[n.outlined,P&&n.outlinedPrimary,U&&n.outlinedSecondary],I&&[n.contained,P&&n.containedPrimary,U&&n.containedSecondary],"medium"!==w&&n["size".concat(Object(p.a)(w))],m&&n.disabled,k&&n.fullWidth,{inherit:n.colorInherit}[u]);return i.a.createElement(d.a,Object(r.a)({className:W,component:h,disabled:m,focusRipple:!y,focusVisibleClassName:Object(c.a)(n.focusVisible,g),ref:t,type:j},T),i.a.createElement("span",{className:n.label},o))});t.a=Object(l.a)(function(e){return{root:Object(r.a)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(u)},cTJO:function(e,t,o){"use strict";var a=o("/HRN"),r=o("WaGi"),n=o("ZDA2"),i=o("/+P4"),c=o("N9n2"),l=o("5Uuq"),s=o("KI45");t.__esModule=!0,t.default=void 0;var d,p=s(o("LX0d")),u=o("CxY0"),f=l(o("q1tI")),h=(s(o("17x9")),s(o("nOHt"))),b=(o("KA3u"),o("Bu4q"));function m(e){return e&&"object"===typeof e?(0,b.formatWithValidation)(e):e}var v=new p.default,y=window.IntersectionObserver;function g(){return d||(y?d=new y(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var x=function(e){function t(e){var o;return a(this,t),(o=n(this,i(t).call(this,e))).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,o=null,a=null;return function(r,n){if(a&&r===t&&n===o)return a;var i=e(r,n);return t=r,o=n,a=i,i}}(function(e,t){return{href:m(e),as:t?m(t):t}}),o.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var n=o.formatUrls(o.props.href,o.props.as),i=n.href,c=n.as;if(function(e){var t=(0,u.parse)(e,!1,!0),o=(0,u.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===o.protocol&&t.host===o.host}(i)){var l=window.location.pathname;i=(0,u.resolve)(l,i),c=c?(0,u.resolve)(l,c):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},o.p=!1!==e.prefetch,o}return c(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var o=g();return o?(o.observe(e),v.set(e,t),function(){o.unobserve(e),v.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,o=(0,u.resolve)(e,t);h.default.prefetch(o)}}},{key:"render",value:function(){var e=this,t=this.props.children,o=this.formatUrls(this.props.href,this.props.as),a=o.href,r=o.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var n=f.Children.only(t),i={ref:function(t){e.handleRef(t),n&&"object"===typeof n&&n.ref&&("function"===typeof n.ref?n.ref(t):"object"===typeof n.ref&&(n.ref.current=t))},onMouseEnter:function(t){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(t),e.prefetch()},onClick:function(t){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(i.href=r||a),f.default.cloneElement(n,i)}}]),t}(f.Component);x.propTypes=void 0;var k=x;t.default=k},vYYK:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var a=o("hfKm"),r=o.n(a);function n(e,t,o){return t in e?r()(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}}},[["/EDR",1,0]]]);