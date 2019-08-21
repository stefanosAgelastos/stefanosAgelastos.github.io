webpackHotUpdate("static/development/pages/projects/[pid].js",{

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
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyMarkdownLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
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
      HeaderTitle: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"],
      TitleAction: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["TitleAction"],
      InfoGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["InfoGrid"],
      InfoPaper: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["InfoPaper"],
      PanelGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["PanelGrid"],
      Panel: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["Panel"],
      MyChip: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_2__["MyChip"]
    }
  };
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: options,
    children: projectMD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
}
{
  /* <ControlledExpansionPanels />
    ### [Go to github repo](https://github.com/stefanosAgelastos/chatNodejs) or ~~[Open app](https://chat.stefworks.ml)~~
  
  
   */
}

/***/ })

})
//# sourceMappingURL=[pid].js.07831b4660b0989a954a.hot-update.js.map