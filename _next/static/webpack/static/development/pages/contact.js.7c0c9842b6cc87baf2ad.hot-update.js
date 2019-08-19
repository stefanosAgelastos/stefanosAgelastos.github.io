webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./node_modules/react-protected-mailto/dist/obfuscate.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-protected-mailto/dist/obfuscate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContactLink = exports.combineHeaders = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var combineHeaders = exports.combineHeaders = function combineHeaders() {
  var searchParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(searchParams).map(function (key) {
    return key + '=' + encodeURIComponent(searchParams[key]);
  }).join('&');
};

var createContactLink = exports.createContactLink = function createContactLink(tel, sms, facetime, email, headers) {
  var link = void 0;
  if (email) {
    link = 'mailto:' + email;
    if (headers) {
      link += '?' + combineHeaders(headers);
    }
  } else if (tel) {
    link = 'tel:' + tel;
  } else if (sms) {
    link = 'sms:' + sms;
  } else if (facetime) {
    link = 'facetime:' + facetime;
  }
  return link;
};

var Mailto = function (_PureComponent) {
  _inherits(Mailto, _PureComponent);

  function Mailto() {
    _classCallCheck(this, Mailto);

    return _possibleConstructorReturn(this, (Mailto.__proto__ || Object.getPrototypeOf(Mailto)).apply(this, arguments));
  }

  _createClass(Mailto, [{
    key: 'render',
    value: function render() {
      return this.props.obfuscate ? this.renderMailtodLink() : this.renderLink();
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var _props = this.props,
          tel = _props.tel,
          sms = _props.sms,
          facetime = _props.facetime,
          email = _props.email,
          obfuscate = _props.obfuscate,
          headers = _props.headers,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['tel', 'sms', 'facetime', 'email', 'obfuscate', 'headers', 'children']);

      return _react2.default.createElement(
        'a',
        _extends({ href: createContactLink(tel, sms, facetime, email, headers) }, others),
        tel || sms || facetime || email || children
      );
    }
  }, {
    key: 'reverse',
    value: function reverse(s) {
      return s.split('').reverse().join('');
    }
  }, {
    key: 'renderMailtodLink',
    value: function renderMailtodLink() {
      var _props2 = this.props,
          tel = _props2.tel,
          sms = _props2.sms,
          facetime = _props2.facetime,
          email = _props2.email,
          obfuscate = _props2.obfuscate,
          headers = _props2.headers,
          children = _props2.children,
          obfuscatedHref = _props2.obfuscatedHref,
          others = _objectWithoutProperties(_props2, ['tel', 'sms', 'facetime', 'email', 'obfuscate', 'headers', 'children', 'obfuscatedHref']);

      return _react2.default.createElement(
        'a',
        _extends({
          onClick: this.handleClick.bind(this),
          href: obfuscatedHref
        }, others, {
          style: { direction: 'rtl', unicodeBidi: 'bidi-override' }
        }),
        this.reverse(tel || sms || facetime || email) || children
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      var _props3 = this.props,
          tel = _props3.tel,
          sms = _props3.sms,
          facetime = _props3.facetime,
          email = _props3.email,
          headers = _props3.headers;

      window.location.href = createContactLink(tel, sms, facetime, email, headers);
    }
  }]);

  return Mailto;
}(_react.PureComponent);

Mailto.propTypes = {
  children: _propTypes.node,
  tel: _propTypes.string,
  sms: _propTypes.string,
  facetime: _propTypes.string,
  email: _propTypes.string,
  headers: _propTypes.object,
  obfuscate: _propTypes.bool,
  obfuscatedHref: _propTypes.string
};

Mailto.defaultProps = {
  obfuscate: true,
  obfuscatedHref: 'http://click-to-open'
};

exports.default = Mailto;

/***/ }),

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_protected_mailto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-protected-mailto */ "./node_modules/react-protected-mailto/dist/obfuscate.js");
/* harmony import */ var react_protected_mailto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_protected_mailto__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\sagel\\OneDrive\\Documents\\Next-Portfolio-Stef\\nextjs-with-typescript\\pages\\contact.tsx";




var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    "@global": {
      body: {
        backgroundImage: "url('https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
      }
    },
    mainGrid: {
      marginTop: theme.spacing(4)
    },
    card: {
      display: "flex"
    },
    cardDetails: {
      flex: 1
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
  title: "Personal life",
  image: "https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  description: "Get to know what I like to post about.",
  linkText: "My Instagram",
  link: "https://www.instagram.com/volatilemercury/"
}, {
  title: "Professional info",
  image: "https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  description: "Currently I am searching for an inspiring job opportunity.",
  linkText: "My LinkedIn",
  link: "https://www.linkedin.com/in/stefanosagelastos/"
}, {
  title: "Get in touch",
  image: "https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  description: "",
  linkText: function linkText() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_protected_mailto__WEBPACK_IMPORTED_MODULE_3___default.a, {
      email: "hello@coston.cool",
      headers: ({
        subject: 'Question from the website'
      }, {
        cc: 'friend@coston.cool'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    });
  },
  link: ""
}, {
  title: "Professional info",
  image: "https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  description: "Currently I am searching for an inspiring job opportunity.",
  linkText: "My LinkedIn",
  link: "https://www.linkedin.com/in/stefanosagelastos/"
}];

var ContactPage = function ContactPage() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.cardGrid,
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
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
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
      component: "a",
      href: post.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      component: "h2",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, post.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, post.linkText))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
      className: classes.cardMedia,
      image: post.image,
      title: "Image title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ })

})
//# sourceMappingURL=contact.js.7c0c9842b6cc87baf2ad.hot-update.js.map