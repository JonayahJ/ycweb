webpackHotUpdate_N_E("pages/contact",{

/***/ "./src/components/Sections/Forms/ContactForm.js":
/*!******************************************************!*\
  !*** ./src/components/Sections/Forms/ContactForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _jsxFileName = \"/Users/jonayahj/Desktop/Think Halcyon/Clients/Yego Coffee/YC Website 2.0/ycweb/src/components/Sections/Forms/ContactForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// Contact Form to go on the Contact page\n\nfunction ContactForm(style) {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(data) {\n    return console.log(data);\n  };\n\n  return __jsx(\"div\", {\n    className: \"col-12 col-md-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"contact-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Get In Touch\"), __jsx(\"div\", {\n    className: \"contact-form\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    name: \"Contact\",\n    netlify: true,\n    \"netlify-honeypot\": \"bot-field\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"input-validator\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"Name\",\n    ref: register({\n      required: true\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }), errors.name && __jsx(\"span\", {\n    className: \"input-error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }, \"Please provide a name\")), __jsx(\"div\", {\n    className: \"input-validator\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    placeholder: \"Email\",\n    ref: register({\n      required: true\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }), errors.email && __jsx(\"span\", {\n    className: \"input-error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  }, \"Please provide an email\")), __jsx(\"div\", {\n    className: \"input-validator\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, __jsx(\"textarea\", {\n    name: \"message\",\n    id: \"\",\n    cols: \"30\",\n    rows: \"3\",\n    placeholder: \"Message\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  })), __jsx(\"button\", {\n    className: \"btn -dark\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, \"SEND MESSAGE\"))));\n}\n\n_s(ContactForm, \"+Nrz0BYUZDnkIuhmBbPsJSfSlWM=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = ContactForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvRm9ybXMvQ29udGFjdEZvcm0uanM/YjliMiJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInN0eWxlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZWQiLCJuYW1lIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQSxpQkFDV0MsK0RBQU8sRUFEbEI7QUFBQSxNQUMvQkMsUUFEK0IsWUFDL0JBLFFBRCtCO0FBQUEsTUFDckJDLFlBRHFCLFlBQ3JCQSxZQURxQjtBQUFBLE1BQ1BDLEtBRE8sWUFDUEEsS0FETztBQUFBLE1BQ0FDLE1BREEsWUFDQUEsTUFEQTs7QUFFdkMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFdBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxHQUFqQjs7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFlBQVEsRUFBRUosWUFBWSxDQUFDRyxRQUFELENBQTVCO0FBQXdDLFFBQUksRUFBQyxTQUE3QztBQUF1RCxXQUFPLE1BQTlEO0FBQStELHdCQUFpQixXQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLGVBQVcsRUFBQyxNQUhoQjtBQUlJLE9BQUcsRUFBRUosUUFBUSxDQUFDO0FBQUVRLGNBQVEsRUFBRTtBQUFaLEtBQUQsQ0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBT0NMLE1BQU0sQ0FBQ00sSUFBUCxJQUNHO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUkosQ0FESixFQVlJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksUUFBSSxFQUFDLE9BRlQ7QUFHSSxlQUFXLEVBQUMsT0FIaEI7QUFJSSxPQUFHLEVBQUVULFFBQVEsQ0FBQztBQUFFUSxjQUFRLEVBQUU7QUFBWixLQUFELENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQU9DTCxNQUFNLENBQUNPLEtBQVAsSUFDRztBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJKLENBWkosRUF5Qkk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQ0ksUUFBSSxFQUFDLFNBRFQ7QUFFSSxNQUFFLEVBQUMsRUFGUDtBQUdJLFFBQUksRUFBQyxJQUhUO0FBSUksUUFBSSxFQUFDLEdBSlQ7QUFLSSxlQUFXLEVBQUMsU0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBekJKLEVBa0NJO0FBQVEsYUFBUyxFQUFDLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbENKLENBREosQ0FGSixDQURKO0FBMkNEOztHQS9DcUJiLFc7VUFDOEJFLHVEOzs7S0FEOUJGLFciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Gb3Jtcy9Db250YWN0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRhY3QgRm9ybSB0byBnbyBvbiB0aGUgQ29udGFjdCBwYWdlXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybShzdHlsZSkge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC10aXRsZVwiPkdldCBJbiBUb3VjaDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBuYW1lPVwiQ29udGFjdFwiIG5ldGxpZnkgbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXZhbGlkYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPlBsZWFzZSBwcm92aWRlIGEgbmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdmFsaWRhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgcHJvdmlkZSBhbiBlbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC12YWxpZGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIC1kYXJrXCI+U0VORCBNRVNTQUdFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sections/Forms/ContactForm.js\n");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/LayoutFour */ \"./src/components/Layout/LayoutFour.js\");\n/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sections/Instagram/InstagramTwo */ \"./src/components/Sections/Instagram/InstagramTwo.js\");\n/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Other/Breadcrumb */ \"./src/components/Other/Breadcrumb.js\");\n/* harmony import */ var _components_Pages_Contact_ContactInfoItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pages/Contact/ContactInfoItem */ \"./src/components/Pages/Contact/ContactInfoItem.js\");\n/* harmony import */ var _data_pages_contact_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/pages/contact.json */ \"./src/data/pages/contact.json\");\nvar _data_pages_contact_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/contact.json */ \"./src/data/pages/contact.json\", 1);\n/* harmony import */ var _components_Sections_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sections/Forms/ContactForm */ \"./src/components/Sections/Forms/ContactForm.js\");\nvar _jsxFileName = \"/Users/jonayahj/Desktop/Think Halcyon/Clients/Yego Coffee/YC Website 2.0/ycweb/src/pages/contact.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(data) {\n    return console.log(data);\n  };\n\n  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Contact Us\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__[\"Breadcrumb\"], {\n    title: \"Contact Us\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__[\"BreadcrumbItem\"], {\n    name: \"Home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__[\"BreadcrumbItem\"], {\n    name: \"Contact Us\",\n    current: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12 col-md-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"contact-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, \"Contact Info\"), _data_pages_contact_json__WEBPACK_IMPORTED_MODULE_6__ && _data_pages_contact_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item, index) {\n    return __jsx(_components_Pages_Contact_ContactInfoItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: index,\n      iconClass: item.iconClass,\n      title: item.title,\n      detail: item.detail,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    });\n  })), __jsx(_components_Sections_Forms_ContactForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"col-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"iframe\", {\n    className: \"contact-map\",\n    src: \"https://maps.google.com/maps?width=100%25&height=450&hl=en&q=Boston,%20MA+(Yego%20Coffee)&t=&z=14&ie=UTF8&iwloc=B&output=embed\",\n    width: \"100%\",\n    height: \"450\",\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanM/MGFlYyJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb250YWN0RGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImljb25DbGFzcyIsInRpdGxlIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsMkVBQVk7QUFBQTs7QUFBQSxpQkFDeUJBLCtEQUFPLEVBRGhDO0FBQUEsTUFDakJDLFFBRGlCLFlBQ2pCQSxRQURpQjtBQUFBLE1BQ1BDLFlBRE8sWUFDUEEsWUFETztBQUFBLE1BQ09DLEtBRFAsWUFDT0EsS0FEUDtBQUFBLE1BQ2NDLE1BRGQsWUFDY0EsTUFEZDs7QUFFekIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFdBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxHQUFqQjs7QUFDQSxTQUNFLE1BQUMscUVBQUQ7QUFBWSxTQUFLLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBWSxTQUFLLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkVBQUQ7QUFBZ0IsUUFBSSxFQUFDLFlBQXJCO0FBQWtDLFdBQU8sTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdHLHFEQUFXLElBQ1ZBLHFEQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDZCxNQUFDLGlGQUFEO0FBQ0UsU0FBRyxFQUFFQSxLQURQO0FBRUUsZUFBUyxFQUFFRCxJQUFJLENBQUNFLFNBRmxCO0FBR0UsV0FBSyxFQUFFRixJQUFJLENBQUNHLEtBSGQ7QUFJRSxZQUFNLEVBQUVILElBQUksQ0FBQ0ksTUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGM7QUFBQSxHQUFoQixDQUhKLENBREYsRUFhRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGFBRFo7QUFFRSxPQUFHLEVBQUMsZ0lBRk47QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLFVBQU0sRUFBQyxLQUpUO0FBS0UsZUFBVyxFQUFDLEdBTGQ7QUFNRSxtQkFBZSxNQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkRixDQURGLENBREYsQ0FORixFQW1DRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERjtBQXVDRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmltcG9ydCBMYXlvdXRGb3VyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRGb3VyXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1Ud28gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5zdGFncmFtL0luc3RhZ3JhbVR3b1wiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzL090aGVyL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IENvbnRhY3RJbmZvSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0L0NvbnRhY3RJbmZvSXRlbVwiO1xyXG5pbXBvcnQgY29udGFjdERhdGEgZnJvbSBcIi4uL2RhdGEvcGFnZXMvY29udGFjdC5qc29uXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Gb3Jtcy9Db250YWN0Rm9ybVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRGb3VyIHRpdGxlPVwiQ29udGFjdCBVc1wiPlxyXG4gICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIkNvbnRhY3QgVXNcIj5cclxuICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gbmFtZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgIDxCcmVhZGNydW1iSXRlbSBuYW1lPVwiQ29udGFjdCBVc1wiIGN1cnJlbnQgLz5cclxuICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICB7LyogQWRkIENvbnRhY3RGb3JtLmpzIGNvbXBvbmVudCBoZXJlIGFuZCBkZWxldGUgdGhlIGZvbGxvd2luZyBjb2RlIGJsb2NrIDM0LTc2ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC10aXRsZVwiPkNvbnRhY3QgSW5mbzwvaDM+XHJcbiAgICAgICAgICAgICAge2NvbnRhY3REYXRhICYmXHJcbiAgICAgICAgICAgICAgICBjb250YWN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDb250YWN0SW5mb0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzcz17aXRlbS5pY29uQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1tYXBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD0xMDAlMjUmYW1wO2hlaWdodD00NTAmYW1wO2hsPWVuJmFtcDtxPUJvc3RvbiwlMjBNQSsoWWVnbyUyMENvZmZlZSkmYW1wO3Q9JmFtcDt6PTE0JmFtcDtpZT1VVEY4JmFtcDtpd2xvYz1CJmFtcDtvdXRwdXQ9ZW1iZWRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxJbnN0YWdyYW1Ud28gLz5cclxuICAgIDwvTGF5b3V0Rm91cj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/contact.js\n");

/***/ })

})