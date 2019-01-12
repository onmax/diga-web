(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\r\n  grid-area: h\r\n}\r\n\r\napp-menu {\r\n  grid-area: m;\r\n}\r\n\r\nmain {\r\n  grid-area: c;\r\n  min-height: calc(100vh - var(--header-height) - var(--footer-height));\r\n}\r\n\r\napp-footer {\r\n  grid-area: f\r\n}\r\n\r\n/*Mobile*/\r\n\r\n@media screen and (max-width:992px) {\r\n  app-menu {\r\n    position: fixed;\r\n    left: 100vw;\r\n    transition: .3s all var(--transition);\r\n    top: var(--header-height);\r\n    height: calc(100vw - var(--header-height));\r\n  }\r\n\r\n  app-menu.open {\r\n    left: 20vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isc0VBQXNFO0NBQ3ZFOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVELFVBQVU7O0FBQ1Y7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLDBCQUEwQjtJQUMxQiwyQ0FBMkM7R0FDNUM7O0VBRUQ7SUFDRSxXQUFXO0dBQ1o7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XHJcbiAgZ3JpZC1hcmVhOiBoXHJcbn1cclxuXHJcbmFwcC1tZW51IHtcclxuICBncmlkLWFyZWE6IG07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGdyaWQtYXJlYTogYztcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XHJcbn1cclxuXHJcbmFwcC1mb290ZXIge1xyXG4gIGdyaWQtYXJlYTogZlxyXG59XHJcblxyXG4vKk1vYmlsZSovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICBhcHAtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAxMDB2dztcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xyXG4gIH1cclxuXHJcbiAgYXBwLW1lbnUub3BlbiB7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-menu [ngClass]=\"{'open':isOpen()}\"></app-menu>\n<main (window:resize)=\"setWidth()\">\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.appService.setLang();
    };
    AppComponent.prototype.setWidth = function () {
        this.appService.setWidth();
    };
    AppComponent.prototype.isOpen = function () {
        var bool;
        this.appService.mobileMenu$.subscribe(function (b) { return (bool = b); });
        return bool;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_grado_grado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/grado/grado.component */ "./src/app/components/grado/grado.component.ts");
/* harmony import */ var _components_subject_subject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/subject/subject.component */ "./src/app/components/subject/subject.component.ts");
/* harmony import */ var _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/personal/personal.component */ "./src/app/components/personal/personal.component.ts");
/* harmony import */ var _components_memoria_memoria_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/memoria/memoria.component */ "./src/app/components/memoria/memoria.component.ts");
/* harmony import */ var _components_posgrado_posgrado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/posgrado/posgrado.component */ "./src/app/components/posgrado/posgrado.component.ts");
/* harmony import */ var _components_explorar_explorar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/explorar/explorar.component */ "./src/app/components/explorar/explorar.component.ts");
/* harmony import */ var _components_grupos_idi_grupos_idi_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/grupos-idi/grupos-idi.component */ "./src/app/components/grupos-idi/grupos-idi.component.ts");
/* harmony import */ var _components_innovacion_docente_innovacion_docente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/innovacion-docente/innovacion-docente.component */ "./src/app/components/innovacion-docente/innovacion-docente.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Routing

// translation



// components















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_grado_grado_component__WEBPACK_IMPORTED_MODULE_11__["GradoComponent"],
                _components_subject_subject_component__WEBPACK_IMPORTED_MODULE_12__["SubjectComponent"],
                _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_13__["PersonalComponent"],
                _components_memoria_memoria_component__WEBPACK_IMPORTED_MODULE_14__["MemoriaComponent"],
                _components_posgrado_posgrado_component__WEBPACK_IMPORTED_MODULE_15__["PosgradoComponent"],
                _components_explorar_explorar_component__WEBPACK_IMPORTED_MODULE_16__["ExplorarComponent"],
                _components_grupos_idi_grupos_idi_component__WEBPACK_IMPORTED_MODULE_17__["GruposIdiComponent"],
                _components_innovacion_docente_innovacion_docente_component__WEBPACK_IMPORTED_MODULE_18__["InnovacionDocenteComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // HttpModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [_components_subject_subject_component__WEBPACK_IMPORTED_MODULE_12__["SubjectComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(translateService) {
        this.translateService = translateService;
        this.mobileMenu$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentLang = 'es';
        this.setWidth();
    }
    AppService.prototype.setLang = function () {
        this.translateService.setDefaultLang(this.currentLang);
    };
    AppService.prototype.switchLanguage = function () {
        console.log(this.translateService);
        if (this.currentLang === 'es') {
            this.currentLang = 'en';
            this.translateService.use('en');
        }
        else if (this.currentLang === 'en') {
            this.currentLang = 'es';
            this.translateService.use('es');
        }
        console.log(this.translateService);
    };
    AppService.prototype.setWidth = function () {
        this.screenPX = window.innerWidth;
        if (window.innerWidth > 992) {
            this.screenWidth = 'large';
        }
        else if (window.innerWidth > 502) {
            this.screenWidth = 'medium';
        }
        else {
            this.screenWidth = 'small';
        }
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".err {\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3 {\r\n  font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVyciB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"err\">\n  <h3>\n    Esta página no existe\n  </h3>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/explorar/explorar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/explorar/explorar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.swiper-wrapper {\r\n  max-width: calc(100vh - 200px);\r\n}\r\n\r\n.swiper-slide {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #f5f6f7;\r\n  color: var(--main-black);\r\n  max-width: 320px;\r\n}\r\n\r\n.swiper-button-next,\r\n.swiper-button-prev {\r\n  top: 0;\r\n  margin-top: 0;\r\n  padding: 0 20px;\r\n  color: var(--primary);\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  background: transparent;\r\n}\r\n\r\n.swiper-button-next i,\r\n.swiper-button-prev i {\r\n  background: #eaebed;\r\n  font-size: 50px;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 2px 39px -10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.swiper-button-next {\r\n  right: 20px;\r\n}\r\n\r\n.swiper-button-prev {\r\n  left: 20px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .swiper-slide {\r\n    max-width: 250px;\r\n  }\r\n\r\n  .swiper-button-next i,\r\n  .swiper-button-prev i {\r\n    display: none;\r\n  }\r\n\r\n  .swiper-button-next,\r\n  .swiper-button-prev {\r\n    background: none;\r\n  }\r\n}\r\n\r\n.img {\r\n  max-height: 200px;\r\n  min-height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.swiper-slide img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  height: 170px;\r\n}\r\n\r\n.text {\r\n  margin-left: 10px;\r\n  text-align: left;\r\n  width: calc(100% - 30px);\r\n}\r\n\r\n.text h5 {\r\n  margin: 10px 0 3px 0;\r\n}\r\n\r\n.text p {\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  font-size: 13px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.text p a {\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBsb3Jhci9leHBsb3Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtDQUNsQjs7QUFFRDs7RUFFRSxPQUFPO0VBQ1AsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCOztBQUVEOztFQUVFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtEQUFrRDtDQUNuRDs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVEOztJQUVFLGNBQWM7R0FDZjs7RUFFRDs7SUFFRSxpQkFBaUI7R0FDbEI7Q0FDRjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwbG9yYXIvZXhwbG9yYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY2Zjc7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQsXHJcbi5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnN3aXBlci1idXR0b24tbmV4dCBpLFxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IGkge1xyXG4gIGJhY2tncm91bmQ6ICNlYWViZWQ7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDM5cHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IGksXHJcbiAgLnN3aXBlci1idXR0b24tcHJldiBpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxyXG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG59XHJcblxyXG4udGV4dCBoNSB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgM3B4IDA7XHJcbn1cclxuXHJcbi50ZXh0IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHAgYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/explorar/explorar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/explorar/explorar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\r\n  <h2 class=\"title\">\r\n    <span translate>explorar</span>\r\n  </h2>\r\n  <div class=\"swiper-container\">\r\n    <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"img\">\r\n            <img src=\"./assets/explorar/img (2).jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"text\">\r\n            <h5>Exposición. LinaBoBardi.</h5>\r\n            <p>Fundación, Juan March, Madrid. <br />\r\n              Comisaria y diseño del montaje: Mara Sánchez Llorens.\r\n              <br>\r\n              <a href=\"https://www.march.es/arte/madrid/exposiciones/lina-bo-bardi/\">Enlace</a></p>\r\n          </div>\r\n        </div>\r\n      <div class=\"swiper-slide\">\r\n        <div class=\"img\">\r\n          <img src=\"./assets/explorar/img (3).jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"text\">\r\n          <h5>Exposición. Beatos, Mecachis y Percebes.</h5>\r\n          <p>Biblioteca Nacional, Madrid.<br />\r\n            Comisario: Enrique Bordes.\r\n            <br>\r\n            <a href=\"http://www.bne.es/es/Actividades/Exposiciones/Exposiciones/Exposiciones2018/beatos_mecachis_y_percebes.html\">Enlace</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"swiper-button-next\">\r\n      <i class=\"material-icons\">keyboard_arrow_right</i>\r\n    </div>\r\n    <div class=\"swiper-button-prev\">\r\n      <i class=\"material-icons\">keyboard_arrow_left</i>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/explorar/explorar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/explorar/explorar.component.ts ***!
  \***********************************************************/
/*! exports provided: ExplorarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorarComponent", function() { return ExplorarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorarComponent = /** @class */ (function () {
    function ExplorarComponent() {
    }
    ExplorarComponent.prototype.ngOnInit = function () {
        this.initSwiper();
    };
    ExplorarComponent.prototype.initSwiper = function () {
        var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
            slidesPerView: 2.5,
            spaceBetween: 15,
            slidesPerGroup: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                500: {
                    slidesPerView: 1.3,
                    slidesPerGroup: 1
                },
                800: {
                    slidesPerView: 2.3,
                    slidesPerGroup: 2
                },
                1000: {
                    slidesPerView: 3.3,
                    slidesPerGroup: 3
                }
            }
        });
    };
    ExplorarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explorar',
            template: __webpack_require__(/*! ./explorar.component.html */ "./src/app/components/explorar/explorar.component.html"),
            styles: [__webpack_require__(/*! ../../swiper.min.css */ "./src/app/swiper.min.css"), __webpack_require__(/*! ./explorar.component.css */ "./src/app/components/explorar/explorar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExplorarComponent);
    return ExplorarComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  padding: 20px;\r\n  background-color: var(--main-black);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #fff;\r\n  z-index: 100;\r\n}\r\n\r\nfooter p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.direccion-geografica {\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\nfooter img {\r\n  height: 70px;\r\n}\r\n\r\nfooter img:nth-child(2) {\r\n  margin-left: 10px;\r\n}\r\n\r\nfooter i {\r\n  font-size: 12px;\r\n}\r\n\r\n@media (max-width:700px) {\r\n  footer {\r\n    flex-direction: column;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .escudos {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  footer {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  footer img {\r\n    height: 50px;\r\n    width: auto;\r\n  }\r\n\r\n  .direccion-geografica p {\r\n    text-align: center;\r\n  }\r\n\r\n  .copyright {\r\n    text-align: center;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .escudos {\r\n    margin-top: 10px;\r\n\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZDtDQUNGOztBQUVEO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0dBQ3JCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLCtCQUErQjtHQUNoQzs7RUFFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsaUJBQWlCOztHQUVsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5kaXJlY2Npb24tZ2VvZ3JhZmljYSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIGltZyB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5mb290ZXIgaW1nOm50aC1jaGlsZCgyKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZXNjdWRvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmRpcmVjY2lvbi1nZW9ncmFmaWNhIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZXNjdWRvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div>\n    <div class=\"escudos\">\n      <img src=\"./assets/escudos/upm.png\" alt=\"\">\n      <img src=\"./assets/escudos/etsam.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"direccion-geografica\">\n    <p translate>diga</p>\n    <p>Escuela Técnica Superior de Arquitectura. Universidad Politécnica de Madrid.</p>\n    <p>c/ Juan de Herrera nº4. Ciudad Universitaria 28040 - Madrid. 91 067 50 50 ideación. arquitectura@upm.es</p>\n  </div>\n  <div class=\"escudo-diga\">\n    <div class=\"copyright\">\n      <i class=\"material-icons\">copyright</i>\n      {{year}}\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/grado/grado.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/grado/grado.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtitle {\r\n  margin-top: 20px;\r\n  font-weight: 700;\r\n  font-size: 14.5px;\r\n}\r\n\r\n.links ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-left: 20px;\r\n  margin-top: 5px;\r\n\r\n}\r\n\r\n.links ul li {\r\n  padding: 4px 0;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.links ul li a {\r\n  text-decoration: none;\r\n  color: var(--main-black);\r\n\r\n}\r\n\r\n.links ul li a span {\r\n  line-height: 1.3;\r\n  background-image: linear-gradient(to right,\r\n    var(--main-black) 0,\r\n    var(--main-black) 100%);\r\n  background-position: 0 16px;\r\n  background-size: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background 0.5s;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.links ul li a span:hover {\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.table-header {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  display: flex;\r\n  border-bottom: 2px solid var(--primary);\r\n}\r\n\r\n.table-header__option {\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n  border-radius: 2px 2px 0 0;\r\n}\r\n\r\n.table-header__option:hover:not(.selected) {\r\n  color: var(--primary);\r\n  font-weight: 700;\r\n}\r\n\r\n.table-header__option.selected {\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.table-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  transition: 3s all ease;\r\n  color: var(--main-black);\r\n}\r\n\r\n.table-content .table-content__type {\r\n  margin-top: 10px;\r\n  padding: 7px 20px;\r\n  font-size: 13.5px;\r\n  transition: 3s all ease;\r\n}\r\n\r\n.table-content .course {\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n}\r\n\r\n.table-content__subjects {\r\n  margin-top: 10px;\r\n}\r\n\r\n.table-content__subject-info {\r\n  font-size: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.table-content__subject-info>i {\r\n  font-size: 19px;\r\n  color: #5c5f66;\r\n  margin-top: 4px;\r\n  opacity: 0;\r\n  transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.table-content__subject-info>i.rotate {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.table-content__subject-info>i.rotate {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.table-content__subject-code {\r\n  font-weight: 700;\r\n  color: #3d679e;\r\n  padding-left: 3px;\r\n  padding-right: 4px;\r\n  font-size: 13.5px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table-content__subject-name {\r\n  color: var(--main-black);\r\n  font-size: 14px;\r\n  line-height: 1.3;\r\n  text-decoration: none;\r\n  background-image: linear-gradient(to right,\r\n    var(--main-black) 0,\r\n    var(--main-black) 100%);\r\n  background-position: 0 1.2em;\r\n  background-size: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background 0.5s;\r\n  margin-left: 4px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.table-content__subject-name.open {\r\n  background-size: 100% 100% !important;\r\n}\r\n\r\n.table-content__subjects-groups {\r\n  font-size: 13px;\r\n  max-height: 0;\r\n  overflow-y: hidden;\r\n  transition: 0.7s all cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.table-content__subjects-groups>div {\r\n  display: flex;\r\n  align-items: baseline;\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n  opacity: 0;\r\n  transition: 0.7s opacity cubic-bezier(0.165, 0.84, 0.44, 1);\r\n  transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);\r\n  cursor: pointer;\r\n  padding-left: 5px;\r\n  border-left: 3px solid rgba(255, 255, 255, 0);\r\n}\r\n\r\n.table-content__subjects-groups>div:hover {\r\n  border-left: 3px solid var(--primary);\r\n}\r\n\r\n.show-group-code {\r\n  margin-left: 25px;\r\n}\r\n\r\n.not-show-group-code {\r\n  margin-left: 35px;\r\n}\r\n\r\n.table-content__subjects-groups .table-content__subject-code {\r\n  font-size: 12px;\r\n}\r\n\r\n.table-content__subjects-groups .links {\r\n  margin-left: 25px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.table-content__subjects-groups .links a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.see-pdf {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  color: #1a4591;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFkby9ncmFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0NBRWpCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjs7Q0FFakI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCOztDQUUxQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQjs7NEJBRTBCO0VBQzFCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3Q0FBd0M7Q0FDekM7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsNERBQTREO0VBQzVELHdCQUF3QjtFQUN4Qix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsd0RBQXdEO0NBQ3pEOztBQUVEO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCOzs0QkFFMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLHNDQUFzQztDQUN2Qzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdEQUF3RDtDQUN6RDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsNERBQTREO0VBQzVELHdEQUF3RDtFQUN4RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhDQUE4QztDQUMvQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2Qzs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYWRvL2dyYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0LjVweDtcclxufVxyXG5cclxuLmxpbmtzIHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG59XHJcblxyXG4ubGlua3MgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuXHJcbi5saW5rcyB1bCBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG5cclxufVxyXG5cclxuLmxpbmtzIHVsIGxpIGEgc3BhbiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXHJcbiAgICB2YXIoLS1tYWluLWJsYWNrKSAwLFxyXG4gICAgdmFyKC0tbWFpbi1ibGFjaykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxNnB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5rcyB1bCBsaSBhIHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlcl9fb3B0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyX19vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZCkge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyX19vcHRpb24uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIHRyYW5zaXRpb246IDNzIGFsbCBlYXNlO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnQgLnRhYmxlLWNvbnRlbnRfX3R5cGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgdHJhbnNpdGlvbjogM3MgYWxsIGVhc2U7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50IC5jb3Vyc2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50X19zdWJqZWN0cyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnRfX3N1YmplY3QtaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50X19zdWJqZWN0LWluZm8+aSB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGNvbG9yOiAjNWM1ZjY2O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50X19zdWJqZWN0LWluZm8+aS5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnRfX3N1YmplY3QtaW5mbz5pLnJvdGF0ZSB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtY29udGVudF9fc3ViamVjdC1jb2RlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjM2Q2NzllO1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFibGUtY29udGVudF9fc3ViamVjdC1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcclxuICAgIHZhcigtLW1haW4tYmxhY2spIDAsXHJcbiAgICB2YXIoLS1tYWluLWJsYWNrKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEuMmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnRfX3N1YmplY3QtbmFtZS5vcGVuIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtY29udGVudF9fc3ViamVjdHMtZ3JvdXBzIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC43cyBhbGwgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnRfX3N1YmplY3RzLWdyb3Vwcz5kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuN3Mgb3BhY2l0eSBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnRfX3N1YmplY3RzLWdyb3Vwcz5kaXY6aG92ZXIge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zaG93LWdyb3VwLWNvZGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubm90LXNob3ctZ3JvdXAtY29kZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50X19zdWJqZWN0cy1ncm91cHMgLnRhYmxlLWNvbnRlbnRfX3N1YmplY3QtY29kZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udGFibGUtY29udGVudF9fc3ViamVjdHMtZ3JvdXBzIC5saW5rcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50X19zdWJqZWN0cy1ncm91cHMgLmxpbmtzIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnNlZS1wZGYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMxYTQ1OTE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/grado/grado.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/grado/grado.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\r\n\r\n  <h2 class=\"title\">\r\n    <span translate>docencia.grado</span>\r\n  </h2>\r\n\r\n\r\n\r\n  <div class=\"links\" *ngIf=\"!loading\">\r\n    <div class=\"subtitle\" translate>docencia.links_interes</div>\r\n    <ul>\r\n      <li *ngFor=\"let link of links\">\r\n        <a target=\"_blank\" href=\"{{link.url}}\">\r\n          <span translate>\r\n            docencia.{{link.text}}\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"table\" *ngIf=\"!loading\">\r\n    <div class=\"subtitle\" translate>docencia.tabla_asignaturas</div>\r\n    <div class=\"table-header\">\r\n      <div class=\"table-header__option\" *ngFor=\"let quarter of gradeData\" [ngClass]=\"{'selected': quarter.quarter == currentQuarter}\"\r\n        (click)=\"currentQuarter = quarter.quarter\">\r\n        {{quarter.quarter}}º <span translate>docencia.quarter</span>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let quarter of gradeData\">\r\n      <div class=\"table-content\" *ngIf=\"currentQuarter === quarter.quarter\">\r\n        <div class=\"table-content__type\" *ngFor=\"let type of quarter.types\">\r\n          <div>\r\n            <span class=\"course\">{{type.course}}º <span translate>docencia.year</span></span>\r\n            <span *ngIf=\"small()\"><br></span>\r\n            <span *ngIf=\"!small()\"> - </span>\r\n            <span translate>docencia.{{type.type}}</span>\r\n            <div class=\"table-content__subjects\">\r\n              <div class=\"table-content__subject\" (mouseleave)=\"leaveSubject($event)\" (mouseenter)=\"overSubject($event)\"\r\n                (click)=\"toogleSubject($event)\" *ngFor=\"let subject of type.subjects\">\r\n                <div class=\"table-content__subject-info\">\r\n                  <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                  <div class=\"table-content__subject-code\">\r\n                    {{subject.code}}\r\n                  </div>\r\n                  <div class=\"table-content__subject-name\" translate>\r\n                    docencia.{{subject.name}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-content__subjects-groups\">\r\n                  <div *ngFor=\"let group of subject.groups\" [ngClass]=\"{'show-group-code': group.code !== '','not-show-group-code': group.code === ''}\"\r\n                    (click)=\"selectSubject(quarter.quarter,type.type, subject.name, group.name, group.code)\">\r\n                    <span class=\"table-content__subject-code\" *ngIf=\"group.code !== '' && subject.name !== 'tfg'\">\r\n                      {{group.code}}\r\n                    </span>\r\n                    <span *ngIf=\"type.type === 'básica' || subject.code === '1908' && subject.name !== 'tfg'\">\r\n                      <span translate>\r\n                        docencia.group\r\n                      </span>\r\n                      <span>\r\n                        {{group.name | uppercase}}\r\n                      </span>\r\n                    </span>\r\n                    <span *ngIf=\"!(type.type === 'básica' || subject.code === '1908' && subject.name !== 'tfg')\"\r\n                      translate>\r\n                      docencia.{{group.name}}\r\n                    </span>\r\n                  </div>\r\n                  <div *ngFor=\"let item of subject.links\" class=\"links\">\r\n                    <a target=\"_blank\" href=\"{{item.url}}\">{{item.text}}</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-subject [gradeData]=\"gradeData\" *ngIf=\"showSubject()\"></app-subject>\r\n"

/***/ }),

/***/ "./src/app/components/grado/grado.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/grado/grado.component.ts ***!
  \*****************************************************/
/*! exports provided: GradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradoComponent", function() { return GradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spreadsheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spreadsheets.service */ "./src/app/spreadsheets.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GradoComponent = /** @class */ (function () {
    function GradoComponent(spreadsheet, router, appService, activatedRoute) {
        this.spreadsheet = spreadsheet;
        this.router = router;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.gradeData = [];
    }
    GradoComponent.prototype.ngOnInit = function () {
        var month = new Date().getMonth();
        this.currentQuarter = month === 0 || month >= 8 ? '1' : '2';
        this.loading = true;
        this.fetchLinks();
        this.fetchData();
    };
    GradoComponent.prototype.fetchLinks = function () {
        var _this = this;
        this.spreadsheet.gradeLinks$
            .subscribe(function (data) { return (_this.links = data); })
            .unsubscribe();
        console.log('Links de interés: ', this.links);
    };
    GradoComponent.prototype.fetchData = function () {
        var _this = this;
        this.spreadsheet.gradeData$
            .subscribe(function (data) {
            _this.gradeData = data;
            _this.loading = false;
            console.log('Información de grado', data);
        }, function (error) {
            console.error(error);
        })
            .unsubscribe();
    };
    GradoComponent.prototype.small = function () {
        return this.appService.screenPX < 1462;
    };
    GradoComponent.prototype.toggleGroups = function (event) {
        var groups = event.target.closest('.subject');
        groups.children[1].classList.toggle('show');
    };
    GradoComponent.prototype.selectSubject = function (quarter, type, subject, group, code) {
        if (['básica', 'intensificacion'].includes(type)) {
            group = "grupo_" + group;
        }
        this.router.navigate([
            'grado',
            "cuatrimestre_" + quarter,
            type,
            subject,
            group,
            code
        ]);
    };
    GradoComponent.prototype.showSubject = function () {
        var show;
        this.activatedRoute.params
            .subscribe(function (p) {
            show = ![p.quarter, p.type, p.subject, p.group].includes(undefined);
        })
            .unsubscribe();
        return show;
    };
    GradoComponent.prototype.leaveSubject = function (e) {
        var subject = e.target.closest('.table-content__subject');
        subject.querySelector('i').style.opacity = '0';
        // subject.querySelector('.table-content__subject-name').style.textDecoration =
        //  'inherit';
        subject.querySelector('.table-content__subject-name').style.backgroundSize =
            '0% 100%';
    };
    GradoComponent.prototype.overSubject = function (e) {
        var subject = e.target.closest('.table-content__subject');
        subject.querySelector('i').style.opacity = '1';
        /*subject.querySelector('.table-content__subject-name').style.textDecoration =
          'underline';*/
        subject.querySelector('.table-content__subject-name').style.backgroundSize =
            '100% 100%';
    };
    GradoComponent.prototype.toogleSubject = function (e) {
        var isAGroup = e.target.closest('.table-content__subjects-groups');
        if (isAGroup !== null) {
            return;
        }
        var subject = e.target.closest('.table-content__subject');
        var groups = subject.querySelector('.table-content__subjects-groups');
        var name = subject.querySelector('.table-content__subject-name');
        name.classList.toggle('open');
        var icon = subject.querySelector('i');
        icon.classList.toggle('open');
        icon.classList.toggle('rotate');
        // Calculate the height
        var height = 0;
        if (groups.style.maxHeight === '') {
            for (var _i = 0, _a = groups.children; _i < _a.length; _i++) {
                var group = _a[_i];
                height = height + group.clientHeight;
            }
            height = height + 'px';
        }
        else {
            height = '';
        }
        groups.style.maxHeight = height;
        var _loop_1 = function (group) {
            if (['', '0'].includes(group.style.opacity)) {
                setTimeout(function () {
                    group.style.opacity = 1;
                }, ((Array.prototype.slice.call(groups.children).indexOf(group) + 1) * 700) / groups.children.length);
            }
            else {
                setTimeout(function () {
                    group.style.opacity = 0;
                }, 700 / (Array.prototype.slice.call(groups.children).indexOf(group) + 1) / groups.children.length);
            }
        };
        // Animation
        for (var _b = 0, _c = groups.children; _b < _c.length; _b++) {
            var group = _c[_b];
            _loop_1(group);
        }
    };
    GradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grado',
            template: __webpack_require__(/*! ./grado.component.html */ "./src/app/components/grado/grado.component.html"),
            styles: [__webpack_require__(/*! ./grado.component.css */ "./src/app/components/grado/grado.component.css")]
        }),
        __metadata("design:paramtypes", [_spreadsheets_service__WEBPACK_IMPORTED_MODULE_2__["SpreadsheetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], GradoComponent);
    return GradoComponent;
}());



/***/ }),

