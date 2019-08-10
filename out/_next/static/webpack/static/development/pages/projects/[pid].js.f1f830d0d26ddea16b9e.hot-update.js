webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

/***/ "./pages/projects/[pid].tsx":
/*!**********************************!*\
  !*** ./pages/projects/[pid].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ProjectMarkdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/ProjectMarkdown */ "./src/ProjectMarkdown.tsx");
/* harmony import */ var _util_projectData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/projectData */ "./util/projectData.ts");
var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\pages\\projects\\[pid].tsx";




var ProjectPage = function ProjectPage(content) {
  console.log("rendering [pid]");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ProjectMarkdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projectMD: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

ProjectPage.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log("GetInitialProps for [pid].tsx with query: ", query);
  var content = Object(_util_projectData__WEBPACK_IMPORTED_MODULE_2__["getMarkdown"])(query.pid);
  content.then(function (value) {
    return value;
  })["catch"](function (err) {
    return "##Error" + err;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ })

})
//# sourceMappingURL=[pid].js.f1f830d0d26ddea16b9e.hot-update.js.map