"use strict";
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ themeSelect),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */ 

const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        background: "#F5F5F5",
                        color: "#989EA8"
                    }
                },
                sizeSmall: {
                    fontSize: "10px",
                    height: "20px",
                    lineHeight: "24px",
                    fontWeight: 700
                },
                sizeMedium: {
                    fontSize: "16px",
                    height: "48px",
                    lineHeight: "24px",
                    fontWeight: 700
                }
            }
        }
    },
    typography: {
        fontFamily: [
            "Noto Sans JP",
            "sans-serif"
        ].join(",")
    },
    lightBlue: "#A9F3FF",
    blue: "#03BCDB",
    whiteBlue: "#F4FDFF",
    whiteGray: "#F5F5F5",
    gray: "#989EA8",
    lightGray: "#E6E6E6",
    lightGray_1: "#C4C4C4",
    green: "#1BD0B0",
    orange: "#FF9458",
    cleam: "#FFF9E5",
    navy: "#1A2944",
    red: "#FF5454",
    black: "#262A30",
    gd: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
    filter: {
        blue: "brightness(0) saturate(100%) invert(68%) sepia(84%) saturate(4101%) hue-rotate(150deg) brightness(100%) contrast(98%)",
        white: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(299deg) brightness(101%) contrast(100%)"
    }
});
const themeSelect = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&": {
                        borderRadius: "16px"
                    }
                }
            }
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;