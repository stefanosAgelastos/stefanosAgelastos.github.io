webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\src\\MarkdownLayoutComponents.tsx";




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    chip: {
      margin: theme.spacing(1)
    },
    panelRoot: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    images: {
      marginTop: theme.spacing(2)
    }
  });
});
/* Separate styles for the HeaderTitle component,
*  because styling rules require the props
*/

var useTitleStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  });
});
var MainGrid = function MainGrid(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, children);
};
var HeaderTitle = function HeaderTitle(_ref2) {
  var children = _ref2.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["children"]);

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.titlePaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, children)));
};
var InfoGrid = function InfoGrid(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    container: true,
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, children);
};
var InfoPaper = function InfoPaper(_ref4) {
  var children = _ref4.children;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, children));
};
var MyChip = function MyChip(_ref5) {
  var children = _ref5.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["children"]);

  var classes = useStyles();
  var _ref6 = props,
      label = _ref6.label;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Chip"], {
    className: classes.chip,
    label: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, " ", children, " ");
};
var PanelGrid = function PanelGrid(_ref7) {
  var children = _ref7.children;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.panelRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, children));
};
var Panel = function Panel(_ref8) {
  var children = _ref8.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["children"]);

  var classes = useStyles();
  var _ref9 = props,
      id = _ref9.id,
      heading = _ref9.heading,
      secondaryHeading = _ref9.secondaryHeading;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelSummary"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }),
    "aria-controls": "".concat(id, "bh-content"),
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, secondaryHeading)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelDetails"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, children)));
};
var ImageCard = function ImageCard(_ref10) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref10);

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "img",
    classes: {
      root: classes.images
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=[pid].js.70202c4656b8feb231f8.hot-update.js.map