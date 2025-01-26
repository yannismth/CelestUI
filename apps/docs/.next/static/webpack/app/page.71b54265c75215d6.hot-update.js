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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: () => (/* binding */ Select)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Select(param) {\n    let { options, placeholder = \"Select an option\", onChange } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSelect = (option)=>{\n        setSelected(option);\n        setIsOpen(false);\n        if (onChange) onChange(option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block max-w-xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsOpen(!isOpen),\n                className: \"flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition bg-white \".concat(isOpen ? \"ring-2 ring-blue-500\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: selected ? selected.label : placeholder\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-4 h-4 transition-transform \".concat(isOpen ? \"rotate-180\" : \"rotate-0\")\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto\",\n                role: \"listbox\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-2 text-sm font-bold flex justify-start px-4 py-2\",\n                        children: \"Factures\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    options.length > 0 ? options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: ()=>handleSelect(option),\n                            className: \"px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex justify-start\",\n                            role: \"option\",\n                            \"aria-selected\": (selected === null || selected === void 0 ? void 0 : selected.value) === option.value,\n                            children: option.label\n                        }, option.value, false, {\n                            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"px-4 py-2 text-sm text-gray-500\",\n                        children: \"No options available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Select.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Select, \"fhi+ZmPWlV91kqdOidV1QcBNPtI=\");\n_c = Select;\nvar _c;\n$RefreshReg$(_c, \"Select\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9TZWxlY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFRztBQWNwQyxTQUFTRyxPQUFPLEtBQW9FO1FBQXBFLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxrQkFBa0IsRUFBRUMsUUFBUSxFQUFlLEdBQXBFOztJQUNyQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQjtJQUV4RCxNQUFNVSxlQUFlLENBQUNDO1FBQ3BCRixZQUFZRTtRQUNaSixVQUFVO1FBQ1YsSUFBSUYsVUFBVUEsU0FBU007SUFDekI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUNDQyxTQUFTLElBQU1SLFVBQVUsQ0FBQ0Q7Z0JBQzFCTyxXQUFXLDRNQUVWLE9BRENQLFNBQVMseUJBQXlCOztrQ0FHcEMsOERBQUNVO2tDQUFNUixXQUFXQSxTQUFTUyxLQUFLLEdBQUdiOzs7Ozs7a0NBQ25DLDhEQUFDSCx1RkFBV0E7d0JBQUNZLFdBQVcsZ0NBQW1FLE9BQW5DUCxTQUFTLGVBQWU7Ozs7Ozs7Ozs7OztZQUlqRkEsd0JBQ0MsOERBQUNZO2dCQUNDTCxXQUFVO2dCQUNWTSxNQUFLOztrQ0FFSCw4REFBQ0M7d0JBQUVQLFdBQVU7a0NBQXNEOzs7Ozs7b0JBQ3BFVixRQUFRa0IsTUFBTSxHQUFHLElBQ2hCbEIsUUFBUW1CLEdBQUcsQ0FBQyxDQUFDWCx1QkFDWCw4REFBQ1k7NEJBRUNSLFNBQVMsSUFBTUwsYUFBYUM7NEJBQzVCRSxXQUFVOzRCQUNWTSxNQUFLOzRCQUNMSyxpQkFBZWhCLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVWlCLEtBQUssTUFBS2QsT0FBT2MsS0FBSztzQ0FFOUNkLE9BQU9NLEtBQUs7MkJBTlJOLE9BQU9jLEtBQUs7Ozs7a0RBVXJCLDhEQUFDRjt3QkFBR1YsV0FBVTtrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQWpEZ0JYO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWFubmlzbWF0aHVyaW4vRGVza3RvcC9EZXYvY2VsZXN0dWkvcGFja2FnZXMvdWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW50ZXJmYWNlIE9wdGlvbiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWxlY3RQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzpzdHJpbmc7XG4gICAgb3B0aW9uczogT3B0aW9uW107XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgb25DaGFuZ2U/OiAob3B0aW9uOiBPcHRpb24pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QoeyBvcHRpb25zLCBwbGFjZWhvbGRlciA9IFwiU2VsZWN0IGFuIG9wdGlvblwiLCBvbkNoYW5nZSB9OiBTZWxlY3RQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPE9wdGlvbiB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChvcHRpb246IE9wdGlvbikgPT4ge1xuICAgIHNldFNlbGVjdGVkKG9wdGlvbik7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKG9wdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayBtYXgtdy14c1wiPlxuICAgICAgey8qIFRyaWdnZXIgQnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ibHVlLTUwMCB0cmFuc2l0aW9uIGJnLXdoaXRlICR7XG4gICAgICAgICAgaXNPcGVuID8gXCJyaW5nLTIgcmluZy1ibHVlLTUwMFwiIDogXCJcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+e3NlbGVjdGVkID8gc2VsZWN0ZWQubGFiZWwgOiBwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9e2B3LTQgaC00IHRyYW5zaXRpb24tdHJhbnNmb3JtICR7aXNPcGVuID8gXCJyb3RhdGUtMTgwXCIgOiBcInJvdGF0ZS0wXCJ9YH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LyogRHJvcGRvd24gTWVudSAqL31cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHctZnVsbCBtdC0yIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1sZyBtYXgtaC02MCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiB0ZXh0LXNtIGZvbnQtYm9sZCBmbGV4IGp1c3RpZnktc3RhcnQgcHgtNCBweS0yXCI+RmFjdHVyZXM8L3A+XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KG9wdGlvbil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZsZXgganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD17c2VsZWN0ZWQ/LnZhbHVlID09PSBvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5ObyBvcHRpb25zIGF2YWlsYWJsZTwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGV2cm9uRG93biIsIlNlbGVjdCIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwibGFiZWwiLCJ1bCIsInJvbGUiLCJwIiwibGVuZ3RoIiwibWFwIiwibGkiLCJhcmlhLXNlbGVjdGVkIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Select.tsx\n"));

/***/ })

});