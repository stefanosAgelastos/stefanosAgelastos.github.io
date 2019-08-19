webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

/***/ "./src/MyHeroPaper.tsx":
/*!*****************************!*\
  !*** ./src/MyHeroPaper.tsx ***!
  \*****************************/
/*! exports provided: MyPaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPaper", function() { return MyPaper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\src\\MyHeroPaper.tsx";



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      position: 'relative',
      backgroundColor: theme.palette.primary.light,
      opacity: 0.95,
      color: theme.palette.common.white,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
      /*         backgroundColor: 'rgba(0,0,0,.3)',
       */

    },
    childrenWrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      padding: theme.spacing(3)
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(6),
      paddingRight: 0
    })
  });
});
var MyPaper = function MyPaper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.overlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.childrenWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children))));
};

/***/ }),

/***/ "./src/MyMarkdownLayout.tsx":
/*!**********************************!*\
  !*** ./src/MyMarkdownLayout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkdownLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownLayoutComponents */ "./src/MarkdownLayoutComponents.tsx");
/* harmony import */ var _MyHeroPaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyHeroPaper */ "./src/MyHeroPaper.tsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");
var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\src\\MyMarkdownLayout.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    "@global": {
      body: function body(props) {
        return {
          backgroundImage: "url(".concat(props.backroundImage, ")"),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        };
      }
    },
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    chip: {
      margin: theme.spacing(1)
    }
  });
});
function MarkdownLayout(props) {
  var classes = useStyles(props);
  var projectMD = props.projectMD;
  var options = {
    overrides: {
      img: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["ImageCard"],
      MainGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["MainGrid"],
      HeaderTitle: _MyHeroPaper__WEBPACK_IMPORTED_MODULE_3__["MyPaper"],
      InfoGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["InfoGrid"],
      InfoPaper: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["InfoPaper"],
      PanelGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["PanelGrid"],
      Panel: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["Panel"],
      MyChip: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["MyChip"]
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: options,
    children: projectMD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
}
{
  /* <ControlledExpansionPanels />
  */
}

/***/ })

})
//# sourceMappingURL=[pid].js.b5a6c1e39479a6c62734.hot-update.js.map