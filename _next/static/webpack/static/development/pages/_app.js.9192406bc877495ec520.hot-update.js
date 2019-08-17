webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/MyIconTabs.tsx":
/*!****************************!*\
  !*** ./src/MyIconTabs.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredTabs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyIconTabs.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    flexGrow: 1
  }
});
function CenteredTabs() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  function handleChange(_event, newValue) {
    setValue(newValue);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "My projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=_app.js.9192406bc877495ec520.hot-update.js.map