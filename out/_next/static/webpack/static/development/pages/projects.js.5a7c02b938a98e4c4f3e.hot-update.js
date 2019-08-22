webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./src/ProjectGallery.tsx":
/*!********************************!*\
  !*** ./src/ProjectGallery.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectGallery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _util_projectData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/projectData */ "./util/projectData.ts");
/* harmony import */ var _ProjectGalleryTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectGalleryTile */ "./src/ProjectGalleryTile.tsx");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/ProjectGallery.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    tiles: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: theme.spacing(4),
      display: "flex",
      flexWrap: "wrap",
      scrollSnapType: "y mandatory"
    }, theme.breakpoints.down("sm"), {
      overflow: "scroll",
      //TODO: trying to do scroll snap, is it working now?
      "@global": {
        body: {
          overflow: "hidden"
        }
      }
    })
  });
});
function ProjectGallery() {
  var classes = useStyles();
  var projects = _util_projectData__WEBPACK_IMPORTED_MODULE_3__["dataArray"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: classes.tiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, projects.map(function (project) {
    return __jsx(_ProjectGalleryTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tile: project,
      key: project.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    });
  })));
}

/***/ })

})
//# sourceMappingURL=projects.js.5a7c02b938a98e4c4f3e.hot-update.js.map