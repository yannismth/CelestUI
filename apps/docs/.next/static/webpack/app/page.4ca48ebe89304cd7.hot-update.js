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

/***/ "(app-pages-browser)/../../packages/ui/src/components/Switch.tsx":
/*!***************************************************!*\
  !*** ../../packages/ui/src/components/Switch.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Switch: () => (/* binding */ Switch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Switch() {\n    _s();\n    const [isClick, setIsClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"w-16 h-8 bg-zinc-200 rounded-full flex items-center cursor-pointer\",\n        onClick: ()=>setIsClick(!isClick),\n        initial: false,\n        animate: {\n            backgroundColor: \"240 3.8% 46.1%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"w-6 h-6 bg-zinc-50 rounded-full ml-1\",\n            initial: false,\n            animate: {\n                translateX: isClick ? 30 : 0\n            },\n            transition: {\n                ease: [\n                    0,\n                    0.71,\n                    0.2,\n                    1.01\n                ]\n            }\n        }, void 0, false, {\n            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Switch.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Switch.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_s(Switch, \"8fpkRQrdGGAYKNE6tk5KdUqo3Wo=\");\n_c = Switch;\nvar _c;\n$RefreshReg$(_c, \"Switch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUVoQyxTQUFTRzs7SUFDWixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkMscUJBQ0ksOERBQUNDLGlEQUFNQSxDQUFDSSxHQUFHO1FBQ1BDLFdBQVU7UUFDVkMsU0FBUyxJQUFNSCxXQUFXLENBQUNEO1FBQzNCSyxTQUFTO1FBQ1RDLFNBQVM7WUFBRUMsaUJBQWdCO1FBQWdCO2tCQUUzQyw0RUFBQ1QsaURBQU1BLENBQUNJLEdBQUc7WUFDUEMsV0FBVTtZQUNWRSxTQUFTO1lBQ1RDLFNBQVM7Z0JBQUVFLFlBQVlSLFVBQVUsS0FBSztZQUFFO1lBQ3hDUyxZQUFZO2dCQUFFQyxNQUFNO29CQUFDO29CQUFHO29CQUFNO29CQUFLO2lCQUFLO1lBQUM7Ozs7Ozs7Ozs7O0FBSXpEO0dBbEJnQlg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5uaXNtYXRodXJpbi9EZXNrdG9wL0Rldi9jZWxlc3R1aS9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFN3aXRjaCgpIHtcbiAgICBjb25zdCBbaXNDbGljaywgc2V0SXNDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTggYmctemluYy0yMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2xpY2soIWlzQ2xpY2spfSAvLyBUb2dnbGUgbCfDqXRhdCBxdWFuZCBvbiBjbGlxdWUgc3VyIGxlIHN3aXRjaFxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXt7IGJhY2tncm91bmRDb2xvcjpcIjI0MCAzLjglIDQ2LjElXCJ9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYmctemluYy01MCByb3VuZGVkLWZ1bGwgbWwtMVwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9IC8vIEVtcMOqY2hlIGwnYW5pbWF0aW9uIGluaXRpYWxlXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB0cmFuc2xhdGVYOiBpc0NsaWNrID8gMzAgOiAwIH19IC8vIEFuaW1hdGlvbiBjb25kaXRpb25uZWxsZVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogWzAsIDAuNzEsIDAuMiwgMS4wMV0gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJTd2l0Y2giLCJpc0NsaWNrIiwic2V0SXNDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zbGF0ZVgiLCJ0cmFuc2l0aW9uIiwiZWFzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Switch.tsx\n"));

/***/ })

});