/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/config.js":
/*!******************************!*\
  !*** ./js/modules/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "url": () => (/* binding */ url),
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&lang=ru&appid=74c8decd6d4dc54dcadd19431c0e7887';

const config = {
    // For Header
    city: document.querySelector('#city'),
    state: document.querySelector('#state'),
    temp: document.querySelector('#temp'),

    // For Props
    feel: document.querySelector('#feel'),
    pressure: document.querySelector('#pressure'),
    humidity: document.querySelector('#humidity'),
    wind: document.querySelector('#wind'),
};



/***/ }),

/***/ "./js/modules/fetch.js":
/*!*****************************!*\
  !*** ./js/modules/fetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(url) {
    return await fetch(url).then(
        successResponse => successResponse.status != 200 ? null : successResponse.json(),
        failResponse => null);
}

/***/ }),

/***/ "./js/modules/header.js":
/*!******************************!*\
  !*** ./js/modules/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./js/modules/weather.js");


class Header extends _weather__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(city, state, temp, config) {
        super();
        this.city = city;
        this.state = state;
        this.temp = this.convertTemp(temp);
        this.config = config;
    }
    render() {
        this.config.city.textContent = this.city;
        this.config.state.textContent = this.state;
        this.config.temp.textContent = `${this.temp}??`
    }
}

/***/ }),

/***/ "./js/modules/props.js":
/*!*****************************!*\
  !*** ./js/modules/props.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Props)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./js/modules/weather.js");


class Props extends _weather__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(feelsLike, pressure, humidity, wind, config) {
        super();
        this.feelsLike = this.convertTemp(feelsLike);
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
        this.config = config;
    }

    render() {
        this.config.feel.textContent = `${this.feelsLike}??`;
        this.config.pressure.textContent = `${this.pressure} mm Hg`;
        this.config.humidity.textContent = `${this.humidity}%`;
        this.config.wind.textContent = `${this.wind} m/s`;
    }
}

/***/ }),

