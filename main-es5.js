(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top:100px;\" class=\"splash-container\">\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\n    <p>{{ error }}</p>\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"message\">\n    <p>{{ message }}</p>\n  </div>\n  <div *ngIf=\"isLoading\" style=\"text-align: center;margin-top: 150px;\">\n    <app-loading-spinner></app-loading-spinner>\n  </div>\n  <div class=\"card\" *ngIf=\"!isLoading\">\n    <div class=\"card-header text-center\"><p id=\"register\" class=\"splash-description\">{{isLoginMode ? 'LOGIN' : 'REGISTER'}}</p></div>\n    <div class=\"card-body\">\n      <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\">\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-lg\"\n                 id=\"username\"\n                 type=\"text\"\n                 placeholder=\"Username\"\n                 autocomplete=\"off\"\n                 name=\"username\"\n                 ngModel\n                 required\n                 #username=\"ngModel\">\n          <span *ngIf=\"!username.valid && username.touched\">\n            Please enter a valid username\n          </span>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!isLoginMode\">\n          <input class=\"form-control form-control-lg\"\n                 id=\"email\"\n                 type=\"text\"\n                 placeholder=\"Email\"\n                 autocomplete=\"off\"\n                 required\n                 email\n                 ngModel\n                 name=\"email\"\n                 #email=\"ngModel\">\n          <span *ngIf=\"!email.valid && email.touched\">\n            Please enter a valid Email\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-lg\"\n                 id=\"password\"\n                 type=\"password\"\n                 placeholder=\"Password\"\n                 required\n                 ngModel\n                 name=\"password\"\n                 #password=\"ngModel\">\n          <span *ngIf=\"!password.valid && password.touched\">\n            Password field is required.\n          </span>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!isLoginMode\">\n          <input class=\"form-control form-control-lg\"\n                 id=\"confirm-password\"\n                 type=\"password\"\n                 placeholder=\"Confirm Password\"\n                 required\n                 ngModel\n                 name=\"confirmPassword\"\n                 #confirmPassword=\"ngModel\">\n          <span *ngIf=\"!confirmPassword.valid && confirmPassword.touched\">\n            Confirm Password field is required.\n          </span>\n        </div>\n        <div class=\"form-group\" *ngIf=\"isLoginMode\">\n          <label class=\"custom-control custom-checkbox\">\n            <input class=\"custom-control-input\" type=\"checkbox\"><p class=\"custom-control-label\">Remember Me</p>\n          </label>\n        </div>\n        <br>\n        <div style=\"text-align: center;\">\n          <button type=\"submit\" [disabled]=\"!authForm.valid\" class=\"btn btn-primary\" style=\"color: white;\">{{isLoginMode ? 'Login' : 'SignUp'}}</button> |\n          <button class=\"btn btn-default\" (click)=\"onSwitchMode()\" type=\"button\">Switch to {{isLoginMode ? 'Sign Up' : 'Login'}}</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n  <a *ngIf=\"!isLoading\" [routerLink]=\"'/'\" class=\"link\" style=\"margin-left: 120px;\">Back to Home</a>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- ============================================================== -->\n<!-- main wrapper -->\n<!-- ============================================================== -->\n<div class=\"dashboard-main-wrapper\">\n  <!-- ============================================================== -->\n  <!-- navbar -->\n  <!-- ============================================================== -->\n  <div class=\"dashboard-header\">\n    <nav class=\"navbar navbar-expand-lg bg-white fixed-top\">\n      <a class=\"navbar-brand\" href=\"index.html\">EDOSM</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto navbar-right-top\">\n          <li class=\"nav-item dropdown nav-user\">\n            <a class=\"nav-link nav-user-img\" style=\"cursor: pointer;\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"\" alt=\"user image\" class=\"user-avatar-md rounded-circle\"></a>\n            <div class=\"dropdown-menu dropdown-menu-right nav-user-dropdown\" aria-labelledby=\"navbarDropdownMenuLink2\">\n              <div class=\"nav-user-info\">\n                <h5 class=\"mb-0 text-white nav-user-name\">Ali Raza</h5>\n                <span class=\"status\"></span><span class=\"ml-2\">Available</span>\n              </div>\n              <a class=\"dropdown-item\"><i class=\"fas fa-user mr-2\"></i>Account</a>\n              <a class=\"dropdown-item\"><i class=\"fas fa-power-off mr-2\"></i>Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <a style=\"margin-right: 15px;cursor: pointer;\" (click)=\"onLogout()\">Logout</a>\n    </nav>\n  </div>\n  <!-- ============================================================== -->\n  <!-- end navbar -->\n  <!-- ============================================================== -->\n  <!-- ============================================================== -->\n  <!-- left sidebar -->\n  <!-- ============================================================== -->\n  <div class=\"nav-left-sidebar sidebar-dark\">\n    <div class=\"menu-list\">\n      <nav class=\"navbar navbar-expand-lg navbar-light\">\n        <a class=\"d-xl-none d-lg-none\" href=\"#\">Dashboard</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav flex-column\">\n            <li class=\"nav-divider\">\n              Menu\n            </li>\n            <li class=\"nav-item \">\n              <a class=\"nav-link active\" href=\"index.html\" ><i class=\"fa fa-fw fa-user-circle\"></i>Dashboard </a>\n\n            </li>\n            <li class=\"nav-item \">\n              <a class=\"nav-link\" href=\"#\" ><i class=\"fa fa-fw fa-users\"></i>Manage Employees</a>\n\n            </li>\n            <li class=\"nav-item \">\n              <a class=\"nav-link \" href=\"images.html\" ><i class=\"fa fa-fw fa-images\" aria-hidden=\"true\"></i>Image Analysis</a>\n            </li>\n\n            <!-- <li class=\"nav-divider\">\n                Features\n            </li> -->\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n  <!-- ============================================================== -->\n  <!-- end left sidebar -->\n  <!-- ============================================================== -->\n  <!-- ============================================================== -->\n  <!-- wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-ecommerce\">\n      <div class=\"container-fluid dashboard-content \">\n        <!-- ============================================================== -->\n        <!-- pageheader  -->\n        <!-- ============================================================== -->\n        <div class=\"row\">\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n            <div class=\"page-header\">\n              <h2 class=\"pageheader-title\">DASHBOARD</h2>\n            </div>\n          </div>\n        </div>\n        <!-- ============================================================== -->\n        <!-- end pageheader  -->\n        <!-- ============================================================== -->\n        <div class=\"\">\n          <div class=\"row\">\n            <div class=\"container-fluid\">\n              <div class=\"card\">\n                <h5 class=\"card-header\">Employees</h5>\n                <div class=\"card-body p-0\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead class=\"bg-light\">\n                      <tr class=\"border-0\">\n                        <th class=\"border-0\">#</th>\n                        <th class=\"border-0\">Image</th>\n                        <th class=\"border-0\">Name</th>\n                        <th class=\"border-0\">Id</th>\n                        <th class=\"border-0\">Region / Area</th>\n                        <th class=\"border-0\">Status</th>\n                        <th></th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr>\n                        <td>1</td>\n                        <td>\n                          <div class=\"m-r-10\"><img src=\"\" alt=\"user\" class=\"rounded\" width=\"45\"></div>\n                        </td>\n                        <td>Abdullah</td>\n                        <td>1 </td>\n                        <td>2A</td>\n\n                        <td><span class=\"badge-dot badge-brand mr-1\"></span>Online </td>\n                      </tr>\n                      <tr>\n                        <td>2</td>\n                        <td>\n                          <div class=\"m-r-10\"><img src=\"\" alt=\"user\" class=\"rounded\" width=\"45\"></div>\n                        </td>\n                        <td>Arsalan </td>\n                        <td>2 </td>\n                        <td>1A</td>\n\n                        <td><span class=\"badge-dot badge-danger mr-1\"></span>Offline</td>\n                      </tr>\n                      <tr>\n                        <td>3</td>\n                        <td>\n                          <div class=\"m-r-10\"><img src=\"\" alt=\"user\" class=\"rounded\" width=\"45\"></div>\n                        </td>\n                        <td>Azeem</td>\n                        <td>3 </td>\n                        <td>2C</td>\n\n                        <td><span class=\"badge-dot badge-brand mr-1\"></span>Online </td>\n                      </tr>\n                      <tr>\n                        <td>4</td>\n                        <td>\n                          <div class=\"m-r-10\"><img src=\"\" alt=\"user\" class=\"rounded\" width=\"45\"></div>\n                        </td>\n                        <td>Ahmad</td>\n                        <td>4 </td>\n                        <td>3C</td>\n\n                        <td><span class=\"badge-dot badge-danger mr-1\"></span>Offline </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"9\"><a href=\"#\" class=\"btn btn-outline-light float-right\">View Details</a></td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end recent orders  -->\n\n            <!-- ============================================================== -->\n            <!-- end customer acquistion  -->\n            <!-- ============================================================== -->\n          </div>\n\n\n          <div class=\"row\">\n            <!-- ============================================================== -->\n            <!-- total revenue  -->\n            <!-- ============================================================== -->\n\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- category | Region wise Success  -->\n            <!-- ============================================================== -->\n            <div class=\"col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12\">\n              <div class=\"card\">\n                <h5 class=\"card-header\">Area / Region | Health</h5>\n                <div class=\"card-body\">\n                  <div id=\"c3chart_category\" style=\"height: 420px;\"></div>\n                </div>\n              </div>\n            </div>\n            <!-- ============================================================== -->\n            <!-- end category revenue  -->\n            <!-- ============================================================== -->\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <div class=\"footer\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n            Copyright © 2019 EDOSM. All rights reserved\n          </div>\n          <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- end footer -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!-- end wrapper  -->\n  <!-- ============================================================== -->\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h1 style=\"margin-top: 30px;text-align: center;\">Welcome to EDOSM</h1>\n<br>\n<div style=\"text-align: center;\">\n  <a [routerLink]=\"'/auth'\" class=\"btn btn-primary\">Authentication</a>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id='oopss'>\r\n  <div id='error-text'>\r\n    <span>404</span>\r\n    <p>PAGE NOT FOUND</p>\r\n    <p class='hmpg'><a style=\"cursor:pointer;\" [routerLink]=\"'/'\" class=\"back\">Back To Home</a></p>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], },
                { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
                { path: 'not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
                { path: '**', redirectTo: '/not-found' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.authService.autoLogin();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                        _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
                        _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/auth/auth.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".link {\r\n  text-decoration: none;\r\n}\r\n\r\ninput[type=\"text\"].ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\ninput[type=\"password\"].ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\nspan {\r\n  color: red;\r\n}\r\n\r\n#register {\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jcmVnaXN0ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/auth/auth.component.ts ***!
          \****************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.isLoginMode = true;
                    this.isLoading = false;
                    this.error = null;
                    this.message = null;
                }
                AuthComponent.prototype.ngOnInit = function () {
                };
                AuthComponent.prototype.onSwitchMode = function () {
                    this.isLoginMode = !this.isLoginMode;
                };
                AuthComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (!form.valid) {
                        return;
                    }
                    var username = form.value.username;
                    var email = form.value.email;
                    var password = form.value.password;
                    var confirmPassword = form.value.confirmPassword;
                    var authObs;
                    this.isLoading = true;
                    if (this.isLoginMode) {
                        authObs = this.authService.login(username, password);
                    }
                    else {
                        if (password !== confirmPassword) {
                            this.error = "Passwords are not matching.";
                            return this.error;
                        }
                        else {
                            authObs = this.authService.signUp(username, email, password);
                        }
                    }
                    authObs.subscribe(function (resData) {
                        var user_created = "User " + username + " Created Successfully";
                        setTimeout(function () {
                            if (resData.message == user_created) {
                                _this.message = resData.message;
                            }
                            else {
                                _this.error = resData.message;
                            }
                        }, 100);
                        setTimeout(function () {
                            _this.error = null;
                            _this.message = null;
                        }, 3000);
                        _this.isLoading = false;
                        if (_this.isLoginMode) {
                            _this.router.navigate(['/dashboard']);
                        }
                    }, function (errorMessage) {
                        _this.isLoading = false;
                        setTimeout(function () {
                            _this.error = errorMessage;
                        }, 100);
                        setTimeout(function () {
                            _this.error = null;
                        }, 3000);
                    });
                    form.reset();
                };
                return AuthComponent;
            }());
            AuthComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
                })
            ], AuthComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        var isAuth = !!user;
                        if (isAuth) {
                            return true;
                        }
                        return _this.router.createUrlTree(['/auth']);
                    }));
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/auth/auth.service.ts ***!
          \**************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
                }
                AuthService.prototype.signUp = function (username, email, password) {
                    return this.http
                        .post('https://adm-api.herokuapp.com/register', {
                        username: username,
                        email: email,
                        password: password
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                AuthService.prototype.login = function (username, password) {
                    var _this = this;
                    return this.http
                        .post('https://adm-api.herokuapp.com/login', {
                        username: username,
                        email: 'email@email.com',
                        password: password
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resData) {
                        _this.handleAuthentication(resData['username'], resData['user_id'], resData['access_token'], +resData['expires_in']);
                    }));
                };
                AuthService.prototype.autoLogin = function () {
                    var userData = JSON.parse(localStorage.getItem('userData'));
                    if (!userData) {
                        return;
                    }
                    var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.username, userData.id, userData._token, new Date(userData._tokenExpirationDate));
                    if (loadedUser.token) {
                        this.user.next(loadedUser);
                        this.router.navigate(['/dashboard']);
                        var expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                            new Date().getTime();
                        this.autoLogout(expirationDuration);
                    }
                };
                AuthService.prototype.logout = function () {
                    this.user.next(null);
                    this.router.navigate(['/auth']);
                    localStorage.removeItem('userData');
                    if (this.tokenExpirationTimer) {
                        clearTimeout(this.tokenExpirationTimer);
                    }
                    this.tokenExpirationTimer = null;
                };
                AuthService.prototype.autoLogout = function (expirationDuration) {
                    var _this = this;
                    this.tokenExpirationTimer = setTimeout(function () {
                        _this.logout();
                    }, expirationDuration);
                };
                AuthService.prototype.handleError = function (error) {
                    var errorMessage = 'An unknown error occurred!';
                    if (!error.error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
                    }
                    else {
                        errorMessage = error.error.message;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
                    }
                };
                AuthService.prototype.handleAuthentication = function (username, userId, token, expiresIn) {
                    var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
                    var new_user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](username, userId, token, expirationDate);
                    this.user.next(new_user);
                    this.autoLogout(expiresIn * 1000);
                    localStorage.setItem('userData', JSON.stringify(new_user));
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/auth/user.model.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/user.model.ts ***!
          \************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(username, id, _token, _tokenExpirationDate) {
                    this.username = username;
                    this.id = id;
                    this._token = _token;
                    this._tokenExpirationDate = _tokenExpirationDate;
                }
                Object.defineProperty(User.prototype, "token", {
                    get: function () {
                        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                            return null;
                        }
                        return this._token;
                    },
                    enumerable: true,
                    configurable: true
                });
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(authService) {
                    this.authService = authService;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                DashboardComponent.prototype.onLogout = function () {
                    this.authService.logout();
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\r\nbody {\r\n  font-family: 'Open Sans';\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\na,\r\na:visited {\r\n  color: #fff;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\na:hover,\r\na:focus,\r\na:visited:hover {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n* {\r\n  paading: 0;\r\n  margin: 0;\r\n}\r\n#oopss {\r\n  background: #222;\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  line-height: 1.5em;\r\n  z-index: 9999;\r\n  left: 0px;\r\n}\r\n#error-text {\r\n  top: 30%;\r\n  position: relative;\r\n  font-size: 40px;\r\n  color: #eee;\r\n}\r\n#error-text a {\r\n  color: #eee;\r\n}\r\n#error-text a:hover {\r\n  color: #fff;\r\n}\r\n#error-text p {\r\n  color: #eee;\r\n  margin: 70px 0 0 0;\r\n}\r\n#error-text i {\r\n  margin-left: 10px;\r\n}\r\n#error-text p.hmpg {\r\n  margin: 40px 0 0 0;\r\n}\r\n#error-text span {\r\n  position: relative;\r\n  background: #ef4824;\r\n  color: #fff;\r\n  font-size: 300%;\r\n  padding: 0 20px;\r\n  border-radius: 5px;\r\n  font-weight: bolder;\r\n  transition: all .5s;\r\n  cursor: pointer;\r\n  margin: 0 0 40px 0;\r\n}\r\n#error-text span:hover {\r\n  background: #d7401f;\r\n  color: #fff;\r\n  -webkit-animation: jelly .5s;\r\n  animation: jelly .5s;\r\n}\r\n#error-text span:after {\r\n  top: 100%;\r\n  left: 50%;\r\n  border: solid transparent;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(136, 183, 213, 0);\r\n  border-top-color: #ef4824;\r\n  border-width: 7px;\r\n  margin-left: -7px;\r\n}\r\n@-webkit-keyframes jelly {\r\n  from, to {\r\n    transform: scale(1, 1);\r\n  }\r\n  25% {\r\n    transform: scale(.9, 1.1);\r\n  }\r\n  50% {\r\n    transform: scale(1.1, .9);\r\n  }\r\n  75% {\r\n    transform: scale(.95, 1.05);\r\n  }\r\n}\r\n@keyframes jelly {\r\n  from, to {\r\n    transform: scale(1, 1);\r\n  }\r\n  25% {\r\n    transform: scale(.9, 1.1);\r\n  }\r\n  50% {\r\n    transform: scale(1.1, .9);\r\n  }\r\n  75% {\r\n    transform: scale(.95, 1.05);\r\n  }\r\n}\r\n/* CSS Error Page Responsive */\r\n@media only screen and (max-width:640px) {\r\n  #error-text span {\r\n    font-size: 200%;\r\n  }\r\n  #error-text a:hover {\r\n    color: #fff;\r\n  }\r\n}\r\n.back:active {\r\n  transform: scale(0.95);\r\n  background: #f53b3b;\r\n  color: #fff;\r\n}\r\n.back:hover {\r\n  background: #4c4c4c;\r\n  color: #fff;\r\n}\r\n.back {\r\n  text-decoration: none;\r\n  background: #5b5a5a;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  line-height: normal;\r\n  text-transform: uppercase;\r\n  border-radius: 3px;\r\n  transform: scale(1);\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBc0U7QUFDdEU7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFFQTtFQUNFLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNEJBQTRCO0VBSTVCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFO0lBRUUsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtFQUNBO0lBRUUsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFFQTtFQUNFO0lBRUUsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtFQUNBO0lBRUUsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFDQSw4QkFBOEI7QUFFOUI7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFHRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFHbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDApO1xyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMsXHJcbmE6dmlzaXRlZDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWFkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI29vcHNzIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4jZXJyb3ItdGV4dCB7XHJcbiAgdG9wOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI2Vycm9yLXRleHQgYSB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbiNlcnJvci10ZXh0IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZXJyb3ItdGV4dCBwIHtcclxuICBjb2xvcjogI2VlZTtcclxuICBtYXJnaW46IDcwcHggMCAwIDA7XHJcbn1cclxuXHJcbiNlcnJvci10ZXh0IGkge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jZXJyb3ItdGV4dCBwLmhtcGcge1xyXG4gIG1hcmdpbjogNDBweCAwIDAgMDtcclxufVxyXG5cclxuI2Vycm9yLXRleHQgc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNlZjQ4MjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuXHJcbiNlcnJvci10ZXh0IHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkNzQwMWY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGplbGx5IC41cztcclxuICAtbW96LWFuaW1hdGlvbjogamVsbHkgLjVzO1xyXG4gIC1tcy1hbmltYXRpb246IGplbGx5IC41cztcclxuICAtby1hbmltYXRpb246IGplbGx5IC41cztcclxuICBhbmltYXRpb246IGplbGx5IC41cztcclxufVxyXG5cclxuI2Vycm9yLXRleHQgc3BhbjphZnRlciB7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNiwgMTgzLCAyMTMsIDApO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNlZjQ4MjQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBqZWxseSB7XHJcbiAgZnJvbSwgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSwgMS4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjksIDEuMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xLCAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgLjkpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSwgMS4wNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSwgMS4wNSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGplbGx5IHtcclxuICBmcm9tLCB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LCAxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOSwgMS4xKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIC45KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAuOSk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1LCAxLjA1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1LCAxLjA1KTtcclxuICB9XHJcbn1cclxuLyogQ1NTIEVycm9yIFBhZ2UgUmVzcG9uc2l2ZSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcbiAgI2Vycm9yLXRleHQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgfVxyXG4gICNlcnJvci10ZXh0IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjazphY3RpdmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICBiYWNrZ3JvdW5kOiAjZjUzYjNiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFjazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzRjNGM0YztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjNWI1YTVhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/loading-spinner/loading-spinner.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".lds-ellipsis {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-ellipsis div {\r\n  position: absolute;\r\n  top: 33px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: #cef;\r\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n.lds-ellipsis div:nth-child(1) {\r\n  left: 8px;\r\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n          animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(2) {\r\n  left: 8px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(3) {\r\n  left: 32px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(4) {\r\n  left: 56px;\r\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n          animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n@-webkit-keyframes lds-ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes lds-ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@-webkit-keyframes lds-ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n@-webkit-keyframes lds-ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n@keyframes lds-ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkRBQW1EO1VBQW5ELG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsU0FBUztFQUNULDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFNBQVM7RUFDVCw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsVUFBVTtFQUNWLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQVBBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGO0FBUEE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1lbGxpcHNpcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMzcHg7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjY2VmO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDhweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDhweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDMycHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICBsZWZ0OiA1NnB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcclxuICB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
          \*********************************************************************/
        /*! exports provided: LoadingSpinnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () { return LoadingSpinnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadingSpinnerComponent = /** @class */ (function () {
                function LoadingSpinnerComponent() {
                }
                LoadingSpinnerComponent.prototype.ngOnInit = function () {
                };
                return LoadingSpinnerComponent;
            }());
            LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loading-spinner',
                    template: '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/shared/loading-spinner/loading-spinner.component.css")).default]
                })
            ], LoadingSpinnerComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\University\Final Year Project\FYP - FrontEnd\angular app\fyp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map