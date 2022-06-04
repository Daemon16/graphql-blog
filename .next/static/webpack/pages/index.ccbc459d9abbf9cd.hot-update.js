"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BlogCard.js":
/*!********************************!*\
  !*** ./components/BlogCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/BlogCard.module.css */ \"./styles/BlogCard.module.css\");\n/* harmony import */ var _styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction BlogCard(param) {\n    var title = param.title, author = param.author, coverPhoto = param.coverPhoto, datePublished = param.datePublished, slug = param.slug, content = param.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/posts/\".concat(slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: coverPhoto.url,\n                        alt: title\n                    }, void 0, false, {\n                        fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().author),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: author.avatar.url,\n                                    alt: author.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: author.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().date),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: datePublished\n                        }, void 0, false, {\n                            fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diogo.machado/Desktop/Learning/graphql-blog/components/BlogCard.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_c = BlogCard;\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNzQjtBQUVwQyxTQUFTRSxRQUFRLENBQUMsS0FPaEMsRUFBRTtRQU5EQyxLQUFLLEdBRDBCLEtBT2hDLENBTkNBLEtBQUssRUFDTEMsTUFBTSxHQUZ5QixLQU9oQyxDQUxDQSxNQUFNLEVBQ05DLFVBQVUsR0FIcUIsS0FPaEMsQ0FKQ0EsVUFBVSxFQUNWQyxhQUFhLEdBSmtCLEtBT2hDLENBSENBLGFBQWEsRUFDYkMsSUFBSSxHQUwyQixLQU9oQyxDQUZDQSxJQUFJLEVBQ0pDLE9BQU8sR0FOd0IsS0FPaEMsQ0FEQ0EsT0FBTztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVQseUVBQVc7OzBCQUN6Qiw4REFBQ0Qsa0RBQUk7Z0JBQUNZLElBQUksRUFBRSxTQUFRLENBQU8sT0FBTEwsSUFBSSxDQUFFOzBCQUMxQiw0RUFBQ0UsS0FBRztvQkFBQ0MsU0FBUyxFQUFFVCxpRkFBbUI7OEJBQ2pDLDRFQUFDYSxLQUFHO3dCQUFDQyxHQUFHLEVBQUVWLFVBQVUsQ0FBQ1csR0FBRzt3QkFBRUMsR0FBRyxFQUFFZCxLQUFLOzs7Ozs0QkFBSTs7Ozs7d0JBQ3BDOzs7OztvQkFDRDswQkFDUCw4REFBQ00sS0FBRztnQkFBQ0MsU0FBUyxFQUFFVCx5RUFBVzs7a0NBQ3pCLDhEQUFDa0IsSUFBRTtrQ0FBRWhCLEtBQUs7Ozs7OzRCQUFNO2tDQUNoQiw4REFBQ00sS0FBRzt3QkFBQ0MsU0FBUyxFQUFFVCw0RUFBYztrQ0FDNUIsNEVBQUNRLEtBQUc7NEJBQUNDLFNBQVMsRUFBRVQsMkVBQWE7OzhDQUMzQiw4REFBQ2EsS0FBRztvQ0FBQ0MsR0FBRyxFQUFFWCxNQUFNLENBQUNpQixNQUFNLENBQUNMLEdBQUc7b0NBQUVDLEdBQUcsRUFBRWIsTUFBTSxDQUFDa0IsSUFBSTs7Ozs7d0NBQUk7OENBQ2pELDhEQUFDQyxJQUFFOzhDQUFFbkIsTUFBTSxDQUFDa0IsSUFBSTs7Ozs7d0NBQU07Ozs7OztnQ0FDbEI7Ozs7OzRCQUNGO2tDQUNOLDhEQUFDYixLQUFHO3dCQUFDQyxTQUFTLEVBQUVULHlFQUFXO2tDQUN6Qiw0RUFBQ3NCLElBQUU7c0NBQUVqQixhQUFhOzs7OztnQ0FBTTs7Ozs7NEJBQ3BCOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ047Q0FDSDtBQTdCdUJKLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nQ2FyZC5qcz9jYTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CbG9nQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dDYXJkKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgY292ZXJQaG90byxcbiAgZGF0ZVB1Ymxpc2hlZCxcbiAgc2x1ZyxcbiAgY29udGVudCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cbiAgICAgICAgICA8aW1nIHNyYz17Y292ZXJQaG90by51cmx9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXthdXRob3IuYXZhdGFyLnVybH0gYWx0PXthdXRob3IubmFtZX0gLz5cbiAgICAgICAgICAgIDxoMz57YXV0aG9yLm5hbWV9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgPGgzPntkYXRlUHVibGlzaGVkfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkJsb2dDYXJkIiwidGl0bGUiLCJhdXRob3IiLCJjb3ZlclBob3RvIiwiZGF0ZVB1Ymxpc2hlZCIsInNsdWciLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImhyZWYiLCJpbWdDb250YWluZXIiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJ0ZXh0IiwiaDIiLCJkZXRhaWxzIiwiYXZhdGFyIiwibmFtZSIsImgzIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogCard.js\n");

/***/ })

});