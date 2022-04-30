"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 3597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useViewport = ()=>{
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // only execute all the code below in client side
        if (false) {}
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewport);


/***/ })

};
;