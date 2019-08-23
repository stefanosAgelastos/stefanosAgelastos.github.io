webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/MyElevatedAppBar.tsx":
/*!**********************************!*\
  !*** ./src/MyElevatedAppBar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElevatedAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _MyIconTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyIconTabs */ "./src/MyIconTabs.tsx");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyElevatedAppBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    appBar: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      paddingTop: theme.spacing(2),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    spacer: {
      paddingTop: theme.spacing(8),
      visibility: "hidden"
    },
    toolbarTitle: {
      flex: 1
    }
  });
});

function ElevationScroll(props) {
  var children = props.children;
  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"])({
    disableHysteresis: true,
    threshold: 0
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

function ElevatedAppBar() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: classes.spacer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, " ", "spacer", " "), __jsx(ElevationScroll, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h2",
    variant: "h5",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "STEFWORKS"), __jsx(_MyIconTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=_app.js.acfe6b36c0aad2386cf1.hot-update.js.map