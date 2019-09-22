webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./node_modules/@material-ui/icons/Info.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Info.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.default = _default;

/***/ }),

/***/ "./pages/projects/[pid].tsx":
/*!**********************************!*\
  !*** ./pages/projects/[pid].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_projectData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/projectData */ "./util/projectData.ts");
/* harmony import */ var _src_MyMarkdownLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/MyMarkdownLayout */ "./src/MyMarkdownLayout.tsx");
/* harmony import */ var _src_MySnack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/MySnack */ "./src/MySnack.tsx");







var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/projects/[pid].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var ProjectPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectPage, _React$Component);

  function ProjectPage(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProjectPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ProjectPage).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectPage, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.snack && __jsx(_src_MySnack__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx(_src_MyMarkdownLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        projectMD: this.props.markdown,
        backroundImage: this.props.imageUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, markdown, imageUrl, snack;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return Object(_util_projectData__WEBPACK_IMPORTED_MODULE_8__["getREADMEfromMyGithub"])(query.pid);

              case 3:
                markdown = _context.sent;
                imageUrl = Object(_util_projectData__WEBPACK_IMPORTED_MODULE_8__["getProjectImageUrl"])(query.pid);
                snack = true;

                if (query.pid == "ar-tour-guide" || query.pid == "chat-webapp-node-js" || query.pid == "next-js-homepage") {
                  snack = false;
                }

                return _context.abrupt("return", {
                  markdown: markdown,
                  imageUrl: imageUrl,
                  snack: snack
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ }),

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
    }, " My portfolio webpage project "), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("a", {
      href: "/projects/ar-tour-guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, " AR Prototype System "), "  & ", __jsx("a", {
      href: "/projects/chat-webapp-node-js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Make your own chat room"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), "There you can find more content.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
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
        lineNumber: 73
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
//# sourceMappingURL=[pid].js.556f72c5ea62c611c24e.hot-update.js.map