(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("23aj");return{page:e.default||e}}])},"1AV7":function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("defs",null,n.default.createElement("path",{id:"a",d:"M0 0h24v24H0V0z"})),n.default.createElement("path",{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"})),"TouchApp");t.default=r},"23aj":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("YFqc"),i=a.n(r),c=a("RD7I"),l=a("1AV7"),s=a.n(l),d=a("ZBNC"),p=a("ofer"),u=a("Z3vd"),m=a("tRbT"),f=a("wx14"),b=a("Ff2n"),g=a("17x9"),h=a.n(g),v=a("iuhU"),x=a("H2TA"),y=a("VD++"),w=n.a.forwardRef(function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.focusVisibleClassName,c=Object(b.a)(e,["children","classes","className","focusVisibleClassName"]);return n.a.createElement(y.a,Object(f.a)({className:Object(v.a)(o.root,r),focusVisibleClassName:Object(v.a)(i,o.focusVisible),ref:t},c),a,n.a.createElement("span",{className:o.focusHighlight}))}),j=Object(x.a)(function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},{name:"MuiCardActionArea"})(w),O=a("kKAo"),k=n.a.forwardRef(function(e,t){var a=e.classes,o=e.className,r=e.raised,i=void 0!==r&&r,c=Object(b.a)(e,["classes","className","raised"]);return n.a.createElement(O.a,Object(f.a)({className:Object(v.a)(a.root,o),elevation:i?8:1,ref:t},c))}),C=Object(x.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(k),E=n.a.forwardRef(function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"div":r,c=Object(b.a)(e,["classes","className","component"]);return n.a.createElement(i,Object(f.a)({className:Object(v.a)(a.root,o),ref:t},c))}),S=Object(x.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(E),D=a("LEIi"),N=a("KQm4"),U=a("ODXe"),R=a("A+CX"),T=a("2mql"),z=a.n(T),M=a("aXM8"),I=a("cNwE");a("2W6z");var W=!1;var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(M.a)(),o=Object(R.a)({theme:a,name:"MuiUseMediaQuery",props:{}}),r="function"===typeof e?e(a):e;r=r.replace(/^@media( ?)/m,"");var i="undefined"!==typeof window.matchMedia,c=Object(f.a)({},o,{},t),l=c.defaultMatches,s=void 0!==l&&l,d=c.noSsr,p=void 0!==d&&d,u=c.ssrMatchMedia,m=void 0===u?null:u,b=n.a.useState(function(){return(W||p)&&i?window.matchMedia(r).matches:m?m(r).matches:s}),g=Object(U.a)(b,2),h=g[0],v=g[1];return n.a.useEffect(function(){if(W=!0,i){var e=window.matchMedia(r),t=function(){v(e.matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}},[r,i]),h},V=function(e,t){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?D.b.indexOf(e)<=D.b.indexOf(t):D.b.indexOf(e)<D.b.indexOf(t)},q=function(e,t){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?D.b.indexOf(t)<=D.b.indexOf(e):D.b.indexOf(t)<D.b.indexOf(e)},P=n.a.useLayoutEffect,B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.withTheme,o=void 0!==a&&a,r=e.noSSR,i=void 0!==r&&r,c=e.initialWidth;function l(e){var a=Object(M.a)()||I.a,r=e.theme||a,l=Object(R.a)({theme:r,name:"MuiWithWidth",props:Object(f.a)({},e)}),s=l.initialWidth,d=l.width,p=Object(b.a)(l,["initialWidth","width"]),u=n.a.useState(!1),m=Object(U.a)(u,2),g=m[0],h=m[1];P(function(){h(!0)},[]);var v=Object(N.a)(r.breakpoints.keys).reverse().reduce(function(e,t){var a=A(r.breakpoints.up(t));return!e&&a?t:e},null),x=Object(f.a)({width:d||(g||i?v:void 0)||s||c},o?{theme:r}:{},{},p);return void 0===x.width?null:n.a.createElement(t,x)}return z()(l,t),l}};function H(e){var t=e.children,a=e.only,o=e.width,n=!0;if(a)if(Array.isArray(a))for(var r=0;r<a.length;r+=1){if(o===a[r]){n=!1;break}}else a&&o===a&&(n=!1);if(n)for(var i=0;i<D.b.length;i+=1){var c=D.b[i],l=e["".concat(c,"Up")],s=e["".concat(c,"Down")];if(l&&V(c,o)||s&&q(c,o)){n=!1;break}}return n?t:null}H.propTypes={children:h.a.node,className:h.a.string,implementation:h.a.oneOf(["js","css"]),initialWidth:h.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:h.a.bool,lgUp:h.a.bool,mdDown:h.a.bool,mdUp:h.a.bool,only:h.a.oneOfType([h.a.oneOf(["xs","sm","md","lg","xl"]),h.a.arrayOf(h.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:h.a.bool,smUp:h.a.bool,width:h.a.string.isRequired,xlDown:h.a.bool,xlUp:h.a.bool,xsDown:h.a.bool,xsUp:h.a.bool};var F=B()(H),_=a("rePB"),$=a("mVKy");var L=Object(x.a)(function(e){var t={display:"none"};return D.b.reduce(function(a,o){return a["only".concat(Object($.a)(o))]=Object(_.a)({},e.breakpoints.only(o),t),a["".concat(o,"Up")]=Object(_.a)({},e.breakpoints.up(o),t),a["".concat(o,"Down")]=Object(_.a)({},e.breakpoints.down(o),t),a},{})},{name:"PrivateHiddenCss"})(function(e){var t=e.children,a=e.classes,o=e.className,r=(e.lgDown,e.lgUp,e.mdDown,e.mdUp,e.only),i=(e.smDown,e.smUp,e.xlDown,e.xlUp,e.xsDown,e.xsUp,Object(b.a)(e,["children","classes","className","lgDown","lgUp","mdDown","mdUp","only","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]),[]);o&&i.push(o);for(var c=0;c<D.b.length;c+=1){var l=D.b[c],s=e["".concat(l,"Up")],d=e["".concat(l,"Down")];s&&i.push(a["".concat(l,"Up")]),d&&i.push(a["".concat(l,"Down")])}return r&&(Array.isArray(r)?r:[r]).forEach(function(e){i.push(a["only".concat(Object($.a)(e))])}),n.a.createElement("div",{className:i.join(" ")},t)});var G=function(e){var t=e.implementation,a=void 0===t?"js":t,o=e.lgDown,r=void 0!==o&&o,i=e.lgUp,c=void 0!==i&&i,l=e.mdDown,s=void 0!==l&&l,d=e.mdUp,p=void 0!==d&&d,u=e.smDown,m=void 0!==u&&u,g=e.smUp,h=void 0!==g&&g,v=e.xlDown,x=void 0!==v&&v,y=e.xlUp,w=void 0!==y&&y,j=e.xsDown,O=void 0!==j&&j,k=e.xsUp,C=void 0!==k&&k,E=Object(b.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===a?n.a.createElement(F,Object(f.a)({lgDown:r,lgUp:c,mdDown:s,mdUp:p,smDown:m,smUp:h,xlDown:x,xlUp:w,xsDown:O,xsUp:C},E)):n.a.createElement(L,Object(f.a)({lgDown:r,lgUp:c,mdDown:s,mdUp:p,smDown:m,smUp:h,xlDown:x,xlUp:w,xsDown:O,xsUp:C},E))},J=a("Ie8z"),K=a("A3e0"),X=Object(c.a)(function(e){return Object(d.a)({mainGrid:{marginTop:e.spacing(3)},titleText:{textShadow:"#000000 -1px 4px 10px"},card:{display:"flex"},cardDetails:{flex:1},cardGrid:{marginTop:e.spacing(0)},cardMedia:{width:160},galleryButton:{color:e.palette.primary.contrastText,boxShadow:e.shadows[3]}})}),Z=[{title:"Personal life",image:"https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",description:"Get to know what I like to post about.",linkText:"My Instagram",link:"https://www.instagram.com/volatilemercury/"},{title:"Professional info",image:"https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",description:"Currently I am searching for an inspiring job opportunity.",linkText:"My LinkedIn",link:"https://www.linkedin.com/in/stefanosagelastos/"}];t.default=function(){var e=X();return n.a.createElement(n.a.Fragment,null,n.a.createElement(K.a,{backgroundimageurl:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"},n.a.createElement(p.a,{className:e.titleText,component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},"Hey! I'm Stefanos and this is my developer portfolio."),n.a.createElement(p.a,{className:e.titleText,variant:"h5",color:"inherit",paragraph:!0},"Have a look at my projects"),n.a.createElement(i.a,{href:"/projects",passHref:!0},n.a.createElement(u.a,{variant:"outlined",size:"medium",className:e.galleryButton},"Project Gallery",n.a.createElement(s.a,null)))),n.a.createElement(m.a,{className:e.cardGrid,container:!0,spacing:4},Z.map(function(t){return n.a.createElement(m.a,{item:!0,key:t.title,xs:12,md:6},n.a.createElement(j,{component:"a",href:t.link},n.a.createElement(C,{className:e.card},n.a.createElement("div",{className:e.cardDetails},n.a.createElement(S,null,n.a.createElement(p.a,{component:"h2",variant:"h5"},t.title),n.a.createElement(p.a,{variant:"subtitle1",paragraph:!0},t.description),n.a.createElement(p.a,{variant:"subtitle1",color:"primary"},t.linkText))),n.a.createElement(G,{xsDown:!0},n.a.createElement(J.a,{className:e.cardMedia,image:t.image,title:"Image title"})))))})))}},"8/g6":function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef(function(t,a){return r.default.createElement(i.default,(0,n.default)({ref:a},t),e)}));0;return a.muiName=i.default.muiName,a};var n=o(a("pVnL")),r=o(a("q1tI")),i=o(a("UJJ5"))},A3e0:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var o=a("vYYK"),n=a("q1tI"),r=a.n(n),i=a("R/WZ"),c=a("ZBNC"),l=a("kKAo"),s=a("tRbT"),d=Object(i.a)(function(e){return Object(c.a)({root:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginTop:e.spacing(4),marginBottom:e.spacing(4),backgroundImage:function(e){return"url(".concat(e.backgroundimageurl,")")},backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},childrenWrapper:Object(o.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})})});function p(e){var t=d(e);return r.a.createElement(l.a,{className:t.root},r.a.createElement("div",{className:t.overlay}),r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,md:6},r.a.createElement("div",{className:t.childrenWrapper},e.children))))}},Ie8z:function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=(a("2W6z"),a("H2TA")),s=["video","audio","picture","iframe","img"],d=i.a.forwardRef(function(e,t){var a=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,p=e.image,u=e.src,m=e.style,f=Object(n.a)(e,["classes","className","component","image","src","style"]),b=-1!==s.indexOf(d),g=!b&&p?Object(o.a)({backgroundImage:'url("'.concat(p,'")')},m):m;return i.a.createElement(d,Object(o.a)({className:Object(c.a)(a.root,r,b&&a.media),ref:t,style:g,src:b?p||u:void 0},f))});t.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%",objectFit:"cover"}},{name:"MuiCardMedia"})(d)},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,t,a){"use strict";a.r(t);var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=a("H2TA"),s=a("mVKy"),d=i.a.forwardRef(function(e,t){var a=e.children,r=e.classes,l=e.className,d=e.color,p=void 0===d?"inherit":d,u=e.component,m=void 0===u?"svg":u,f=e.fontSize,b=void 0===f?"default":f,g=e.htmlColor,h=e.titleAccess,v=e.viewBox,x=void 0===v?"0 0 24 24":v,y=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.a.createElement(m,Object(o.a)({className:Object(c.a)(r.root,l,"inherit"!==p&&r["color".concat(Object(s.a)(p))],"default"!==b&&r["fontSize".concat(Object(s.a)(b))]),focusable:"false",viewBox:x,color:g,"aria-hidden":h?"false":"true",role:h?"img":"presentation",ref:t},y),a,h?i.a.createElement("title",null,h):null)});d.muiName="SvgIcon";var p=Object(l.a)(function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},{name:"MuiSvgIcon"})(d);a.d(t,"default",function(){return p})},Z3vd:function(e,t,a){"use strict";var o=a("Ff2n"),n=a("wx14"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=a("H2TA"),s=a("ye/S"),d=a("VD++"),p=a("mVKy"),u=i.a.forwardRef(function(e,t){var a=e.children,r=e.classes,l=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,f=void 0===m?"button":m,b=e.disabled,g=void 0!==b&&b,h=e.disableFocusRipple,v=void 0!==h&&h,x=e.focusVisibleClassName,y=e.fullWidth,w=void 0!==y&&y,j=e.size,O=void 0===j?"medium":j,k=e.type,C=void 0===k?"button":k,E=e.variant,S=void 0===E?"text":E,D=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),N="text"===S,U="outlined"===S,R="contained"===S,T="primary"===u,z="secondary"===u,M=Object(c.a)(r.root,l,N&&[r.text,T&&r.textPrimary,z&&r.textSecondary],U&&[r.outlined,T&&r.outlinedPrimary,z&&r.outlinedSecondary],R&&[r.contained,T&&r.containedPrimary,z&&r.containedSecondary],"medium"!==O&&r["size".concat(Object(p.a)(O))],g&&r.disabled,w&&r.fullWidth,{inherit:r.colorInherit}[u]);return i.a.createElement(d.a,Object(n.a)({className:M,component:f,disabled:g,focusRipple:!v,focusVisibleClassName:Object(c.a)(r.focusVisible,x),ref:t,type:C},D),i.a.createElement("span",{className:r.label},a))});t.a=Object(l.a)(function(e){return{root:Object(n.a)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(u)},kKAo:function(e,t,a){"use strict";var o=a("Ff2n"),n=a("wx14"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=(a("2W6z"),a("H2TA")),s=i.a.forwardRef(function(e,t){var a=e.classes,r=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,p=void 0!==d&&d,u=e.elevation,m=void 0===u?1:u,f=Object(o.a)(e,["classes","className","component","square","elevation"]),b=Object(c.a)(a.root,a["elevation".concat(m)],r,!p&&a.rounded);return i.a.createElement(s,Object(n.a)({className:b,ref:t},f))});t.a=Object(l.a)(function(e){var t={};return e.shadows.forEach(function(e,a){t["elevation".concat(a)]={boxShadow:e}}),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius}},t)},{name:"MuiPaper"})(s)},pVnL:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},a.apply(this,arguments)}e.exports=a},tRbT:function(e,t,a){"use strict";var o=a("Ff2n"),n=a("wx14"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=a("H2TA"),s=a("LEIi"),d=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var u=i.a.forwardRef(function(e,t){var a=e.alignContent,r=void 0===a?"stretch":a,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,p=e.className,u=e.component,m=void 0===u?"div":u,f=e.container,b=void 0!==f&&f,g=e.direction,h=void 0===g?"row":g,v=e.item,x=void 0!==v&&v,y=e.justify,w=void 0===y?"flex-start":y,j=e.lg,O=void 0!==j&&j,k=e.md,C=void 0!==k&&k,E=e.sm,S=void 0!==E&&E,D=e.spacing,N=void 0===D?0:D,U=e.wrap,R=void 0===U?"wrap":U,T=e.xl,z=void 0!==T&&T,M=e.xs,I=void 0!==M&&M,W=e.zeroMinWidth,A=void 0!==W&&W,V=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),q=Object(c.a)(d.root,p,b&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],x&&d.item,A&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==I&&d["grid-xs-".concat(String(I))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==C&&d["grid-md-".concat(String(C))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==z&&d["grid-xl-".concat(String(z))]);return i.a.createElement(m,Object(n.a)({className:q,ref:t},V))});var m=Object(l.a)(function(e){return Object(n.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return d.forEach(function(o){var n=e.spacing(o);0!==n&&(a["spacing-".concat(t,"-").concat(o)]={margin:-n/2,width:"calc(100% + ".concat(n,"px)"),"& > $item":{padding:n/2}})}),a}(e,"xs"),{},s.b.reduce(function(t,a){return function(e,t,a){var o={};p.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object(n.a)(e,o):e[t.breakpoints.up(a)]=o}(t,e,a),t},{}))},{name:"MuiGrid"})(u);t.a=m}},[["/EDR",1,0]]]);