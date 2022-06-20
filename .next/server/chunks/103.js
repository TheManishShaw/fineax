"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 8103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





const FormSection = ()=>{
    const { 0: value1 , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: form1 , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const setField = (field, value)=>{
        setForm({
            ...form1,
            [field]: value
        });
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        });
    };
    const SubmitForm = (form)=>{
        const { firstname , email , message  } = form;
        if (firstname && email && message) {
            const res = fetch("https://tecblic-website-form-default-rtdb.asia-southeast1.firebasedatabase.app/razacontactform.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,
                    message,
                    email
                })
            });
            if (res) {
                setForm({
                    firstname: "",
                    message: "",
                    email: ""
                });
                (sweetalert__WEBPACK_IMPORTED_MODULE_4___default().center);
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Thank you!",
                    text: "Your message has been successfully sent. We will contact you very soon!",
                    icon: "success",
                    button: "okay"
                });
            } else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Someting went worng",
                    text: "",
                    icon: "error",
                    button: "Okay"
                });
            }
        } else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Please fill empty fields",
                text: "",
                icon: "warning",
                button: "Okay"
            });
        }
    };
    const handleChange = (event)=>{
        const result = event.target.value.replace(/^[0-9\b]+$/);
        setValue(result);
    };
    const validdateForm = ()=>{
        const { firstname , email , message  } = form1;
        const newErrors = {};
        if (!firstname || firstname === "") newErrors.firstname = "Please enter your name";
        if (!email || email === "") newErrors.email = "Please enter a valid email";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            newErrors.email = "Invalid email address";
        }
        if (!message || message === "") newErrors.message = "Please write something";
        else if (message.length < 10) newErrors.message = "message is too short";
        return newErrors;
    };
    const submitData = async (event)=>{
        event.preventDefault();
        const formErrors = validdateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            SubmitForm(form1);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-100",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col justify-between",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-bold leading-tight lg:text-5xl",
                                children: "Can't find what you want lets talk!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "dark:text-gray-400",
                                children: "Write something for us!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "mailto:contact@fineax.ai",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "font-bold text-2xl mt-3",
                                            children: "contact@fineax.ai"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-gray-700 p-6 rounded-lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        method: "POST",
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "firstname",
                                        className: "text-sm",
                                        children: "Full name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: `w-full p-3 rounded dark:bg-gray-800${errors.firstname ? "border border-red-500" : ""}`,
                                        id: "grid-first-name",
                                        type: "text",
                                        name: "firstname",
                                        placeholder: "You Are",
                                        value: form1.firstname,
                                        onChange: (e)=>setField("firstname", e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-red-500 px-1",
                                        children: errors.firstname
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "email",
                                        className: "text-sm",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: `w-full p-3 rounded dark:bg-gray-800 ${errors.firstname ? "border border-red-500" : ""}`,
                                        id: "grid-first-name",
                                        type: "text",
                                        name: "email",
                                        placeholder: "Email",
                                        value: form1.email,
                                        onChange: (e)=>setField("email", e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-red-500 px-1",
                                        children: errors.email
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "message",
                                        className: "text-sm",
                                        children: "Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        placeholder: "Looking for...",
                                        name: "message",
                                        rows: "2",
                                        className: `w-full p-3 rounded dark:bg-gray-800 ${errors.firstname ? "border border-red-500" : ""}`,
                                        value: form1.message,
                                        onChange: (e)=>setField("message", e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-red-500 px-1",
                                        children: errors.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                onClick: submitData,
                                className: "w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900",
                                children: "Send Message"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSection);


/***/ })

};
;