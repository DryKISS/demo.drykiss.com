/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nx_services_shared_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nx-services/shared-lib */ \"../../libs/shared-lib/src/index.ts\");\n\n\n\n\n\nfunction CustomApp({ Component , pageProps  }) {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        data: \"\",\n        loadingState: \"success\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState({\n            ...state,\n            loadingState: 'loading'\n        });\n        fetch('/api').then((x)=>x.json()\n        ).then((res)=>{\n            setState({\n                ...state,\n                data: res.message,\n                loadingState: 'success'\n            });\n        }).catch((error)=>{\n            setState({\n                ...state,\n                loadingState: 'error'\n            });\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                    lineNumber: 20\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                        lineNumber: 21\n                    },\n                    __self: this,\n                    children: \"Welcome to first-app!\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_nx_services_shared_lib__WEBPACK_IMPORTED_MODULE_4__.SharedLib, {\n                __source: {\n                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                    lineNumber: 23\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                    lineNumber: 24\n                },\n                __self: this,\n                children: (0,_nx_services_shared_lib__WEBPACK_IMPORTED_MODULE_4__.formattersUtilFormatters)(211)\n            }),\n            state.loadingState === 'loading' ? \"loading...\" : state.loadingState === 'error' ? 'error' : state.loadingState === 'success' && state.data,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"app\",\n                __source: {\n                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                    lineNumber: 28\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                        className: \"flex\",\n                        __source: {\n                            fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                            lineNumber: 29\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"/nx-logo-white.svg\",\n                                alt: \"Nx logo\",\n                                width: \"75\",\n                                height: \"50\",\n                                __source: {\n                                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                                    lineNumber: 31\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                                    lineNumber: 32\n                                },\n                                __self: this,\n                                children: \"Welcome to first-app!\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                        __source: {\n                            fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                            lineNumber: 34\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                            ...pageProps,\n                            __source: {\n                                fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/apps/first-app/pages/_app.tsx\",\n                                lineNumber: 35\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUVaO0FBQ1A7QUFDc0Q7U0FDbEVLLFNBQVMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ3RELEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUVSLCtDQUFRLENBQXlELENBQUNTO1FBQUFBLElBQUksRUFBQyxDQUFFO1FBQUNDLFlBQVksRUFBQyxDQUFTO0lBQUEsQ0FBQztJQUV4SFgsZ0RBQVMsS0FBSyxDQUFDO1FBQ2JTLFFBQVEsQ0FBQyxDQUFDO2VBQUdELEtBQUs7WUFBQ0csWUFBWSxFQUFDLENBQVM7UUFBQSxDQUFDO1FBQzFDQyxLQUFLLENBQUMsQ0FBTSxPQUFFQyxJQUFJLEVBQUNDLENBQUMsR0FBRUEsQ0FBQyxDQUFDQyxJQUFJO1VBQUlGLElBQUksRUFBRUcsR0FBRyxHQUFHLENBQUM7WUFDM0NQLFFBQVEsQ0FBQyxDQUFDO21CQUFHRCxLQUFLO2dCQUFDRSxJQUFJLEVBQUNNLEdBQUcsQ0FBQ0MsT0FBTztnQkFBQ04sWUFBWSxFQUFDLENBQVM7WUFBQSxDQUFDO1FBQzdELENBQUMsRUFBRU8sS0FBSyxFQUFDQyxLQUFLLEdBQUUsQ0FBQztZQUNmVixRQUFRLENBQUMsQ0FBQzttQkFBR0QsS0FBSztnQkFBQ0csWUFBWSxFQUFDLENBQU87WUFBQSxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTTs7aUZBRURULGtEQUFJOzs7Ozs7K0ZBQ0ZrQixDQUFLOzs7Ozs7OEJBQUMsQ0FBcUI7OztpRkFFN0JoQiw4REFBUzs7Ozs7OztpRkFDVGlCLENBQUM7Ozs7OzswQkFDRGxCLGlGQUF3QixDQUFDLEdBQUc7O1lBRTVCSyxLQUFLLENBQUNHLFlBQVksS0FBRyxDQUFTLFdBQUMsQ0FBWSxjQUFDSCxLQUFLLENBQUNHLFlBQVksS0FBRyxDQUFPLFNBQUMsQ0FBTyxTQUFDSCxLQUFLLENBQUNHLFlBQVksS0FBRyxDQUFTLFlBQUVILEtBQUssQ0FBQ0UsSUFBSTtrRkFDM0hZLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OzBGQUNqQkMsQ0FBTTt3QkFBQ0QsU0FBUyxFQUFDLENBQU07Ozs7Ozs7aUdBRXJCRSxDQUFHO2dDQUFDQyxHQUFHLEVBQUMsQ0FBb0I7Z0NBQUNDLEdBQUcsRUFBQyxDQUFTO2dDQUFDQyxLQUFLLEVBQUMsQ0FBSTtnQ0FBQ0MsTUFBTSxFQUFDLENBQUk7Ozs7Ozs7aUdBQ2pFQyxDQUFFOzs7Ozs7MENBQUMsQ0FBcUI7Ozs7eUZBRTFCQyxDQUFJOzs7Ozs7dUdBQ0Z6QixTQUFTOytCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztBQUVELGlFQUFlRixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Zm9ybWF0dGVyc1V0aWxGb3JtYXR0ZXJzLCBTaGFyZWRMaWJ9IGZyb20gJ0BueC1zZXJ2aWNlcy9zaGFyZWQtbGliJ1xuZnVuY3Rpb24gQ3VzdG9tQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZTx7ZGF0YTpzdHJpbmcsbG9hZGluZ1N0YXRlOlwibG9hZGluZ1wifCdzdWNjZXNzJ3wnZXJyb3InfT4oe2RhdGE6XCJcIixsb2FkaW5nU3RhdGU6XCJzdWNjZXNzXCJ9KVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNldFN0YXRlKHsuLi5zdGF0ZSxsb2FkaW5nU3RhdGU6J2xvYWRpbmcnfSlcbiAgICBmZXRjaCgnL2FwaScpLnRoZW4oeD0+eC5qc29uKCkpLnRoZW4oKHJlcyk9PntcbiAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSxkYXRhOnJlcy5tZXNzYWdlLGxvYWRpbmdTdGF0ZTonc3VjY2Vzcyd9KVxuICAgIH0pLmNhdGNoKGVycm9yPT57XG4gICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsbG9hZGluZ1N0YXRlOidlcnJvcid9KVxuICAgIH0pXG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWxjb21lIHRvIGZpcnN0LWFwcCE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNoYXJlZExpYi8+XG4gICAgICA8cD5cbiAgICAgIHtmb3JtYXR0ZXJzVXRpbEZvcm1hdHRlcnMoMjExKX1cbiAgICAgIDwvcD5cbiAgICAgIHtzdGF0ZS5sb2FkaW5nU3RhdGU9PT0nbG9hZGluZyc/XCJsb2FkaW5nLi4uXCI6c3RhdGUubG9hZGluZ1N0YXRlPT09J2Vycm9yJz8nZXJyb3InOnN0YXRlLmxvYWRpbmdTdGF0ZT09PSdzdWNjZXNzJyYmc3RhdGUuZGF0YX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL31cbiAgICAgICAgICA8aW1nIHNyYz1cIi9ueC1sb2dvLXdoaXRlLnN2Z1wiIGFsdD1cIk54IGxvZ29cIiB3aWR0aD1cIjc1XCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIGZpcnN0LWFwcCE8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsImZvcm1hdHRlcnNVdGlsRm9ybWF0dGVycyIsIlNoYXJlZExpYiIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJkYXRhIiwibG9hZGluZ1N0YXRlIiwiZmV0Y2giLCJ0aGVuIiwieCIsImpzb24iLCJyZXMiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsInRpdGxlIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "../../libs/shared-lib/src/index.ts":
/*!******************************************!*\
  !*** ../../libs/shared-lib/src/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formattersUtilFormatters\": () => (/* binding */ formattersUtilFormatters)\n/* harmony export */ });\n/* harmony import */ var _lib_shared_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-lib */ \"../../libs/shared-lib/src/lib/shared-lib.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _lib_shared_lib__WEBPACK_IMPORTED_MODULE_0__) if([\"default\",\"formattersUtilFormatters\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _lib_shared_lib__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\nfunction formattersUtilFormatters(rating) {\n    return `${Math.round(rating * 100) / 10 / 10}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbGlicy9zaGFyZWQtbGliL3NyYy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNnQztBQUN6QixTQUFTQSx3QkFBd0IsQ0FBQ0MsTUFBYSxFQUFVLENBQUM7SUFDN0QsTUFBTSxJQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxHQUFDLEdBQUcsSUFBRSxFQUFFLEdBQUMsRUFBRTtBQUN4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uL2xpYnMvc2hhcmVkLWxpYi9zcmMvaW5kZXgudHM/YTE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NoYXJlZC1saWInO1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdHRlcnNVdGlsRm9ybWF0dGVycyhyYXRpbmc6bnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChyYXRpbmcqMTAwKS8xMC8xMH1gO1xuICB9Il0sIm5hbWVzIjpbImZvcm1hdHRlcnNVdGlsRm9ybWF0dGVycyIsInJhdGluZyIsIk1hdGgiLCJyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../libs/shared-lib/src/index.ts\n");

