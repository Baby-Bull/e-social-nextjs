"use strict";
exports.id = 709;
exports.ids = [709];
exports.modules = {

/***/ 3709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ TabPanel),
/* harmony export */   "Pf": () => (/* binding */ a11yProps),
/* harmony export */   "u7": () => (/* binding */ ChildTabCustom)
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





const TabPanel = (props)=>{
    const { children , value , index  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-children-${index}`,
        "aria-labelledby": `simple-tab-children-${index}`,
        children: value === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: [
                " ",
                children
            ]
        })
    }));
};
const a11yProps = (index)=>({
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    })
;
const ChildTabCustom = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tab)(({ props  })=>({
        padding: 0,
        color: "black",
        fontWeight: props?.fontWeight || 500,
        fontSize: props?.fontSize,
        "&.Mui-selected": {
            color: src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].blue */ .Z.blue,
            fontWeight: 700
        },
        "@media (max-width: 425px)": {
            minWidth: props?.xsWidth || "",
            maxWidth: props?.xsWidth || "",
            fontSize: props?.xsFontSize || ""
        },
        "@media (min-width: 768px)": {
            fontSize: props?.smFontSize || ""
        },
        "@media (min-width: 1024px)": {
            marginRight: "12px",
            fontSize: props?.mdFontSize || "",
            minWidth: props?.mdWidth || "230px",
            maxWidth: "fit-content",
            "&.Mui-selected": {
                textDecoration: "underline"
            }
        }
    })
);


/***/ })

};
;