webpackHotUpdate("static/development/pages/projects/[pid].js",{

/***/ "./src/MarkdownLayoutComponents.tsx":
/*!******************************************!*\
  !*** ./src/MarkdownLayoutComponents.tsx ***!
  \******************************************/
/*! exports provided: MainGrid, HeaderTitle, TitleAction, InfoGrid, InfoPaper, MyChip, PanelGrid, Panel, ImageCard, HyperLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGrid", function() { return MainGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleAction", function() { return TitleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGrid", function() { return InfoGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaper", function() { return InfoPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChip", function() { return MyChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelGrid", function() { return PanelGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCard", function() { return ImageCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyperLink", function() { return HyperLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/theme.tsx");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MarkdownLayoutComponents.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].VibrantYellow
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].LimpetShell,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(17)
    },
    actions: {
      margin: theme.spacing(1)
    },
    chip: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.text.secondary,
      fontWeight: "bold",
      color: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].LimpetShell
    },
    chipIcon: {
      color: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].LimpetShell
    },
    panelRoot: {
      width: "100%",
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].SeaPink
    },
    panelDetails: {
      backgroundColor: theme.palette.background["default"],
      color: _theme__WEBPACK_IMPORTED_MODULE_6__["Pantone"].LimpetShell
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      fontWeight: "bold",
      flexBasis: "33.33%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    images: {
      marginTop: theme.spacing(2)
    },
    hyperLink: {
      color: "inherit",
      textDecorationColor: "none"
    }
  });
});
var MainGrid = function MainGrid(_ref) {
  var children = _ref.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children);
};
var HeaderTitle = function HeaderTitle(_ref2) {
  var children = _ref2.children;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    square: true,
    className: classes.titlePaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, children))));
};
var TitleAction = function TitleAction(_ref3) {
  var children = _ref3.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["children"]);

  var classes = useStyles();
  var _ref4 = props,
      href = _ref4.href,
      label = _ref4.label,
      disabled = _ref4.disabled;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    href: href,
    className: classes.actions,
    disabled: disabled,
    size: "large",
    variant: "outlined",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, label);
};
var InfoGrid = function InfoGrid(_ref5) {
  var children = _ref5.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    container: true,
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, children);
};
var InfoPaper = function InfoPaper(_ref6) {
  var children = _ref6.children;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    square: true,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, children));
};
var MyChip = function MyChip(_ref7) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref7);

  var classes = useStyles();
  var _ref8 = props,
      label = _ref8.label;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Chip"], {
    className: classes.chip,
    label: label,
    icon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
      classes: {
        root: classes.chipIcon
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  });
};
var PanelGrid = function PanelGrid(_ref9) {
  var children = _ref9.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, children));
};
var Panel = function Panel(_ref10) {
  var children = _ref10.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref10, ["children"]);

  var classes = useStyles();
  var _ref11 = props,
      id = _ref11.id,
      heading = _ref11.heading,
      secondaryHeading = _ref11.secondaryHeading,
      expanded = _ref11.expanded,
      _onChange = _ref11.onChange;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ExpansionPanel"], {
    expanded: expanded === id,
    square: true,
    onChange: function onChange(_e, isExpanded) {
      _onChange(id, isExpanded);
    },
    className: classes.panelRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ExpansionPanelSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }),
    "aria-controls": "".concat(id, "bh-content"),
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, heading), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, secondaryHeading)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ExpansionPanelDetails"], {
    className: classes.panelDetails,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, children)));
};
var ImageCard = function ImageCard(_ref12) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref12);

  var classes = useStyles();
  return __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "img",
    classes: {
      root: classes.images
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }));
};
var HyperLink = function HyperLink(_ref13) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref13);

  var classes = useStyles();
  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.hyperLink
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=[pid].js.a7981173b45c26cf15a1.hot-update.js.map