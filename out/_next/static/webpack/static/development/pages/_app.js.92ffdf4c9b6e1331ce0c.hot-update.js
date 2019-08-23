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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyIconTabs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    root: {
      flexGrow: 1,
      backgroundColor: "rgba(255,255,255,0)"
    },
    tabRoot: {
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.light,
        opacity: 1
      }
    },
    tabIndicator: {
      backgroundColor: theme.palette.primary.main
    }
  });
});
function CenteredTabs() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("/"),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  function handleChange(_event, newValue) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(newValue);
    setValue(newValue);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Set initial state of the Tabs component for SSR
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname == "/" ? setValue("/") : next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname == "/contact" ? setValue("/contact") : setValue("/projects");
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeStart", function (url) {
      // Change the state of the Tabs depending on URL change
      url == "/" ? setValue("/") : url == "/contact" ? setValue("/contact") : setValue("/projects");
    });
  }, []); // run an effect and clean it up only once (on mount and unmount)

  var classes = useStyles();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabRoot,
      indicator: classes.tabIndicator
    },
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    classes: {
      root: classes.tabRoot,
      indicator: classes.tabIndicator
    },
    label: "Home",
    value: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    classes: {
      root: classes.tabRoot,
      indicator: classes.tabIndicator
    },
    label: "My projects",
    value: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Contact",
    value: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=_app.js.92ffdf4c9b6e1331ce0c.hot-update.js.map