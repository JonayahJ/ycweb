webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/Elements/NavigatorMobile.js":
/*!***********************************************************!*\
  !*** ./src/components/Header/Elements/NavigatorMobile.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/header/navigation.json */ \"./src/data/header/navigation.json\");\nvar _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/header/navigation.json */ \"./src/data/header/navigation.json\", 1);\nvar _jsxFileName = \"/Users/jonayahj/Desktop/Think Halcyon/Clients/Yego Coffee/YC Website 2.0/ycweb/src/components/Header/Elements/NavigatorMobile.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Navigator() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      dropdownItem = _useState[0],\n      setDropdownItem = _useState[1];\n\n  function renderMenu() {\n    var _this = this;\n\n    return _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3__.map(function (item, index) {\n      if (item.title === \"Home\") {\n        return __jsx(\"li\", {\n          className: \"relative\",\n          key: index,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 11\n          }\n        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }\n        }, __jsx(\"a\", {\n          onClick: function onClick() {\n            if (dropdownItem === \"home\") {\n              setDropdownItem(\"\");\n              return;\n            }\n\n            setDropdownItem(\"home\");\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }\n        }, item.title, __jsx(\"span\", {\n          className: \"dropable-icon\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 17\n          }\n        }, __jsx(\"i\", {\n          className: \"fas \".concat(dropdownItem === \"home\" ? \"fa-angle-up\" : \"fa-angle-down\"),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 19\n          }\n        })))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n          \"in\": dropdownItem === \"home\",\n          unmountOnExit: true,\n          timeout: 200,\n          classNames: \"dropdown-menu-mobile\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }\n        }, __jsx(\"ul\", {\n          className: \"dropdown-menu\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }\n        }, item.subMenu.map(function (i, index) {\n          return __jsx(\"li\", {\n            key: index,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 19\n            }\n          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"\".concat(\"\").concat(i.to),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 21\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 23\n            }\n          }, i.title)));\n        }))));\n      }\n\n      if (item.title === \"Shop\") {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }\n        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"#\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, __jsx(\"a\", {\n          onClick: function onClick() {\n            if (dropdownItem === \"shop\") {\n              setDropdownItem(\"\");\n              return;\n            }\n\n            setDropdownItem(\"shop\");\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }\n        }, item.title, __jsx(\"span\", {\n          className: \"dropable-icon\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 17\n          }\n        }, __jsx(\"i\", {\n          className: \"fas \".concat(dropdownItem === \"shop\" ? \"fa-angle-up\" : \"fa-angle-down\"),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 19\n          }\n        })))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n          \"in\": dropdownItem === \"shop\",\n          unmountOnExit: true,\n          timeout: 200,\n          classNames: \"dropdown-menu-mobile\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }\n        }, __jsx(\"ul\", {\n          className: \"dropdown-menu\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }\n        }, __jsx(\"ul\", {\n          className: \"dropdown-menu__col\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 17\n          }\n        }, item.subMenu.slice(0, 4).map(function (i, index) {\n          return __jsx(\"li\", {\n            key: index,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 21\n            }\n          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"\".concat(\"\").concat(i.to),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 23\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 25\n            }\n          }, i.title)));\n        })), __jsx(\"ul\", {\n          className: \"dropdown-menu__col\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 17\n          }\n        }, item.subMenu.slice(4, 8).map(function (i, index) {\n          return __jsx(\"li\", {\n            key: index,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 21\n            }\n          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"\".concat(\"\").concat(i.to),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 23\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 25\n            }\n          }, i.title)));\n        })), __jsx(\"ul\", {\n          className: \"dropdown-menu__col\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 17\n          }\n        }, item.subMenu.slice(8).map(function (i, index) {\n          return __jsx(\"li\", {\n            key: index,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 21\n            }\n          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"\".concat(\"\").concat(i.to),\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 23\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 25\n            }\n          }, i.title)));\n        })), __jsx(\"ul\", {\n          className: \"dropdown-menu__col -banner\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 17\n          }\n        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/shop/fullwidth-4col\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 19\n          }\n        }, __jsx(\"a\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 21\n          }\n        }, __jsx(\"img\", {\n          src: \"/assets/images/header/dropdown-menu-banner.png\",\n          alt: \"New product banner\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 23\n          }\n        })))))));\n      }\n\n      return __jsx(\"li\", {\n        key: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: item.to,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 13\n        }\n      }, item.title)));\n    });\n  }\n\n  return __jsx(\"div\", {\n    className: \"navigator-mobile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, renderMenu()));\n}\n\n_s(Navigator, \"Q/gjhqfDC2CRFAK83wq43WF1U2U=\");\n\n_c = Navigator;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0VsZW1lbnRzL05hdmlnYXRvck1vYmlsZS5qcz9jZWUxIl0sIm5hbWVzIjpbIk5hdmlnYXRvciIsInVzZVN0YXRlIiwiZHJvcGRvd25JdGVtIiwic2V0RHJvcGRvd25JdGVtIiwicmVuZGVyTWVudSIsIm1lbnVEYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJzdWJNZW51IiwiaSIsInByb2Nlc3MiLCJ0byIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxFQURkO0FBQUEsTUFDM0JDLFlBRDJCO0FBQUEsTUFDYkMsZUFEYTs7QUFFbEMsV0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUNwQixXQUFPQyx5REFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ25DLFVBQUlELElBQUksQ0FBQ0UsS0FBTCxLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLGVBQ0U7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBeUIsYUFBRyxFQUFFRCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSU4sWUFBWSxLQUFLLE1BQXJCLEVBQTZCO0FBQzNCQyw2QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBO0FBQ0Q7O0FBQ0RBLDJCQUFlLENBQUMsTUFBRCxDQUFmO0FBQ0QsV0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0dJLElBQUksQ0FBQ0UsS0FUUixFQVVFO0FBQU0sbUJBQVMsRUFBQyxl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Q0FBQ0YsS0FBTixDQURGLENBREYsQ0FEeUI7QUFBQSxTQUExQixDQURILENBbkJGLEVBNEJFO0FBQUksbUJBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQ0UsYUFBRyxFQUFDLGdEQUROO0FBRUUsYUFBRyxFQUFDLG9CQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLENBREYsQ0E1QkYsQ0FORixDQXJCRixDQURGO0FBc0VEOztBQUNELGFBQ0U7QUFBSSxXQUFHLEVBQUVELEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVELElBQUksQ0FBQ00sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSU4sSUFBSSxDQUFDRSxLQUFULENBREYsQ0FERixDQURGO0FBT0QsS0ExSE0sQ0FBUDtBQTJIRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtMLFVBQVUsRUFBZixDQURGLENBREY7QUFLRDs7R0FwSXVCSixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0VsZW1lbnRzL05hdmlnYXRvck1vYmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcblxyXG5pbXBvcnQgbWVudURhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvaGVhZGVyL25hdmlnYXRpb24uanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdG9yKCkge1xyXG4gIGNvbnN0IFtkcm9wZG93bkl0ZW0sIHNldERyb3Bkb3duSXRlbV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XHJcbiAgICByZXR1cm4gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS50aXRsZSA9PT0gXCJIb21lXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duSXRlbSA9PT0gXCJob21lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkl0ZW0oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duSXRlbShcImhvbWVcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcGFibGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhcyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtID09PSBcImhvbWVcIiA/IFwiZmEtYW5nbGUtdXBcIiA6IFwiZmEtYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgaW49e2Ryb3Bkb3duSXRlbSA9PT0gXCJob21lXCJ9XHJcbiAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWVzPVwiZHJvcGRvd24tbWVudS1tb2JpbGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnN1Yk1lbnUubWFwKChpLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0ke2kudG99YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnRpdGxlID09PSBcIlNob3BcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duSXRlbSA9PT0gXCJzaG9wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkl0ZW0oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duSXRlbShcInNob3BcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcGFibGUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhcyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtID09PSBcInNob3BcIiA/IFwiZmEtYW5nbGUtdXBcIiA6IFwiZmEtYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgaW49e2Ryb3Bkb3duSXRlbSA9PT0gXCJzaG9wXCJ9XHJcbiAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWVzPVwiZHJvcGRvd24tbWVudS1tb2JpbGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51X19jb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViTWVudS5zbGljZSgwLCA0KS5tYXAoKGksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0ke2kudG99YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Yk1lbnUuc2xpY2UoNCwgOCkubWFwKChpLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9JHtpLnRvfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVfX2NvbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdWJNZW51LnNsaWNlKDgpLm1hcCgoaSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfSR7aS50b31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2kudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51X19jb2wgLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvZnVsbHdpZHRoLTRjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2Ryb3Bkb3duLW1lbnUtYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk5ldyBwcm9kdWN0IGJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnRvfT5cclxuICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdG9yLW1vYmlsZVwiPlxyXG4gICAgICA8dWw+e3JlbmRlck1lbnUoKX08L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/Elements/NavigatorMobile.js\n");

/***/ })

})