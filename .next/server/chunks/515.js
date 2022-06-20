"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 3515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const features = [
    {
        id: 1,
        heading: "Car Interiors",
        description: "Being it image our videos in different angles with required format and high-quality assurance.",
        img: "/assets/images/car2.jpeg"
    },
    {
        id: 2,
        heading: "Driver\u2019s Case",
        description: "Image/Videos of driver with different KSS level, occlusions, various angles with unique identity, gender, age groups as well as ethnicities.",
        img: "/assets/images/car1.jpeg"
    },
    {
        id: 3,
        heading: "Facial Image/videos",
        description: "Our uniqueness in Images/Videos for Facial Datasets with different head poses, angles, age, gender, ethnicities working on different occlusions, wearable objects.",
        img: "/assets/images/face.jpeg"
    },
    {
        id: 4,
        heading: "Our best Healthcare Datasets",
        description: "High-Quality Images in DICOM format extracted from different machines customized as per requirement by our clients, maintaining all the necessities.",
        img: "/assets/images/health.jpeg"
    }, 
];
const OurBest = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "text-gray-400 body-font bg-gray-800",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container px-5 py-24 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap w-full mb-20",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:w-1/2 w-full mb-6 lg:mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "sm:text-3xl text-2xl font-medium title-font mb-2 text-white",
                                    children: "DISCOVER INNOVATION AND POSSIBILITIES"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-1 w-20 bg-indigo-500 rounded"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap -m-4",
                        children: features.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "xl:w-1/4 md:w-1/2 p-1 rounded-md hover:bg-gray-900 hover:scale-105 transition-all",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " bg-opacity-40 p-6 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "h-40 rounded w-full object-cover object-center mb-6",
                                            src: item.img,
                                            alt: "content"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-lg text-white font-medium title-font mb-4",
                                            children: [
                                                " ",
                                                item.heading
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "leading-relaxed text-base",
                                            children: item.description
                                        })
                                    ]
                                })
                            }, item.id)
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurBest);


/***/ })

};
;