webpackHotUpdate("static/development/pages/test.js",{

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
  \*******************************************************/
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _src_MyExpansionPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/MyExpansionPanels */ "./src/MyExpansionPanels.tsx");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/test.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  });
});
function CenteredGrid() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Header title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MyExpansionPanels__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    container: true,
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Quick info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Tags aimed to recruiters")))));
}

/***/ }),

/***/ "./src/MyExpansionPanels.tsx":
/*!***********************************!*\
  !*** ./src/MyExpansionPanels.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlledExpansionPanels; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyExpansionPanels.tsx";







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  });
});
function ControlledExpansionPanels() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expanded: expanded === 'panel1',
    onChange: handleChange('panel1'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "General settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "I am an expansion panel")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    "aria-controls": "panel2bh-content",
    id: "panel2bh-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "You are currently not an owner")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expanded: expanded === 'panel3',
    onChange: handleChange('panel3'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }),
    "aria-controls": "panel3bh-content",
    id: "panel3bh-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Advanced settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.secondaryHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Filtering has been entirely disabled for whole web server")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expanded: expanded === 'panel4',
    onChange: handleChange('panel4'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }),
    "aria-controls": "panel4bh-content",
    id: "panel4bh-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Personal data")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))));
}

/***/ })

})
//# sourceMappingURL=test.js.d5ce953ee469bc3f7840.hot-update.js.map