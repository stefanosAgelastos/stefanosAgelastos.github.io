webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/MyNavBar.tsx":
/*!**************************!*\
  !*** ./src/MyNavBar.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyNavBar.tsx";




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    toolbar: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }, theme.breakpoints.down('sm'), {
      flexDirection: flexDirection
    }),
    toolbarTitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flex: 1
    }, theme.breakpoints.down('sm'), {
      display: "block !important"
    }),
    homeButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      visibility: function visibility(props) {
        return props.homeButtonVisible ? 'visible' : 'hidden';
      }
    }, theme.breakpoints.down('sm'), {
      display: "block !important"
    }),
    galleryButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      visibility: function visibility(props) {
        return props.galleryButtonVisible ? 'visible' : 'hidden';
      }
    }, theme.breakpoints.down('sm'), {
      display: "block !important"
    })
  });
});
function Header(props) {
  var classes = useStyles(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    className: classes.homeButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Back to home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h2",
    variant: "h5",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "STEFWORKS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outlined",
    size: "small",
    className: classes.galleryButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Browse my Projects  ")));
}

/***/ })

})
//# sourceMappingURL=_app.js.505c45746fc1c38dd81c.hot-update.js.map