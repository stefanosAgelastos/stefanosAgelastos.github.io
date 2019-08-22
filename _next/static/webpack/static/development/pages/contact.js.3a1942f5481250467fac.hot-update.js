webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fg-loadcss */ "./node_modules/fg-loadcss/src/loadCSS.js");
/* harmony import */ var fg_loadcss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/pages/contact.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    mainGrid: {
      marginTop: theme.spacing(4)
    },
    icon: {
      margin: theme.spacing(2)
    },
    iconHover: {
      margin: theme.spacing(2),
      "&:hover": {
        color: "red"
      }
    },
    root: {
      height: "100%",
      flexGrow: 1,
      //so that it beats the footers topMargin: auto.
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      display: "flex",
      backgroundColor: theme.palette.background["default"]
    },
    cardDetails: {
      flex: 1,
      color: theme.palette.secondary.main,
      textAlign: "right"
    },
    cardGrid: {
      marginTop: theme.spacing(2)
    },
    cardMedia: {
      width: 160
    }
  });
});
var featuredPosts = [{
  title: "Github",
  icon: "fab fa-github",
  description: "",
  linkText: "",
  link: "https://www.linkedin.com/in/stefanosagelastos/"
}, {
  title: "Personal life",
  icon: "fab fa-instagram",
  description: "Get to know what I like to post about.",
  linkText: "",
  link: "https://www.instagram.com/volatilemercury/"
}, {
  title: "LinkedIn",
  icon: "fab fa-linkedin",
  description: "Currently I am searching for an inspiring job opportunity.",
  linkText: "",
  link: "https://www.linkedin.com/in/stefanosagelastos/"
}, {
  title: "Get in touch",
  icon: "fas fa-envelope",
  description: "sagelastos@gmail.com",
  linkText: "",
  link: "mailto:sagelastos@gmail.com"
}, {
  title: "or Just ring",
  icon: "fas fa-phone",
  description: "+45 7158 7288",
  linkText: "",
  link: "tel:71-58-72-88"
}];

var ContactPage = function ContactPage() {
  var classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    Object(fg_loadcss__WEBPACK_IMPORTED_MODULE_3__["loadCSS"])("https://use.fontawesome.com/releases/v5.1.0/css/all.css", document.querySelector("#font-awesome-css"));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    className: classes.cardGrid,
    justify: "space-evenly",
    alignItems: "center",
    container: true,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, featuredPosts.map(function (post) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      key: post.title,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActionArea"], {
      component: "a",
      href: post.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      elevation: 0,
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      component: "h2",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, post.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "subtitle1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, post.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, post.linkText))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.icon, post.icon),
      color: "secondary",
      fontSize: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ })

})
//# sourceMappingURL=contact.js.3a1942f5481250467fac.hot-update.js.map