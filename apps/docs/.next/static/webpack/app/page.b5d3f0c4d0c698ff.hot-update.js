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

/***/ "(app-pages-browser)/../../packages/ui/src/components/Select.tsx":
/*!***************************************************!*\
  !*** ../../packages/ui/src/components/Select.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: () => (/* binding */ Select)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Select(param) {\n    let { options, placeholder = \"Select an option\", onChange } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSelect = (option)=>{\n        setSelected(option);\n        setIsOpen(false);\n        if (onChange) onChange(option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block max-w-xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsOpen(!isOpen),\n                className: \"flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition bg-white \".concat(isOpen ? \"ring-2 ring-blue-500\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: selected ? selected.label : placeholder\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-4 h-4 transition-transform \".concat(isOpen ? \"rotate-180\" : \"rotate-0\")\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto\",\n                role: \"listbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Factures\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    options.length > 0 ? options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: ()=>handleSelect(option),\n                            className: \"px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none\",\n                            role: \"option\",\n                            \"aria-selected\": (selected === null || selected === void 0 ? void 0 : selected.value) === option.value,\n                            children: option.label\n                        }, option.value, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"px-4 py-2 text-sm text-gray-500\",\n                        children: \"No options available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Select, \"fhi+ZmPWlV91kqdOidV1QcBNPtI=\");\n_c = Select;\nvar _c;\n$RefreshReg$(_c, \"Select\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9TZWxlY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFRztBQWNwQyxTQUFTRyxPQUFPLEtBQW9FO1FBQXBFLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxrQkFBa0IsRUFBRUMsUUFBUSxFQUFlLEdBQXBFOztJQUNyQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQjtJQUV4RCxNQUFNVSxlQUFlLENBQUNDO1FBQ3BCRixZQUFZRTtRQUNaSixVQUFVO1FBQ1YsSUFBSUYsVUFBVUEsU0FBU007SUFDekI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUNDQyxTQUFTLElBQU1SLFVBQVUsQ0FBQ0Q7Z0JBQzFCTyxXQUFXLDRNQUVWLE9BRENQLFNBQVMseUJBQXlCOztrQ0FHcEMsOERBQUNVO2tDQUFNUixXQUFXQSxTQUFTUyxLQUFLLEdBQUdiOzs7Ozs7a0NBQ25DLDhEQUFDSCx1RkFBV0E7d0JBQUNZLFdBQVcsZ0NBQW1FLE9BQW5DUCxTQUFTLGVBQWU7Ozs7Ozs7Ozs7OztZQUlqRkEsd0JBRUMsOERBQUNZO2dCQUNDTCxXQUFVO2dCQUNWTSxNQUFLOztrQ0FFSCw4REFBQ0M7a0NBQUU7Ozs7OztvQkFDSmpCLFFBQVFrQixNQUFNLEdBQUcsSUFDaEJsQixRQUFRbUIsR0FBRyxDQUFDLENBQUNYLHVCQUNYLDhEQUFDWTs0QkFFQ1IsU0FBUyxJQUFNTCxhQUFhQzs0QkFDNUJFLFdBQVU7NEJBQ1ZNLE1BQUs7NEJBQ0xLLGlCQUFlaEIsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVaUIsS0FBSyxNQUFLZCxPQUFPYyxLQUFLO3NDQUU5Q2QsT0FBT00sS0FBSzsyQkFOUk4sT0FBT2MsS0FBSzs7OztrREFVckIsOERBQUNGO3dCQUFHVixXQUFVO2tDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVEO0dBbERnQlg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5uaXNtYXRodXJpbi9EZXNrdG9wL0Rldi9jZWxlc3R1aS9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9TZWxlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgT3B0aW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlbGVjdFByb3BzIHtcbiAgICBjbGFzc05hbWU/OnN0cmluZztcbiAgICBvcHRpb25zOiBPcHRpb25bXTtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICBvbkNoYW5nZT86IChvcHRpb246IE9wdGlvbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdCh7IG9wdGlvbnMsIHBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYW4gb3B0aW9uXCIsIG9uQ2hhbmdlIH06IFNlbGVjdFByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8T3B0aW9uIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWQob3B0aW9uKTtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2Uob3B0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIG1heC13LXhzXCI+XG4gICAgICB7LyogVHJpZ2dlciBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWxlZnQgYm9yZGVyIHJvdW5kZWQtbGcgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWJsdWUtNTAwIHRyYW5zaXRpb24gYmctd2hpdGUgJHtcbiAgICAgICAgICBpc09wZW4gPyBcInJpbmctMiByaW5nLWJsdWUtNTAwXCIgOiBcIlwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj57c2VsZWN0ZWQgPyBzZWxlY3RlZC5sYWJlbCA6IHBsYWNlaG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT17YHctNCBoLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtpc09wZW4gPyBcInJvdGF0ZS0xODBcIiA6IFwicm90YXRlLTBcIn1gfSAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBEcm9wZG93biBNZW51ICovfVxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIFxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHctZnVsbCBtdC0yIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1sZyBtYXgtaC02MCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHA+RmFjdHVyZXM8L3A+XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KG9wdGlvbil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtzZWxlY3RlZD8udmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk5vIG9wdGlvbnMgYXZhaWxhYmxlPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNoZXZyb25Eb3duIiwiU2VsZWN0Iiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlU2VsZWN0Iiwib3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJsYWJlbCIsInVsIiwicm9sZSIsInAiLCJsZW5ndGgiLCJtYXAiLCJsaSIsImFyaWEtc2VsZWN0ZWQiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Select.tsx\n"));

/***/ })

});