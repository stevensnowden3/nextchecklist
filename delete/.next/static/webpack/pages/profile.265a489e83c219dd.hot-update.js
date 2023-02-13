"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.jsx":
/*!***************************!*\
  !*** ./pages/profile.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.jsx\");\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.jsx\");\n/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Highlight */ \"./components/Highlight.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\Projects\\\\materialchecklist\\\\pages\\\\profile.jsx\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useUser = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__.useUser)(),\n      user = _useUser.user,\n      isLoading = _useUser.isLoading;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n        className: \"align-items-center profile-header mb-5 text-center text-md-left\",\n        \"data-testid\": \"profile\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n          md: 2,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: user.picture,\n            alt: \"Profile\",\n            className: \"rounded-circle img-fluid profile-picture mb-3 mb-md-0\",\n            decode: \"async\",\n            \"data-testid\": \"profile-picture\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n          md: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n            \"data-testid\": \"profile-name\",\n            children: user[\"https://netlify-integration.com/roles\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n            \"data-testid\": \"profile-name\",\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            className: \"lead text-muted\",\n            \"data-testid\": \"profile-email\",\n            children: user.email\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n        \"data-testid\": \"profile-json\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Highlight__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          children: JSON.stringify(user, null, 2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true);\n}\n\n_s(Profile, \"PQCoTygNGGBleNbc51kaxaFJif8=\", false, function () {\n  return [_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__.useUser];\n});\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_1__.withPageAuthRequired)(Profile, {\n  onRedirecting: function onRedirecting() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 24\n    }, _this);\n  },\n  onError: function onError(error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }, _this);\n  }\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNRLE9BQVQsR0FBbUI7RUFBQTs7RUFDakIsZUFBNEJMLG1FQUFPLEVBQW5DO0VBQUEsSUFBUU0sSUFBUixZQUFRQSxJQUFSO0VBQUEsSUFBY0MsU0FBZCxZQUFjQSxTQUFkOztFQUVBLG9CQUNFO0lBQUEsV0FDR0EsU0FBUyxpQkFBSSw4REFBQywyREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRGhCLEVBRUdELElBQUksaUJBQ0g7TUFBQSx3QkFDRSw4REFBQywyQ0FBRDtRQUFLLFNBQVMsRUFBQyxpRUFBZjtRQUFpRixlQUFZLFNBQTdGO1FBQUEsd0JBQ0UsOERBQUMsMkNBQUQ7VUFBSyxFQUFFLEVBQUUsQ0FBVDtVQUFBLHVCQUNFO1lBQ0UsR0FBRyxFQUFFQSxJQUFJLENBQUNFLE9BRFo7WUFFRSxHQUFHLEVBQUMsU0FGTjtZQUdFLFNBQVMsRUFBQyx1REFIWjtZQUlFLE1BQU0sRUFBQyxPQUpUO1lBS0UsZUFBWTtVQUxkO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFVRSw4REFBQywyQ0FBRDtVQUFLLEVBQUUsTUFBUDtVQUFBLHdCQUNFO1lBQUksZUFBWSxjQUFoQjtZQUFBLFVBQWdDRixJQUFJLENBQUMsdUNBQUQ7VUFBcEM7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQURGLGVBRUU7WUFBSSxlQUFZLGNBQWhCO1lBQUEsVUFBZ0NBLElBQUksQ0FBQ0c7VUFBckM7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUZGLGVBR0U7WUFBRyxTQUFTLEVBQUMsaUJBQWI7WUFBK0IsZUFBWSxlQUEzQztZQUFBLFVBQ0dILElBQUksQ0FBQ0k7VUFEUjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBSEY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBVkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFtQkUsOERBQUMsMkNBQUQ7UUFBSyxlQUFZLGNBQWpCO1FBQUEsdUJBQ0UsOERBQUMsNkRBQUQ7VUFBQSxVQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtRQUFaO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBbkJGO0lBQUEsZ0JBSEo7RUFBQSxnQkFERjtBQThCRDs7R0FqQ1FEO1VBQ3FCTDs7O0tBRHJCSztBQW1DVCwrREFBZSxNQUFBSixnRkFBb0IsQ0FBQ0ksT0FBRCxFQUFVO0VBQzNDUSxhQUFhLEVBQUU7SUFBQSxvQkFBTSw4REFBQywyREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQU47RUFBQSxDQUQ0QjtFQUUzQ0MsT0FBTyxFQUFFLGlCQUFBQyxLQUFLO0lBQUEsb0JBQUksOERBQUMsZ0VBQUQ7TUFBQSxVQUFlQSxLQUFLLENBQUNDO0lBQXJCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBSjtFQUFBO0FBRjZCLENBQVYsQ0FBbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qc3g/M2QyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHVzZVVzZXIsIHdpdGhQYWdlQXV0aFJlcXVpcmVkIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMC9jbGllbnQnO1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvSGlnaGxpZ2h0JztcblxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIHByb2ZpbGUtaGVhZGVyIG1iLTUgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCIgZGF0YS10ZXN0aWQ9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICA8Q29sIG1kPXsyfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5waWN0dXJlfVxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGltZy1mbHVpZCBwcm9maWxlLXBpY3R1cmUgbWItMyBtYi1tZC0wXCJcbiAgICAgICAgICAgICAgICBkZWNvZGU9XCJhc3luY1wiXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwcm9maWxlLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIG1kPlxuICAgICAgICAgICAgICA8aDIgZGF0YS10ZXN0aWQ9XCJwcm9maWxlLW5hbWVcIj57dXNlcltcImh0dHBzOi8vbmV0bGlmeS1pbnRlZ3JhdGlvbi5jb20vcm9sZXNcIl19PC9oMj5cbiAgICAgICAgICAgICAgPGgyIGRhdGEtdGVzdGlkPVwicHJvZmlsZS1uYW1lXCI+e3VzZXIubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIHRleHQtbXV0ZWRcIiBkYXRhLXRlc3RpZD1cInByb2ZpbGUtZW1haWxcIj5cbiAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdyBkYXRhLXRlc3RpZD1cInByb2ZpbGUtanNvblwiPlxuICAgICAgICAgICAgPEhpZ2hsaWdodD57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9IaWdobGlnaHQ+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhZ2VBdXRoUmVxdWlyZWQoUHJvZmlsZSwge1xuICBvblJlZGlyZWN0aW5nOiAoKSA9PiA8TG9hZGluZyAvPixcbiAgb25FcnJvcjogZXJyb3IgPT4gPEVycm9yTWVzc2FnZT57ZXJyb3IubWVzc2FnZX08L0Vycm9yTWVzc2FnZT5cbn0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm93IiwiQ29sIiwidXNlVXNlciIsIndpdGhQYWdlQXV0aFJlcXVpcmVkIiwiTG9hZGluZyIsIkVycm9yTWVzc2FnZSIsIkhpZ2hsaWdodCIsIlByb2ZpbGUiLCJ1c2VyIiwiaXNMb2FkaW5nIiwicGljdHVyZSIsIm5hbWUiLCJlbWFpbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvblJlZGlyZWN0aW5nIiwib25FcnJvciIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.jsx\n"));

/***/ })

});