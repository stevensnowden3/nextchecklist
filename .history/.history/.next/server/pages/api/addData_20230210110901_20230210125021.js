"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addData";
exports.ids = ["pages/api/addData"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./models/db.js":
/*!**********************!*\
  !*** ./models/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectionPromise = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n  host: 'localhost',\n  user: 'root',\n  password: '',\n  database: 'warehouse'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectionPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0Qsc0VBQUEsQ0FBdUI7RUFDL0NHLElBQUksRUFBRSxXQUR5QztFQUUvQ0MsSUFBSSxFQUFFLE1BRnlDO0VBRy9DQyxRQUFRLEVBQUUsRUFIcUM7RUFJL0NDLFFBQVEsRUFBRTtBQUpxQyxDQUF2QixDQUExQjtBQU9BLGlFQUFlTCxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9tb2RlbHMvZGIuanM/NmUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvblByb21pc2UgPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICBob3N0OiAnbG9jYWxob3N0JyxcclxuICB1c2VyOiAncm9vdCcsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIGRhdGFiYXNlOiAnd2FyZWhvdXNlJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb25Qcm9taXNlO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJjb25uZWN0aW9uUHJvbWlzZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/addData.js":
/*!******************************!*\
  !*** ./pages/api/addData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/db */ \"(api)/./models/db.js\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.withApiAuthRequired)(async (req, res) => {\n  const session = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.getSession)(req, res);\n\n  try {\n    const connection = await _models_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    await connection.connect(); // Insert data into the database\n\n    try {\n      console.log(req.body.delivery_date);\n      console.log(req.body.location.name);\n      const [result] = await connection.execute('INSERT INTO checklisttest (material_name,supplier_name,method_of_inspection,inspection_technique,location,contact_number, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date, delivery_date, remark,created_by) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?,? )', [req.body.material_name.name, req.body.supplier_name, req.body.method_of_inspection.name, req.body.inspection_technique.name, req.body.location.name, req.body.contact_number, req.body.total_inspected, req.body.total_pass, req.body.total_failure, req.body.delivery_note, req.body.sample_inspected, //formally invoiceNo\n      req.body.inspection_date, req.body.delivery_date, req.body.remark, req.body.created_by]);\n\n      if (result) {\n        res.status(200).json({\n          success: true,\n          message: 'Checklist Saved!',\n          result\n        });\n        return;\n      } else {\n        res.status(500).json({\n          success: false,\n          message: 'Error adding data to the database'\n        });\n      }\n    } catch (err) {\n      console.log(delivery_date);\n      console.log('trying to connect');\n      res.status(500).json({\n        success: false,\n        error: 'Failed to execute query'\n      });\n      console.log(err);\n      return;\n    }\n\n    res.status(200).json({\n      success: true,\n      message: 'Checklist Saved!',\n      result\n    });\n    console.log('Success');\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      success: false,\n      error\n    });\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsT0FBTyxFQUFFLEtBQVg7TUFBa0JHO0lBQWxCLENBQXJCO0VBQ0Q7QUFDRixDQWxEaUMsQ0FBbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvYXBpL2FkZERhdGEuanM/NzFmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdGlvblByb21pc2UgZnJvbSAnLi4vLi4vbW9kZWxzL2RiJztcclxuaW1wb3J0IHsgd2l0aEFwaUF1dGhSZXF1aXJlZCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaUF1dGhSZXF1aXJlZChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBjb25uZWN0aW9uUHJvbWlzZTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uY29ubmVjdCgpO1xyXG5cclxuICAgIC8vIEluc2VydCBkYXRhIGludG8gdGhlIGRhdGFiYXNlXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5kZWxpdmVyeV9kYXRlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkubG9jYXRpb24ubmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgICAnSU5TRVJUIElOVE8gY2hlY2tsaXN0dGVzdCAobWF0ZXJpYWxfbmFtZSxzdXBwbGllcl9uYW1lLG1ldGhvZF9vZl9pbnNwZWN0aW9uLGluc3BlY3Rpb25fdGVjaG5pcXVlLGxvY2F0aW9uLGNvbnRhY3RfbnVtYmVyLCB0b3RhbF9pbnNwZWN0ZWQsIHRvdGFsX3Bhc3MsIHRvdGFsX2ZhaWx1cmUsIGRlbGl2ZXJ5X25vdGUsc2FtcGxlX2luc3BlY3RlZCwgaW5zcGVjdGlvbl9kYXRlLCBkZWxpdmVyeV9kYXRlLCByZW1hcmssY3JlYXRlZF9ieSkgVkFMVUVTICg/LCA/LD8sPyw/LD8sPyw/LD8sPyw/LD8sPyw/LD8gKScsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgcmVxLmJvZHkubWF0ZXJpYWxfbmFtZS5uYW1lLFxyXG4gICAgICAgICAgcmVxLmJvZHkuc3VwcGxpZXJfbmFtZSxcclxuICAgICAgICAgIHJlcS5ib2R5Lm1ldGhvZF9vZl9pbnNwZWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICByZXEuYm9keS5pbnNwZWN0aW9uX3RlY2huaXF1ZS5uYW1lLFxyXG4gICAgICAgICAgcmVxLmJvZHkubG9jYXRpb24ubmFtZSxcclxuICAgICAgICAgIHJlcS5ib2R5LmNvbnRhY3RfbnVtYmVyLFxyXG4gICAgICAgICAgcmVxLmJvZHkudG90YWxfaW5zcGVjdGVkLFxyXG4gICAgICAgICAgcmVxLmJvZHkudG90YWxfcGFzcyxcclxuICAgICAgICAgIHJlcS5ib2R5LnRvdGFsX2ZhaWx1cmUsXHJcbiAgICAgICAgICByZXEuYm9keS5kZWxpdmVyeV9ub3RlLFxyXG4gICAgICAgICAgcmVxLmJvZHkuc2FtcGxlX2luc3BlY3RlZCwgLy9mb3JtYWxseSBpbnZvaWNlTm9cclxuICAgICAgICAgIHJlcS5ib2R5Lmluc3BlY3Rpb25fZGF0ZSxcclxuICAgICAgICAgIHJlcS5ib2R5LmRlbGl2ZXJ5X2RhdGUsXHJcbiAgICAgICAgICByZXEuYm9keS5yZW1hcmssXHJcbiAgICAgICAgICByZXEuYm9keS5jcmVhdGVkX2J5XHJcbiAgICAgICAgXVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQ2hlY2tsaXN0IFNhdmVkIScsIHJlc3VsdCB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm9yIGFkZGluZyBkYXRhIHRvIHRoZSBkYXRhYmFzZScgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkZWxpdmVyeV9kYXRlKTtcclxuICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBjb25uZWN0Jyk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGV4ZWN1dGUgcXVlcnknIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDaGVja2xpc3QgU2F2ZWQhJywgcmVzdWx0IH0pO1xyXG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MnKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfSk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3Rpb25Qcm9taXNlIiwid2l0aEFwaUF1dGhSZXF1aXJlZCIsImdldFNlc3Npb24iLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImRlbGl2ZXJ5X2RhdGUiLCJsb2NhdGlvbiIsIm5hbWUiLCJyZXN1bHQiLCJleGVjdXRlIiwibWF0ZXJpYWxfbmFtZSIsInN1cHBsaWVyX25hbWUiLCJtZXRob2Rfb2ZfaW5zcGVjdGlvbiIsImluc3BlY3Rpb25fdGVjaG5pcXVlIiwiY29udGFjdF9udW1iZXIiLCJ0b3RhbF9pbnNwZWN0ZWQiLCJ0b3RhbF9wYXNzIiwidG90YWxfZmFpbHVyZSIsImRlbGl2ZXJ5X25vdGUiLCJzYW1wbGVfaW5zcGVjdGVkIiwiaW5zcGVjdGlvbl9kYXRlIiwicmVtYXJrIiwiY3JlYXRlZF9ieSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addData.js"));
module.exports = __webpack_exports__;

})();