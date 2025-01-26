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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/../../packages/ui/src/components/Button.tsx\");\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Modal() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Escape\") {\n            setIsOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Modal.useEffect\": ()=>{\n            document.addEventListener(\"keydown\", handleKeyDown);\n            return ({\n                \"Modal.useEffect\": ()=>{\n                    document.removeEventListener(\"keydown\", handleKeyDown); // Cleanup\n                }\n            })[\"Modal.useEffect\"];\n        }\n    }[\"Modal.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>setIsOpen(true),\n                children: \"Open\"\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"bg-white p-4 rounded-lg\",\n                    initial: {\n                        scale: 0\n                    },\n                    animate: {\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-zinc-800\",\n                            children: \"This is a modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: ()=>setIsOpen(false),\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUNJO0FBQ007QUFDckMsU0FBU0s7O0lBQ1osTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1LLGdCQUFnQixDQUFDQztRQUNuQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssVUFBVTtZQUNwQkgsVUFBVTtRQUNkO0lBQ0o7SUFFQUgsZ0RBQVNBOzJCQUFDO1lBQ05PLFNBQVNDLGdCQUFnQixDQUFDLFdBQVdKO1lBQ3JDO21DQUFPO29CQUNIRyxTQUFTRSxtQkFBbUIsQ0FBQyxXQUFXTCxnQkFBZ0IsVUFBVTtnQkFDdEU7O1FBQ0o7MEJBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNiLDJDQUFNQTtnQkFBQ2MsU0FBUyxJQUFNUixVQUFVOzBCQUFPOzs7Ozs7MEJBQ3hDLDhEQUFDTCxnREFBTUEsQ0FBQ1ksR0FBRztnQkFBQ0UsV0FBVTswQkFDbEIsNEVBQUNkLGdEQUFNQSxDQUFDWSxHQUFHO29CQUFDRSxXQUFVO29CQUEwQkMsU0FBUzt3QkFBQ0MsT0FBTztvQkFBQztvQkFBR0MsU0FBUzt3QkFBQ0QsT0FBTztvQkFBQztvQkFBR0UsWUFBWTt3QkFBQ0MsVUFBVTtvQkFBRzs7c0NBQ2hILDhEQUFDQzs0QkFBR04sV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDbkMsOERBQUNPOzRCQUFFUCxXQUFVO3NDQUFnQjs7Ozs7O3NDQUM3Qiw4REFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNYLDhEQUFDZiwyQ0FBTUE7b0NBQUNjLFNBQVMsSUFBTVIsVUFBVTs4Q0FBUTs7Ozs7OzhDQUN6Qyw4REFBQ04sMkNBQU1BOzhDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQTlCZ0JJO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWFubmlzbWF0aHVyaW4vRGVza3RvcC9EZXYvY2VsZXN0dWkvcGFja2FnZXMvdWkvc3JjL2NvbXBvbmVudHMvTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKCl7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTsgLy8gQ2xlYW51cFxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+T3BlbjwvQnV0dG9uPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnXCIgaW5pdGlhbD17e3NjYWxlOiAwfX0gYW5pbWF0ZT17e3NjYWxlOiAxfX0gdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjV9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPk1vZGFsPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTgwMFwiPlRoaXMgaXMgYSBtb2RhbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwibW90aW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpbml0aWFsIiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaDEiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Modal.tsx\n"));

/***/ })

});