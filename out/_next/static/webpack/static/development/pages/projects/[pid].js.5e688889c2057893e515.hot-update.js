webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./src/MySnack.tsx":
/*!*************************!*\
  !*** ./src/MySnack.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSnackbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/theme.tsx");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MySnack.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (_theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    warning: {
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].VibrantYellow,
      color: _theme.palette.text.secondary,
      fontWeight: "bold"
    }
  });
});
function SimpleSnackbar() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setOpen(true);
  }, []); // run an effect and clean it up only once (on mount and unmount)

  function handleClose(_event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: open
    /*       autoHideDuration={15000} */
    ,
    onClose: handleClose,
    ContentProps: {
      "aria-describedby": "message-id",
      classes: {
        root: classes.warning
      }
    },
    message: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default.a, {
      fontSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("span", {
      id: "message-id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Page under development, I am sorrry for the bad experience.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), "At the moment, I have only the following projects updated:", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("a", {
      href: "/projects/next-js-homepage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, " Making  "), __jsx("a", {
      href: "/projects/ar-tour-guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, " AR Prototype System "), "  & ", __jsx("a", {
      href: "/projects/chat-webapp-node-js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Make your own chat room"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), "There you can find more content.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), "Have a look!")),
    action: [__jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "undo",
      color: "secondary",
      size: "small",
      onClick: handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "I understand")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=[pid].js.5e688889c2057893e515.hot-update.js.map