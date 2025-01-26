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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/../../packages/ui/src/components/Button.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Modal(param) {\n    let { children, buttonName, title } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const transition = {\n        duration: 2,\n        delay: 0.5,\n        ease: [\n            0,\n            0.71,\n            0.2,\n            1.01\n        ]\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Escape\") {\n            setOpen(false); // Ferme le modal si Échap est pressé\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Modal.useEffect\": ()=>{\n            document.addEventListener(\"keydown\", handleKeyDown);\n            return ({\n                \"Modal.useEffect\": ()=>{\n                    document.removeEventListener(\"keydown\", handleKeyDown);\n                }\n            })[\"Modal.useEffect\"];\n        }\n    }[\"Modal.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>setOpen(!open),\n                children: buttonName\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    transition: {\n                        transition\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"bg-white p-6 rounded-lg min-w-[425px] flex flex-col justify-around\",\n                        initial: {\n                            opacity: 0,\n                            scale: 0.5\n                        },\n                        animate: {\n                            opacity: 1,\n                            scale: 1\n                        },\n                        exit: {\n                            opacity: 0,\n                            scale: 0.5\n                        },\n                        transition: {\n                            duration: 0.3,\n                            delay: 0,\n                            ease: [\n                                0,\n                                0.71,\n                                0.2,\n                                1.01\n                            ]\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full justify-between items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xl font-bold\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"w-4 h-4 cursor-pointer\",\n                                        onClick: ()=>setOpen(!open)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"e27cRtNMdAs0U0o1oHlS6A8OEBo=\");\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNoQztBQUNzQjtBQUN2QjtBQU0xQixTQUFTTyxNQUFNLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQWMsR0FBM0M7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNWSxhQUFhO1FBQ2ZDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxNQUFNO1lBQUM7WUFBRztZQUFNO1lBQUs7U0FBSztJQUM1QjtJQUNBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssVUFBVTtZQUNwQlAsUUFBUSxRQUFRLHFDQUFxQztRQUN6RDtJQUNKO0lBQ0FWLGdEQUFTQTsyQkFBQztZQUNOa0IsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV0o7WUFDckM7bUNBQU87b0JBQ0hHLFNBQVNFLG1CQUFtQixDQUFDLFdBQVdMO2dCQUM1Qzs7UUFDSjswQkFBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ3BCLDJDQUFNQTtnQkFBQ3FCLFNBQVMsSUFBTVosUUFBUSxDQUFDRDswQkFBUUY7Ozs7OzswQkFDeEMsOERBQUNKLDBEQUFlQTswQkFDZk0sc0JBQ0QsOERBQUNQLGlEQUFNQSxDQUFDbUIsR0FBRztvQkFBQ0UsV0FBVTtvQkFBNkVDLFNBQVM7d0JBQUVDLFNBQVM7b0JBQUU7b0JBQUdDLFNBQVM7d0JBQUVELFNBQVM7b0JBQUU7b0JBQUdFLE1BQU07d0JBQUVGLFNBQVM7b0JBQUU7b0JBQUdkLFlBQVk7d0JBQUNBO29CQUFVOzhCQUM5TCw0RUFBQ1QsaURBQU1BLENBQUNtQixHQUFHO3dCQUFDRSxXQUFVO3dCQUFxRUMsU0FBUzs0QkFBRUMsU0FBUTs0QkFBR0csT0FBTTt3QkFBSTt3QkFBR0YsU0FBUzs0QkFBRUQsU0FBUzs0QkFBR0csT0FBTTt3QkFBRTt3QkFBR0QsTUFBTTs0QkFBRUYsU0FBUzs0QkFBR0csT0FBTTt3QkFBSTt3QkFBR2pCLFlBQVk7NEJBQzdNQyxVQUFVOzRCQUNWQyxPQUFNOzRCQUNOQyxNQUFNO2dDQUFDO2dDQUFHO2dDQUFNO2dDQUFLOzZCQUFLO3dCQUM5Qjs7MENBQ1EsOERBQUNPO2dDQUFJRSxXQUFVOztrREFDWCw4REFBQ007d0NBQUdOLFdBQVU7a0RBQXFCZjs7Ozs7O2tEQUNuQyw4REFBQ0osNkVBQUNBO3dDQUFDbUIsV0FBVTt3Q0FBeUJELFNBQVMsSUFBTVosUUFBUSxDQUFDRDs7Ozs7Ozs7Ozs7OzBDQUVsRSw4REFBQ1k7MENBQ0lmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0dBMUNnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5uaXNtYXRodXJpbi9EZXNrdG9wL0Rldi9jZWxlc3R1aS9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmludGVyZmFjZSBNb2RhbFByb3BzIHtcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBidXR0b25OYW1lPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHsgY2hpbGRyZW4sIGJ1dHRvbk5hbWUsIHRpdGxlIH06IE1vZGFsUHJvcHMpIHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIGVhc2U6IFswLCAwLjcxLCAwLjIsIDEuMDFdLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogZ2xvYmFsVGhpcy5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7IC8vIEZlcm1lIGxlIG1vZGFsIHNpIMOJY2hhcCBlc3QgcHJlc3PDqVxuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT57YnV0dG9uTmFtZX08L0J1dHRvbj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7b3BlbiAmJiBcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCB6LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX0gdHJhbnNpdGlvbj17e3RyYW5zaXRpb259fT5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBtaW4tdy1bNDI1cHhdIGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmRcIiBpbml0aWFsPXt7IG9wYWNpdHk6MCwgc2NhbGU6MC41IH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6MSB9fSBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOjAuNSB9fSB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgICAgICBkZWxheTowLFxuICAgICAgICAgICAgICAgIGVhc2U6IFswLCAwLjcxLCAwLjIsIDEuMDFdLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTQgaC00IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJYIiwiTW9kYWwiLCJjaGlsZHJlbiIsImJ1dHRvbk5hbWUiLCJ0aXRsZSIsIm9wZW4iLCJzZXRPcGVuIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJzY2FsZSIsImgxIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Modal.tsx\n"));

/***/ })

});