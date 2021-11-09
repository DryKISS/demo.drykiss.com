"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/shared-lib/src/lib/shared-lib.tsx


const StyledSharedLib = (external_styled_components_default()).div`
  color: pink;
`;
function SharedLib(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledSharedLib, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Welcome to DryKiss SharedLib!"
        })
    }));
}
/* harmony default export */ const shared_lib = ((/* unused pure expression or super */ null && (SharedLib)));

;// CONCATENATED MODULE: ../../libs/shared-lib/src/index.ts

function formattersUtilFormatters(rating) {
    return `${Math.round(rating * 100) / 10 / 10}`;
}

;// CONCATENATED MODULE: ./pages/_app.tsx





function CustomApp({ Component , pageProps  }) {
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        data: "",
        loadingState: "success"
    });
    (0,external_react_.useEffect)(()=>{
        setState({
            ...state,
            loadingState: 'loading'
        });
        fetch('/api').then((x)=>x.json()
        ).then((res)=>{
            setState({
                ...state,
                data: res.message,
                loadingState: 'success'
            });
        }).catch((error)=>{
            setState({
                ...state,
                loadingState: 'error'
            });
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Welcome to first-app!"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SharedLib, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formattersUtilFormatters(211)
            }),
            state.loadingState === 'loading' ? "loading..." : state.loadingState === 'error' ? 'error' : state.loadingState === 'success' && state.data,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "app",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/nx-logo-white.svg",
                                alt: "Nx logo",
                                width: "75",
                                height: "50"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Welcome to first-app!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (CustomApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(392));
module.exports = __webpack_exports__;

})();