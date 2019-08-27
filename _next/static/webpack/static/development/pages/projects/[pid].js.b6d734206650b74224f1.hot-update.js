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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLayoutComponents */ "./src/MarkdownLayoutComponents.tsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyMarkdownLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var projectMD = props.projectMD;
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (panelID, isExpanded) {
    return function (_event) {
      console.log("handleChange");
      setExpanded(isExpanded ? panelID : false);
    };
  }, []);
  var options = {
    overrides: {
      img: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["ImageCard"],
      MainGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["MainGrid"],
      HeaderTitle: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"],
      TitleAction: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["TitleAction"],
      InfoGrid: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["InfoGrid"],
      InfoPaper: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["InfoPaper"],
      PanelGrid: {
        component: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["PanelGrid"],
        props: {
          expanded: expanded,
          onChange: handleChange
        }
      },
      Panel: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["Panel"],
      MyChip: _MarkdownLayoutComponents__WEBPACK_IMPORTED_MODULE_3__["MyChip"]
    }
  };
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: options,
    children: projectMD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
//# sourceMappingURL=[pid].js.b6d734206650b74224f1.hot-update.js.map