/***/ "./src/app/components/grupos-idi/grupos-idi.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/grupos-idi/grupos-idi.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2.title span{\r\n  text-transform: initial;\r\n}\r\n.groups {\r\n  margin-top: 20px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 280px);\r\n  grid-gap: 1rem;\r\n}\r\n.group-name {\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  padding-left: 5px;\r\n  margin-bottom: 4px;\r\n}\r\n.group-name a {\r\n  color: inherit;\r\n  font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncnVwb3MtaWRpL2dydXBvcy1pZGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwrQ0FBK0M7RUFDL0MsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3J1cG9zLWlkaS9ncnVwb3MtaWRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMi50aXRsZSBzcGFue1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcbi5ncm91cHMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjgwcHgpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZ3JvdXAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5ncm91cC1uYW1lIGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/grupos-idi/grupos-idi.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/grupos-idi/grupos-idi.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\" style=\"padding:10px 50px;\">\r\n  <span translate>IDi</span>\r\n</h2>\r\n<section class=\"groups\" style=\"padding:10px 50px;\">\r\n  <div *ngFor=\"let group of idGroups\">\r\n    <h3 class=\"group-name\">{{group.nombre}} - <a href=\"{{group.enlace.href}}\">{{group.enlace.texto}}</a></h3>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/grupos-idi/grupos-idi.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/grupos-idi/grupos-idi.component.ts ***!
  \***************************************************************/