/***/ "./js/modules/svg.js":
/*!***************************!*\
  !*** ./js/modules/svg.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svg = {
    clear: `
    <svg width="110" height="109" viewBox="0 0 110 109" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="54.5" cy="54.5" r="28.5" fill="#EAD620" stroke="#EAD620" stroke-width="2"/>
    <line x1="55.5" y1="109" x2="55.5" y2="90" stroke="#EAD620" stroke-width="3"/>
    <line x1="55.5" y1="19" x2="55.5" stroke="#EAD620" stroke-width="3"/>
    <line x1="109.5" y1="54" x2="90.5" y2="54" stroke="#EAD620" stroke-width="3"/>
    <line x1="19.5" y1="54" x2="0.5" y2="54" stroke="#EAD620" stroke-width="3"/>
    <line x1="92.4766" y1="92.0979" x2="79.0416" y2="78.6629" stroke="#EAD620" stroke-width="3"/>
    <line x1="28.837" y1="28.4584" x2="15.402" y2="15.0233" stroke="#EAD620" stroke-width="3"/>
    <line x1="14.402" y1="90.9766" x2="27.8371" y2="77.5415" stroke="#EAD620" stroke-width="3"/>
    <line x1="78.0416" y1="27.337" x2="91.4767" y2="13.902" stroke="#EAD620" stroke-width="3"/>
    </svg>
    `,
    snow: `
    <svg width="113" height="112" viewBox="0 0 113 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55.5 37L68.9234 44.75V60.25L55.5 68L42.0766 60.25V44.75L55.5 37Z" fill="#F2F2F2"/>
    <rect x="53" width="6" height="56" fill="#F2F2F2"/>
    <path d="M64.5 3L69.6962 6L58.1962 25.9186L53 22.9186L64.5 3Z" fill="#F2F2F2"/>
    <rect x="42" y="6.04077" width="6" height="23" transform="rotate(-30 42 6.04077)" fill="#F2F2F2"/>
    <path d="M56.196 75L42.7727 67.25V51.75L56.196 44L69.6194 51.75V67.25L56.196 75Z" fill="#F2F2F2"/>
    <rect x="58.696" y="112" width="6" height="56" transform="rotate(-180 58.696 112)" fill="#F2F2F2"/>
    <path d="M47.196 109L41.9999 106L53.4999 86.0814L58.696 89.0814L47.196 109Z" fill="#F2F2F2"/>
    <rect x="69.696" y="105.959" width="6" height="23" transform="rotate(150 69.696 105.959)" fill="#F2F2F2"/>
    <path d="M39.793 47.6602L53.2164 39.9102L66.6398 47.6602L66.6398 63.1602L53.2164 70.9102L39.793 63.1602L39.793 47.6602Z" fill="#F2F2F2"/>
    <rect x="6.5" y="31.3253" width="6" height="56" transform="rotate(-60 6.5 31.3253)" fill="#F2F2F2"/>
    <path d="M14.8481 22.866L20.0442 19.866L31.5442 39.7846L26.3481 42.7846L14.8481 22.866Z" fill="#F2F2F2"/>
    <rect x="6.23138" y="43.8719" width="6" height="23" transform="rotate(-90 6.23138 43.8719)" fill="#F2F2F2"/>
    <path d="M72.5967 46.1913L72.5967 61.6913L59.1733 69.4413L45.7499 61.6913L45.7499 46.1913L59.1733 38.4413L72.5967 46.1913Z" fill="#F2F2F2"/>
    <rect x="103.39" y="25.5262" width="6" height="56" transform="rotate(60 103.39 25.5262)" fill="#F2F2F2"/>
    <path d="M106.542 36.9856V42.9856H83.5416V36.9856L106.542 36.9856Z" fill="#F2F2F2"/>
    <rect x="92.6583" y="19.0204" width="6" height="23" transform="rotate(30 92.6583 19.0204)" fill="#F2F2F2"/>
    <path d="M72.4448 65.1913L59.0214 72.9413L45.598 65.1913L45.598 49.6913L59.0214 41.9413L72.4448 49.6913L72.4448 65.1913Z" fill="#F2F2F2"/>
    <rect x="105.738" y="81.5263" width="6" height="56" transform="rotate(120 105.738 81.5263)" fill="#F2F2F2"/>
    <path d="M97.3897 89.9856L92.1936 92.9856L80.6936 73.067L85.8897 70.067L97.3897 89.9856Z" fill="#F2F2F2"/>
    <rect x="106.006" y="68.9796" width="6" height="23" transform="rotate(90 106.006 68.9796)" fill="#F2F2F2"/>
    <path d="M39.6411 65.6603L39.6411 50.1603L53.0645 42.4103L66.4879 50.1603L66.4879 65.6603L53.0645 73.4103L39.6411 65.6603Z" fill="#F2F2F2"/>
    <rect x="8.84814" y="86.3253" width="6" height="56" transform="rotate(-120 8.84814 86.3253)" fill="#F2F2F2"/>
    <path d="M5.69623 74.866V68.866H28.6962V74.866L5.69623 74.866Z" fill="#F2F2F2"/>
    <rect x="19.5795" y="92.8313" width="6" height="23" transform="rotate(-150 19.5795 92.8313)" fill="#F2F2F2"/>
    </svg>
    `,
    clouds: `
    <svg width="114" height="76" viewBox="0 0 114 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.5 65H40V64.993C39.8339 64.9977 39.6672 65 39.5 65C29.835 65 22 57.165 22 47.5C22 37.9469 29.6547 30.1816 39.1651 30.0031C39.056 29.0171 39 28.0151 39 27C39 12.0883 51.0883 0 66 0C77.005 0 86.4721 6.58398 90.6774 16.0278C103.662 16.6421 114 27.3637 114 40.5C114 53.8639 103.3 64.7288 90 64.995V65H89.5Z" fill="#F2F2F2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 76H18V75.993C17.8339 75.9977 17.6672 76 17.5 76C7.83502 76 0 68.165 0 58.5C0 48.9469 7.65469 41.1816 17.1651 41.0031C17.056 40.0171 17 39.0151 17 38C17 23.0883 29.0883 11 44 11C55.005 11 64.4721 17.584 68.6774 27.0278C81.6616 27.6421 92 38.3637 92 51.5C92 64.8639 81.3002 75.7288 68 75.995V76H67.5Z" fill="white"/>
    </svg>
    `,
    rain: `
    <svg width="114" height="108" viewBox="0 0 114 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.5 65H40V64.993C39.8339 64.9977 39.6672 65 39.5 65C29.835 65 22 57.165 22 47.5C22 37.9469 29.6547 30.1816 39.1651 30.0031C39.056 29.0171 39 28.0151 39 27C39 12.0883 51.0883 0 66 0C77.005 0 86.4721 6.58398 90.6774 16.0278C103.662 16.6421 114 27.3637 114 40.5C114 53.8639 103.3 64.7288 90 64.995V65H89.5Z" fill="#F2F2F2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 76H18V75.993C17.8339 75.9977 17.6672 76 17.5 76C7.83502 76 0 68.165 0 58.5C0 48.9469 7.65469 41.1816 17.1651 41.0031C17.056 40.0171 17 39.0151 17 38C17 23.0883 29.0883 11 44 11C55.005 11 64.4721 17.584 68.6774 27.0278C81.6616 27.6421 92 38.3637 92 51.5C92 64.8639 81.3002 75.7288 68 75.995V76H67.5Z" fill="white"/>
    <line y1="-1.5" x2="14.4155" y2="-1.5" transform="matrix(0.498097 -0.867121 0.714485 0.699651 20 97.0625)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="14.4155" y2="-1.5" transform="matrix(0.498097 -0.867121 0.714485 0.699651 52.3115 95.5)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 35.5573 108)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 67.8688 106.438)" stroke="#5AC7FB" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 84.623 100.188)" stroke="#5AC7FB" stroke-width="3"/>
    </svg>
    `,
    atmosphere: `
    <svg width="99" height="70" viewBox="0 0 99 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="29" width="36" height="6" fill="white"/>
    <rect x="13" y="14" width="59" height="6" fill="white"/>
    <rect x="29" y="26" width="70" height="6" fill="white"/>
    <rect y="40" width="70" height="6" fill="white"/>
    <rect x="22" y="52" width="61" height="6" fill="white"/>
    <rect x="35" y="64" width="35" height="6" fill="white"/>
    </svg>
    `,
    drizzle: `
    <svg width="76" height="28" viewBox="0 0 76 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="-1.5" x2="14.4155" y2="-1.5" transform="matrix(0.498097 -0.867121 0.714485 0.699651 3 17.0625)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="14.4155" y2="-1.5" transform="matrix(0.498097 -0.867121 0.714485 0.699651 35.3115 15.5)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 18.5573 28)" stroke="#56CCF2" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 50.8688 26.4375)" stroke="#5AC7FB" stroke-width="3"/>
    <line y1="-1.5" x2="16.3685" y2="-1.5" transform="matrix(0.511778 -0.859118 0.701646 0.712526 67.623 20.1875)" stroke="#5AC7FB" stroke-width="3"/>
    </svg>
    `,
    thunderstorm: `
    <svg width="114" height="101" viewBox="0 0 114 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.5 65H40V64.993C39.8339 64.9977 39.6672 65 39.5 65C29.835 65 22 57.165 22 47.5C22 37.9469 29.6547 30.1816 39.1651 30.0031C39.056 29.0171 39 28.0151 39 27C39 12.0883 51.0883 0 66 0C77.005 0 86.4721 6.58398 90.6774 16.0278C103.662 16.6421 114 27.3637 114 40.5C114 53.8639 103.3 64.7288 90 64.995V65H89.5Z" fill="#F2F2F2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 76H18V75.993C17.8339 75.9977 17.6672 76 17.5 76C7.83502 76 0 68.165 0 58.5C0 48.9469 7.65469 41.1816 17.1651 41.0031C17.056 40.0171 17 39.0151 17 38C17 23.0883 29.0883 11 44 11C55.005 11 64.4721 17.584 68.6774 27.0278C81.6616 27.6421 92 38.3637 92 51.5C92 64.8639 81.3002 75.7288 68 75.995V76H67.5Z" fill="white"/>
    <path d="M37.0656 54H52L32 83H23L37.0656 54Z" fill="#F2994A"/>
    <path d="M36.0656 72H51L26.5 101H22L36.0656 72Z" fill="#F2994A"/>
    </svg>
    `
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (svg);

/***/ }),

