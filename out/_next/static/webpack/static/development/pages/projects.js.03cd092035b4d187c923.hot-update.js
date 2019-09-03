webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./src/ProjectGalleryTile.tsx":
/*!************************************!*\
  !*** ./src/ProjectGalleryTile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectGalleryTile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyGalleryTypography */ "./src/MyGalleryTypography.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles/useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/ProjectGalleryTile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var dur = Math.random;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _tileWrapper;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    tileWrapper: (_tileWrapper = {
      position: "relative",
      display: "block",
      padding: theme.spacing(0),
      borderRadius: 0,
      height: "40vh"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, theme.breakpoints.down("sm"), {
      scrollSnapAlign: "start",
      width: "100% !important",
      height: 400,
      zIndex: 1,
      "& $tileMarked": {
        opacity: 0
      },
      "& $tileBackdrop": {
        /* opacity: 0.05 */
      },
      "& $tileTitle": {
        border: "4px solid currentColor"
      },
      "& $tileSubtitle": {
        visibility: "visible"
      }
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, theme.breakpoints.down("md"), {
      "& $tileButton": {
        padding: theme.spacing(1)
      },
      "& $tileSubtitle": {
        padding: theme.spacing(1)
      },
      "& $tileTitle": {
        padding: theme.spacing(1)
      }
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, theme.breakpoints.up("sm"), {
      "&:hover": {
        zIndex: 1
      },
      "&:hover $tileBackdrop": {
        /* opacity: 0.05 */
      },
      "&:hover $tileMarked": {
        opacity: 0
      },
      "&:hover $tileTitle": {
        border: "4px solid currentColor"
      },
      "&:hover $tileSubtitle": {
        visibility: "visible"
      }
    }), _tileWrapper),
    '@keyframes backdropOpacity': {
      "0%": {
        opacity: 0.2
      },
      "45%": {
        opacity: 0.1
      },
      "50%": {
        opacity: 0
      },
      "55%": {
        opacity: 0.1
      },
      "100%": {
        opacity: 0.2
      }
    },
    tileSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    tileBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.2,
      animationName: "$backdropOpacity",
      animationDuration: "3s",
      animationIterationCount: "infinite",
      animationDelay: "".concat(dur, "s"),
      transition: theme.transitions.create("opacity")
    },
    tileButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: theme.spacing(2),
      color: theme.palette.common.white
    },
    tileTitle: {
      position: "relative",
      whiteSpace: "pre-wrap",
      // for displaying \n and tabs in html
      padding: "".concat(props.theme.spacing(2), "px ").concat(props.theme.spacing(4), "px 14px")
    },
    tileSubtitle: {
      padding: "".concat(props.theme.spacing(2), "px ").concat(props.theme.spacing(4), "px 14px"),
      visibility: "hidden",
      width: "85%"
    },
    tileMarked: {
      height: 3,
      width: "65%",
      background: props.theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "10",
      transition: props.theme.transitions.create("opacity")
    }
  });
});
function ProjectGalleryTile(props) {
  var theme = Object(_material_ui_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var classes = useStyles(theme, props);
  var tile = props.tile;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/projects/[pid]",
    as: "/projects/".concat(tile.slug),
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.tileWrapper,
    style: {
      width: tile.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("div", {
    className: classes.tileSrc,
    style: {
      backgroundColor: tile.imageUrl
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("div", {
    className: classes.tileBackdrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx("div", {
    className: classes.tileButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(_MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "h3",
    variant: "h3",
    color: "inherit",
    align: "left",
    className: classes.tileTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, tile.title, __jsx("div", {
    className: classes.tileMarked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx(_MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "p",
    variant: "subtitle1",
    className: classes.tileSubtitle,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, tile.subtitle)))));
}

/***/ })

})
//# sourceMappingURL=projects.js.03cd092035b4d187c923.hot-update.js.map