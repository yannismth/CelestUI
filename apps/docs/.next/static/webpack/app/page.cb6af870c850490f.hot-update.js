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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Switch: () => (/* binding */ Switch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Switch() {\n    _s();\n    const [isClick, setIsClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"w-16 h-8 bg-zinc-200 rounded-full flex items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"w-6 h-6 bg-zinc-50 rounded-full ml-1 cursor-pointer\",\n            initial: {\n                translateX: 0\n            },\n            animate: {\n                translateX: 30\n            },\n            transition: {\n                ease: [\n                    0,\n                    0.71,\n                    0.2,\n                    1.01\n                ]\n            },\n            onClick: ()=>setIsClick(!isClick)\n        }, void 0, false, {\n            fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Switch.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Switch.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_s(Switch, \"8fpkRQrdGGAYKNE6tk5KdUqo3Wo=\");\n_c = Switch;\nvar _c;\n$RefreshReg$(_c, \"Switch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFFSztBQUNqRCxTQUFTRzs7SUFDWixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkMscUJBQ0ksOERBQUNDLGlEQUFNQSxDQUFDSSxHQUFHO1FBQUNDLFdBQVU7a0JBQ2xCLDRFQUFDTCxpREFBTUEsQ0FBQ0ksR0FBRztZQUFDQyxXQUFVO1lBQXNEQyxTQUFTO2dCQUFDQyxZQUFXO1lBQUM7WUFBR0MsU0FBUztnQkFBQ0QsWUFBVztZQUFFO1lBQUdFLFlBQVk7Z0JBQUNDLE1BQU07b0JBQUM7b0JBQUc7b0JBQU07b0JBQUs7aUJBQUs7WUFBQztZQUFHQyxTQUFTLElBQU1SLFdBQVcsQ0FBQ0Q7Ozs7Ozs7Ozs7O0FBR2pOO0dBUmdCRDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3lhbm5pc21hdGh1cmluL0Rlc2t0b3AvRGV2L2NlbGVzdHVpL3BhY2thZ2VzL3VpL3NyYy9jb21wb25lbnRzL1N3aXRjaC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIFN3aXRjaCgpIHtcbiAgICBjb25zdCBbaXNDbGljaywgc2V0SXNDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J3ctMTYgaC04IGJnLXppbmMtMjAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlcic+IFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSd3LTYgaC02IGJnLXppbmMtNTAgcm91bmRlZC1mdWxsIG1sLTEgY3Vyc29yLXBvaW50ZXInIGluaXRpYWw9e3t0cmFuc2xhdGVYOjB9fSBhbmltYXRlPXt7dHJhbnNsYXRlWDozMH19IHRyYW5zaXRpb249e3tlYXNlOiBbMCwgMC43MSwgMC4yLCAxLjAxXSx9fSBvbkNsaWNrPXsoKSA9PiBzZXRJc0NsaWNrKCFpc0NsaWNrKX0+PC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiU3dpdGNoIiwiaXNDbGljayIsInNldElzQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwidHJhbnNsYXRlWCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Switch.tsx\n"));

/***/ })

});