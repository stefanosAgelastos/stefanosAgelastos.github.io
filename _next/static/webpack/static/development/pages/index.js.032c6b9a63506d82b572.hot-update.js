webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_MyPaper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/MyPaper */ "./src/MyPaper.tsx");

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/index.tsx";





var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
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
    },
    galleryButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      visibility: function visibility(props) {
        return props.galleryButtonVisible ? "visible" : "hidden";
      }
    }, theme.breakpoints.down("sm"), {
      display: "block !important"
    })
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_MyPaper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundimageurl: "https://source.unsplash.com/user/erondu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Hey! I am Stefanos and this is my developer portfolio."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    color: "inherit",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Here you can learn more about me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outlined",
    size: "small",
    className: classes.galleryButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Browse my Projects", " "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, featuredPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      key: post.title,
      xs: 12,
      md: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActionArea"], {
      component: "a",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      component: "h2",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "subtitle1",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, post.date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "subtitle1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, post.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, post.link))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
      className: classes.cardMedia,
      image: "https://source.unsplash.com/random",
      title: "Image title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.032c6b9a63506d82b572.hot-update.js.map