/***/ "./js/modules/weather.js":
/*!*******************************!*\
  !*** ./js/modules/weather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ "./js/modules/svg.js");


class Weather {
    constructor(time, state, temp, stateID, parent = '.weather__list') {
        this.time = this.convertTime(time);
        this.state = state;
        this.temp = this.convertTemp(temp);
        this.parent = parent;
        this.statePicture = this.selectPicture(stateID);

    }

    convertTime(time) {
        const timestamp = time;
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
    }

    convertTemp(temp) {
        return Math.round(temp - 273.15);
    }

    selectPicture(stateID) {
        const id = (stateID + '');
        switch(+id[0]) {
            case 2: return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].thunderstorm;
            case 3: return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].drizzle;
            case 5: return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].rain;
            case 6: return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].snow;
            case 7: return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].atmosphere;
            case 8: 
                if (stateID == 800) return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].clear;
                else return _svg__WEBPACK_IMPORTED_MODULE_0__["default"].clouds;
        }
    }

    render() {
        const parent = document.querySelector(this.parent);
        const element = document.createElement('li');
        element.classList.add('weather__item');

        element.innerHTML = `
        <span class="weather__date">${this.time}</span>
        <i class="weather__icon">${this.statePicture}</i>
        <i>${this.state}</i>
        <span class="weather__temp">${this.temp}&#176</span>`;

        parent.append(element);
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/core.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/config */ "./js/modules/config.js");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather */ "./js/modules/weather.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/header */ "./js/modules/header.js");
/* harmony import */ var _modules_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/props */ "./js/modules/props.js");
/* harmony import */ var _modules_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetch */ "./js/modules/fetch.js");






