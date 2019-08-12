webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_MyPaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/MyPaper */ "./src/MyPaper.tsx");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/index.tsx";




var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    mainGrid: {
      marginTop: theme.spacing(3)
    },
    card: {
      display: 'flex'
    },
    cardDetails: {
      flex: 1
    },
    cardMedia: {
      width: 160
    }
  });
});
var featuredPosts = [{
  title: 'Featured post',
  date: 'Nov 12',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
}, {
  title: 'Post title',
  date: 'Nov 11',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
}];

var IndexPage = function IndexPage() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MyPaper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundimageurl: "https://source.unsplash.com/user/erondu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hey! I am Stefanos and this is my developer portfolio."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    color: "inherit",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    variant: "subtitle1",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Continue reading\u2026")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, featuredPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: post.title,
      xs: 12,
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
      component: "a",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      component: "h2",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, post.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, post.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Continue reading..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
      className: classes.cardMedia,
      image: "https://source.unsplash.com/random",
      title: "Image title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.0be32fafedd208762159.hot-update.js.map