webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

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
var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\src\\MyMarkdownLayout.tsx";




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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: options,
    children: projectMD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
//# sourceMappingURL=[pid].js.5e52bea664baec47c966.hot-update.js.map