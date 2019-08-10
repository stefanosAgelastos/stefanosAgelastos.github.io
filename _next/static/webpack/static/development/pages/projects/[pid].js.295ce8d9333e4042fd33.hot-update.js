webpackHotUpdate("static\\development\\pages\\projects\\[pid].js",{

/***/ "./pages/projects/[pid].tsx":
/*!**********************************!*\
  !*** ./pages/projects/[pid].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_ProjectMarkdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/ProjectMarkdown */ "./src/ProjectMarkdown.tsx");
/* harmony import */ var _util_projectData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/projectData */ "./util/projectData.ts");


var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\pages\\projects\\[pid].tsx";




var ProjectPage = function ProjectPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_ProjectMarkdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    projectMD: props.markdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

ProjectPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, _ref3, markdown, project;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return Object(_util_projectData__WEBPACK_IMPORTED_MODULE_4__["getREADMEfromMyGithub"])(query.pid);

          case 3:
            _ref3 = _context.sent;
            markdown = _ref3.markdown;
            project = _ref3.project;
            return _context.abrupt("return", {
              markdown: markdown
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ })

})
//# sourceMappingURL=[pid].js.295ce8d9333e4042fd33.hot-update.js.map