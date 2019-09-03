webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: Pantone, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pantone", function() { return Pantone; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);


/* 
PANTONE: UNDER THE SEA
https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2019-palette-exploration
*/

var Pantone; // Create a theme instance.

(function (Pantone) {
  Pantone["LivingCoral"] = "#FF6F61";
  Pantone["BlueDepths"] = "#263056";
  Pantone["TurtleGreen"] = "#81894E";
  Pantone["ViridianGreen"] = "#009499";
  Pantone["TurkishSea"] = "#195190";
  Pantone["SeaPink"] = "#DE98AB";
  Pantone["LimpetShell"] = "#98DDDE";
  Pantone["VibrantYellow"] = "#FFDA29";
})(Pantone || (Pantone = {}));

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: Pantone.BlueDepths
    },
    secondary: {
      main: Pantone.LivingCoral
    },
    error: {
      main: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a.A400
    },
    background: {
      "default": Pantone.BlueDepths,
      paper: "rgba(255, 255, 255, 0)" // transparent

    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: Pantone.TurkishSea,
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    fontFamily: "Raleway"
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: "1rem"
      },
      contained: {
        backgroundColor: Pantone.LivingCoral,
        color: Pantone.BlueDepths
      },
      outlined: {
        borderColor: Pantone.TurkishSea,
        color: Pantone.TurkishSea
      }
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.59b6ceb7a44f5a35fe78.hot-update.js.map