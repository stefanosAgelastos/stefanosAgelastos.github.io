webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./src/MarkdownLayoutComponents.tsx":
/*!******************************************!*\
  !*** ./src/MarkdownLayoutComponents.tsx ***!
  \******************************************/
/*! exports provided: MainGrid, HeaderTitle, InfoGrid, InfoPaper, MyChip, PanelGrid, Panel, ImageCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGrid", function() { return MainGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGrid", function() { return InfoGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaper", function() { return InfoPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChip", function() { return MyChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelGrid", function() { return PanelGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCard", function() { return ImageCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MarkdownLayoutComponents.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var _createStyles;

  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])((_createStyles = {
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.primary
    },
    chip: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.common.black,
      color: theme.palette.text.primary
    },
    panelRoot: {
      width: "100%",
      backgroundColor: theme.palette.primary.main
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createStyles, "panelRoot", {
    width: "100%",
    backgroundColor: theme.palette.primary.main
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createStyles, "heading", {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createStyles, "secondaryHeading", {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_createStyles, "images", {
    marginTop: theme.spacing(2)
  }), _createStyles));
});
var MainGrid = function MainGrid(_ref) {
  var children = _ref.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, children);
};
var HeaderTitle = function HeaderTitle(_ref2) {
  var children = _ref2.children;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    square: true,
    className: classes.titlePaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, children))));
};
var InfoGrid = function InfoGrid(_ref3) {
  var children = _ref3.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    container: true,
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, children);
};
var InfoPaper = function InfoPaper(_ref4) {
  var children = _ref4.children;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    square: true,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, children));
};
var MyChip = function MyChip(_ref5) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref5);

  var classes = useStyles();
  var _ref6 = props,
      label = _ref6.label;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Chip"], {
    className: classes.chip,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  });
};
var PanelGrid = function PanelGrid(_ref7) {
  var children = _ref7.children;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: classes.panelRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, children));
};
var Panel = function Panel(_ref8) {
  var children = _ref8.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, ["children"]);

  var classes = useStyles();
  var _ref9 = props,
      id = _ref9.id,
      heading = _ref9.heading,
      secondaryHeading = _ref9.secondaryHeading;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ExpansionPanel"], {
    square: true,
    className: classes.panel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ExpansionPanelSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }),
    "aria-controls": "".concat(id, "bh-content"),
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, heading), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, secondaryHeading)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ExpansionPanelDetails"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, children)));
};
var ImageCard = function ImageCard(_ref10) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref10);

  var classes = useStyles();
  return __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    component: "img",
    classes: {
      root: classes.images
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=[pid].js.01b05213002f6e9f4dce.hot-update.js.map