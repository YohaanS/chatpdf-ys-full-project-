"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/no-case";
exports.ids = ["vendor-chunks/no-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noCase: () => (/* binding */ noCase)\n/* harmony export */ });\n/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ \"(rsc)/./node_modules/lower-case/dist.es2015/index.js\");\n\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [\n    /([a-z0-9])([A-Z])/g,\n    /([A-Z])([A-Z][a-z])/g\n];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */ function noCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\x00$2\"), stripRegexp, \"\\x00\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while(result.charAt(start) === \"\\x00\")start++;\n    while(result.charAt(end - 1) === \"\\x00\")end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\x00\").map(transform).join(delimiter);\n}\n/**\n * Replace `re` in the input string with the replacement value.\n */ function replace(input, re, value) {\n    if (re instanceof RegExp) return input.replace(re, value);\n    return re.reduce(function(input, re) {\n        return input.replace(re, value);\n    }, input);\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUN2QyxvRkFBb0Y7QUFDcEYsSUFBSUMsdUJBQXVCO0lBQUM7SUFBc0I7Q0FBdUI7QUFDekUsa0NBQWtDO0FBQ2xDLElBQUlDLHVCQUF1QjtBQUMzQjs7Q0FFQyxHQUNNLFNBQVNDLE9BQU9DLEtBQUssRUFBRUMsT0FBTztJQUNqQyxJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxJQUFJQyxLQUFLRCxRQUFRRSxXQUFXLEVBQUVBLGNBQWNELE9BQU8sS0FBSyxJQUFJTCx1QkFBdUJLLElBQUlFLEtBQUtILFFBQVFJLFdBQVcsRUFBRUEsY0FBY0QsT0FBTyxLQUFLLElBQUlOLHVCQUF1Qk0sSUFBSUUsS0FBS0wsUUFBUU0sU0FBUyxFQUFFQSxZQUFZRCxPQUFPLEtBQUssSUFBSVYsaURBQVNBLEdBQUdVLElBQUlFLEtBQUtQLFFBQVFRLFNBQVMsRUFBRUEsWUFBWUQsT0FBTyxLQUFLLElBQUksTUFBTUE7SUFDeFMsSUFBSUUsU0FBU0MsUUFBUUEsUUFBUVgsT0FBT0csYUFBYSxhQUFXRSxhQUFhO0lBQ3pFLElBQUlPLFFBQVE7SUFDWixJQUFJQyxNQUFNSCxPQUFPSSxNQUFNO0lBQ3ZCLG9EQUFvRDtJQUNwRCxNQUFPSixPQUFPSyxNQUFNLENBQUNILFdBQVcsT0FDNUJBO0lBQ0osTUFBT0YsT0FBT0ssTUFBTSxDQUFDRixNQUFNLE9BQU8sT0FDOUJBO0lBQ0osc0NBQXNDO0lBQ3RDLE9BQU9ILE9BQU9NLEtBQUssQ0FBQ0osT0FBT0MsS0FBS0ksS0FBSyxDQUFDLFFBQU1DLEdBQUcsQ0FBQ1gsV0FBV1ksSUFBSSxDQUFDVjtBQUNwRTtBQUNBOztDQUVDLEdBQ0QsU0FBU0UsUUFBUVgsS0FBSyxFQUFFb0IsRUFBRSxFQUFFQyxLQUFLO0lBQzdCLElBQUlELGNBQWNFLFFBQ2QsT0FBT3RCLE1BQU1XLE9BQU8sQ0FBQ1MsSUFBSUM7SUFDN0IsT0FBT0QsR0FBR0csTUFBTSxDQUFDLFNBQVV2QixLQUFLLEVBQUVvQixFQUFFO1FBQUksT0FBT3BCLE1BQU1XLE9BQU8sQ0FBQ1MsSUFBSUM7SUFBUSxHQUFHckI7QUFDaEYsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0cGRmLXlzLy4vbm9kZV9tb2R1bGVzL25vLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/OTY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tIFwibG93ZXItY2FzZVwiO1xuLy8gU3VwcG9ydCBjYW1lbCBjYXNlIChcImNhbWVsQ2FzZVwiIC0+IFwiY2FtZWwgQ2FzZVwiIGFuZCBcIkNBTUVMQ2FzZVwiIC0+IFwiQ0FNRUwgQ2FzZVwiKS5cbnZhciBERUZBVUxUX1NQTElUX1JFR0VYUCA9IFsvKFthLXowLTldKShbQS1aXSkvZywgLyhbQS1aXSkoW0EtWl1bYS16XSkvZ107XG4vLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMuXG52YXIgREVGQVVMVF9TVFJJUF9SRUdFWFAgPSAvW15BLVowLTldKy9naTtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgaW50byBzb21ldGhpbmcgb3RoZXIgbGlicmFyaWVzIGNhbiBtYW5pcHVsYXRlIGVhc2llci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zcGxpdFJlZ2V4cCwgc3BsaXRSZWdleHAgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVF9TUExJVF9SRUdFWFAgOiBfYSwgX2IgPSBvcHRpb25zLnN0cmlwUmVnZXhwLCBzdHJpcFJlZ2V4cCA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxUX1NUUklQX1JFR0VYUCA6IF9iLCBfYyA9IG9wdGlvbnMudHJhbnNmb3JtLCB0cmFuc2Zvcm0gPSBfYyA9PT0gdm9pZCAwID8gbG93ZXJDYXNlIDogX2MsIF9kID0gb3B0aW9ucy5kZWxpbWl0ZXIsIGRlbGltaXRlciA9IF9kID09PSB2b2lkIDAgPyBcIiBcIiA6IF9kO1xuICAgIHZhciByZXN1bHQgPSByZXBsYWNlKHJlcGxhY2UoaW5wdXQsIHNwbGl0UmVnZXhwLCBcIiQxXFwwJDJcIiksIHN0cmlwUmVnZXhwLCBcIlxcMFwiKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSByZXN1bHQubGVuZ3RoO1xuICAgIC8vIFRyaW0gdGhlIGRlbGltaXRlciBmcm9tIGFyb3VuZCB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChzdGFydCkgPT09IFwiXFwwXCIpXG4gICAgICAgIHN0YXJ0Kys7XG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoZW5kIC0gMSkgPT09IFwiXFwwXCIpXG4gICAgICAgIGVuZC0tO1xuICAgIC8vIFRyYW5zZm9ybSBlYWNoIHRva2VuIGluZGVwZW5kZW50bHkuXG4gICAgcmV0dXJuIHJlc3VsdC5zbGljZShzdGFydCwgZW5kKS5zcGxpdChcIlxcMFwiKS5tYXAodHJhbnNmb3JtKS5qb2luKGRlbGltaXRlcik7XG59XG4vKipcbiAqIFJlcGxhY2UgYHJlYCBpbiB0aGUgaW5wdXQgc3RyaW5nIHdpdGggdGhlIHJlcGxhY2VtZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiByZXBsYWNlKGlucHV0LCByZSwgdmFsdWUpIHtcbiAgICBpZiAocmUgaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHJlLnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHJlKSB7IHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7IH0sIGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJsb3dlckNhc2UiLCJERUZBVUxUX1NQTElUX1JFR0VYUCIsIkRFRkFVTFRfU1RSSVBfUkVHRVhQIiwibm9DYXNlIiwiaW5wdXQiLCJvcHRpb25zIiwiX2EiLCJzcGxpdFJlZ2V4cCIsIl9iIiwic3RyaXBSZWdleHAiLCJfYyIsInRyYW5zZm9ybSIsIl9kIiwiZGVsaW1pdGVyIiwicmVzdWx0IiwicmVwbGFjZSIsInN0YXJ0IiwiZW5kIiwibGVuZ3RoIiwiY2hhckF0Iiwic2xpY2UiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJyZSIsInZhbHVlIiwiUmVnRXhwIiwicmVkdWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/no-case/dist.es2015/index.js\n");

/***/ })

};
;