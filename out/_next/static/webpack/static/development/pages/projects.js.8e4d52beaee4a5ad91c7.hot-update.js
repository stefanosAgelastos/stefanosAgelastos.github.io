webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./src/MyGalleryTypography.tsx":
/*!*************************************!*\
  !*** ./src/MyGalleryTypography.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryTypography; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/MyGalleryTypography.tsx";




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    markedH2: {
      height: 4,
      width: 73,
      display: 'block',
      margin: "".concat(theme.spacing(1), "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH3: {
      height: 4,
      width: 55,
      display: 'block',
      margin: "".concat(theme.spacing(1), "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH4: {
      height: 4,
      width: 55,
      display: 'block',
      margin: "".concat(theme.spacing(1), "px auto 0"),
      backgroundColor: theme.palette.secondary.main
    },
    markedH6: {
      height: 2,
      width: 28,
      display: 'block',
      marginTop: theme.spacing(0.5),
      background: 'currentColor'
    }
  });
});
var variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};
function GalleryTypography(props) {
  var classes = useStyles();

  var children = props.children,
      _props$marked = props.marked,
      marked = _props$marked === void 0 ? true : _props$marked,
      variant = props.variant,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "marked", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variantMapping: variantMapping,
    variant: variant
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), children, marked ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes["marked".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(variant))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }) : null);
}
/* ProjectGalleryTypography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  marked: PropTypes.oneOf([false, 'center', 'left']),
  variant: PropTypes.string,
}; */

/***/ })

})
//# sourceMappingURL=projects.js.8e4d52beaee4a5ad91c7.hot-update.js.map