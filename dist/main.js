/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForName: () => (/* reexport safe */ _js_nameChecker_js__WEBPACK_IMPORTED_MODULE_1__.checkForName),\n/* harmony export */   handleSubmit: () => (/* reexport safe */ _js_formHandler_js__WEBPACK_IMPORTED_MODULE_0__.handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _js_formHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler.js */ \"./src/client/js/formHandler.js\");\n/* harmony import */ var _js_nameChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nameChecker.js */ \"./src/client/js/nameChecker.js\");\n\n\nconsole.log({\n  checkForName: _js_nameChecker_js__WEBPACK_IMPORTED_MODULE_1__.checkForName\n});\nconsole.log({\n  handleSubmit: _js_formHandler_js__WEBPACK_IMPORTED_MODULE_0__.handleSubmit\n});\nconsole.log({\n  liveFunction: liveFunction\n});\n\n// import \"./styles/base.scss\"\n// import \"./styles/footer.scss\"\n// import \"./styles/form.scss\"\n// import \"./styles/header.scss\"\n// import \"./styles/resets.scss\"\n\n\n\n//# sourceURL=webpack://webpack-config/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkValidation: () => (/* binding */ checkValidation),\n/* harmony export */   handleSubmit: () => (/* binding */ handleSubmit),\n/* harmony export */   showErrorMessages: () => (/* binding */ showErrorMessages)\n/* harmony export */ });\nfunction handleSubmit(event) {\n  event.preventDefault();\n\n  // check what text was put into the form field\n  var formText = document.getElementById(\"name\").value;\n  Client.checkForName(formText);\n  console.log(\"::: Form Submitted :::\");\n  fetch(\"http://localhost:8081/test\").then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    document.getElementById(\"results\").innerHTML = res.message;\n  });\n}\nfunction checkValidation() {\n  console.log(\"Checking form validation!\");\n}\nfunction showErrorMessages() {\n  console.log(\"showing error messages!\");\n}\n\n\n//# sourceURL=webpack://webpack-config/./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/js/nameChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/nameChecker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForName: () => (/* binding */ checkForName),\n/* harmony export */   dontDoAnything: () => (/* binding */ dontDoAnything)\n/* harmony export */ });\nfunction checkForName(inputText) {\n  console.log(\"::: Running checkForName :::\", inputText);\n  var names = [\"Picard\", \"Janeway\", \"Kirk\", \"Archer\", \"Georgiou\"];\n  if (names.includes(inputText)) {\n    alert(\"Welcome, Captain!\");\n  }\n}\nfunction dontDoAnything() {\n  console.log(\"I don't do anything in this project!\");\n}\n\n\n//# sourceURL=webpack://webpack-config/./src/client/js/nameChecker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;