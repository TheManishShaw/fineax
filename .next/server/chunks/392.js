"use strict";
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 800:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const InnerBanner = (props)=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "bg-gray-900",
        children: [
            /*#__PURE__*/ _jsx("header", {
                children: /*#__PURE__*/ _jsx("nav", {
                    className: "items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6"
                })
            }),
            /*#__PURE__*/ _jsxs("section", {
                className: "mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "space-y-4 flex-1 sm:text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ _jsxs("h1", {
                                className: "text-white font-bold text-4xl xl:text-5xl",
                                children: [
                                    props.title,
                                    /*#__PURE__*/ _jsxs("span", {
                                        className: "text-indigo-400",
                                        children: [
                                            " ",
                                            props.title2,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0",
                                children: props.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex-1 text-center mt-7 lg:mt-0 lg:ml-3",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: props.img,
                            alt: "banner image",
                            className: "w-full mx-auto sm:w-10/12 lg:w-full"
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (InnerBanner)));


/***/ })

};
;