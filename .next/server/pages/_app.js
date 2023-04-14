"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,316,180,248,495,471];
exports.modules = {

/***/ 4115:
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
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/navbar/NavBar.jsx



// Add this style to your css file
const NavBar_NavBar = ()=>{
    const { 0: state , 1: setState  } = useState(false);
    const navRef = useRef();
    const navigation = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Contact Us",
            path: "/contact"
        }, 
    ];
    useEffect(()=>{
        const body = document.body;
        // Disable scrolling
        const customBodyStyle = [
            "overflow-hidden",
            "lg:overflow-visible"
        ];
        if (state) body.classList.add(...customBodyStyle);
        else body.classList.remove(...customBodyStyle);
        // Sticky strick
        const customStyle = [
            "sticky-nav",
            "fixed"
        ];
        window.onscroll = ()=>{
            if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
            else navRef.current.classList.remove(...customStyle);
        };
    }, [
        state
    ]);
    return /*#__PURE__*/ _jsx("nav", {
        ref: navRef,
        className: "bg-gray-800 w-full top-0 z-20",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex items-center justify-between py-3 lg:py-4 lg:block",
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: /*#__PURE__*/ _jsx("a", {
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/assets/images/logo-white.png",
                                    width: 150,
                                    height: 50,
                                    alt: "Fineax"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ _jsx("button", {
                                className: "text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border",
                                onClick: ()=>setState(!state)
                                ,
                                children: state ? /*#__PURE__*/ _jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    })
                                }) : /*#__PURE__*/ _jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 8h16M4 16h16"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: `flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? "h-screen mt-10 -z-20   pb-20 overflow-auto pr-4" : "hidden"}`,
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ _jsx("ul", {
                            className: "justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0",
                            children: navigation.map((item, idx)=>{
                                return /*#__PURE__*/ _jsx("li", {
                                    className: "text-white hover:text-gray-400",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: item.path,
                                        children: /*#__PURE__*/ _jsx("a", {
                                            children: item.title
                                        })
                                    })
                                }, idx);
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar_NavBar = ((/* unused pure expression or super */ null && (NavBar_NavBar)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/footer/Footer.jsx



const Footer_Footer = ()=>{
    const footerNavs = [
        {
            id: 1,
            href: "/about",
            name: "About"
        },
        {
            id: 2,
            href: "/services",
            name: "Services"
        },
        {
            id: 3,
            href: "/contact",
            name: "Contact Us"
        }, 
    ];
    return /*#__PURE__*/ _jsxs("footer", {
        className: "text-white bg-gray-800 px-4 py-5 mx-auto",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "max-w-xl sm:mx-auto sm:text-center",
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/assets/images/logo-white.png",
                        width: 300,
                        height: 70,
                        alt: "Fineax",
                        className: "w-32 sm:mx-auto"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "leading-relaxed mt-2 text-[15px]",
                        children: "Fineax is one stop problem solving in artificial intelligence and machine learning systematically through a range of possible actions in order to reduce the distance of your predefined goal or solution. Our team is skilled through most efficient search strategies andplanning an advanced problem-solving technique through training and practice and are best at finding good solutions to the competitions."
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: "items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0",
                children: footerNavs.map((item)=>/*#__PURE__*/ _jsx("li", {
                        className: "hover:text-zinc-300 hover:underline",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: item.href,
                            children: /*#__PURE__*/ _jsx("a", {
                                children: item.name
                            })
                        })
                    }, item.id)
                )
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mt-8 items-center justify-between sm:flex",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mt-4 sm:mt-0",
                        children: [
                            "\xa9 2022 Fineax All rights reserved developed by \xa0",
                            /*#__PURE__*/ _jsx(Link, {
                                href: "https://manishshaw.in/",
                                children: /*#__PURE__*/ _jsx("a", {
                                    className: "hover:text-blue-500",
                                    children: "Manish Shaw"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "mt-6 sm:mt-0",
                        children: /*#__PURE__*/ _jsxs("ul", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ _jsx("li", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/assets/images/social/pinterest.svg",
                                            alt: "pinterest"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/assets/images/social/linkedin.svg",
                                            alt: "linkedin"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/assets/images/social/instagram.svg",
                                            alt: "instagram"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "/assets/images/social/facebook.svg",
                                            alt: "facebook"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("style", {
                children: `
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = ((/* unused pure expression or super */ null && (Footer_Footer)));

;// CONCATENATED MODULE: ./components/layout/Layout.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(NavBar, {}),
            children,
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = ((/* unused pure expression or super */ null && (Layout)));

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,505,664,675], () => (__webpack_exec__(4115)));
module.exports = __webpack_exports__;

})();