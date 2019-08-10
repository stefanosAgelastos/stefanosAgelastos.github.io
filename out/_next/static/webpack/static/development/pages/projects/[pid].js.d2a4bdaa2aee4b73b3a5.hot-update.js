webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

/***/ "./src/ProjectMarkdown.tsx":
/*!*********************************!*\
  !*** ./src/ProjectMarkdown.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectMarkdown; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");

var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\src\\ProjectMarkdown.tsx";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    listItem: {
      marginTop: theme.spacing(1)
    },
    image: {
      root: {
        visibility: "hidden"
      },
      media: {
        visibility: "hidden"
      }
    }
  });
});
function ProjectMarkdown(props) {
  var classes = useStyles();
  var options = {
    overrides: {
      h1: {
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            gutterBottom: true,
            variant: "h4"
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }));
        }
      },
      h2: {
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            gutterBottom: true,
            variant: "h6"
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }));
        }
      },
      h3: {
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            gutterBottom: true,
            variant: "subtitle1"
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }));
        }
      },
      h4: {
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            gutterBottom: true,
            variant: "caption",
            paragraph: true
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }));
        }
      },
      p: {
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            paragraph: true
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }));
        }
      },
      a: {
        component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      img: {
        component: _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"],
        props: {
          className: classes.image,
          component: 'img'
        }
      },
      li: {
        component: function component(_ref) {
          var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: classes.listItem,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            component: "span"
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          })));
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, props.projectMD);
}

/***/ })

})
//# sourceMappingURL=[pid].js.d2a4bdaa2aee4b73b3a5.hot-update.js.map