document.addEventListener('DOMContentLoaded', () => {
   
    
    (0,_modules_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])(_modules_config__WEBPACK_IMPORTED_MODULE_0__.url).then(data => {
        console.log(data)
        let temp = data.main.temp,
            city = data.name,
            state = data.weather[0].description,
            stateID = data.weather[0].id,
            date = data.dt,
            feelsLike = data.main.feels_like,
            pressure = data.main.pressure,
            humidity = data.main.humidity,
            wind = data.wind.speed;

        new _modules_header__WEBPACK_IMPORTED_MODULE_2__["default"](city, state, temp, _modules_config__WEBPACK_IMPORTED_MODULE_0__.config).render();
        new _modules_props__WEBPACK_IMPORTED_MODULE_3__["default"](feelsLike, pressure, humidity, wind, _modules_config__WEBPACK_IMPORTED_MODULE_0__.config).render();
        for(let i = 0; i < 5; i++) {
            new _modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"](date, state, temp, stateID).render();
        }
        
    });

    // function selectPicture(stateID) {
    //     const id = (stateID + '');
    //     switch(id[0]) {
    //         case 2: return svg.thunderstorm;
    //         case 3: return svg.drizzle;
    //         case 5: return svg.rain;
    //         case 6: return svg.snow;
    //         case 7: return svg.atmosphere;
    //         case 8: 
    //             if (stateID == 800) return 1233;
    //             else return svg.clouds;
    //     }
    // }

    // console.log(selectPicture(800))
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map