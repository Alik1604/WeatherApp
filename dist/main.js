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

/***/ "./src/apiLogic.js":
/*!*************************!*\
  !*** ./src/apiLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getWeather(city) {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1a314b7fb108e956201d87e4e646fc5&units=metric `, {mode: 'cors'});\n    const data = await response.json();\n    return data\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getWeather});\n\n\n\n//# sourceURL=webpack://weatherapp/./src/apiLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLogic */ \"./src/apiLogic.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nlet city = 'Lviv';\n_apiLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(city).then((value) => {\n  _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(value)\n})\n\nconst button = document.querySelector('#search_icon');\nconst input = document.querySelector('input');\n\nbutton.addEventListener('click',() => {\n    city = input.value;\n    input.value = '';\n    _apiLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(city).then((value) => {\n         _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(value)\n    })\n})\n\nconst form = document.querySelector('form');\n\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    city = input.value;\n    input.value = '';\n    _apiLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(city).then((value) => {\n      _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(value)\n  })\n});\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataCont = document.querySelector(\"#WeatherCont\")\nconst back_img = document.querySelector(\"body\")\n\nfunction render(data) {\n    let cardTemplete = ` \n        <div class = 'card'>\n            <div class = 'head-card'>\n                <div class ='head-text'>${data.name},${data.sys.country}</div>\n            </div>\n            <div class = 'card-body'>\n                <div class = 'main-temp'>${Math.round(data.main.temp)}℃</div>\n                <div class = 'sticky'></div>\n                <div class = 'left-part'>\n                    <div class = 'w-text'>${data.weather[0].description.toUpperCase()}</div>\n                    <div class = 'w-text'>FEELS LIKE</div>\n                    <div class = 'w-text'>${Math.round(data.main.feels_like)}℃</div>\n                    <div class = 'w-text'>HUMIDITY</div>\n                    <div class = 'w-text'>${data.main.humidity}%</div>\n                    <div class = 'w-text'>WIND</div>\n                    <div class = 'w-text'>${Math.round(data.wind.speed)} MPH</div>\n                </div>\n            </div> \n        </div>\n    `;\n\n    if(Math.round(data.main.temp)<0){\n        back_img.style.backgroundImage = \"url(./imgs/1.png)\";\n    }else if(Math.round(data.main.temp)>0 && Math.round(data.main.temp)<25){\n        back_img.style.backgroundImage = \"url(./imgs/2.png)\";\n    }else if(Math.round(data.main.temp)>25){\n        back_img.style.backgroundImage = \"url(./imgs/3.png)\";\n    }\n\n    dataCont.innerHTML = cardTemplete;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({render});\n\n//# sourceURL=webpack://weatherapp/./src/render.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;