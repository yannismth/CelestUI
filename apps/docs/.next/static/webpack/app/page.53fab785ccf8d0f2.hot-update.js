"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/../../packages/ui/src/components/Flip.tsx":
/*!*************************************************!*\
  !*** ../../packages/ui/src/components/Flip.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Flip: () => (/* binding */ Flip)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Flip() {\n    _s();\n    const [titleNumber, setTitleNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const titles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"Flip.useMemo[titles]\": ()=>[\n                \"amazing\",\n                \"new\",\n                \"wonderful\",\n                \"beautiful\",\n                \"smart\"\n            ]\n    }[\"Flip.useMemo[titles]\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1\",\n            children: [\n                \"\\xa0\",\n                titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                        className: \"absolute font-semibold\",\n                        initial: {\n                            opacity: 0,\n                            y: \"-100\"\n                        },\n                        transition: {\n                            type: \"spring\",\n                            stiffness: 50\n                        },\n                        animate: titleNumber === index ? {\n                            y: 0,\n                            opacity: 1\n                        } : {\n                            y: titleNumber > index ? -150 : 150,\n                            opacity: 0\n                        },\n                        children: title\n                    }, index, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Flip.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 19\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Flip.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Flip.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(Flip, \"mrmV238eZH9uBtNRc7puuheqZDw=\");\n_c = Flip;\nvar _c;\n$RefreshReg$(_c, \"Flip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9GbGlwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Y7QUFFaEMsU0FBU0k7O0lBQ1osTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1NLFNBQVNMLDhDQUFPQTtnQ0FDbEIsSUFBTTtnQkFBQztnQkFBVztnQkFBTztnQkFBYTtnQkFBYTthQUFROytCQUMzRCxFQUFFO0lBRU4scUJBQ0ksOERBQUNNO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFVOztnQkFBa0Y7Z0JBRTdGSCxPQUFPSSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDVixpREFBTUEsQ0FBQ00sSUFBSTt3QkFFVkMsV0FBVTt3QkFDVkksU0FBUzs0QkFBRUMsU0FBUzs0QkFBR0MsR0FBRzt3QkFBTzt3QkFDakNDLFlBQVk7NEJBQUVDLE1BQU07NEJBQVVDLFdBQVc7d0JBQUc7d0JBQzVDQyxTQUNFZixnQkFBZ0JRLFFBQ1o7NEJBQ0VHLEdBQUc7NEJBQ0hELFNBQVM7d0JBQ1gsSUFDQTs0QkFDRUMsR0FBR1gsY0FBY1EsUUFBUSxDQUFDLE1BQU07NEJBQ2hDRSxTQUFTO3dCQUNYO2tDQUdMSDt1QkFoQklDOzs7Ozs7Ozs7Ozs7Ozs7O0FBc0J6QjtHQWxDZ0JUO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWFubmlzbWF0aHVyaW4vRGVza3RvcC9EZXYvY2VsZXN0dWkvcGFja2FnZXMvdWkvc3JjL2NvbXBvbmVudHMvRmxpcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRmxpcCgpe1xuICAgIGNvbnN0IFt0aXRsZU51bWJlciwgc2V0VGl0bGVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdGl0bGVzID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gW1wiYW1hemluZ1wiLCBcIm5ld1wiLCBcIndvbmRlcmZ1bFwiLCBcImJlYXV0aWZ1bFwiLCBcInNtYXJ0XCJdLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgbWQ6cGItNCBtZDpwdC0xXCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAge3RpdGxlcy5tYXAoKHRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IFwiLTEwMFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1MCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZU51bWJlciA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGl0bGVOdW1iZXIgPiBpbmRleCA/IC0xNTAgOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIm1vdGlvbiIsIkZsaXAiLCJ0aXRsZU51bWJlciIsInNldFRpdGxlTnVtYmVyIiwidGl0bGVzIiwiZGl2Iiwic3BhbiIsImNsYXNzTmFtZSIsIm1hcCIsInRpdGxlIiwiaW5kZXgiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImFuaW1hdGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Flip.tsx\n"));

/***/ })

});