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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Flip: () => (/* binding */ Flip)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Flip(param) {\n    let { titles, interval = 2000, className } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Flip.useEffect\": ()=>{\n            const timeoutId = setTimeout({\n                \"Flip.useEffect.timeoutId\": ()=>{\n                    setCurrentIndex({\n                        \"Flip.useEffect.timeoutId\": (prev)=>(prev + 1) % titles.length\n                    }[\"Flip.useEffect.timeoutId\"]);\n                }\n            }[\"Flip.useEffect.timeoutId\"], interval);\n            return ({\n                \"Flip.useEffect\": ()=>clearTimeout(timeoutId)\n            })[\"Flip.useEffect\"];\n        }\n    }[\"Flip.useEffect\"], [\n        currentIndex,\n        interval,\n        titles.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"relative w-32 justify-center overflow-hidden h-16 \".concat(className),\n        children: titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                className: \"absolute\",\n                initial: {\n                    opacity: 0,\n                    y: \"-100%\"\n                },\n                animate: currentIndex === index ? {\n                    y: \"0%\",\n                    opacity: 1\n                } : {\n                    y: currentIndex > index ? \"-100%\" : \"100%\",\n                    opacity: 0\n                },\n                transition: {\n                    type: \"spring\",\n                    stiffness: 50\n                },\n                children: title\n            }, index, false, {\n                fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Flip.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/yannismathurin/Desktop/Dev/celestui/packages/ui/src/components/Flip.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Flip, \"tPjzCc9H5UuFdWNuAHYoD0K4UOk=\");\n_c = Flip;\nvar _c;\n$RefreshReg$(_c, \"Flip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy91aS9zcmMvY29tcG9uZW50cy9GbGlwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFRaEMsU0FBU0ksS0FBSyxLQUFpRDtRQUFqRCxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsSUFBSSxFQUFFQyxTQUFTLEVBQWEsR0FBakQ7O0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0E7MEJBQUM7WUFDTixNQUFNUSxZQUFZQzs0Q0FBVztvQkFDekJGO29EQUFnQixDQUFDRyxPQUFTLENBQUNBLE9BQU8sS0FBS1AsT0FBT1EsTUFBTTs7Z0JBQ3hEOzJDQUFHUDtZQUNIO2tDQUFPLElBQU1RLGFBQWFKOztRQUM5Qjt5QkFBRztRQUFDRjtRQUFjRjtRQUFVRCxPQUFPUSxNQUFNO0tBQUM7SUFFMUMscUJBQ0ksOERBQUNFO1FBQUtSLFdBQVcscURBQStELE9BQVZBO2tCQUNqRUYsT0FBT1csR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNoQiw4REFBQ2YsaURBQU1BLENBQUNZLElBQUk7Z0JBRVJSLFdBQVU7Z0JBQ1ZZLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQVE7Z0JBQ2xDQyxTQUNJZCxpQkFBaUJVLFFBQ1g7b0JBQUVHLEdBQUc7b0JBQU1ELFNBQVM7Z0JBQUUsSUFDdEI7b0JBQUVDLEdBQUdiLGVBQWVVLFFBQVEsVUFBVTtvQkFBUUUsU0FBUztnQkFBRTtnQkFFbkVHLFlBQVk7b0JBQUVDLE1BQU07b0JBQVVDLFdBQVc7Z0JBQUc7MEJBRTNDUjtlQVZJQzs7Ozs7Ozs7OztBQWV6QjtHQTdCZ0JkO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWFubmlzbWF0aHVyaW4vRGVza3RvcC9EZXYvY2VsZXN0dWkvcGFja2FnZXMvdWkvc3JjL2NvbXBvbmVudHMvRmxpcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBGbGlwUHJvcHMge1xuICAgIHRpdGxlczogc3RyaW5nW107IC8vIExpc3RlIGRlcyBtb3RzIMOgIGFmZmljaGVyXG4gICAgaW50ZXJ2YWw/OiBudW1iZXI7IC8vIER1csOpZSBlbnRyZSBjaGFxdWUgY2hhbmdlbWVudCBkZSBtb3RcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7IC8vIENsYXNzZSBDU1Mgc3VwcGzDqW1lbnRhaXJlIHBvdXIgcGVyc29ubmFsaXNhdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmxpcCh7IHRpdGxlcywgaW50ZXJ2YWwgPSAyMDAwLCBjbGFzc05hbWUgfTogRmxpcFByb3BzKSB7XG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB0aXRsZXMubGVuZ3RoKTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSwgW2N1cnJlbnRJbmRleCwgaW50ZXJ2YWwsIHRpdGxlcy5sZW5ndGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHJlbGF0aXZlIHctMzIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGgtMTYgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgICAgICB7dGl0bGVzLm1hcCgodGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiBcIi0xMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHk6IFwiMCVcIiwgb3BhY2l0eTogMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHk6IGN1cnJlbnRJbmRleCA+IGluZGV4ID8gXCItMTAwJVwiIDogXCIxMDAlXCIsIG9wYWNpdHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1MCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkZsaXAiLCJ0aXRsZXMiLCJpbnRlcnZhbCIsImNsYXNzTmFtZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJwcmV2IiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0Iiwic3BhbiIsIm1hcCIsInRpdGxlIiwiaW5kZXgiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/ui/src/components/Flip.tsx\n"));

/***/ })

});