/*! exports provided: GruposIdiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposIdiComponent", function() { return GruposIdiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GruposIdiComponent = /** @class */ (function () {
    function GruposIdiComponent() {
        this.idGroups = [];
        this.idGroups = [
            {
                nombre: 'Grupo 1',
                enlace: { href: '', texto: 'Enlace 1' },
                img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
            },
            {
                nombre: 'Grupo 2',
                enlace: { href: '', texto: 'Enlace 2' },
                img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
            },
            {
                nombre: 'Grupo 3',
                enlace: { href: '', texto: 'Enlace 3' },
                img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
            }
        ];
    }
    GruposIdiComponent.prototype.ngOnInit = function () { };
    GruposIdiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupos-idi',
            template: __webpack_require__(/*! ./grupos-idi.component.html */ "./src/app/components/grupos-idi/grupos-idi.component.html"),
            styles: [__webpack_require__(/*! ./grupos-idi.component.css */ "./src/app/components/grupos-idi/grupos-idi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GruposIdiComponent);
    return GruposIdiComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin: 0;\r\n  font-weight: 400;\r\n}\r\n\r\nheader {\r\n  height: var(--header-height);\r\n  z-index: 100;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nheader.pc {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\nheader.mobile {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  background: var(--primary);\r\n  color: #fff;\r\n  font-size: 9px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\nheader.pc .underline {\r\n  line-height: 1.3;\r\n  background-image: linear-gradient(to right,\r\n    var(--main-black) 0,\r\n    var(--main-black) 100%);\r\n  background-position: 0 37px;\r\n  background-size: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background 0.5s;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\nheader.pc .underline:hover {\r\n  background-size: 100% 100%;\r\n}\r\n\r\nheader.mobile h1,\r\nheader.mobile i {\r\n  padding: 8px 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsK0dBQStHO0NBQ2hIOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCOzs0QkFFMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuaGVhZGVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuaGVhZGVyLnBjIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaGVhZGVyLm1vYmlsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbmhlYWRlci5wYyAudW5kZXJsaW5lIHtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcclxuICAgIHZhcigtLW1haW4tYmxhY2spIDAsXHJcbiAgICB2YXIoLS1tYWluLWJsYWNrKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDM3cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaGVhZGVyLnBjIC51bmRlcmxpbmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIubW9iaWxlIGgxLFxyXG5oZWFkZXIubW9iaWxlIGkge1xyXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"getWidthStatus() === 'large'\" class=\"pc\">\n  <a routerLink=\"/\">\n    <h1>\n      <span [ngClass]=\"{'underline': this.url !== '/'}\" translate>diga</span>\n    </h1>\n  </a>\n</header>\n<header *ngIf=\"getWidthStatus() !== 'large'\" class=\"mobile\">\n  <a (click)=\"closeMenu()\" routerLink=\"/\">\n    <h1>D.I.G.A.</h1>\n  </a>\n  <i class=\"material-icons\" (click)=\"toggleMobileMenu()\">menu</i>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.url = this.router.url;
        this.router.events.subscribe(function (path) {
            if (path instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.url = path.url;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.getWidthStatus = function () {
        return this.appService.screenWidth;
    };
    HeaderComponent.prototype.toggleMobileMenu = function () {
        var bool;
        this.appService.mobileMenu$.subscribe(function (b) { return (bool = b); });
        this.appService.mobileMenu$.next(!bool);
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.appService.mobileMenu$.next(false);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/direction-reveal.css":
/*!******************************************************!*\
  !*** ./src/app/components/home/direction-reveal.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide--in-top .card-home__anim--in {\r\n  -webkit-animation-name: slide--in-top;\r\n          animation-name: slide--in-top;\r\n}\r\n\r\n.slide--in-top .card-home__anim--out {\r\n  -webkit-animation-name: slide--out-bottom;\r\n          animation-name: slide--out-bottom;\r\n}\r\n\r\n.slide--in-bottom .card-home__anim--in {\r\n  -webkit-animation-name: slide--in-bottom;\r\n          animation-name: slide--in-bottom;\r\n}\r\n\r\n.slide--in-bottom .card-home__anim--out {\r\n  -webkit-animation-name: slide--out-top;\r\n          animation-name: slide--out-top;\r\n}\r\n\r\n.slide--in-left .card-home__anim--in {\r\n  -webkit-animation-name: slide--in-left;\r\n          animation-name: slide--in-left;\r\n}\r\n\r\n.slide--in-left .card-home__anim--out {\r\n  -webkit-animation-name: slide--out-right;\r\n          animation-name: slide--out-right;\r\n}\r\n\r\n.slide--in-right .card-home__anim--in {\r\n  -webkit-animation-name: slide--in-right;\r\n          animation-name: slide--in-right;\r\n}\r\n\r\n.slide--in-right .card-home__anim--out {\r\n  -webkit-animation-name: slide--out-left;\r\n          animation-name: slide--out-left;\r\n}\r\n\r\n.slide--out-top .card-home__anim--in {\r\n  -webkit-animation-name: slide--out-top;\r\n          animation-name: slide--out-top;\r\n}\r\n\r\n.slide--out-top .card-home__anim--out {\r\n  -webkit-animation-name: slide--in-bottom;\r\n          animation-name: slide--in-bottom;\r\n}\r\n\r\n.slide--out-bottom .card-home__anim--in {\r\n  -webkit-animation-name: slide--out-bottom;\r\n          animation-name: slide--out-bottom;\r\n}\r\n\r\n.slide--out-bottom .card-home__anim--out {\r\n  -webkit-animation-name: slide--in-top;\r\n          animation-name: slide--in-top;\r\n}\r\n\r\n.slide--out-left .card-home__anim--in {\r\n  -webkit-animation-name: slide--out-left;\r\n          animation-name: slide--out-left;\r\n}\r\n\r\n.slide--out-left .card-home__anim--out {\r\n  -webkit-animation-name: slide--in-right;\r\n          animation-name: slide--in-right;\r\n}\r\n\r\n.slide--out-right .card-home__anim--in {\r\n  -webkit-animation-name: slide--out-right;\r\n          animation-name: slide--out-right;\r\n}\r\n\r\n.slide--out-right .card-home__anim--out {\r\n  -webkit-animation-name: slide--in-left;\r\n          animation-name: slide--in-left;\r\n}\r\n\r\n.card-home [class*='slide--'] .card-home__anim--in,\r\n.card-home [class*='slide--'] .card-home__anim--out {\r\n  -webkit-transform: translate(0, 0);\r\n          transform: translate(0, 0);\r\n  -webkit-animation-timing-function: var(--transition);\r\n          animation-timing-function: var(--transition);\r\n}\r\n\r\n@-webkit-keyframes slide--in-top {\r\n  0% {\r\n    -webkit-transform: translate(0, -100%);\r\n            transform: translate(0, -100%);\r\n  }\r\n}\r\n\r\n@keyframes slide--in-top {\r\n  0% {\r\n    -webkit-transform: translate(0, -100%);\r\n            transform: translate(0, -100%);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--out-top {\r\n  100% {\r\n    -webkit-transform: translate(0, -100%);\r\n            transform: translate(0, -100%);\r\n  }\r\n}\r\n\r\n@keyframes slide--out-top {\r\n  100% {\r\n    -webkit-transform: translate(0, -100%);\r\n            transform: translate(0, -100%);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--in-bottom {\r\n  0% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n@keyframes slide--in-bottom {\r\n  0% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--out-bottom {\r\n  100% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n@keyframes slide--out-bottom {\r\n  100% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--in-left {\r\n  0% {\r\n    -webkit-transform: translate(-100%, 0);\r\n            transform: translate(-100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slide--in-left {\r\n  0% {\r\n    -webkit-transform: translate(-100%, 0);\r\n            transform: translate(-100%, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--out-left {\r\n  100% {\r\n    -webkit-transform: translate(-100%, 0);\r\n            transform: translate(-100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slide--out-left {\r\n  100% {\r\n    -webkit-transform: translate(-100%, 0);\r\n            transform: translate(-100%, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--in-right {\r\n  0% {\r\n    -webkit-transform: translate(100%, 0);\r\n            transform: translate(100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slide--in-right {\r\n  0% {\r\n    -webkit-transform: translate(100%, 0);\r\n            transform: translate(100%, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide--out-right {\r\n  100% {\r\n    -webkit-transform: translate(100%, 0);\r\n            transform: translate(100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slide--out-right {\r\n  100% {\r\n    -webkit-transform: translate(100%, 0);\r\n            transform: translate(100%, 0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2RpcmVjdGlvbi1yZXZlYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQThCO1VBQTlCLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7Q0FDbkM7O0FBRUQ7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7Q0FDbkM7O0FBRUQ7RUFDRSxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9COztBQUVEO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLHdDQUFnQztVQUFoQyxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtDQUNoQzs7QUFFRDs7RUFFRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7O0FBRUQ7RUFDRTtJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0I7R0FDaEM7Q0FDRjs7QUFKRDtFQUNFO0lBQ0UsdUNBQStCO1lBQS9CLCtCQUErQjtHQUNoQztDQUNGOztBQUVEO0VBQ0U7SUFDRSx1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0NBQ0Y7O0FBSkQ7RUFDRTtJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0I7R0FDaEM7Q0FDRjs7QUFFRDtFQUNFO0lBQ0Usc0NBQThCO1lBQTlCLDhCQUE4QjtHQUMvQjtDQUNGOztBQUpEO0VBQ0U7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCO0dBQy9CO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLHNDQUE4QjtZQUE5Qiw4QkFBOEI7R0FDL0I7Q0FDRjs7QUFKRDtFQUNFO0lBQ0Usc0NBQThCO1lBQTlCLDhCQUE4QjtHQUMvQjtDQUNGOztBQUVEO0VBQ0U7SUFDRSx1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0NBQ0Y7O0FBSkQ7RUFDRTtJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0I7R0FDaEM7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsdUNBQStCO1lBQS9CLCtCQUErQjtHQUNoQztDQUNGOztBQUpEO0VBQ0U7SUFDRSx1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLHNDQUE4QjtZQUE5Qiw4QkFBOEI7R0FDL0I7Q0FDRjs7QUFKRDtFQUNFO0lBQ0Usc0NBQThCO1lBQTlCLDhCQUE4QjtHQUMvQjtDQUNGOztBQUVEO0VBQ0U7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCO0dBQy9CO0NBQ0Y7O0FBSkQ7RUFDRTtJQUNFLHNDQUE4QjtZQUE5Qiw4QkFBOEI7R0FDL0I7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9kaXJlY3Rpb24tcmV2ZWFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS0taW4tdG9wIC5jYXJkLWhvbWVfX2FuaW0tLWluIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLWluLXRvcDtcclxufVxyXG5cclxuLnNsaWRlLS1pbi10b3AgLmNhcmQtaG9tZV9fYW5pbS0tb3V0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLW91dC1ib3R0b207XHJcbn1cclxuXHJcbi5zbGlkZS0taW4tYm90dG9tIC5jYXJkLWhvbWVfX2FuaW0tLWluIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLWluLWJvdHRvbTtcclxufVxyXG5cclxuLnNsaWRlLS1pbi1ib3R0b20gLmNhcmQtaG9tZV9fYW5pbS0tb3V0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLW91dC10b3A7XHJcbn1cclxuXHJcbi5zbGlkZS0taW4tbGVmdCAuY2FyZC1ob21lX19hbmltLS1pbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLS1pbi1sZWZ0O1xyXG59XHJcblxyXG4uc2xpZGUtLWluLWxlZnQgLmNhcmQtaG9tZV9fYW5pbS0tb3V0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLW91dC1yaWdodDtcclxufVxyXG5cclxuLnNsaWRlLS1pbi1yaWdodCAuY2FyZC1ob21lX19hbmltLS1pbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLS1pbi1yaWdodDtcclxufVxyXG5cclxuLnNsaWRlLS1pbi1yaWdodCAuY2FyZC1ob21lX19hbmltLS1vdXQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS0tb3V0LWxlZnQ7XHJcbn1cclxuXHJcbi5zbGlkZS0tb3V0LXRvcCAuY2FyZC1ob21lX19hbmltLS1pbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLS1vdXQtdG9wO1xyXG59XHJcblxyXG4uc2xpZGUtLW91dC10b3AgLmNhcmQtaG9tZV9fYW5pbS0tb3V0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLWluLWJvdHRvbTtcclxufVxyXG5cclxuLnNsaWRlLS1vdXQtYm90dG9tIC5jYXJkLWhvbWVfX2FuaW0tLWluIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLW91dC1ib3R0b207XHJcbn1cclxuXHJcbi5zbGlkZS0tb3V0LWJvdHRvbSAuY2FyZC1ob21lX19hbmltLS1vdXQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS0taW4tdG9wO1xyXG59XHJcblxyXG4uc2xpZGUtLW91dC1sZWZ0IC5jYXJkLWhvbWVfX2FuaW0tLWluIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtLW91dC1sZWZ0O1xyXG59XHJcblxyXG4uc2xpZGUtLW91dC1sZWZ0IC5jYXJkLWhvbWVfX2FuaW0tLW91dCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLS1pbi1yaWdodDtcclxufVxyXG5cclxuLnNsaWRlLS1vdXQtcmlnaHQgLmNhcmQtaG9tZV9fYW5pbS0taW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS0tb3V0LXJpZ2h0O1xyXG59XHJcblxyXG4uc2xpZGUtLW91dC1yaWdodCAuY2FyZC1ob21lX19hbmltLS1vdXQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS0taW4tbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9tZSBbY2xhc3MqPSdzbGlkZS0tJ10gLmNhcmQtaG9tZV9fYW5pbS0taW4sXHJcbi5jYXJkLWhvbWUgW2NsYXNzKj0nc2xpZGUtLSddIC5jYXJkLWhvbWVfX2FuaW0tLW91dCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtLWluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS0tb3V0LXRvcCB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLS1pbi1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS0tb3V0LWJvdHRvbSB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtLWluLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtLW91dC1sZWZ0IHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtLWluLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtLW91dC1yaWdodCB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 25px auto !important;\r\n  max-height: 500px;\r\n}\r\n\r\n.swiper-slide {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.swiper-slide img {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 500px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\n.swiper-controls {\r\n  top: 0;\r\n  display: flex;\r\n  left: 0;\r\n  align-items: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.swiper-button-next,\r\n.swiper-button-prev {\r\n  color: var(--primary);\r\n  background: none !important;\r\n}\r\n\r\n.swiper-button-next i,\r\n.swiper-button-prev i {\r\n  background: #eaebed;\r\n  font-size: 50px;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 2px 39px -10px rgba(0, 0, 0, 0.8);\r\n\r\n}\r\n\r\n.swiper-button-next {\r\n  right: -5px !important;\r\n}\r\n\r\n.swiper-button-prev {\r\n  left: 20px !important;\r\n}\r\n\r\n.description {\r\n  max-width: 400px;\r\n  text-align: justify;\r\n  padding: 0 20px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .description {\r\n    margin: 50px auto;\r\n  }\r\n}\r\n\r\n/* cards-home */\r\n\r\n.cards-home {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(0, 200px));\r\n  grid-gap: 20px;\r\n  justify-content: center;\r\n  margin-top: 25px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.cards-home .card-home {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.cards-home .card-home img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.cards-home .card-home h3 {\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n/*Direction reveal*/\r\n\r\n.card-home {\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-home__anim--in,\r\n.card-home__anim--out {\r\n  -webkit-animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\r\n          animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n.card-home__overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: #fff;\r\n  overflow: hidden;\r\n  background-color: rgba(0, 0, 0, .6);\r\n  -webkit-animation-name: reset;\r\n          animation-name: reset;\r\n}\r\n\r\n@-webkit-keyframes reset {\r\n  100% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n@keyframes reset {\r\n  100% {\r\n    -webkit-transform: translate(0, 100%);\r\n            transform: translate(0, 100%);\r\n  }\r\n}\r\n\r\n.card-home__title {\r\n  position: absolute;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 10px 0;\r\n  background: rgba(33, 33, 33, .8);\r\n  bottom: 0;\r\n  z-index: 99;\r\n  margin: 0;\r\n}\r\n\r\n.card-home__options {\r\n  height: calc(100% - 39px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n}\r\n\r\n.card-home__options>a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px 0;\r\n}\r\n\r\n.card-home__options>a span {\r\n  line-height: 1.3;\r\n  background-image: linear-gradient(to right,\r\n    var(--white) 0,\r\n    var(--white) 100%);\r\n  background-position: 0 1.04em;\r\n  background-size: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background 0.5s;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-home__options>a span:hover {\r\n  background-size: 100% 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBb0I7S0FBcEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsT0FBTztFQUNQLGNBQWM7RUFDZCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7Q0FDaEI7O0FBRUQ7O0VBRUUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtDQUM3Qjs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrREFBa0Q7O0NBRW5EOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7O0FBRUQsZ0JBQWdCOztBQUNoQjtFQUNFLGNBQWM7RUFDZCwwREFBMEQ7RUFDMUQsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0NBQ1g7O0FBRUQsb0JBQW9COztBQUNwQjtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLDRFQUFvRTtVQUFwRSxvRUFBb0U7RUFDcEUsc0NBQThCO1VBQTlCLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFO0lBQ0Usc0NBQThCO1lBQTlCLDhCQUE4QjtHQUMvQjtDQUNGOztBQUpEO0VBQ0U7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCO0dBQy9CO0NBQ0Y7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtDQUNYOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCOzt1QkFFcUI7RUFDckIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMkJBQTJCOztDQUU1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRyb2xzIHtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsZWZ0OiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IGksXHJcbi5zd2lwZXItYnV0dG9uLXByZXYgaSB7XHJcbiAgYmFja2dyb3VuZDogI2VhZWJlZDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMzlweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcblxyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICByaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjYXJkcy1ob21lICovXHJcbi5jYXJkcy1ob21lIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMjAwcHgpKTtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkcy1ob21lIC5jYXJkLWhvbWUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2FyZHMtaG9tZSAuY2FyZC1ob21lIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZHMtaG9tZSAuY2FyZC1ob21lIGgzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKkRpcmVjdGlvbiByZXZlYWwqL1xyXG4uY2FyZC1ob21lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWhvbWVfX2FuaW0tLWluLFxyXG4uY2FyZC1ob21lX19hbmltLS1vdXQge1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCk7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jYXJkLWhvbWVfX292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICBhbmltYXRpb24tbmFtZTogcmVzZXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVzZXQge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ob21lX190aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMzMsIDMzLCAuOCk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcmQtaG9tZV9fb3B0aW9ucyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzOXB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ob21lX19vcHRpb25zPmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWhvbWVfX29wdGlvbnM+YSBzcGFuIHtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcclxuICAgIHZhcigtLXdoaXRlKSAwLFxyXG4gICAgdmFyKC0td2hpdGUpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMS4wNGVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWhvbWVfX29wdGlvbnM+YSBzcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container\" *ngIf=\"swiperImages\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"img-container swiper-slide\" *ngFor=\"let img of swiperImages\">\r\n      <img src=\"./assets/home/carousel/{{img}}\" alt=\"\" class=\"\">\r\n    </div>\r\n  </div>\r\n  <!-- Add Pagination -->\r\n  <div class=\"swiper-pagination\"></div>\r\n  <!-- Add Arrows -->\r\n  <div class=\"swiper-controls\">\r\n    <div class=\"swiper-button-next\">\r\n      <i class=\"material-icons\">keyboard_arrow_right</i>\r\n    </div>\r\n    <div class=\"swiper-button-prev\">\r\n      <i class=\"material-icons\">keyboard_arrow_left</i>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p class=\"description\">\r\n  <!--Descripción del departamento-->\r\n</p>\r\n\r\n\r\n<div class=\"cards-home\">\r\n  <a href=\"#\" class=\"card-home\">\r\n    <img src=\"./assets/home/cards/personal.jpg\" alt=\"Image\" class=\"img-fluid\">\r\n    <h3 class=\"card-home__title\" translate>direccion</h3>\r\n    <div class=\"card-home__overlay card-home__anim--in\" [ngStyle]=\"{'animation-duration': fixDirectionReveal}\">\r\n      <div class=\"card-home__options\">\r\n        <a routerLink=\"/direccion-profesorado/direccion\">\r\n          <span translate>direccion</span>\r\n        </a>\r\n        <a routerLink=\"/direccion-profesorado/secretaria\">\r\n          <span translate>secretaria</span>\r\n        </a>\r\n        <a routerLink=\"/direccion-profesorado/profesorado\">\r\n          <span translate>profesorado</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a href=\"#\" class=\"card-home\">\r\n    <img src=\"./assets/home/cards/docencia.png\" alt=\"Image\" class=\"img-fluid\">\r\n    <h3 class=\"card-home__title\" translate>docencia.titulo</h3>\r\n    <div class=\"card-home__overlay card-home__anim--in\" [ngStyle]=\"{'animation-duration': fixDirectionReveal}\">\r\n      <div class=\"card-home__options\">\r\n        <a routerLink=\"/grado\">\r\n          <span translate>docencia.grado</span>\r\n        </a>\r\n        <a routerLink=\"/posgrado\">\r\n          <span translate>docencia.posgrado</span>\r\n        </a>\r\n        <a routerLink=\"/memoria\">\r\n          <span translate>docencia.report</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a href=\"#\" class=\"card-home\">\r\n    <img src=\"./assets/home/cards/research.png\" alt=\"Image\" class=\"img-fluid\">\r\n    <h3 class=\"card-home__title\" translate>investigacion</h3>\r\n    <div class=\"card-home__overlay card-home__anim--in\" [ngStyle]=\"{'animation-duration': fixDirectionReveal}\">\r\n      <div class=\"card-home__options\">\r\n        <a routerLink=\"/grupo-i-d+i\">\r\n          <span translate>IDi</span>\r\n        </a>\r\n        <a routerLink=\"/innovacion-docente\">\r\n          <span translate>innovacion_docente</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <a href=\"#\" class=\"card-home\">\r\n    <img src=\"./assets/home/cards/explore.jpg\" alt=\"Image\" class=\"img-fluid\">\r\n    <h3 class=\"card-home__title\" translate>explorar</h3>\r\n    <div class=\"card-home__overlay card-home__anim--in\" [ngStyle]=\"{'animation-duration': fixDirectionReveal}\">\r\n      <div class=\"card-home__options\">\r\n        <a routerLink=\"/explorar\">\r\n          <span translate>noticias_eventos</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var direction_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! direction-reveal */ "./node_modules/direction-reveal/index.js");
/* harmony import */ var direction_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(direction_reveal__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.swiperImages = [
            'picture1.jpg',
            'picture2.jpg',
            'picture3.jpg',
            'picture4.jpg',
            'picture5.jpg',
            'picture6.jpg'
        ];
        this.fixDirectionReveal = '0';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.directionReveal();
    };
    HomeComponent.prototype.directionReveal = function () {
        var _this = this;
        direction_reveal__WEBPACK_IMPORTED_MODULE_2___default()({
            selector: '.cards-home',
            itemSelector: '.card-home',
            animationName: 'slide',
            enableTouch: true,
            touchThreshold: 250 // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
        });
        setTimeout(function () {
            _this.fixDirectionReveal = '.3s';
            var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        }, 300);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css"), __webpack_require__(/*! ../../swiper.min.css */ "./src/app/swiper.min.css"), __webpack_require__(/*! ./direction-reveal.css */ "./src/app/components/home/direction-reveal.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/innovacion-docente/innovacion-docente.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/innovacion-docente/innovacion-docente.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".groups {\r\n  margin-top: 20px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 280px);\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.group-name {\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  padding-left: 5px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.group-name a {\r\n  color: inherit;\r\n  font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbm5vdmFjaW9uLWRvY2VudGUvaW5ub3ZhY2lvbi1kb2NlbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLCtDQUErQztFQUMvQyxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lubm92YWNpb24tZG9jZW50ZS9pbm5vdmFjaW9uLWRvY2VudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cHMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjgwcHgpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZ3JvdXAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5ncm91cC1uYW1lIGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/innovacion-docente/innovacion-docente.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/innovacion-docente/innovacion-docente.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\" style=\"padding:10px 50px;\">\n  <span>Grupos Innovación Docente</span>\n</h2>\n<section class=\"groups\" style=\"padding:10px 50px;\">\n  <div *ngFor=\"let group of idGroups\">\n    <h3 class=\"group-name\">{{group.nombre}} - <a href=\"{{group.enlace.href}}\">{{group.enlace.texto}}</a></h3>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/innovacion-docente/innovacion-docente.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/innovacion-docente/innovacion-docente.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InnovacionDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnovacionDocenteComponent", function() { return InnovacionDocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InnovacionDocenteComponent = /** @class */ (function () {
    function InnovacionDocenteComponent() {
        this.idGroups = [];
        this.idGroups = [
            {
                nombre: 'Grupo 1',
                enlace: { href: '', texto: 'Enlace 1' },
                integrantes: ['Persona 1', 'Person2'],
                img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
            },
            {
                nombre: 'Grupo 2',
                enlace: { href: '', texto: 'Enlace 2' },
                img: ['./assets/acreditacioninternacional.jpg', 'CarruselMasterok.jpg']
            }
        ];
    }
    InnovacionDocenteComponent.prototype.ngOnInit = function () { };
    InnovacionDocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-innovacion-docente',
            template: __webpack_require__(/*! ./innovacion-docente.component.html */ "./src/app/components/innovacion-docente/innovacion-docente.component.html"),
            styles: [__webpack_require__(/*! ./innovacion-docente.component.css */ "./src/app/components/innovacion-docente/innovacion-docente.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InnovacionDocenteComponent);
    return InnovacionDocenteComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/loading.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dots {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 50px 0;\r\n}\r\n\r\n.dots div {\r\n  --d: 15px;\r\n  margin: 0 var(--d);\r\n  background: var(--primary);\r\n  height: var(--d);\r\n  width: var(--d);\r\n  border-radius: 50%;\r\n  --timing: 1s;\r\n  -webkit-transform-origin: calc(var(--d) * 2);\r\n          transform-origin: calc(var(--d) * 2);\r\n\r\n}\r\n\r\n.dots div:nth-child(1) {\r\n  -webkit-animation: arcTop var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n          animation: arcTop var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n}\r\n\r\n.dots div:nth-child(2) {\r\n  -webkit-animation: arcBottom var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n          animation: arcBottom var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n}\r\n\r\n.dots div:nth-child(3) {\r\n  -webkit-animation: mid var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n          animation: mid var(--timing) cubic-bezier(.53, .29, .21, .78) .3s infinite;\r\n}\r\n\r\n@-webkit-keyframes arcTop {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n@keyframes arcTop {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes arcBottom {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(-180deg);\r\n            transform: rotate(-180deg);\r\n  }\r\n}\r\n\r\n@keyframes arcBottom {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(-180deg);\r\n            transform: rotate(-180deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes mid {\r\n  0% {\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(calc(var(--d) * -6));\r\n            transform: translate(calc(var(--d) * -6));\r\n  }\r\n}\r\n\r\n@keyframes mid {\r\n  0% {\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0)\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(calc(var(--d) * -6));\r\n            transform: translate(calc(var(--d) * -6));\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2Q0FBcUM7VUFBckMscUNBQXFDOztDQUV0Qzs7QUFFRDtFQUNFLHNGQUE4RTtVQUE5RSw4RUFBOEU7Q0FDL0U7O0FBR0Q7RUFDRSx5RkFBaUY7VUFBakYsaUZBQWlGO0NBQ2xGOztBQUVEO0VBQ0UsbUZBQTJFO1VBQTNFLDJFQUEyRTtDQUM1RTs7QUFFRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjs7QUFSRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7R0FDNUI7Q0FDRjs7QUFSRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7R0FDNUI7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGtEQUEwQztZQUExQywwQ0FBMEM7R0FDM0M7Q0FDRjs7QUFSRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLGtEQUEwQztZQUExQywwQ0FBMEM7R0FDM0M7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLmRvdHMgZGl2IHtcclxuICAtLWQ6IDE1cHg7XHJcbiAgbWFyZ2luOiAwIHZhcigtLWQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGhlaWdodDogdmFyKC0tZCk7XHJcbiAgd2lkdGg6IHZhcigtLWQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLXRpbWluZzogMXM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYyh2YXIoLS1kKSAqIDIpO1xyXG5cclxufVxyXG5cclxuLmRvdHMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uOiBhcmNUb3AgdmFyKC0tdGltaW5nKSBjdWJpYy1iZXppZXIoLjUzLCAuMjksIC4yMSwgLjc4KSAuM3MgaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG4uZG90cyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb246IGFyY0JvdHRvbSB2YXIoLS10aW1pbmcpIGN1YmljLWJlemllciguNTMsIC4yOSwgLjIxLCAuNzgpIC4zcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmRvdHMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uOiBtaWQgdmFyKC0tdGltaW5nKSBjdWJpYy1iZXppZXIoLjUzLCAuMjksIC4yMSwgLjc4KSAuM3MgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXJjVG9wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhcmNCb3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtaWQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tZCkgKiAtNikpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dots\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/memoria/memoria.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/memoria/memoria.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  display: flex;\r\n  border-bottom: 2px solid var(--primary);\r\n}\r\n\r\n.table-header__option {\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n  border-radius: 2px 2px 0 0;\r\n}\r\n\r\n.table-header__option:hover:not(.selected) {\r\n  color: var(--primary);\r\n  font-weight: 700;\r\n}\r\n\r\n.table-header__option.selected {\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.table-content {\r\n  color: var(--main-black);\r\n}\r\n\r\n.table-content h4 {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  margin: 20px;\r\n  margin-bottom: 5px;\r\n\r\n}\r\n\r\n.report-section {\r\n  margin-top: 30px;\r\n}\r\n\r\n.table-content .report-section h4 {\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.general-report {\r\n  cursor: pointer;\r\n}\r\n\r\n.general-report:hover {\r\n  text-decoration: underline\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  grid-gap: 10px;\r\n  transition: 3s all ease;\r\n  color: var(--main-black);\r\n  margin: 10px 25px;\r\n}\r\n\r\n.column {\r\n  margin: 0 10px;\r\n}\r\n\r\n.grid h6 {\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.list {\r\n  margin-left: 30px;\r\n}\r\n\r\n.grid ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type: square;\r\n}\r\n\r\n.grid ul li:last-child {\r\n  display: none;\r\n}\r\n\r\n.grid ul li {\r\n  padding: 3px 0;\r\n  line-height: 15px;\r\n}\r\n\r\n.grid ul li a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  font-size: 13.5px;\r\n}\r\n\r\n.grid ul li a:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width:992px) {\r\n  .grid {\r\n    margin: 3px 8px;\r\n\r\n  }\r\n\r\n  .column {\r\n    margin: 0;\r\n  }\r\n\r\n  .table-content h4,\r\n  h4,\r\n  h6 {\r\n    margin: 10px 8px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width:992px) {\r\n  .fix-posgrade {\r\n    grid-row: end;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW1vcmlhL21lbW9yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3Q0FBd0M7Q0FDekM7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1COztDQUVwQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQiw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFJRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25COztBQUdEO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0U7SUFDRSxnQkFBZ0I7O0dBRWpCOztFQUVEO0lBQ0UsVUFBVTtHQUNYOztFQUVEOzs7SUFHRSxpQkFBaUI7R0FDbEI7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbW9yaWEvbWVtb3JpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXJfX29wdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlcl9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0ZWQpIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlcl9fb3B0aW9uLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4udGFibGUtY29udGVudCB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG59XHJcblxyXG4udGFibGUtY29udGVudCBoNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbn1cclxuXHJcbi5yZXBvcnQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRlbnQgLnJlcG9ydC1zZWN0aW9uIGg0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZ2VuZXJhbC1yZXBvcnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdlbmVyYWwtcmVwb3J0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogM3MgYWxsIGVhc2U7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gIG1hcmdpbjogMTBweCAyNXB4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZ3JpZCBoNiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcclxufVxyXG5cclxuLmdyaWQgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmdyaWQgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuLmdyaWQgdWwgbGkgYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG59XHJcblxyXG4uZ3JpZCB1bCBsaSBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBtYXJnaW46IDNweCA4cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udGVudCBoNCxcclxuICBoNCxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDEwcHggOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gIC5maXgtcG9zZ3JhZGUge1xyXG4gICAgZ3JpZC1yb3c6IGVuZDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/memoria/memoria.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/memoria/memoria.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\r\n  <h2 class=\"title\">\r\n    <span translate>docencia.report</span>\r\n  </h2>\r\n  <div class=\"table-header\">\r\n    <div class=\"table-header__option\" *ngFor=\"let item of reportData; let i = index\" [ngClass]=\"{'selected': currentSelected === i}\"\r\n      (click)=\"currentSelected = i\">\r\n      <span>{{item.year}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"table-content\" *ngFor=\"let type of reportData; let i = index\">\r\n    <div *ngIf=\"currentSelected === i\">\r\n      <div *ngFor=\"let row of type.content\">\r\n        <div *ngIf=\"row.title === 'general'\" class=\"general-report\">\r\n          <h4 translate>\r\n            docencia.{{row.reports[0].title}}\r\n          </h4>\r\n        </div>\r\n        <div *ngIf=\"row.title !== 'general'\" class=\"report-section\">\r\n          <h4>{{row.title}}</h4>\r\n          <div class=\"grid\">\r\n            <div class=\"column\" *ngFor=\"let column of row.reports\" [ngClass]=\"{'fix-posgrade':['titulos_universitarios', 'doctorado'].includes(column.title)}\">\r\n              <h6 *ngIf=\"column.title === 'intensificacion'\" translate>docencia.optativa</h6>\r\n              <h6 *ngIf=\"column.title !== 'intensificacion'\" translate>docencia.{{column.title}}</h6>\r\n              <div class=\"\r\n              list\">\r\n                <ul>\r\n                  <li *ngFor=\"let link of column.column\">\r\n                    <a target=\"_blank\" href=\"{{link.url}}\" translate>docencia.{{link.title}}</a>\r\n                  <li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/memoria/memoria.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/memoria/memoria.component.ts ***!
  \*********************************************************/
/*! exports provided: MemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoriaComponent", function() { return MemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spreadsheets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../spreadsheets.service */ "./src/app/spreadsheets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemoriaComponent = /** @class */ (function () {
    function MemoriaComponent(spreadsheetsService) {
        this.spreadsheetsService = spreadsheetsService;
        this.currentSelected = 0;
    }
    MemoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spreadsheetsService.report$
            .subscribe(function (data) {
            _this.reportData = data;
            _this.reportData.sort(function (a, b) {
                return parseInt(a.year.split('-')[0], 10) -
                    parseInt(b.year.split('-')[0], 10);
            });
            console.log('Información de memoria', _this.reportData);
        })
            .unsubscribe();
    };
    MemoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memoria',
            template: __webpack_require__(/*! ./memoria.component.html */ "./src/app/components/memoria/memoria.component.html"),
            styles: [__webpack_require__(/*! ./memoria.component.css */ "./src/app/components/memoria/memoria.component.css")]
        }),
        __metadata("design:paramtypes", [_spreadsheets_service__WEBPACK_IMPORTED_MODULE_1__["SpreadsheetsService"]])
    ], MemoriaComponent);
    return MemoriaComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\r\n  padding: 20px 25px;\r\n  background: var(--primary);\r\n  color: #fff;\r\n  height: 100%;\r\n  z-index: 100;\r\n  overflow: auto;\r\n  position: fixed;\r\n  width: 150px;\r\n  box-shadow: -2px 0px 32px 0px rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n/*Mobile*/\r\n\r\n@media screen and (max-width:992px) {\r\n  aside {\r\n    max-width: inherit;\r\n    width: 80vw;\r\n    box-shadow: none;\r\n  }\r\n}\r\n\r\n.menu-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.menu-header__logo {\r\n  width: 75px;\r\n  height: 75px;\r\n  background: #fff;\r\n}\r\n\r\n.menu-header__links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.menu-header__links a {\r\n  text-decoration: none;\r\n}\r\n\r\n.menu-header__links a span {\r\n  color: #fff;\r\n  line-height: 1.4;\r\n  background-image: linear-gradient(to right,\r\n    var(--white) 0,\r\n    var(--white) 100%);\r\n  background-position: 0 17.5px;\r\n  background-size: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background 0.5s;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.menu-header__links a span:hover {\r\n  background-size: 100% 100%;\r\n\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  font-size: 18px;\r\n  transition: .3s all var(--transition);\r\n}\r\n\r\n.submenu {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: 0.7s all cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.show {\r\n  max-height: 80px;\r\n}\r\n\r\n.submenu a li {\r\n  padding: 3px;\r\n  padding-left: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.submenu a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.submenu li:hover,\r\nspan.option:hover {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\nli .submenu li:hover {\r\n  background: var(--primary-darker);\r\n}\r\n\r\n.overlay-close {\r\n  position: fixed;\r\n  left: 0;\r\n  top: calc(var(--header-height));\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: #000;\r\n  opacity: .4;\r\n  z-index: -1;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0RBQWtEO0NBQ25EOztBQUVELFVBQVU7O0FBQ1Y7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCOzt1QkFFcUI7RUFDckIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMkJBQTJCOztDQUU1Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNDQUFzQztDQUN2Qzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsd0RBQXdEO0NBQ3pEOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtDQUNiOztBQUVEOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0Usa0NBQWtDO0NBQ25DOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXNpZGUge1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYm94LXNoYWRvdzogLTJweCAwcHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxufVxyXG5cclxuLypNb2JpbGUqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgYXNpZGUge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXJfX2xvZ28ge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXJfX2xpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlcl9fbGlua3MgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXJfX2xpbmtzIGEgc3BhbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXHJcbiAgICB2YXIoLS13aGl0ZSkgMCxcclxuICAgIHZhcigtLXdoaXRlKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDE3LjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXJfX2xpbmtzIGEgc3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIHZhcigtLXRyYW5zaXRpb24pO1xyXG59XHJcblxyXG4uc3VibWVudSB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuN3MgYWxsIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uc3VibWVudSBhIGxpIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnN1Ym1lbnUgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3VibWVudSBsaTpob3Zlcixcclxuc3Bhbi5vcHRpb246aG92ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxubGkgLnN1Ym1lbnUgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFya2VyKTtcclxufVxyXG5cclxuLm92ZXJsYXktY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBvcGFjaXR5OiAuNDtcclxuICB6LWluZGV4OiAtMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\r\n  <div class=\"menu-header\">\r\n    <div class=\"menu-header__logo\" *ngIf=\"getWidthStatus() === 'large'\"></div>\r\n    <div class=\"menu-header__links\">\r\n      <a href=\"http://etsamadrid.aq.upm.es/\">\r\n        <span>\r\n          ETSAM\r\n        </span>\r\n      </a>\r\n      <a href=\"http://www.upm.es/\">\r\n        <span>\r\n          UPM\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <nav>\r\n    <ul class=\"pages\">\r\n      <li>\r\n        <span class=\"option\" (click)=\"toggleSubmenu('personal')\" translate>direccion</span>\r\n        <ul class=\"submenu\" [ngClass]=\"{'show':submenuOptions.includes('personal')}\" id=\"personal\">\r\n          <a routerLink=\"/direccion-profesorado/direccion\">\r\n            <li translate>direccion</li>\r\n          </a>\r\n          <a routerLink=\"/direccion-profesorado/secretaria\">\r\n            <li translate>secretaria</li>\r\n          </a>\r\n          <a routerLink=\"/direccion-profesorado/profesorado\">\r\n            <li translate>profesorado</li>\r\n          </a>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <span class=\"option\" (click)=\"toggleSubmenu('teaching')\" translate>docencia.titulo</span>\r\n        <ul class=\"submenu\" [ngClass]=\"{'show':submenuOptions.includes('teaching')}\" id=\"teaching\">\r\n          <a routerLink=\"/grado\">\r\n            <li translate>docencia.grado</li>\r\n          </a>\r\n          <a routerLink=\"/posgrado\">\r\n            <li translate>docencia.posgrado</li>\r\n          </a>\r\n          <a routerLink=\"/memoria\">\r\n            <li translate>docencia.report</li>\r\n          </a>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <span class=\"option\" (click)=\"toggleSubmenu('research')\" translate>investigacion</span>\r\n        <ul class=\"submenu\" [ngClass]=\"{'show':submenuOptions.includes('research')}\" id=\"research\">\r\n          <a routerLink=\"/grupo-i-d+i\">\r\n            <li translate>IDi</li>\r\n          </a>\r\n          <a routerLink=\"/innovacion-docente\">\r\n            <li translate>innovacion_docente</li>\r\n          </a>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <span class=\"option\" (click)=\"toggleSubmenu('explore')\" translate>explorar</span>\r\n        <ul class=\"submenu\" [ngClass]=\"{'show':submenuOptions.includes('explore')}\" id=\"explore\">\r\n          <a routerLink=\"/explorar\">\r\n            <li translate>noticias_eventos</li>\r\n          </a>\r\n        </ul>\r\n      </li>\r\n      <li style=\"margin-top: 20px;font-size: 15px;\">\r\n        <span class=\"option\" (click)=\"switchLanguage()\" translate>language</span>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</aside>\r\n<div class=\"overlay-close\" (click)=\"closeMenu()\" *ngIf=\"getWidthStatus() !== 'large' && isOpen()\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(appService, router) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.submenuOptions = [];
        router.events
            .subscribe(function () {
            _this.setSubmenus();
        })
            .unsubscribe();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var links = document.querySelectorAll('.submenu a');
        links.forEach(function (a) {
            a.addEventListener('click', function () {
                _this.closeMenu();
            });
        });
    };
    MenuComponent.prototype.getWidthStatus = function () {
        return this.appService.screenWidth;
    };
    MenuComponent.prototype.toggleSubmenu = function (submenu) {
        if (this.submenuOptions.includes(submenu)) {
            this.submenuOptions.splice(this.submenuOptions.indexOf(submenu), 1);
        }
        else {
            this.submenuOptions.push(submenu);
        }
    };
    MenuComponent.prototype.setSubmenus = function () {
        var url = this.router.url;
        url = url.substring(1);
        if (url === 'home') {
            this.submenuOptions = ['personal', 'teaching', 'research', 'explore'];
        }
        else if (['grado', 'posgrado', 'memoria'].includes(url)) {
            this.submenuOptions = ['teaching'];
        }
        else if (['direccion-profesorado'].includes(url)) {
            this.submenuOptions = ['personal'];
        }
        else if (['grupo-i-d%2Bi', 'innovacion-docente'].includes(url)) {
            this.submenuOptions = ['research'];
        }
        else if (['explorar'].includes(url)) {
            this.submenuOptions = ['explore'];
        }
        else {
            this.submenuOptions = [];
        }
    };
    MenuComponent.prototype.isOpen = function () {
        var bool;
        this.appService.mobileMenu$.subscribe(function (b) { return (bool = b); }).unsubscribe();
        return bool;
    };
    MenuComponent.prototype.closeMenu = function () {
        this.appService.mobileMenu$.next(false);
    };
    MenuComponent.prototype.switchLanguage = function () {
        this.appService.switchLanguage();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/personal/personal.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/personal/personal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profesor {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 250px;\r\n  margin: 3px 10px;\r\n}\r\n\r\n.info-profesor {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n}\r\n\r\n.nombre {\r\n  font-size: 12px;\r\n}\r\n\r\n.cargo {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  color: #3e3e3e;\r\n}\r\n\r\n/*profesores*/\r\n\r\n/**************************SUBTITULO TIPO PROFESOR**************************/\r\n\r\n.titulo-tipo-profesor {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n/**************************TARJETAS PROFESORES**************************/\r\n\r\n.container-teachers {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));\r\n  grid-gap: 1rem;\r\n  margin-top: 10px;\r\n}\r\n\r\n.profesor {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 250px;\r\n  margin: 3px 10px;\r\n}\r\n\r\n.display-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.info-profesor {\r\n  min-width: 200px;\r\n  max-width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n}\r\n\r\n.img {\r\n  width: 60px;\r\n  height: 60px;\r\n  margin-right: 5px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.nombre {\r\n  font-size: 12.5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.nombre:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.cv-profesor {\r\n  max-width: 175px;\r\n  margin: 0;\r\n  padding: 0px;\r\n  font-size: 12px;\r\n  line-height: 11px;\r\n  max-height: 0;\r\n  overflow-y: hidden;\r\n  transition: .4s all var(--transition);\r\n  opacity: 0;\r\n}\r\n\r\n.cv-profesor__open {\r\n  max-height: 100px;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.cargo {\r\n  font-size: 11px;\r\n  color: #3e3e3e;\r\n}\r\n\r\n.correo {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n}\r\n\r\n.mailto-profesor {\r\n  width: 100%;\r\n}\r\n\r\n.clipboard,\r\n.input-email {\r\n  background: var(--main-bck);\r\n  border: 0;\r\n  cursor: pointer;\r\n  color: #3e3e3e;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.input-email {\r\n  width: 100%;\r\n  font-size: fit-width;\r\n}\r\n\r\n.clipboard {\r\n  font-size: 13px;\r\n}\r\n\r\n.more-info-btns {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  text-transform: lowercase;\r\n  font-size: 11px;\r\n}\r\n\r\n.btn-docencia {\r\n  margin-left: 10px;\r\n}\r\n\r\n.enlace {\r\n  color: #292b2c !important;\r\n}\r\n\r\n.more-info-btns div:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden-info {\r\n  font-size: 10px;\r\n  overflow-y: hidden;\r\n  max-height: 0;\r\n  transition: .3s all ease;\r\n}\r\n\r\n.show-classes {\r\n  max-height: inherit;\r\n}\r\n\r\n.classes-list li {\r\n  padding-left: 5px;\r\n  list-style: none;\r\n}\r\n\r\n/****LINK COPIED***/\r\n\r\n.link-copied {\r\n  background-color: #3d3d3d;\r\n  border-radius: 4px;\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: -250px;\r\n  color: #fff;\r\n  max-width: 250px;\r\n  z-index: 1007;\r\n  font-size: 15px;\r\n  line-height: 17px;\r\n  align-items: center;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  padding: 20px;\r\n  transition: 0.5s all ease;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUVELGNBQWM7O0FBQ2QsNkVBQTZFOztBQUM3RTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRCx5RUFBeUU7O0FBQ3pFO0VBQ0UsY0FBYztFQUNkLDZEQUE2RDtFQUM3RCxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQWtCO0tBQWxCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXOztDQUVaOztBQUlEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDs7RUFFRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjs7QUFFRCxvQkFBb0I7O0FBQ3BCO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmVzb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDNweCAxMHB4O1xyXG59XHJcblxyXG4uaW5mby1wcm9mZXNvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm5vbWJyZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZ28ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzNlM2UzZTtcclxufVxyXG5cclxuLypwcm9mZXNvcmVzKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqU1VCVElUVUxPIFRJUE8gUFJPRkVTT1IqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLnRpdHVsby10aXBvLXByb2Zlc29yIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKlRBUkpFVEFTIFBST0ZFU09SRVMqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmNvbnRhaW5lci10ZWFjaGVycyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNzVweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2Zlc29yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAzcHggMTBweDtcclxufVxyXG5cclxuLmRpc3BsYXktaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaW5mby1wcm9mZXNvciB7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm5vbWJyZSB7XHJcbiAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm9tYnJlOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmN2LXByb2Zlc29yIHtcclxuICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IC40cyBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmN2LXByb2Zlc29yX19vcGVuIHtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBvcGFjaXR5OiAxO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2FyZ28ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogIzNlM2UzZTtcclxufVxyXG5cclxuLmNvcnJlbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWFpbHRvLXByb2Zlc29yIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNsaXBib2FyZCxcclxuLmlucHV0LWVtYWlsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJjayk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzNlM2UzZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWVtYWlsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IGZpdC13aWR0aDtcclxufVxyXG5cclxuLmNsaXBib2FyZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubW9yZS1pbmZvLWJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tZG9jZW5jaWEge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZW5sYWNlIHtcclxuICBjb2xvcjogIzI5MmIyYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9yZS1pbmZvLWJ0bnMgZGl2OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oaWRkZW4taW5mbyB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxufVxyXG5cclxuLnNob3ctY2xhc3NlcyB7XHJcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNsYXNzZXMtbGlzdCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyoqKipMSU5LIENPUElFRCoqKi9cclxuLmxpbmstY29waWVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAtMjUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB6LWluZGV4OiAxMDA3O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/personal/personal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/personal/personal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <section style=\"padding: 50px;\" id=\"direccion\">\r\n    <h2 class=\"title\">\r\n      <span translate>personal.direccion</span>\r\n    </h2>\r\n    <div class=\"container-teachers\" style=\"padding: 10px;\">\r\n      <div class=\"profesor\" *ngFor=\"let profesor of dir_sec\">\r\n        <div class=\"info-profesor\">\r\n          <h3 class=\"titulo-tipo-profesor\" translate>{{profesor.cargo}}</h3>\r\n          <div class=\"nombre\">{{profesor.nombreCompleto}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section style=\"padding: 50px;\" id=\"secretaria\">\r\n\r\n    <h2 class=\"title\">\r\n      <span translate>personal.secretaria</span>\r\n    </h2>\r\n    <div class=\"all-info\" style=\"padding: 10px; margin-left:32px\">\r\n      <h3 class=\"titulo-tipo-profesor\" translate>{{secretaria.cargo}}</h3>\r\n\r\n      <div class=\"info-profesor\">\r\n        <div class=\"nombre\">{{secretaria.nombre}}</div>\r\n        <div class=\"contacto\">\r\n          <div class=\"correo\">\r\n            <a class=\"mailto-profesor\" href=\"mailto:{{secretaria.correo}}\">\r\n              <input readonly=\"readonly\" class=\"input-email\" value=\"{{secretaria.correo}}\">\r\n            </a>\r\n            <button class=\"material-icons clipboard\" (click)=\"copy(secretaria.correo)\">content_copy</button>\r\n          </div>\r\n          <div class=\"tel\">{{secretaria.tel}}</div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section style=\"padding: 50px;\" id=\"profesorado\">\r\n\r\n    <h2 class=\"title\">\r\n      <span translate>personal.profesorado</span>\r\n    </h2>\r\n    <div class=\"wrapper\" *ngFor=\"let teachers of fullList\" style=\"padding: 10px;\">\r\n      <h3 class=\"titulo-tipo-profesor\" translate>personal.{{teachers.title}}</h3>\r\n      <div class=\"container-teachers\">\r\n        <div class=\"profesor\" *ngFor=\"let teacher of teachers.teachers\">\r\n          <div class=\"display-info\">\r\n            <img class=\"img\" src=\"https://drive.google.com/uc?id={{teacher.imagen}}\" alt=\"\">\r\n            <div class=\"info-profesor\">\r\n              <div class=\"nombre\" (click)=\"showCV($event)\">{{teacher.apellidos}}, {{teacher.nombre}}</div>\r\n              <div class=\"info-hidden cv-profesor\"> {{teacher.curriculum}}</div>\r\n              <div class=\"correo\">\r\n                <a class=\"mailto-profesor\" href=\"mailto:{{teacher.correo}}\">\r\n                  <input readonly=\"readonly\" class=\"input-email\" value={{teacher.correo}}>\r\n                </a>\r\n                <button class=\"material-icons clipboard\" (click)=\"copy(teacher.correo)\">content_copy</button>\r\n              </div>\r\n              <div class=\"more-info\">\r\n                <div class=\"more-info-btns\">\r\n                  <a href=\"http://{{teacher.link}}\">\r\n                    <div class=\"enlace\" translate>personal.enlace</div>\r\n                  </a>\r\n                  <div class=\"btn-docencia\" (click)=\"showClasses($event)\" translate>docencia.titulo</div>\r\n                </div>\r\n                <div class=\"hidden-info\">\r\n                  <ul class=\"classes-list\">\r\n                    <li *ngFor=\"let clase of teacher.docenteEn\">{{clase}}</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"link-copied\">\r\n      Email copiado al portapapeles.\r\n    </div>\r\n  </section>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/components/personal/personal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/personal/personal.component.ts ***!
  \***********************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../,,/../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.dir_sec = [
            {
                cargo: 'Director',
                nombreCompleto: 'Raposo Grau, Javier Francisco',
                imagen: ''
            },
            {
                cargo: 'Secretario académico',
                nombreCompleto: 'Martínez Díaz, Ángel',
                imagen: ''
            }
        ];
        this.secretaria = {
            nombre: 'Grano de Oro Manzano, Eloisa',
            cargo: 'Secretaria',
            correo: 'ideación.arquitectura@upm.es',
            tel: '91 067 50 50'
        };
        this.fullList = [];
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.fetchInfo();
        console.log(this.fullList);
        this.activatedRoute.params.subscribe(function (p) {
            var section = document.getElementById(p.section);
            window.scroll(0, section.offsetTop);
        });
    };
    PersonalComponent.prototype.fetchInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.teachers('catedraticos', 1)];
                    case 1:
                        _a.catedraticos = _k.sent();
                        _b = this;
                        return [4 /*yield*/, this.teachers('titulares', 2)];
                    case 2:
                        _b.titulares = _k.sent();
                        _c = this;
                        return [4 /*yield*/, this.teachers('titulares_interinos', 3)];
                    case 3:
                        _c.titulares_interinos = _k.sent();
                        _d = this;
                        return [4 /*yield*/, this.teachers('titulares_escuela_universitaria', 4)];
                    case 4:
                        _d.titulares_escuela_universitaria = _k.sent();
                        _e = this;
                        return [4 /*yield*/, this.teachers('titulares_escuela_universitaria_interinos', 5)];
                    case 5:
                        _e.titulares_escuela_universitaria_interinos = _k.sent();
                        _f = this;
                        return [4 /*yield*/, this.teachers('contratados_doctores', 6)];
                    case 6:
                        _f.contratados_doctores = _k.sent();
                        _g = this;
                        return [4 /*yield*/, this.teachers('ayudantes_doctores', 7)];
                    case 7:
                        _g.ayudantes_doctores = _k.sent();
                        _h = this;
                        return [4 /*yield*/, this.teachers('asociados', 8)];
                    case 8:
                        _h.asociados = _k.sent();
                        _j = this;
                        return [4 /*yield*/, this.teachers('tecnico_laboratorio', 9)];
                    case 9:
                        _j.tecnico_laboratorio = _k.sent();
                        this.fullList = [
                            this.catedraticos,
                            this.titulares,
                            this.titulares_interinos,
                            this.titulares_escuela_universitaria,
                            this.titulares_escuela_universitaria_interinos,
                            this.contratados_doctores,
                            this.ayudantes_doctores,
                            this.asociados,
                            this.tecnico_laboratorio
                        ];
                        console.log(this.fullList);
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonalComponent.prototype.teachers = function (title, n) {
        var teachers = { title: title, teachers: [] };
        var url = "https://spreadsheets.google.com/feeds/list/" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].spreadsheets.teachers + "/" + n + "/public/values?alt=json";
        this.http.get(url).subscribe(function (data) {
            var teachersRaw = data.feed.entry;
            teachersRaw.map(function (teacherRaw) {
                var teacher = {
                    id: teacherRaw.gsx$id.$t,
                    nombre: teacherRaw.gsx$nombre.$t,
                    apellidos: teacherRaw.gsx$apellido1.$t + ' ' + teacherRaw.gsx$apellido2.$t,
                    correo: teacherRaw.gsx$correo.$t,
                    curriculum: teacherRaw.gsx$cv.$t,
                    imagen: teacherRaw.gsx$imagenid.$t.replace('ñ', 'n'),
                    link: teacherRaw.gsx$link.$t,
                    docenteEn: teacherRaw.gsx$docencia.$t.split(',')
                };
                teachers.teachers.push(teacher);
            });
        });
        return teachers;
    };
    PersonalComponent.prototype.showCV = function (e) {
        var teacher = e.target.closest('.info-profesor');
        var cv = teacher.querySelector('.cv-profesor');
        cv.classList.toggle('cv-profesor__open');
    };
    PersonalComponent.prototype.showClasses = function (e) {
        var parent = e.target.closest('.more-info');
        var classes = parent.querySelector('.hidden-info');
        classes.classList.toggle('show-classes');
    };
    PersonalComponent.prototype.copy = function (email) {
        navigator.clipboard
            .writeText(email)
            .then(function () {
            console.log('Email copied to clipboard');
        })
            .catch(function (err) {
            // This can happen if the user denies clipboard permissions:
            console.error('Could not copy text: ', err);
        });
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/components/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/components/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/components/posgrado/posgrado.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/posgrado/posgrado.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  display: flex;\r\n  border-bottom: 2px solid var(--primary);\r\n}\r\n\r\n.table-header__option {\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n  border-radius: 2px 2px 0 0;\r\n}\r\n\r\n.table-header__option:hover:not(.selected) {\r\n  color: var(--primary);\r\n  font-weight: 700;\r\n}\r\n\r\n.table-header__option.selected {\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.table-content {\r\n  color: var(--main-black);\r\n}\r\n\r\n.table-content h6 {\r\n  font-size: 12px;\r\n  margin: 5px 20px;\r\n  margin-top: 19px;\r\n  text-transform: uppercase;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  margin: 0;\r\n  margin-bottom: 13px;\r\n  list-style: none;\r\n  cursor: default;\r\n}\r\n\r\nul li {\r\n  padding: 5px 0;\r\n}\r\n\r\nul li a,\r\nul li span {\r\n  font-size: 14px;\r\n}\r\n\r\nul li {\r\n  padding: 0 3px;\r\n}\r\n\r\nul li p {\r\n  border-left: 3px solid transparent;\r\n  transition: 0.3s all var(--transition);\r\n  padding: 5px 3px;\r\n}\r\n\r\nul li p:hover {\r\n  border-left: 3px solid var(--primary);\r\n}\r\n\r\n.links {\r\n  margin-left: 6px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  ul li p {\r\n    display: inline-block;\r\n    line-height: 1.3;\r\n    text-decoration: none;\r\n    background-image: linear-gradient(to right,\r\n      var(--main-black) 0,\r\n      var(--main-black) 6%);\r\n    background-position: 5px 21px;\r\n    background-size: 0% 6%;\r\n    background-repeat: no-repeat;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .table-content h6 {\r\n    margin-left: 5px;\r\n  }\r\n\r\n  ul {\r\n    padding-left: 5px;\r\n  }\r\n\r\n\r\n\r\n  a:hover {\r\n    text-decoration: underline;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3NncmFkby9wb3NncmFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdDQUF3QztDQUN6Qzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7O0VBRUUsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7O0FBR0Q7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCOzs0QkFFd0I7SUFDeEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsVUFBVTtHQUNYO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGtCQUFrQjtHQUNuQjs7OztFQUlEO0lBQ0UsMkJBQTJCO0dBQzVCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc2dyYWRvL3Bvc2dyYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlcl9fb3B0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyX19vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZCkge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyX19vcHRpb24uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50IHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250ZW50IGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweDtcclxuICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG51bCBsaSBhLFxyXG51bCBsaSBzcGFuIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICBwYWRkaW5nOiAwIDNweDtcclxufVxyXG5cclxudWwgbGkgcCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcclxuICBwYWRkaW5nOiA1cHggM3B4O1xyXG59XHJcblxyXG51bCBsaSBwOmhvdmVyIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxyXG4gICAgICB2YXIoLS1tYWluLWJsYWNrKSAwLFxyXG4gICAgICB2YXIoLS1tYWluLWJsYWNrKSA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggMjFweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMCUgNiU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRhYmxlLWNvbnRlbnQgaDYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/posgrado/posgrado.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/posgrado/posgrado.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\r\n  <h2 class=\"title\" id=\"grado\" translate>\r\n    <span translate>docencia.posgrado</span>\r\n  </h2>\r\n\r\n  <div class=\"table-header\">\r\n    <div class=\"table-header__option\" *ngFor=\"let item of posgradeData\" [ngClass]=\"{'selected': item.title == currentSelected}\"\r\n      (click)=\"currentSelected = item.title\">\r\n      <span translate>docencia.{{item.title}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"table-content\" *ngFor=\"let type of posgradeData\">\r\n    <div *ngIf=\"currentSelected === type.title\">\r\n      <div class=\"options\" *ngFor=\"let studies of type.studies\">\r\n        <h6 translate>docencia.{{studies.title}}</h6>\r\n        <ul>\r\n          <li *ngFor=\"let item of studies.options\">\r\n            <a *ngIf=\"item.link !== ''\" href=\"{{item.link}}\">\r\n              <p (mouseleave)=\"leaveSubject($event)\" (mouseenter)=\"overSubject($event)\" translate>docencia.{{item.title}}</p>\r\n            </a>\r\n            <div class=\"links\" *ngIf=\"item.link === ''\">\r\n              <span translate>docencia.{{item.title}}</span>\r\n              <ul>\r\n                <li *ngFor=\"let link of item.linkList\">\r\n                  <a href=\"{{link.url}}\" target=\"_blank\">\r\n                    <p (mouseleave)=\"leaveSubject($event)\" (mouseenter)=\"overSubject($event)\" translate>{{link.text}}</p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/posgrado/posgrado.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/posgrado/posgrado.component.ts ***!
  \***********************************************************/
/*! exports provided: PosgradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosgradoComponent", function() { return PosgradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spreadsheets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../spreadsheets.service */ "./src/app/spreadsheets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosgradoComponent = /** @class */ (function () {
    function PosgradoComponent(spreadsheet) {
        this.spreadsheet = spreadsheet;
        this.loading = false;
        this.currentSelected = 'titulos_universitarios';
    }
    PosgradoComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    PosgradoComponent.prototype.fetchData = function () {
        var _this = this;
        this.spreadsheet.posgradeData$
            .subscribe(function (data) {
            _this.posgradeData = data;
            _this.loading = true;
            console.log('Información de posgrado', data);
        }, function (error) {
            console.error(error);
        })
            .unsubscribe();
    };
    PosgradoComponent.prototype.leaveSubject = function (e) {
        e.target.style.backgroundSize = '0% 6%';
    };
    PosgradoComponent.prototype.overSubject = function (e) {
        e.target.style.backgroundSize = '100% 6%';
    };
    PosgradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posgrado',
            template: __webpack_require__(/*! ./posgrado.component.html */ "./src/app/components/posgrado/posgrado.component.html"),
            styles: [__webpack_require__(/*! ./posgrado.component.css */ "./src/app/components/posgrado/posgrado.component.css")]
        }),
        __metadata("design:paramtypes", [_spreadsheets_service__WEBPACK_IMPORTED_MODULE_1__["SpreadsheetsService"]])
    ], PosgradoComponent);
    return PosgradoComponent;
}());



/***/ }),

/***/ "./src/app/components/subject/subject.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/subject/subject.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  margin-top: 20px;\r\n}\r\n\r\n.subtitle {\r\n  margin: 5px 0;\r\n  font-size: 14px;\r\n  color: #444;\r\n}\r\n\r\n.subject,\r\n.group {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n.subject>div,\r\n.groups__list,\r\n.group>div {\r\n  margin: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\n.subject h4,\r\n.group h4 {\r\n  margin: 0;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.subject p {\r\n  margin: 5px 10px;\r\n}\r\n\r\n.subject ul,\r\n.group ul {\r\n  list-style-type: square;\r\n  padding: 0;\r\n  margin: 5px 23px;\r\n}\r\n\r\n.subject div ul li,\r\n.group div ul li {\r\n  padding: 5px 0;\r\n}\r\n\r\n.groups__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.groups__list:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.groups__list>div {\r\n  border: 1px solid var(--main-black);\r\n  border-radius: 3px;\r\n  padding: 5px 10px;\r\n  white-space: nowrap;\r\n  margin: 5px;\r\n  font-size: 13px;\r\n}\r\n\r\n.groups__list>div.active {\r\n  background: var(--primary);\r\n  color: var(--white);\r\n  border-color: var(--primary);\r\n}\r\n\r\n.groups__list>div:hover:not(.active) {\r\n  background: #e5e6e8;\r\n}\r\n\r\n.horizontal-divisor {\r\n  width: calc(100% - 50px);\r\n  margin: 0 auto;\r\n  background: var(--main-black);\r\n  opacity: .2;\r\n  height: 1px;\r\n}\r\n\r\n.group div ul li a {\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0L3N1YmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEOztFQUVFLGNBQWM7RUFDZCw0REFBNEQ7Q0FDN0Q7O0FBRUQ7OztFQUdFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBSUQ7O0VBRUUsVUFBVTtFQUNWLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDs7RUFFRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGlCQUFpQjtDQUNsQjs7QUFFRDs7RUFFRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFHRDtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViamVjdC9zdWJqZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5zdWJqZWN0LFxyXG4uZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbn1cclxuXHJcbi5zdWJqZWN0PmRpdixcclxuLmdyb3Vwc19fbGlzdCxcclxuLmdyb3VwPmRpdiB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4uc3ViamVjdCBoNCxcclxuLmdyb3VwIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5zdWJqZWN0IHAge1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJqZWN0IHVsLFxyXG4uZ3JvdXAgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiA1cHggMjNweDtcclxufVxyXG5cclxuLnN1YmplY3QgZGl2IHVsIGxpLFxyXG4uZ3JvdXAgZGl2IHVsIGxpIHtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuLmdyb3Vwc19fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5ncm91cHNfX2xpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5ncm91cHNfX2xpc3Q+ZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJsYWNrKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5ncm91cHNfX2xpc3Q+ZGl2LmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZ3JvdXBzX19saXN0PmRpdjpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU2ZTg7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWRpdmlzb3Ige1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICBvcGFjaXR5OiAuMjtcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLmdyb3VwIGRpdiB1bCBsaSBhIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/subject/subject.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/subject/subject.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\" id=\"subjectInfo\">\r\n\r\n  <div *ngIf=\"subject\">\r\n    <h2 class=\"title\" translate>\r\n      docencia.{{subject.subject.name}}\r\n    </h2>\r\n    <h5 class=\"subtitle\">\r\n      Asignaturas&nbsp;\r\n      <span translate>\r\n        docencia.{{subject.type}}\r\n      </span>\r\n      -\r\n      <span>\r\n        {{subject.subject.course}}º curso\r\n      </span>\r\n      -\r\n      <span>\r\n        {{subject.subject.code}}\r\n      </span>\r\n\r\n    </h5>\r\n    <div class=\"subject\">\r\n      <div class=\"\" *ngIf=\"subject.subject.coordinator !== ''\">\r\n        <h4><span translate>docencia.coordinador</span>:</h4>\r\n        <p>\r\n          {{subject.subject.coordinator}}\r\n        </p>\r\n      </div>\r\n      <div *ngIf=\"subject.subject.description !== ''\">\r\n        <h4><span translate>docencia.descripcion</span>:</h4>\r\n        <p>\r\n          {{subject.subject.description}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"horizontal-divisor\"></div>\r\n\r\n    <div class=\"swiper-wrapper\">\r\n    </div>\r\n    <div class=\"groups__list\">\r\n      <div *ngFor=\"let group of subject.subject.groups\" [ngClass]=\"{'active':subject.group.name === group.name && subject.group.code === group.code}\">\r\n        <span (click)=\"goTo('grupo_' + group.name)\" *ngIf=\"['básica', 'intensificacion'].includes(subject.type)\">\r\n          <span translate>docencia.group</span> {{group.name | uppercase}}\r\n        </span>\r\n        <span (click)=\"goTo(group.name, group.code)\" *ngIf=\"!['básica', 'intensificacion'].includes(subject.type)\">{{group.code}}.\r\n          <span translate>docencia.{{group.name}}</span></span>\r\n      </div>\r\n    </div>\r\n    <app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n    <div class=\"group\" [ngStyle]=\"{'opacity': loading ? 0 : 1}\">\r\n      <div *ngFor=\"let object of subject.groupMeta\">\r\n        <div>\r\n          <h4>{{object.title}}:</h4>\r\n          <ul>\r\n            <li *ngFor=\"let item of object.values\">\r\n              <a *ngIf=\"isLink(item)\" href=\"{{addHtpp(item)}}\">{{item}}</a>\r\n              <span *ngIf=\"!isLink(item)\">{{item}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/subject/subject.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/subject/subject.component.ts ***!
  \*********************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spreadsheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spreadsheets.service */ "./src/app/spreadsheets.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(spreadsheetsService, appService, activatedRoute, router) {
        this.spreadsheetsService = spreadsheetsService;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.order = ['profesores', 'enlaces', 'avisos'];
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (p) {
            _this.getSubject();
        });
    };
    SubjectComponent.prototype.getSubject = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.params
            .subscribe(function (p) {
            _this.subject = _this.spreadsheetsService.getSubject(_this.gradeData, p);
            if (_this.subject === undefined) {
                setTimeout(function () {
                    _this.getSubject();
                    return;
                }, 100);
            }
            else {
                _this.getGroup();
                setTimeout(function () {
                    _this.scrollToView();
                    document
                        .querySelectorAll('.swiper-slide>span')
                        .forEach(function (span, i) {
                        document.querySelectorAll('.swiper-slide')[i].style.width = span.offsetWidth + 'px';
                    });
                });
                console.log('Información de asignatura:', _this.subject);
            }
        })
            .unsubscribe();
    };
    SubjectComponent.prototype.getGroup = function () {
        var _this = this;
        this.subject.groupMeta = this.spreadsheetsService.getGroup(this.subject.subject.spreadsheetId, this.subject.group.page);
        setTimeout(function () {
            _this.loading = false;
        }, 1500);
        console.log('Información del grupo', this.subject.groupMeta);
    };
    SubjectComponent.prototype.scrollToView = function () {
        document
            .getElementById('subjectInfo')
            .scrollIntoView({ behavior: 'smooth' });
    };
    SubjectComponent.prototype.goTo = function (group, code) {
        var _this = this;
        if (code === void 0) { code = '1'; }
        this.activatedRoute.params
            .subscribe(function (p) {
            _this.router.navigate([
                'grado',
                p.quarter,
                p.type,
                p.subject,
                group,
                code
            ]);
            setTimeout(function () {
                _this.getSubject();
            }, 50);
        })
            .unsubscribe();
    };
    SubjectComponent.prototype.isLink = function (str) {
        var regex = /(https?:\/\/|www)[^\s]+/gm;
        return regex.exec(str) !== null;
    };
    SubjectComponent.prototype.addHtpp = function (str) {
        var regex = /(www)[^\s]+/gm;
        if (regex.exec(str) === null) {
            return str;
        }
        else {
            return 'http://' + str;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubjectComponent.prototype, "gradeData", void 0);
    SubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/components/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/components/subject/subject.component.css"), __webpack_require__(/*! ../../swiper.min.css */ "./src/app/swiper.min.css")]
        }),
        __metadata("design:paramtypes", [_spreadsheets_service__WEBPACK_IMPORTED_MODULE_2__["SpreadsheetsService"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_grado_grado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/grado/grado.component */ "./src/app/components/grado/grado.component.ts");
/* harmony import */ var _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/personal/personal.component */ "./src/app/components/personal/personal.component.ts");
/* harmony import */ var _components_memoria_memoria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/memoria/memoria.component */ "./src/app/components/memoria/memoria.component.ts");
/* harmony import */ var _components_posgrado_posgrado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/posgrado/posgrado.component */ "./src/app/components/posgrado/posgrado.component.ts");
/* harmony import */ var _components_explorar_explorar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/explorar/explorar.component */ "./src/app/components/explorar/explorar.component.ts");
/* harmony import */ var _components_grupos_idi_grupos_idi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/grupos-idi/grupos-idi.component */ "./src/app/components/grupos-idi/grupos-idi.component.ts");
/* harmony import */ var _components_innovacion_docente_innovacion_docente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/innovacion-docente/innovacion-docente.component */ "./src/app/components/innovacion-docente/innovacion-docente.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components









var routes = [
    { path: 'innovacion-docente', component: _components_innovacion_docente_innovacion_docente_component__WEBPACK_IMPORTED_MODULE_9__["InnovacionDocenteComponent"] },
    { path: 'grupo-i-d+i', component: _components_grupos_idi_grupos_idi_component__WEBPACK_IMPORTED_MODULE_8__["GruposIdiComponent"] },
    { path: 'posgrado', component: _components_posgrado_posgrado_component__WEBPACK_IMPORTED_MODULE_6__["PosgradoComponent"] },
    { path: 'explorar', component: _components_explorar_explorar_component__WEBPACK_IMPORTED_MODULE_7__["ExplorarComponent"] },
    { path: 'memoria', component: _components_memoria_memoria_component__WEBPACK_IMPORTED_MODULE_5__["MemoriaComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'grado', component: _components_grado_grado_component__WEBPACK_IMPORTED_MODULE_3__["GradoComponent"] },
    { path: 'direccion-profesorado/:section', component: _components_personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"] },
    {
        path: 'grado/:quarter/:type/:subject/:group/:code',
        component: _components_grado_grado_component__WEBPACK_IMPORTED_MODULE_3__["GradoComponent"]
    },
    {
        path: '**',
        component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/spreadsheets.service.ts":
/*!*****************************************!*\
  !*** ./src/app/spreadsheets.service.ts ***!
  \*****************************************/
/*! exports provided: SpreadsheetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadsheetsService", function() { return SpreadsheetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpreadsheetsService = /** @class */ (function () {
    function SpreadsheetsService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.gradeData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getGradeData());
        this.gradeLinks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getGradeLinks());
        this.posgradeData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getPosgradeData());
        this.report$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getReports());
    }
    SpreadsheetsService.prototype.getJSON = function (id, n) {
        if (n === void 0) { n = 1; }
        var url = "https://spreadsheets.google.com/feeds/list/" + id + "/" + n + "/public/values?alt=json";
        return this.http.get(url);
    };
    SpreadsheetsService.prototype.getGradeLinks = function () {
        var links = [];
        this.getJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spreadsheets.grade.subjects, 2).subscribe(function (data) {
            var row = data.feed.entry[0];
            links.push({
                text: 'planificacion_docente',
                url: row.gsx$planificaciondocente.$t
            }, {
                text: 'calendario_escolar',
                url: row.gsx$calendarioescolar.$t
            }, {
                text: 'calendario_de_examenes',
                url: row.gsx$calendariodeexamenes.$t
            });
        });
        return links;
    };
    SpreadsheetsService.prototype.getGradeData = function () {
        var all = [];
        this.getJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spreadsheets.grade.subjects).subscribe(function (data) {
            var quarter, lastCourse, lastQuarter, type, lastType, subject, lastSubject;
            data.feed.entry.map(function (e) {
                if (e.gsx$cuatrimestre.$t.trim() !== lastQuarter) {
                    lastQuarter = e.gsx$cuatrimestre.$t.trim();
                    quarter = {
                        quarter: lastQuarter,
                        types: []
                    };
                    all.push(quarter);
                }
                if (e.gsx$tipo.$t.trim() !== lastType ||
                    e.gsx$curso.$t.trim() !== lastCourse) {
                    lastCourse = e.gsx$curso.$t.trim();
                    lastType = e.gsx$tipo.$t.trim();
                    type = {
                        type: e.gsx$tipo.$t.trim(),
                        subjects: [],
                        course: parseInt(e.gsx$curso.$t.trim(), 10)
                    };
                    quarter.types.push(type);
                }
                if (e.gsx$asignatura.$t.trim() !== lastSubject) {
                    lastSubject = e.gsx$asignatura.$t.trim();
                    subject = {
                        name: lastSubject,
                        groups: [],
                        spreadsheetId: e.gsx$id.$t.trim(),
                        code: e.gsx$codigo.$t.trim(),
                        description: e.gsx$descripcion.$t.trim(),
                        coordinator: e.gsx$coordinador.$t.trim(),
                        course: e.gsx$curso.$t.trim(),
                        links: []
                    };
                    type.subjects.push(subject);
                }
                if (e.gsx$grupo.$t.trim() === '') {
                    subject.links.push({
                        url: e.gsx$url.$t.trim(),
                        text: e.gsx$texto.$t.trim()
                    });
                }
                else {
                    subject.groups.push({
                        name: e.gsx$grupo.$t.trim(),
                        page: e.gsx$pagina.$t.trim(),
                        code: e.gsx$codigogrupo.$t.trim()
                    });
                }
            });
            all.map(function (q) {
                return q.types.map(function (t) {
                    return t.subjects.sort(function (a, b) {
                        t.subjects.map(function (s) {
                            // Sort group by code if it has code, otherwise, order by name
                            return s.groups.sort(function (c, d) {
                                return c.code !== ''
                                    ? c.code < d.code
                                        ? 1
                                        : -1
                                    : c.name < d.name
                                        ? -1
                                        : 1;
                            });
                        });
                        // Sort subjects by code.
                        return a < b ? -1 : 1;
                    });
                });
            });
        });
        return all;
    };
    SpreadsheetsService.prototype.getSubject = function (data, p) {
        var coincidences = [];
        data.map(function (quarter) {
            quarter.types.map(function (type) {
                type.subjects.map(function (subject) {
                    subject.groups.map(function (group) {
                        var groupP = ['básica', 'intensificacion'].includes(type.type)
                            ? p.group.split('_')[1]
                            : p.group;
                        if ("cuatrimestre_" + quarter.quarter === p.quarter &&
                            type.type === p.type &&
                            subject.name === p.subject &&
                            group.name === groupP) {
                            coincidences.push({
                                quarter: p.quarter,
                                type: p.type,
                                subject: subject,
                                group: group
                            });
                        }
                    });
                });
            });
        });
        if (coincidences.length > 1 && p.code !== undefined) {
            coincidences = coincidences.filter(function (e) {
                return e.group.code === p.code;
            });
        }
        return coincidences[0];
    };
    SpreadsheetsService.prototype.getGroup = function (id, page) {
        var _this = this;
        var groupData = [];
        groupData.find(function (e) { return true; });
        this.getJSON(id, page).subscribe(function (data) {
            data.feed.entry.map(function (e) {
                var keys = Object.keys(e).filter(function (key) { return key.match(/gsx\$\w+/g); });
                keys.splice(keys.indexOf('gsx$grupo'), 1);
                keys.map(function (key) {
                    if (e[key].$t.trim() !== '' || e[key].$t.trim() !== null) {
                        if (groupData.find(function (ee) { return ee.title === key.replace('gsx$', ''); }) ===
                            undefined) {
                            groupData.push({
                                title: key.replace('gsx$', ''),
                                values: []
                            });
                        }
                        if (e[key].$t.trim() !== '') {
                            var index = groupData.findIndex(function (ee) { return ee.title === key.replace('gsx$', ''); });
                            groupData[index].values.push(e[key].$t.trim());
                        }
                    }
                });
            });
            groupData = _this.sort(groupData, 'profesores enlaces avisos');
        });
        groupData.map(function (e) { return e.values.map(function (ee) { return ee !== ''; }); });
        return groupData;
    };
    SpreadsheetsService.prototype.sort = function (fields, keys) {
        var newFields = [];
        keys.split(' ').map(function (key) {
            newFields.push(fields.find(function (e) { return e.title === key; }));
        });
        return __assign({}, newFields, fields);
    };
    SpreadsheetsService.prototype.getPosgradeData = function () {
        var all = [];
        this.getJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spreadsheets.posgrade.subjects).subscribe(function (data) {
            var posgrade, lastPosgrade, studies, lastStudies, posgradeLinks, lastLinks;
            data.feed.entry.map(function (row) {
                if (row.gsx$estudios.$t.trim() !== lastPosgrade) {
                    lastPosgrade = row.gsx$estudios.$t.trim();
                    posgrade = {
                        title: row.gsx$estudios.$t.trim(),
                        studies: []
                    };
                    all.push(posgrade);
                }
                if (row.gsx$tipo.$t.trim() !== lastStudies) {
                    lastStudies = row.gsx$tipo.$t.trim();
                    studies = {
                        title: row.gsx$tipo.$t.trim(),
                        options: []
                    };
                    posgrade.studies.push(studies);
                }
                if (row.gsx$nombre.$t.trim() !== lastLinks) {
                    lastLinks = row.gsx$nombre.$t.trim();
                    posgradeLinks = {
                        title: row.gsx$nombre.$t.trim(),
                        link: '',
                        linkList: []
                    };
                    studies.options.push(posgradeLinks);
                }
                // Has options
                if (row.gsx$links.$t.trim() !== '') {
                    posgradeLinks.linkList.push({
                        url: row.gsx$links.$t.trim(),
                        text: row.gsx$textolinks.$t.trim() === ''
                            ? row.gsx$links.$t.trim()
                            : row.gsx$textolinks.$t.trim()
                    });
                }
                else {
                    posgradeLinks.link = row.gsx$link.$t.trim();
                }
            });
            all.map(function (t) {
                return t.studies.map(function (s) { return s.options.sort(function (a, b) { return (a < b ? 1 : -1); }); });
            });
        });
        return all;
    };
    SpreadsheetsService.prototype.getReports = function () {
        var _this = this;
        var arr = [];
        this.getJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spreadsheets.reports).subscribe(function (dataFirstPage) {
            var observables = [];
            dataFirstPage.feed.entry.map(function (e) {
                observables.push(_this.getJSON(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spreadsheets.reports, e.gsx$pagina.$t));
            });
            var reportYear = [];
            rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"].apply(void 0, observables).subscribe(function (d) {
                var data = d;
                var year = data.feed.title.$t;
                var type = { title: '', reports: [] }, lastType, reports = [], column = [], lastColumn;
                data = data.feed.entry;
                lastColumn = data[1].gsx$columna.$t.trim();
                lastType = data[1].gsx$tipo.$t.trim();
                data.map(function (row, i) {
                    if (row.gsx$tipo.$t.trim() === 'general') {
                        type = {
                            title: row.gsx$tipo.$t.trim(),
                            reports: [
                                {
                                    title: row.gsx$texto.$t.trim(),
                                    url: row.gsx$url.$t.trim()
                                }
                            ]
                        };
                        reportYear.push(type);
                    }
                    else {
                        if (row.gsx$tipo.$t.trim() !== lastType) {
                            reports.push({
                                title: lastColumn,
                                column: column
                            });
                            lastColumn = row.gsx$columna.$t.trim();
                            column = [];
                            type = {
                                reports: reports,
                                title: lastType
                            };
                            reportYear.push(type);
                            lastType = row.gsx$tipo.$t.trim();
                            reports = [];
                        }
                        else {
                            if (row.gsx$columna.$t.trim() !== lastColumn) {
                                reports.push({
                                    title: lastColumn,
                                    column: column
                                });
                                lastColumn = row.gsx$columna.$t.trim();
                                column = [];
                            }
                        }
                        column.push({
                            title: row.gsx$asignatura.$t.trim(),
                            url: row.gsx$url.$t.trim(),
                            code: row.gsx$code.$t.trim()
                        });
                        if (i === data.length - 1) {
                            reports.push({
                                title: lastColumn,
                                column: column
                            });
                            type = {
                                reports: reports,
                                title: lastType
                            };
                            reportYear.push(type);
                        }
                    }
                });
                arr.push({
                    year: year,
                    content: reportYear
                });
                reportYear = [];
                arr.map(function (y) {
                    return y.content.map(function (t) {
                        if (t.title === 'posgrado') {
                            t.reports.map(function (p, index) {
                                if (['masteres_universitarios', 'doctorado'].includes(p.title)) {
                                    t.reports.splice(index, 1);
                                    t.reports.unshift(p);
                                }
                            });
                        }
                        /*
                        t.reports.map(r => {
                          if (r.column !== undefined) {
                            r.column.sort((a, b) => (a.title < b.title ? 1 : -1));
                          }
                        });
                        */
                    });
                });
            });
        });
        return arr;
    };
    SpreadsheetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], SpreadsheetsService);
    return SpreadsheetsService;
}());



