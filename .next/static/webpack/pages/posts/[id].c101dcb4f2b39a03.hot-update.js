"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    var postData = param.postData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default().headingXl),\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/Users/siaopeilin/Desktop/PV/react/next-app/pages/posts/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                console.log(postData),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/siaopeilin/Desktop/PV/react/next-app/pages/posts/[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                postData.date,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/siaopeilin/Desktop/PV/react/next-app/pages/posts/[id].js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                postData.blogContentHTML\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siaopeilin/Desktop/PV/react/next-app/pages/posts/[id].js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siaopeilin/Desktop/PV/react/next-app/pages/posts/[id].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUVTOztBQW1CdkMsU0FBU0UsSUFBSSxDQUFDLEtBQVUsRUFBQztRQUFYLFFBQVMsR0FBVCxLQUFVLENBQVRDLFFBQVE7SUFDcEMscUJBQ0UsOERBQUNILDBEQUFNO2tCQUNMLDRFQUFDSSxTQUFPOzs4QkFDTiw4REFBQ0MsSUFBRTtvQkFBQ0MsU0FBUyxFQUFFTCwyRUFBb0I7OEJBQUdFLFFBQVEsQ0FBQ0ssS0FBSzs7Ozs7d0JBQU07Z0JBRXpEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsUUFBUSxDQUFDOzhCQUN0Qiw4REFBQ1EsSUFBRTs7Ozt3QkFBRTtnQkFDSlIsUUFBUSxDQUFDUyxJQUFJOzhCQUNkLDhEQUFDRCxJQUFFOzs7O3dCQUFFO2dCQUNKUixRQUFRLENBQUNVLGVBQWU7Ozs7OztnQkFDakI7Ozs7O1lBQ0gsQ0FDVjtDQUNGO0FBZHVCWCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocywgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGEsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3REYXRhfSl7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIFxuICAgICAgICB7Y29uc29sZS5sb2cocG9zdERhdGEpfVxuICAgICAgICA8YnIvPlxuICAgICAgICB7cG9zdERhdGEuZGF0ZX1cbiAgICAgICAgPGJyLz5cbiAgICAgICAge3Bvc3REYXRhLmJsb2dDb250ZW50SFRNTH1cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1dGlsU3R5bGVzIiwiUG9zdCIsInBvc3REYXRhIiwiYXJ0aWNsZSIsImgxIiwiY2xhc3NOYW1lIiwiaGVhZGluZ1hsIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiYnIiLCJkYXRlIiwiYmxvZ0NvbnRlbnRIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

});