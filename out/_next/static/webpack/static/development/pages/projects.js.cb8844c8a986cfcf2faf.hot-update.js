webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./src/ProjectGalleryTile.tsx":
/*!************************************!*\
  !*** ./src/ProjectGalleryTile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectGalleryTile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyGalleryTypography */ "./src/MyGalleryTypography.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/stefanos/Desktop/code/stefanosAgelastos.github.io/src/ProjectGalleryTile.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _tileWrapper;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    tileWrapper: (_tileWrapper = {
      position: "relative",
      display: "block",
      padding: 0,
      borderRadius: 0,
      height: "40vh"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, theme.breakpoints.down("sm"), {
      width: "100% !important",
      height: 200
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, "&:hover", {
      zIndex: 1
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, "&:hover $tileBackdrop", {
      opacity: 0.15
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, "&:hover $tileMarked", {
      opacity: 0
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tileWrapper, "&:hover $tileTitle", {
      border: "4px solid currentColor"
    }), _tileWrapper),
    tileSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    tileBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create("opacity")
    },
    tileButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      margin: theme.spacing(2),
      color: theme.palette.primary.contrastText
    },
    tileTitle: {
      position: "relative",
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(4), "px 14px")
    },
    tileSubtitle: {
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(4), "px 14px"),
      width: "85%"
    },
    tileMarked: {
      height: 3,
      width: "65%",
      background: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "10",
      transition: theme.transitions.create("opacity")
    }
  });
});

/* const linkElement = (slug: string) => {
    const linkprops = {
        href: "/post/[slug]",
        as: `/post/${slug}`,
        passHref: true
    }
    return new Link(linkrops);
} */
function ProjectGalleryTile(props) {
  var classes = useStyles();
  var tile = props.tile;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/projects/[pid]",
    as: "/projects/".concat(tile.slug),
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.tileWrapper,
    style: {
      width: tile.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.tileSrc,
    style: {
      backgroundImage: "url(".concat(tile.imageUrl, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.tileBackdrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.tileButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "h3",
    variant: "h2",
    color: "inherit",
    align: "left",
    className: classes.tileTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, tile.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.tileMarked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyGalleryTypography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "p",
    variant: "subtitle1",
    className: classes.tileSubtitle,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, tile.subtitle)))));
}

/***/ })

})
//# sourceMappingURL=projects.js.cb8844c8a986cfcf2faf.hot-update.js.map