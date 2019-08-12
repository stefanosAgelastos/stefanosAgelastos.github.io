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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_MyPaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/MyPaper */ "./src/MyPaper.tsx");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/index.tsx";





var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    mainGrid: {
      marginTop: theme.spacing(3)
    },
    card: {
      display: "flex"
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
  title: "My developer blog",
  date: "Nov 12",
  description: "In my projects you can see the results of my work with different technologies. I enjoy writing about it on my blog",
  link: "dev.to/stefanosAgelastos"
}, {
  title: "Professional info",
  date: "Nov 11",
  description: "Currently I am searching for an inspiring job opportunity.",
  link: "linkedin.com/stefanosAgelastos"
}];

var IndexPage = function IndexPage() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MyPaper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundimageurl: "https://source.unsplash.com/user/erondu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Hey! I am Stefanos and this is my developer portfolio."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    color: "inherit",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Here you can learn more about me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Browse my Projects", " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, featuredPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      key: post.title,
      xs: 12,
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActionArea"], {
      component: "a",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      component: "h2",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, post.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, post.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, post.link))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardMedia"], {
      className: classes.cardMedia,
      image: "https://source.unsplash.com/random",
      title: "Image title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.d4295ebc9bd3bdfd94ff.hot-update.js.map