/***/ }),

/***/ "../../libs/shared-lib/src/lib/shared-lib.tsx":
/*!****************************************************!*\
  !*** ../../libs/shared-lib/src/lib/shared-lib.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SharedLib\": () => (/* binding */ SharedLib),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StyledSharedLib = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  color: pink;\n`;\nfunction SharedLib(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledSharedLib, {\n        __source: {\n            fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/libs/shared-lib/src/lib/shared-lib.tsx\",\n            lineNumber: 21\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"/Users/shahabsadeghi/Documents/projects/GitHub/nx-services/libs/shared-lib/src/lib/shared-lib.tsx\",\n                lineNumber: 23\n            },\n            __self: this,\n            children: \"Welcome to DryKiss SharedLib!\"\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedLib);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbGlicy9zaGFyZWQtbGliL3NyYy9saWIvc2hhcmVkLWxpYi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUt3QztBQVF4QyxLQUFLLENBQUNDLGVBQWUsR0FBR0QsOERBQVUsQ0FBQztBQUtuQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBUU4sQ0FBQztBQUdELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbGlicy9zaGFyZWQtbGliL3NyYy9saWIvc2hhcmVkLWxpYi50c3g/MDIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuICBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbiAgXG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRMaWJQcm9wcyB7XG59XG5cblxuY29uc3QgU3R5bGVkU2hhcmVkTGliID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHBpbms7XG5gO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBTaGFyZWRMaWIocHJvcHM6IFNoYXJlZExpYlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNoYXJlZExpYj5cbiAgICAgIFxuICAgICAgPGgxPldlbGNvbWUgdG8gRHJ5S2lzcyBTaGFyZWRMaWIhPC9oMT5cbiAgICAgIFxuICAgIDwvU3R5bGVkU2hhcmVkTGliPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRMaWI7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkU2hhcmVkTGliIiwiZGl2IiwiU2hhcmVkTGliIiwicHJvcHMiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../libs/shared-lib/src/lib/shared-lib.tsx\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();