/***/ }),

/***/ "./src/app/swiper.min.css":
/*!********************************!*\
  !*** ./src/app/swiper.min.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Swiper 4.3.5\r\n * Most modern mobile touch slider and framework with hardware accelerated transitions\r\n * http://www.idangero.us/swiper/\r\n *\r\n * Copyright 2014-2018 Vladimir Kharlampidi\r\n *\r\n * Released under the MIT License\r\n *\r\n * Released on: July 31, 2018\r\n */\r\n.swiper-container {\r\n  margin: 0 auto;\r\n  position: relative;\r\n  overflow: hidden;\r\n  list-style: none;\r\n  padding: 0;\r\n  z-index: 1\r\n}\r\n.swiper-container-no-flexbox .swiper-slide {\r\n  float: left\r\n}\r\n.swiper-container-vertical>.swiper-wrapper {\r\n  flex-direction: column\r\n}\r\n.swiper-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  display: flex;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  box-sizing: content-box\r\n}\r\n.swiper-container-android .swiper-slide,\r\n.swiper-wrapper {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0)\r\n}\r\n.swiper-container-multirow>.swiper-wrapper {\r\n  flex-wrap: wrap\r\n}\r\n.swiper-container-free-mode>.swiper-wrapper {\r\n  transition-timing-function: ease-out;\r\n  margin: 0 auto\r\n}\r\n.swiper-slide {\r\n  flex-shrink: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform\r\n}\r\n.swiper-invisible-blank-slide {\r\n  visibility: hidden\r\n}\r\n.swiper-container-autoheight,\r\n.swiper-container-autoheight .swiper-slide {\r\n  height: auto\r\n}\r\n.swiper-container-autoheight .swiper-wrapper {\r\n  align-items: flex-start;\r\n  transition-property: height, -webkit-transform;\r\n  transition-property: transform, height;\r\n  transition-property: transform, height, -webkit-transform\r\n}\r\n.swiper-container-3d {\r\n  -webkit-perspective: 1200px;\r\n          perspective: 1200px\r\n}\r\n.swiper-container-3d .swiper-cube-shadow,\r\n.swiper-container-3d .swiper-slide,\r\n.swiper-container-3d .swiper-slide-shadow-bottom,\r\n.swiper-container-3d .swiper-slide-shadow-left,\r\n.swiper-container-3d .swiper-slide-shadow-right,\r\n.swiper-container-3d .swiper-slide-shadow-top,\r\n.swiper-container-3d .swiper-wrapper {\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d\r\n}\r\n.swiper-container-3d .swiper-slide-shadow-bottom,\r\n.swiper-container-3d .swiper-slide-shadow-left,\r\n.swiper-container-3d .swiper-slide-shadow-right,\r\n.swiper-container-3d .swiper-slide-shadow-top {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n  z-index: 10\r\n}\r\n.swiper-container-3d .swiper-slide-shadow-left {\r\n  background-image: linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\r\n}\r\n.swiper-container-3d .swiper-slide-shadow-right {\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\r\n}\r\n.swiper-container-3d .swiper-slide-shadow-top {\r\n  background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\r\n}\r\n.swiper-container-3d .swiper-slide-shadow-bottom {\r\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\r\n}\r\n.swiper-container-wp8-horizontal,\r\n.swiper-container-wp8-horizontal>.swiper-wrapper {\r\n  touch-action: pan-y\r\n}\r\n.swiper-container-wp8-vertical,\r\n.swiper-container-wp8-vertical>.swiper-wrapper {\r\n  touch-action: pan-x\r\n}\r\n.swiper-button-next,\r\n.swiper-button-prev {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 27px;\r\n  height: 44px;\r\n  margin-top: -22px;\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  background-size: 27px 44px;\r\n  background-position: center;\r\n  background-repeat: no-repeat\r\n}\r\n.swiper-button-next.swiper-button-disabled,\r\n.swiper-button-prev.swiper-button-disabled {\r\n  opacity: .35;\r\n  cursor: auto;\r\n  pointer-events: none\r\n}\r\n.swiper-button-prev,\r\n.swiper-container-rtl .swiper-button-next {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\r\n  left: 10px;\r\n  right: auto\r\n}\r\n.swiper-button-next,\r\n.swiper-container-rtl .swiper-button-prev {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\r\n  right: 10px;\r\n  left: auto\r\n}\r\n.swiper-button-prev.swiper-button-white,\r\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n.swiper-button-next.swiper-button-white,\r\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n.swiper-button-prev.swiper-button-black,\r\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n.swiper-button-next.swiper-button-black,\r\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n.swiper-button-lock {\r\n  display: none\r\n}\r\n.swiper-pagination {\r\n  position: absolute;\r\n  text-align: center;\r\n  transition: .3s opacity;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  z-index: 10\r\n}\r\n.swiper-pagination.swiper-pagination-hidden {\r\n  opacity: 0\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-bullets,\r\n.swiper-pagination-custom,\r\n.swiper-pagination-fraction {\r\n  bottom: 10px;\r\n  left: 0;\r\n  width: 100%\r\n}\r\n.swiper-pagination-bullets-dynamic {\r\n  overflow: hidden;\r\n  font-size: 0\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\r\n  -webkit-transform: scale(.33);\r\n          transform: scale(.33);\r\n  position: relative\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1)\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1)\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\r\n  -webkit-transform: scale(.66);\r\n          transform: scale(.66)\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\r\n  -webkit-transform: scale(.33);\r\n          transform: scale(.33)\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\r\n  -webkit-transform: scale(.66);\r\n          transform: scale(.66)\r\n}\r\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\r\n  -webkit-transform: scale(.33);\r\n          transform: scale(.33)\r\n}\r\n.swiper-pagination-bullet {\r\n  width: 8px;\r\n  height: 8px;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n  background: #000;\r\n  opacity: .2\r\n}\r\nbutton.swiper-pagination-bullet {\r\n  border: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none\r\n}\r\n.swiper-pagination-clickable .swiper-pagination-bullet {\r\n  cursor: pointer\r\n}\r\n.swiper-pagination-bullet-active {\r\n  opacity: 1;\r\n  background: #007aff\r\n}\r\n.swiper-container-vertical>.swiper-pagination-bullets {\r\n  right: 10px;\r\n  top: 50%;\r\n  -webkit-transform: translate3d(0, -50%, 0);\r\n          transform: translate3d(0, -50%, 0)\r\n}\r\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {\r\n  margin: 6px 0;\r\n  display: block\r\n}\r\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  width: 8px\r\n}\r\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\r\n  display: inline-block;\r\n  transition: .2s top, .2s -webkit-transform;\r\n  transition: .2s transform, .2s top;\r\n  transition: .2s transform, .2s top, .2s -webkit-transform\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {\r\n  margin: 0 4px\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  white-space: nowrap\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\r\n  transition: .2s transform, .2s left;\r\n}\r\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\r\n  transition: .2s transform, .2s right;\r\n}\r\n.swiper-pagination-progressbar {\r\n  background: rgba(0, 0, 0, .25);\r\n  position: absolute\r\n}\r\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\r\n  background: #007aff;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  -webkit-transform-origin: left top;\r\n          transform-origin: left top\r\n}\r\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\r\n  -webkit-transform-origin: right top;\r\n          transform-origin: right top\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-progressbar,\r\n.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\r\n  width: 100%;\r\n  height: 4px;\r\n  left: 0;\r\n  top: 0\r\n}\r\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\r\n.swiper-container-vertical>.swiper-pagination-progressbar {\r\n  width: 4px;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0\r\n}\r\n.swiper-pagination-white .swiper-pagination-bullet-active {\r\n  background: #fff\r\n}\r\n.swiper-pagination-progressbar.swiper-pagination-white {\r\n  background: rgba(255, 255, 255, .25)\r\n}\r\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\r\n  background: #fff\r\n}\r\n.swiper-pagination-black .swiper-pagination-bullet-active {\r\n  background: #000\r\n}\r\n.swiper-pagination-progressbar.swiper-pagination-black {\r\n  background: rgba(0, 0, 0, .25)\r\n}\r\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\r\n  background: #000\r\n}\r\n.swiper-pagination-lock {\r\n  display: none\r\n}\r\n.swiper-scrollbar {\r\n  border-radius: 10px;\r\n  position: relative;\r\n  background: rgba(0, 0, 0, .1)\r\n}\r\n.swiper-container-horizontal>.swiper-scrollbar {\r\n  position: absolute;\r\n  left: 1%;\r\n  bottom: 3px;\r\n  z-index: 50;\r\n  height: 5px;\r\n  width: 98%\r\n}\r\n.swiper-container-vertical>.swiper-scrollbar {\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 1%;\r\n  z-index: 50;\r\n  width: 5px;\r\n  height: 98%\r\n}\r\n.swiper-scrollbar-drag {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  background: rgba(0, 0, 0, .5);\r\n  border-radius: 10px;\r\n  left: 0;\r\n  top: 0\r\n}\r\n.swiper-scrollbar-cursor-drag {\r\n  cursor: move\r\n}\r\n.swiper-scrollbar-lock {\r\n  display: none\r\n}\r\n.swiper-zoom-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center\r\n}\r\n.swiper-zoom-container>canvas,\r\n.swiper-zoom-container>img,\r\n.swiper-zoom-container>svg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  -o-object-fit: contain;\r\n     object-fit: contain\r\n}\r\n.swiper-slide-zoomed {\r\n  cursor: move\r\n}\r\n.swiper-lazy-preloader {\r\n  width: 42px;\r\n  height: 42px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -21px;\r\n  margin-top: -21px;\r\n  z-index: 10;\r\n  -webkit-transform-origin: 50%;\r\n          transform-origin: 50%;\r\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\r\n          animation: swiper-preloader-spin 1s steps(12, end) infinite\r\n}\r\n.swiper-lazy-preloader:after {\r\n  display: block;\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n  background-position: 50%;\r\n  background-size: 100%;\r\n  background-repeat: no-repeat\r\n}\r\n.swiper-lazy-preloader-white:after {\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")\r\n}\r\n@-webkit-keyframes swiper-preloader-spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n}\r\n@keyframes swiper-preloader-spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n}\r\n.swiper-container .swiper-notification {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  z-index: -1000\r\n}\r\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\r\n  transition-timing-function: ease-out\r\n}\r\n.swiper-container-fade .swiper-slide {\r\n  pointer-events: none;\r\n  transition-property: opacity\r\n}\r\n.swiper-container-fade .swiper-slide .swiper-slide {\r\n  pointer-events: none\r\n}\r\n.swiper-container-fade .swiper-slide-active,\r\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\r\n  pointer-events: auto\r\n}\r\n.swiper-container-cube {\r\n  overflow: visible\r\n}\r\n.swiper-container-cube .swiper-slide {\r\n  pointer-events: none;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  z-index: 1;\r\n  visibility: hidden;\r\n  -webkit-transform-origin: 0 0;\r\n          transform-origin: 0 0;\r\n  width: 100%;\r\n  height: 100%\r\n}\r\n.swiper-container-cube .swiper-slide .swiper-slide {\r\n  pointer-events: none\r\n}\r\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\r\n  -webkit-transform-origin: 100% 0;\r\n          transform-origin: 100% 0\r\n}\r\n.swiper-container-cube .swiper-slide-active,\r\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\r\n  pointer-events: auto\r\n}\r\n.swiper-container-cube .swiper-slide-active,\r\n.swiper-container-cube .swiper-slide-next,\r\n.swiper-container-cube .swiper-slide-next+.swiper-slide,\r\n.swiper-container-cube .swiper-slide-prev {\r\n  pointer-events: auto;\r\n  visibility: visible\r\n}\r\n.swiper-container-cube .swiper-slide-shadow-bottom,\r\n.swiper-container-cube .swiper-slide-shadow-left,\r\n.swiper-container-cube .swiper-slide-shadow-right,\r\n.swiper-container-cube .swiper-slide-shadow-top {\r\n  z-index: 0;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden\r\n}\r\n.swiper-container-cube .swiper-cube-shadow {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #000;\r\n  opacity: .6;\r\n  -webkit-filter: blur(50px);\r\n          filter: blur(50px);\r\n  z-index: 0\r\n}\r\n.swiper-container-flip {\r\n  overflow: visible\r\n}\r\n.swiper-container-flip .swiper-slide {\r\n  pointer-events: none;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  z-index: 1\r\n}\r\n.swiper-container-flip .swiper-slide .swiper-slide {\r\n  pointer-events: none\r\n}\r\n.swiper-container-flip .swiper-slide-active,\r\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\r\n  pointer-events: auto\r\n}\r\n.swiper-container-flip .swiper-slide-shadow-bottom,\r\n.swiper-container-flip .swiper-slide-shadow-left,\r\n.swiper-container-flip .swiper-slide-shadow-right,\r\n.swiper-container-flip .swiper-slide-shadow-top {\r\n  z-index: 0;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dpcGVyLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNIO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7QUFFRDtFQUNFLFdBQVc7Q0FDWjtBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBSVgsY0FBYztFQUNkLHVDQUF1QztFQUN2QywrQkFBK0I7RUFDL0Isa0RBQWtEO0VBQ2xELHVCQUF1QjtDQUN4QjtBQUVEOztFQUVFLHdDQUErQjtVQUEvQiwrQkFBK0I7Q0FDaEM7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0NBQ2Y7QUFFRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLGlEQUFpRDtDQUNsRDtBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQ7O0VBRUUsWUFBWTtDQUNiO0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsK0NBQStDO0VBQy9DLHVDQUF1QztFQUN2Qyx5REFBeUQ7Q0FDMUQ7QUFFRDtFQUNFLDRCQUFtQjtVQUFuQixtQkFBbUI7Q0FDcEI7QUFFRDs7Ozs7OztFQU9FLHFDQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0I7QUFFRDs7OztFQUlFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsK0VBQStFO0NBQ2hGO0FBRUQ7RUFDRSxnRkFBZ0Y7Q0FDakY7QUFFRDtFQUNFLDhFQUE4RTtDQUMvRTtBQUVEO0VBQ0UsaUZBQWlGO0NBQ2xGO0FBRUQ7O0VBRUUsbUJBQW1CO0NBQ3BCO0FBRUQ7O0VBRUUsbUJBQW1CO0NBQ3BCO0FBRUQ7O0VBRUUsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0NBQzdCO0FBRUQ7O0VBRUUsYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7QUFFRDs7RUFFRSxxUkFBcVI7RUFDclIsV0FBVztFQUNYLFdBQVc7Q0FDWjtBQUVEOztFQUVFLHFSQUFxUjtFQUNyUixZQUFZO0VBQ1osVUFBVTtDQUNYO0FBRUQ7O0VBRUUsb1JBQW9SO0NBQ3JSO0FBRUQ7O0VBRUUsb1JBQW9SO0NBQ3JSO0FBRUQ7O0VBRUUsb1JBQW9SO0NBQ3JSO0FBRUQ7O0VBRUUsb1JBQW9SO0NBQ3JSO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztDQUNaO0FBRUQ7RUFDRSxVQUFVO0NBQ1g7QUFFRDs7O0VBR0UsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0NBQ1o7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFFRDtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSw0QkFBbUI7VUFBbkIsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSw0QkFBbUI7VUFBbkIsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSw4QkFBcUI7VUFBckIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSw4QkFBcUI7VUFBckIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSw4QkFBcUI7VUFBckIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSw4QkFBcUI7VUFBckIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUFnQjtLQUFoQixzQkFBZ0I7VUFBaEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULDJDQUFrQztVQUFsQyxrQ0FBa0M7Q0FDbkM7QUFFRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0NBQ2Y7QUFFRDtFQUNFLFNBQVM7RUFDVCxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLFVBQVU7Q0FDWDtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMseURBQXlEO0NBQzFEO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLFVBQVU7RUFDVixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsbUNBQTBCO1VBQTFCLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0Usb0NBQTJCO1VBQTNCLDJCQUEyQjtDQUM1QjtBQUVEOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBUTtFQUNSLE1BQU07Q0FDUDtBQUVEOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsUUFBUTtFQUNSLE1BQU07Q0FDUDtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtDQUM5QjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0NBQ1g7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztDQUNaO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixNQUFNO0NBQ1A7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUVEOzs7RUFHRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUFtQjtLQUFuQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9FQUEyRDtVQUEzRCwyREFBMkQ7Q0FDNUQ7QUFFRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiwwN0NBQTA3QztFQUMxN0MseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7Q0FDN0I7QUFFRDtFQUNFLHM3Q0FBczdDO0NBQ3Y3QztBQUVEO0VBQ0U7SUFDRSxrQ0FBeUI7WUFBekIseUJBQXlCO0dBQzFCO0NBQ0Y7QUFFRDtFQUNFO0lBQ0Usa0NBQXlCO1lBQXpCLHlCQUF5QjtHQUMxQjtDQUNGO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7Q0FDZjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0NBQzdCO0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDs7RUFFRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsaUNBQXdCO1VBQXhCLHdCQUF3QjtDQUN6QjtBQUVEOztFQUVFLG9CQUFvQjtDQUNyQjtBQUVEOzs7O0VBSUUscUJBQXFCO0VBQ3JCLG1CQUFtQjtDQUNwQjtBQUVEOzs7O0VBSUUsV0FBVztFQUNYLG9DQUEyQjtVQUEzQiwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixVQUFVO0NBQ1g7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEOztFQUVFLG9CQUFvQjtDQUNyQjtBQUVEOzs7O0VBSUUsV0FBVztFQUNYLG9DQUEyQjtVQUEzQiwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9zd2lwZXIubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTd2lwZXIgNC4zLjVcclxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcclxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTggVmxhZGltaXIgS2hhcmxhbXBpZGlcclxuICpcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqIFJlbGVhc2VkIG9uOiBKdWx5IDMxLCAyMDE4XHJcbiAqL1xyXG4uc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHotaW5kZXg6IDFcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItbm8tZmxleGJveCAuc3dpcGVyLXNsaWRlIHtcclxuICBmbG9hdDogbGVmdFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxufVxyXG5cclxuLnN3aXBlci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3hcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3c+LnN3aXBlci13cmFwcGVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXBcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlPi5zd2lwZXItd3JhcHBlciB7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIG1hcmdpbjogMCBhdXRvXHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm1cclxufVxyXG5cclxuLnN3aXBlci1pbnZpc2libGUtYmxhbmstc2xpZGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlblxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xyXG4gIGhlaWdodDogYXV0b1xyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlciB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCAtd2Via2l0LXRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodCwgLXdlYmtpdC10cmFuc2Zvcm1cclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItM2Qge1xyXG4gIHBlcnNwZWN0aXZlOiAxMjAwcHhcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdyxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2RcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDEwXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAwKSlcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgMCkpXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgMCkpXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgMCkpXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLXdwOC1ob3Jpem9udGFsLFxyXG4uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXlcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItd3A4LXZlcnRpY2FsLFxyXG4uc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWw+LnN3aXBlci13cmFwcGVyIHtcclxuICB0b3VjaC1hY3Rpb246IHBhbi14XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQsXHJcbi5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMjdweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjdweCA0NHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcclxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAuMzU7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLXByZXYsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHJpZ2h0OiBhdXRvXHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQsXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtcclxuICByaWdodDogMTBweDtcclxuICBsZWZ0OiBhdXRvXHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSxcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyM2ZmZmZmZiclMkYlM0UlM0MlMkZzdmclM0VcIilcclxufVxyXG5cclxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKVxyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXHJcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDAwMDAnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpXHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayxcclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIilcclxufVxyXG5cclxuLnN3aXBlci1idXR0b24tbG9jayB7XHJcbiAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjNzIG9wYWNpdHk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB6LWluZGV4OiAxMFxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcclxuICBvcGFjaXR5OiAwXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiB7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDBcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC4zMyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSlcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSguNjYpXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC4zMylcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC42NilcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjMzKVxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgb3BhY2l0eTogLjJcclxufVxyXG5cclxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZVxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YWZmXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIG1hcmdpbjogNnB4IDA7XHJcbiAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgd2lkdGg6IDhweFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IC4ycyB0b3AsIC4ycyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uOiAuMnMgdHJhbnNmb3JtLCAuMnMgdG9wO1xyXG4gIHRyYW5zaXRpb246IC4ycyB0cmFuc2Zvcm0sIC4ycyB0b3AsIC4ycyAtd2Via2l0LXRyYW5zZm9ybVxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIG1hcmdpbjogMCA0cHhcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB0cmFuc2l0aW9uOiAuMnMgdHJhbnNmb3JtLCAuMnMgbGVmdDtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHRyYW5zaXRpb246IC4ycyB0cmFuc2Zvcm0sIC4ycyByaWdodDtcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XHJcbiAgYmFja2dyb3VuZDogIzAwN2FmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3BcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZlxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KVxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMjUpXHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XHJcbiAgYmFja2dyb3VuZDogIzAwMFxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tbG9jayB7XHJcbiAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uc3dpcGVyLXNjcm9sbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSlcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDElO1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHdpZHRoOiA5OCVcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogM3B4O1xyXG4gIHRvcDogMSU7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDk4JVxyXG59XHJcblxyXG4uc3dpcGVyLXNjcm9sbGJhci1kcmFnIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDBcclxufVxyXG5cclxuLnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWcge1xyXG4gIGN1cnNvcjogbW92ZVxyXG59XHJcblxyXG4uc3dpcGVyLXNjcm9sbGJhci1sb2NrIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5zd2lwZXItem9vbS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLFxyXG4uc3dpcGVyLXpvb20tY29udGFpbmVyPmltZyxcclxuLnN3aXBlci16b29tLWNvbnRhaW5lcj5zdmcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW5cclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS16b29tZWQge1xyXG4gIGN1cnNvcjogbW92ZVxyXG59XHJcblxyXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIxcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3dpcGVyLXByZWxvYWRlci1zcGluIDFzIHN0ZXBzKDEyLCBlbmQpIGluZmluaXRlXHJcbn1cclxuXHJcbi5zd2lwZXItbGF6eS1wcmVsb2FkZXI6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMTIwJTIwMTIwJyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB4bWxucyUzQXhsaW5rJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rJyUzRSUzQ2RlZnMlM0UlM0NsaW5lJTIwaWQlM0QnbCclMjB4MSUzRCc2MCclMjB4MiUzRCc2MCclMjB5MSUzRCc3JyUyMHkyJTNEJzI3JyUyMHN0cm9rZSUzRCclMjM2YzZjNmMnJTIwc3Ryb2tlLXdpZHRoJTNEJzExJyUyMHN0cm9rZS1saW5lY2FwJTNEJ3JvdW5kJyUyRiUzRSUzQyUyRmRlZnMlM0UlM0NnJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoNjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDkwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxMjAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE1MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjM3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTgwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNDYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyMTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy41NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI0MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjY2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjcwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNzUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy44NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMzMCUyMDYwJTJDNjApJyUyRiUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbn1cclxuXHJcbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGU6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTAwMFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGUge1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHlcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXHJcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZSB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvXHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXHJcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCsuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxyXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW5cclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgb3BhY2l0eTogLjY7XHJcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gIHotaW5kZXg6IDBcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGVcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogMVxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG9cclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXHJcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcclxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    split: '*!*',
    spreadsheets: {
        teachers: '1jE75JDa39O0ZWu-91fuzF3CFQhtZ1Kv6jzDK_p42apg',
        grade: {
            subjects: '1rgMuzgnO4ruJTSzJgKnhjP_L3S6WKrh9DQFB83tDy5k'
        },
        posgrade: {
            subjects: '12sfy79wCfcfQpOTYxw6d17Ewqe7IlSL3RWKpVDVoVHk'
        },
        reports: '1rqE_8CLNvzlDQgI5sJacjzqB2-jyVzwrUbJlpIFzYc0'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\proyectos-git\diga-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map