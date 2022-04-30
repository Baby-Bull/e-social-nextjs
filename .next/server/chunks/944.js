"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 2944:
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





const ButtonRounded = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button)({
    borderRadius: 40,
    textTransform: "capitalize",
    "&:hover": {
        opacity: 0.9
    }
});
const ButtonGreen = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].green */ .Z.green,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].green */ .Z.green
    },
    color: "white"
});
const ButtonDefault = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gray */ .Z.gray,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gray */ .Z.gray
    },
    color: "white"
});
const ButtonOrange = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].orange */ .Z.orange,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].orange */ .Z.orange
    },
    color: "white"
});
const ButtonCleam = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].cleam */ .Z.cleam,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].cleam */ .Z.cleam
    },
    color: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].navy */ .Z.navy
});
const ButtonBlue = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].blue */ .Z.blue,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].blue */ .Z.blue
    },
    color: "white"
});
const ButtonGradient = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(ButtonRounded)({
    background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gd */ .Z.gd,
    "&:hover": {
        background: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].gd */ .Z.gd
    },
    color: "white"
});
function renderSwitch(mode, children, rest) {
    switch(mode){
        case "green":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonGreen, {
                ...rest,
                children: children
            }));
        case "orange":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonOrange, {
                ...rest,
                children: children
            }));
        case "info":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonBlue, {
                ...rest,
                children: children
            }));
        case "cleam":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonCleam, {
                ...rest,
                children: children
            }));
        case "gradient":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonGradient, {
                ...rest,
                children: children
            }));
        default:
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonDefault, {
                ...rest,
                children: children
            }));
    }
}
const ButtonComponent = ({ children , mode , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: renderSwitch(mode, children, rest)
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);


/***/ })

};
;