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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/../../packages/ui/src/components/Button.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Modal(param) {\n    let { children, buttonName, title } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const transition = {\n        duration: 2,\n        delay: 0.5,\n        ease: [\n            0,\n            0.71,\n            0.2,\n            1.01\n        ]\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Escape\") {\n            setOpen(false); // Ferme le modal si Échap est pressé\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Modal.useEffect\": ()=>{\n            document.addEventListener(\"keydown\", handleKeyDown);\n            return ({\n                \"Modal.useEffect\": ()=>{\n                    document.removeEventListener(\"keydown\", handleKeyDown);\n                }\n            })[\"Modal.useEffect\"];\n        }\n    }[\"Modal.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>setOpen(!open),\n                children: buttonName\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                exit: {\n                    opacity: 0\n                },\n                transition: {\n                    transition\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"bg-white p-6 rounded-lg min-w-[425px] flex flex-col justify-around\",\n                    initial: {\n                        scale: 0\n                    },\n                    animate: {\n                        scale: 1\n                    },\n                    exit: {\n                        scale: 0\n                    },\n                    transition: {\n                        duration: 0.3,\n                        delay: 0,\n                        ease: [\n                            0,\n                            0.71,\n                            0.2,\n                            1.01\n                        ]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-bold\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"w-4 h-4 cursor-pointer\",\n                                    onClick: ()=>setOpen(!open)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Modal.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"e27cRtNMdAs0U0o1oHlS6A8OEBo=\");\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ2hDO0FBQ0s7QUFDTjtBQU0xQixTQUFTTSxNQUFNLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQWMsR0FBM0M7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVyxhQUFhO1FBQ2ZDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxNQUFNO1lBQUM7WUFBRztZQUFNO1lBQUs7U0FBSztJQUM1QjtJQUNBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssVUFBVTtZQUNwQlAsUUFBUSxRQUFRLHFDQUFxQztRQUN6RDtJQUNKO0lBQ0FULGdEQUFTQTsyQkFBQztZQUNOaUIsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV0o7WUFDckM7bUNBQU87b0JBQ0hHLFNBQVNFLG1CQUFtQixDQUFDLFdBQVdMO2dCQUM1Qzs7UUFDSjswQkFBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ25CLDJDQUFNQTtnQkFBQ29CLFNBQVMsSUFBTVosUUFBUSxDQUFDRDswQkFBUUY7Ozs7OztZQUN2Q0Usc0JBQ0QsOERBQUNOLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFBQ0UsV0FBVTtnQkFBNkVDLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQUdDLFNBQVM7b0JBQUVELFNBQVM7Z0JBQUU7Z0JBQUdFLE1BQU07b0JBQUVGLFNBQVM7Z0JBQUU7Z0JBQUdkLFlBQVk7b0JBQUNBO2dCQUFVOzBCQUM5TCw0RUFBQ1IsaURBQU1BLENBQUNrQixHQUFHO29CQUFDRSxXQUFVO29CQUFxRUMsU0FBUzt3QkFBRUksT0FBTztvQkFBRTtvQkFBR0YsU0FBUzt3QkFBRUUsT0FBTztvQkFBRTtvQkFBR0QsTUFBTTt3QkFBRUMsT0FBTztvQkFBRTtvQkFBR2pCLFlBQVk7d0JBQ3pLQyxVQUFVO3dCQUNWQyxPQUFNO3dCQUNOQyxNQUFNOzRCQUFDOzRCQUFHOzRCQUFNOzRCQUFLO3lCQUFLO29CQUM5Qjs7c0NBQ1EsOERBQUNPOzRCQUFJRSxXQUFVOzs4Q0FDWCw4REFBQ007b0NBQUdOLFdBQVU7OENBQXFCZjs7Ozs7OzhDQUNuQyw4REFBQ0osNkVBQUNBO29DQUFDbUIsV0FBVTtvQ0FBeUJELFNBQVMsSUFBTVosUUFBUSxDQUFDRDs7Ozs7Ozs7Ozs7O3NDQUVsRSw4REFBQ1k7c0NBQ0lmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QjtHQXhDZ0JEO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWFubmlzbWF0aHVyaW4vRGVza3RvcC9EZXYvY2VsZXN0dWkvcGFja2FnZXMvdWkvc3JjL2NvbXBvbmVudHMvTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICAgIGJ1dHRvbk5hbWU/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoeyBjaGlsZHJlbiwgYnV0dG9uTmFtZSwgdGl0bGUgfTogTW9kYWxQcm9wcykge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0ge1xuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgZWFzZTogWzAsIDAuNzEsIDAuMiwgMS4wMV0sXG4gICAgICB9O1xuICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBnbG9iYWxUaGlzLktleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTsgLy8gRmVybWUgbGUgbW9kYWwgc2kgw4ljaGFwIGVzdCBwcmVzc8OpXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PntidXR0b25OYW1lfTwvQnV0dG9uPlxuICAgICAgICAgICAge29wZW4gJiYgXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgei01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gZXhpdD17eyBvcGFjaXR5OiAwIH19IHRyYW5zaXRpb249e3t0cmFuc2l0aW9ufX0+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgbWluLXctWzQyNXB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kXCIgaW5pdGlhbD17eyBzY2FsZTogMCB9fSBhbmltYXRlPXt7IHNjYWxlOiAxIH19IGV4aXQ9e3sgc2NhbGU6IDAgfX0gdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICAgICAgZGVsYXk6MCxcbiAgICAgICAgICAgICAgICBlYXNlOiBbMCwgMC43MSwgMC4yLCAxLjAxXSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNCBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIm1vdGlvbiIsIlgiLCJNb2RhbCIsImNoaWxkcmVuIiwiYnV0dG9uTmFtZSIsInRpdGxlIiwib3BlbiIsInNldE9wZW4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImVhc2UiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInNjYWxlIiwiaDEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Modal.tsx\n"));

/***/ })

});