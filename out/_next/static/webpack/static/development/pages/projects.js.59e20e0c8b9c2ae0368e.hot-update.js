webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./util/projectData.ts":
/*!*****************************!*\
  !*** ./util/projectData.ts ***!
  \*****************************/
/*! exports provided: dataArray, findData, getREADMEfromMyGithub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataArray", function() { return dataArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findData", function() { return findData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getREADMEfromMyGithub", function() { return getREADMEfromMyGithub; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.json */ "./util/projects.json");
var _projects_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects.json */ "./util/projects.json", 1);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);





/** Static project data. */

var dataArray = _projects_json__WEBPACK_IMPORTED_MODULE_3__;
/**
 * Calls a mock API which finds a project by SLUG from the list above.
 *
 * Throws an error if not found.
 */

function findData(slug) {
  var selected = dataArray.find(function (data) {
    return data.slug === slug;
  });

  if (!selected) {
    throw new Error('Cannot find project');
  }

  return selected;
}
/* 
    

*/

function getREADMEfromMyGithub(_x) {
  return _getREADMEfromMyGithub.apply(this, arguments);
}
/** Calls a mock API which returns the above array to simulate "get all". */

/* export function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error('Cannot find projects')
    }

    return dataArray
} */

function _getREADMEfromMyGithub() {
  _getREADMEfromMyGithub = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              var selected = dataArray.find(function (data) {
                return data.slug === slug;
              });

              if (!selected) {
                reject(new Error("No project matches the slug"));
              } else {
                fetch("https://raw.githubusercontent.com/stefanosAgelastos".concat(selected.markdownUrlPath, "/README.md"), {
                  headers: {
                    'Accept': 'text/plain; charset=utf-8'
                  }
                }).then(function (value) {
                  return value.text();
                }).then(function (value) {
                  return resolve(value);
                });
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getREADMEfromMyGithub.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=projects.js.59e20e0c8b9c2ae0368e.hot-update.js.map