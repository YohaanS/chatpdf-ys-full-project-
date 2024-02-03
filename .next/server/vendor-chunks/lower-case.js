"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),\n/* harmony export */   lowerCase: () => (/* binding */ lowerCase)\n/* harmony export */ });\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */ var SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"i̇\",\n            J: \"j̇\",\n            Į: \"į̇\",\n            Ì: \"i̇̀\",\n            Í: \"i̇́\",\n            Ĩ: \"i̇̃\"\n        }\n    }\n};\n/**\n * Localized lower case.\n */ function localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {\n        return lang.map[m];\n    }));\n    return lowerCase(str);\n}\n/**\n * Lower case as a function.\n */ function lowerCase(str) {\n    return str.toLowerCase();\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztDQUVDLEdBQ0QsSUFBSUEsbUJBQW1CO0lBQ25CQyxJQUFJO1FBQ0FDLFFBQVE7UUFDUkMsS0FBSztZQUNEQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsSUFBSTtRQUNSO0lBQ0o7SUFDQUMsSUFBSTtRQUNBTCxRQUFRO1FBQ1JDLEtBQUs7WUFDREMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLElBQUk7UUFDUjtJQUNKO0lBQ0FFLElBQUk7UUFDQU4sUUFBUTtRQUNSQyxLQUFLO1lBQ0RFLEdBQUc7WUFDSEksR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxHQUFHO1FBQ1A7SUFDSjtBQUNKO0FBQ0E7O0NBRUMsR0FDTSxTQUFTQyxnQkFBZ0JDLEdBQUcsRUFBRUMsTUFBTTtJQUN2QyxJQUFJQyxPQUFPakIsZ0JBQWdCLENBQUNnQixPQUFPRSxXQUFXLEdBQUc7SUFDakQsSUFBSUQsTUFDQSxPQUFPRSxVQUFVSixJQUFJSyxPQUFPLENBQUNILEtBQUtmLE1BQU0sRUFBRSxTQUFVbUIsQ0FBQztRQUFJLE9BQU9KLEtBQUtkLEdBQUcsQ0FBQ2tCLEVBQUU7SUFBRTtJQUNqRixPQUFPRixVQUFVSjtBQUNyQjtBQUNBOztDQUVDLEdBQ00sU0FBU0ksVUFBVUosR0FBRztJQUN6QixPQUFPQSxJQUFJRyxXQUFXO0FBQzFCLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHBkZi15cy8uL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzPzkwNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTb3VyY2U6IGZ0cDovL2Z0cC51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvU3BlY2lhbENhc2luZy50eHRcbiAqL1xudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XG4gICAgdHI6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMHxcXHUwMDQ5fFxcdTAwNDlcXHUwMzA3L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYXo6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAwNDl8XFx1MDA0QXxcXHUwMTJFfFxcdTAwQ0N8XFx1MDBDRHxcXHUwMTI4L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgSTogXCJcXHUwMDY5XFx1MDMwN1wiLFxuICAgICAgICAgICAgSjogXCJcXHUwMDZBXFx1MDMwN1wiLFxuICAgICAgICAgICAgxK46IFwiXFx1MDEyRlxcdTAzMDdcIixcbiAgICAgICAgICAgIMOMOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMFwiLFxuICAgICAgICAgICAgw406IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAxXCIsXG4gICAgICAgICAgICDEqDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDNcIixcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8qKlxuICogTG9jYWxpemVkIGxvd2VyIGNhc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVMb3dlckNhc2Uoc3RyLCBsb2NhbGUpIHtcbiAgICB2YXIgbGFuZyA9IFNVUFBPUlRFRF9MT0NBTEVbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmIChsYW5nKVxuICAgICAgICByZXR1cm4gbG93ZXJDYXNlKHN0ci5yZXBsYWNlKGxhbmcucmVnZXhwLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gbGFuZy5tYXBbbV07IH0pKTtcbiAgICByZXR1cm4gbG93ZXJDYXNlKHN0cik7XG59XG4vKipcbiAqIExvd2VyIGNhc2UgYXMgYSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvd2VyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiU1VQUE9SVEVEX0xPQ0FMRSIsInRyIiwicmVnZXhwIiwibWFwIiwixLAiLCJJIiwiScyHIiwiYXoiLCJsdCIsIkoiLCLEriIsIsOMIiwiw40iLCLEqCIsImxvY2FsZUxvd2VyQ2FzZSIsInN0ciIsImxvY2FsZSIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZSIsInJlcGxhY2UiLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist.es2015/index.js\n");

/***/ })

};
;