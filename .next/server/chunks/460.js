"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 8460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(668);





const ButtonRounded = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button)(({ props , nestedCondition =(condition, then, otherwise)=>condition ? then : otherwise
  })=>({
        borderColor: props?.borderColor || "black",
        backgroundColor: props?.bgColor || "white",
        "&:hover": {
            borderColor: props?.borderColor || "black",
            backgroundColor: props?.bgColor || "white",
            opacity: 0.9
        },
        color: props?.color || "white",
        width: nestedCondition(props?.dimension === "tiny", "120px", nestedCondition(props?.dimension === "x-small", "160px", nestedCondition(props?.dimension === "small", "184px", nestedCondition(props?.dimension === "x-medium", "200px", nestedCondition(props?.dimension === "medium", "240px", "280px"))))),
        height: props?.height || 40,
        borderRadius: props?.square ? 4 : 40,
        fontSize: 16,
        fontWeight: 700,
        textTransform: "capitalize",
        "&.Mui-disabled": {
            color: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gray */ .Z.gray
        }
    })
);
const ButtonGoogle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    color: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].navy */ .Z.navy,
    backgroundColor: "white",
    borderColor: "#DADADA",
    "&:hover": {
        borderColor: "black"
    }
});
const ButtonGradient = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gd */ .Z.gd
});
function renderSwitch(children, props, rest) {
    switch(props?.mode){
        case "twitter":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonRounded, {
                props: {
                    bgColor: "#55ACEE"
                },
                disableElevation: true,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    variant: "square",
                    sx: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "/assets/images/svg/twitter.svg"
                }),
                ...rest,
                children: children
            }));
        case "google":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonGoogle, {
                variant: "outlined",
                disableElevation: true,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    sx: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "/assets/images/svg/google.svg"
                }),
                ...rest,
                children: children
            }));
        case "github":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonRounded, {
                props: {
                    bgColor: "#101010"
                },
                disableElevation: true,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    variant: "square",
                    sx: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "/assets/images/logo/logo_github.png"
                }),
                ...rest,
                children: children
            }));
        case "gradient":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonGradient, {
                props: props,
                ...rest,
                children: children
            }));
        default:
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonRounded, {
                props: props,
                ...rest,
                children: children
            }));
    }
}
const ButtonComponent = ({ children , props , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: renderSwitch(children, props, rest)
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);


/***/ })

};
;