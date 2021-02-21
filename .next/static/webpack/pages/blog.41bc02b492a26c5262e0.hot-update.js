webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/Blog/BlogSidebar.js":
/*!********************************************!*\
  !*** ./src/components/Blog/BlogSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogSidebar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var _Other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Other/SocialIcons */ \"./src/components/Other/SocialIcons.js\");\n/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/variables */ \"./src/common/variables.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ \"./src/common/utils.js\");\n/* harmony import */ var _data_blog_blog_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/blog/blog.json */ \"./src/data/blog/blog.json\");\nvar _data_blog_blog_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/blog/blog.json */ \"./src/data/blog/blog.json\", 1);\n/* harmony import */ var _common_postSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/postSelect */ \"./src/common/postSelect.js\");\n/* harmony import */ var _Post_PostCarThree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Post/PostCarThree */ \"./src/components/Post/PostCarThree.js\");\n/* harmony import */ var _Other_SubcribeEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Other/SubcribeEmail */ \"./src/components/Other/SubcribeEmail.js\");\nvar _jsxFileName = \"/Users/jonayahj/Desktop/Think Halcyon/Clients/Yego Coffee/YC Website 2.0/ycweb/src/components/Blog/BlogSidebar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction BlogSidebar(_ref) {\n  _s();\n\n  var _this = this;\n\n  var limit = _ref.limit,\n      popularPostData = _ref.popularPostData;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useForm2 = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(),\n      register2 = _useForm2.register,\n      handleSubmit2 = _useForm2.handleSubmit,\n      errors2 = _useForm2.errors;\n\n  var onSearchSubmit = function onSearchSubmit(data) {\n    router.push({\n      pathname: \"\" + \"/blog\",\n      query: {\n        search: data.search\n      }\n    });\n  };\n\n  var onNewsSubmit = function onNewsSubmit(data) {\n    return console.log(data);\n  };\n\n  return __jsx(\"div\", {\n    className: \"blog-sidebar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"blog-sidebar__section -search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSearchSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Enter keyword\",\n    name: \"search\",\n    ref: register,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: \"input-validator\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, errors.search && __jsx(\"span\", {\n    className: \"input-error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Please provide a keyword\"))), __jsx(\"div\", {\n    className: \"blog-sidebar__section\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    className: \"blog-sidebar__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Follow Yego Coffee\"), __jsx(_Other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"-border -round -border--light-bg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"blog-sidebar__section -categories\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    className: \"blog-sidebar__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \"Categories\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, _common_variables__WEBPACK_IMPORTED_MODULE_5__[\"blog\"].CATEGORIES.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"\" + \"#\",\n      as: \"\" + \"#\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, item, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 19\n      }\n    }, Object(_common_postSelect__WEBPACK_IMPORTED_MODULE_8__[\"getCategoryQuantity\"])(_data_blog_blog_json__WEBPACK_IMPORTED_MODULE_7__, item)))));\n  }))), __jsx(\"div\", {\n    className: \"blog-sidebar__section -polular-post\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    className: \"blog-sidebar__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"Popular post\"), popularPostData && popularPostData.slice(0, limit).map(function (post, index) {\n    return __jsx(_Post_PostCarThree__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      key: index,\n      data: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 35\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"blog-sidebar__section -newsletter\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    className: \"blog-sidebar__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"Newsletter\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"Subscribe to our newsletter and get our newest updates right on your inbox.\"), __jsx(_Other_SubcribeEmail__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    mailchimpUrl: \"https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e\",\n    placeholder: \"Enter your email\",\n    btnContent: \"Subcribe\",\n    className: \"blog-sidebar-newsletter\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"agree\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    name: \"agree\",\n    id: \"agree\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }), \"I agree to the terms & conditions\"))));\n}\n\n_s(BlogSidebar, \"jL1QD99IwKoM2DFsHOmIvNMG5q0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"], react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"]];\n});\n\n_c = BlogSidebar;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9CbG9nU2lkZWJhci5qcz9kYjJlIl0sIm5hbWVzIjpbIkJsb2dTaWRlYmFyIiwibGltaXQiLCJwb3B1bGFyUG9zdERhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyZWdpc3RlcjIiLCJoYW5kbGVTdWJtaXQyIiwiZXJyb3JzMiIsIm9uU2VhcmNoU3VibWl0IiwiZGF0YSIsInB1c2giLCJwYXRobmFtZSIsInByb2Nlc3MiLCJxdWVyeSIsInNlYXJjaCIsIm9uTmV3c1N1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJibG9nIiwiQ0FURUdPUklFUyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdldENhdGVnb3J5UXVhbnRpdHkiLCJibG9nRGF0YSIsInNsaWNlIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUFpRDtBQUFBOztBQUFBOztBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQzlELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDhELGlCQUVuQkMsK0RBQU8sRUFGWTtBQUFBLE1BRXREQyxRQUZzRCxZQUV0REEsUUFGc0Q7QUFBQSxNQUU1Q0MsWUFGNEMsWUFFNUNBLFlBRjRDO0FBQUEsTUFFOUJDLE1BRjhCLFlBRTlCQSxNQUY4Qjs7QUFBQSxrQkFPMURILCtEQUFPLEVBUG1EO0FBQUEsTUFJbERJLFNBSmtELGFBSTVESCxRQUo0RDtBQUFBLE1BSzlDSSxhQUw4QyxhQUs1REgsWUFMNEQ7QUFBQSxNQU1wREksT0FOb0QsYUFNNURILE1BTjREOztBQVE5RCxNQUFNSSxjQUFjLEdB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LG9CQURGLEVBRUd2QixlQUFlLElBQ2RBLGVBQWUsQ0FDWjJCLEtBREgsQ0FDUyxDQURULEVBQ1k1QixLQURaLEVBRUd1QixHQUZILENBRU8sVUFBQ00sSUFBRCxFQUFPSixLQUFQO0FBQUEsV0FBaUIsTUFBQywwREFBRDtBQUFjLFNBQUcsRUFBRUEsS0FBbkI7QUFBMEIsVUFBSSxFQUFFSSxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpCO0FBQUEsR0FGUCxDQUhKLENBN0NGLEVBcURFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRkFGRixFQU1FLE1BQUMsNkRBQUQ7QUFDRSxnQkFBWSxFQUFDLDRGQURmO0FBRUUsZUFBVyxFQUFDLGtCQUZkO0FBR0UsY0FBVSxFQUFDLFVBSGI7QUFJRSxhQUFTLEVBQUMseUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBSSxFQUFDLE9BQTVCO0FBQW9DLE1BQUUsRUFBQyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsc0NBTkYsQ0FORixDQXJERixDQURGO0FBMEVEOztHQXpGdUI5QixXO1VBQ1BJLHFELEVBQzRCQyx1RCxFQUt2Q0EsdUQ7OztLQVBrQkwsVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Jsb2cvQmxvZ1NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi9PdGhlci9Tb2NpYWxJY29uc1wiO1xyXG5pbXBvcnQgeyBibG9nIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi92YXJpYWJsZXNcIjtcclxuaW1wb3J0IHsgY29udmVydFRvU2x1ZyB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IGJsb2dEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2Jsb2cvYmxvZy5qc29uXCI7XHJcbmltcG9ydCB7IGdldENhdGVnb3J5UXVhbnRpdHkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3Bvc3RTZWxlY3RcIjtcclxuaW1wb3J0IFBvc3RDYXJUaHJlZSBmcm9tIFwiLi4vUG9zdC9Qb3N0Q2FyVGhyZWVcIjtcclxuaW1wb3J0IFN1YnNjcmliZUVtYWlsIGZyb20gXCIuLi9PdGhlci9TdWJjcmliZUVtYWlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nU2lkZWJhcih7IGxpbWl0LCBwb3B1bGFyUG9zdERhdGEgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVyMixcclxuICAgIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0MixcclxuICAgIGVycm9yczogZXJyb3JzMixcclxuICB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IG9uU2VhcmNoU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ibG9nXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IHNlYXJjaDogZGF0YS5zZWFyY2ggfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25OZXdzU3VibWl0ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctc2lkZWJhclwiPlxyXG4gICAgICB7LyogU0VBUkNIIEJBUiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNpZGViYXJfX3NlY3Rpb24gLXNlYXJjaFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TZWFyY2hTdWJtaXQpfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIga2V5d29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC12YWxpZGF0b3JcIj5cclxuICAgICAgICAgIHtlcnJvcnMuc2VhcmNoICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj5QbGVhc2UgcHJvdmlkZSBhIGtleXdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFNPQ0lBTCBGT0xMT1cgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zaWRlYmFyX19zZWN0aW9uXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImJsb2ctc2lkZWJhcl9fdGl0bGVcIj5Gb2xsb3cgWWVnbyBDb2ZmZWU8L2g1PlxyXG4gICAgICAgIDxTb2NpYWxJY29ucyBjbGFzc05hbWU9XCItYm9yZGVyIC1yb3VuZCAtYm9yZGVyLS1saWdodC1iZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogQ0FURUdPUklFUyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNpZGViYXJfX3NlY3Rpb24gLWNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYmxvZy1zaWRlYmFyX190aXRsZVwiPkNhdGVnb3JpZXM8L2g1PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtibG9nLkNBVEVHT1JJRVMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIiNcIn1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Z2V0Q2F0ZWdvcnlRdWFudGl0eShibG9nRGF0YSwgaXRlbSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogUE9QVUxBUiBQT1NUUyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNpZGViYXJfX3NlY3Rpb24gLXBvbHVsYXItcG9zdFwiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJibG9nLXNpZGViYXJfX3RpdGxlXCI+UG9wdWxhciBwb3N0PC9oNT5cclxuICAgICAgICB7cG9wdWxhclBvc3REYXRhICYmXHJcbiAgICAgICAgICBwb3B1bGFyUG9zdERhdGFcclxuICAgICAgICAgICAgLnNsaWNlKDAsIGxpbWl0KVxyXG4gICAgICAgICAgICAubWFwKChwb3N0LCBpbmRleCkgPT4gPFBvc3RDYXJUaHJlZSBrZXk9e2luZGV4fSBkYXRhPXtwb3N0fSAvPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTkVXU0xFVEVSICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctc2lkZWJhcl9fc2VjdGlvbiAtbmV3c2xldHRlclwiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJibG9nLXNpZGViYXJfX3RpdGxlXCI+TmV3c2xldHRlcjwvaDU+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBTdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXIgYW5kIGdldCBvdXIgbmV3ZXN0IHVwZGF0ZXMgcmlnaHQgb24geW91clxyXG4gICAgICAgICAgaW5ib3guXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTdWJzY3JpYmVFbWFpbFxyXG4gICAgICAgICAgbWFpbGNoaW1wVXJsPVwiaHR0cHM6Ly9qc3Rlci51czcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZWQ0MGMwMDg0YTBjNWJhMzFiMzM2NWQ2NSZpZD1lYzZmMzJiZjVlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICBidG5Db250ZW50PVwiU3ViY3JpYmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZy1zaWRlYmFyLW5ld3NsZXR0ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdyZWVcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZVwiIGlkPVwiYWdyZWVcIiAvPkkgYWdyZWUgdG8gdGhlXHJcbiAgICAgICAgICAgIHRlcm1zICYgY29uZGl0aW9uc1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L1N1YnNjcmliZUVtYWlsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Blog/BlogSidebar.js\n");

/***/ })

})