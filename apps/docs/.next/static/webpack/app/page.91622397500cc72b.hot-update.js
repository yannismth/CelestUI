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

/***/ "(app-pages-browser)/../../packages/ui/src/components/Modal.tsx":
/*!**************************************************!*\
  !*** ../../packages/ui/src/components/Modal.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/../../packages/ui/src/components/Button.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Modal() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setOpen(!open),\n                children: \"Open Modal\"\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: -50\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                exit: {\n                    opacity: 0,\n                    y: -50\n                },\n                transition: {\n                    duration: 0.3\n                },\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        y: -50\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    exit: {\n                        opacity: 0,\n                        y: -50\n                    },\n                    transition: {\n                        duration: 0.3\n                    },\n                    className: \"bg-white p-4 rounded-lg w-96\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold text-2xl\",\n                            children: \"Modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm\",\n                            children: \"This is a modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>setOpen(!open),\n                            children: \"Close Modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"tSewN/13C9GBXzagzbw7+1gdXuY=\");\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0U7QUFDaEM7QUFDSztBQUVoQyxTQUFTSTs7SUFDWixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxxQkFDSSw4REFBQ1U7OzBCQUNHLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNUCxRQUFRLENBQUNEOzBCQUFPOzs7Ozs7WUFDdENBLHNCQUNHLDhEQUFDRixpREFBTUEsQ0FBQ1EsR0FBRztnQkFDUEcsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRyxDQUFDO2dCQUFHO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLE1BQU07b0JBQUVILFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBRztnQkFDM0JHLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUk7Z0JBQzVCQyxXQUFVOzBCQUVWLDRFQUFDbEIsaURBQU1BLENBQUNRLEdBQUc7b0JBQ1BHLFNBQVM7d0JBQUVDLFNBQVM7d0JBQUdDLEdBQUcsQ0FBQztvQkFBRztvQkFDOUJDLFNBQVM7d0JBQUVGLFNBQVM7d0JBQUdDLEdBQUc7b0JBQUU7b0JBQzVCRSxNQUFNO3dCQUFFSCxTQUFTO3dCQUFHQyxHQUFHLENBQUM7b0JBQUc7b0JBQzNCRyxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO29CQUM1QkMsV0FBVTs7c0NBRVYsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUNuQyw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQVU7Ozs7OztzQ0FDdkIsOERBQUNuQiwyQ0FBTUE7NEJBQUNXLFNBQVMsSUFBTVAsUUFBUSxDQUFDRDtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0Q7R0EvQmdCRDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3lhbm5pc21hdGh1cmluL0Rlc2t0b3AvRGV2L2NlbGVzdHVpL3BhY2thZ2VzL3VpL3NyYy9jb21wb25lbnRzL01vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTUwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyB3LTk2XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bFwiPk1vZGFsPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5UaGlzIGlzIGEgbW9kYWw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5DbG9zZSBNb2RhbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwibW90aW9uIiwiTW9kYWwiLCJvcGVuIiwic2V0T3BlbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZSIsInNldENsb3NlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Modal.tsx\n"));

/***/ })

});