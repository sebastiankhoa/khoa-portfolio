"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MyProjects/Project.js":
/*!**********************************************!*\
  !*** ./src/components/MyProjects/Project.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar Project = function(param) {\n    var project = param.project;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        direction: \"column\",\n        w: \"350px\",\n        h: \"500px\",\n        align: \"center\",\n        gap: \"2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: project.image,\n                alt: \"project-image\",\n                h: \"220px\",\n                objectFit: \"cover\"\n            }, void 0, false, {\n                fileName: \"/Users/khoa/Desktop/Web Development/nextjs-porfolio/src/components/MyProjects/Project.js\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                color: \"gray.300\",\n                children: project.title\n            }, void 0, false, {\n                fileName: \"/Users/khoa/Desktop/Web Development/nextjs-porfolio/src/components/MyProjects/Project.js\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                fileName: \"/Users/khoa/Desktop/Web Development/nextjs-porfolio/src/components/MyProjects/Project.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khoa/Desktop/Web Development/nextjs-porfolio/src/components/MyProjects/Project.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n};\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NeVByb2plY3RzL1Byb2plY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWlFO0FBQ3ZDO0FBRTFCLElBQU1LLE9BQU8sR0FBRyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPO0lBQ3pCLHFCQUNDLDhEQUFDTCxrREFBSTtRQUFDTSxTQUFTLEVBQUMsUUFBUTtRQUFDQyxDQUFDLEVBQUMsT0FBTztRQUFDQyxDQUFDLEVBQUMsT0FBTztRQUFDQyxLQUFLLEVBQUMsUUFBUTtRQUFDQyxHQUFHLEVBQUMsR0FBRzs7MEJBQ2xFLDhEQUFDUixtREFBSztnQkFBQ1MsR0FBRyxFQUFFTixPQUFPLENBQUNPLEtBQUs7Z0JBQUVDLEdBQUcsRUFBQyxlQUFlO2dCQUFDTCxDQUFDLEVBQUMsT0FBTztnQkFBQ00sU0FBUyxFQUFDLE9BQU87Ozs7O3FCQUFHOzBCQUM3RSw4REFBQ2IscURBQU87Z0JBQUNjLEtBQUssRUFBQyxVQUFVOzBCQUFFVixPQUFPLENBQUNXLEtBQUs7Ozs7O3FCQUFXOzBCQUNuRCw4REFBQ2pCLHFEQUFPOzs7O3FCQUFHOzs7Ozs7YUFDTCxDQUNOO0NBQ0Y7QUFSS0ssS0FBQUEsT0FBTztBQVViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlQcm9qZWN0cy9Qcm9qZWN0LmpzP2IwN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlciwgRmxleCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHsgcHJvamVjdCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgdz1cIjM1MHB4XCIgaD1cIjUwMHB4XCIgYWxpZ249XCJjZW50ZXJcIiBnYXA9XCIyXCI+XG5cdFx0XHQ8SW1hZ2Ugc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJwcm9qZWN0LWltYWdlXCIgaD1cIjIyMHB4XCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxuXHRcdFx0PEhlYWRpbmcgY29sb3I9XCJncmF5LjMwMFwiPntwcm9qZWN0LnRpdGxlfTwvSGVhZGluZz5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0PC9GbGV4PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJEaXZpZGVyIiwiRmxleCIsIkhlYWRpbmciLCJJbWFnZSIsIlJlYWN0IiwiUHJvamVjdCIsInByb2plY3QiLCJkaXJlY3Rpb24iLCJ3IiwiaCIsImFsaWduIiwiZ2FwIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJvYmplY3RGaXQiLCJjb2xvciIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MyProjects/Project.js\n");

/***/ })

});