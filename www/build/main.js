webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(platform, navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.screenWidth = 0;
        this.progressBarWidth = 0;
        platform.ready().then(function (readySource) {
            _this.screenWidth = platform.width();
        });
        this.progressBar();
    }
    HomePage.prototype.progressBar = function () {
        var _this = this;
        var fname = function () {
            if (_this.progressBarWidth < (_this.screenWidth * 0.75)) {
                _this.progressBarWidth += 1;
            }
            else {
                clearInterval(intervalId);
                // this.navCtrl.push(ProfilePage);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
            }
        };
        var intervalId = setInterval(fname, 1);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/pages/home/home.html"*/'<ion-content class="myclass">\n\n        <!-- Talent marketplace responsive image -->\n        <img src="../../assets/imgs/heading_image.png" class="heading_image_home">\n        \n        <!-- Progress bar -->\n        <div class="progressBar" [style.width.px]="progressBarWidth"> </div>\n        \n        <!-- white background of progress bar -->\n        <div class="progressBarBackgound"> </div>\n\n</ion-content>'/*ion-inline-end:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showJobs = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.viewJobs = function () {
        this.showJobs = !this.showJobs;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/app/app.html"*/'<!-- Side menu -->\n<ion-menu [content]="nav" side="right" class="side-menu" type="overlay">\n    \n    <!-- Side menu header with close icon -->\n    <ion-header>\n        <ion-toolbar class="side_menu_item">\n            <span class="icon-close" menuToggle="right"></span>\n        </ion-toolbar>\n    </ion-header>\n\n    <!-- Side menu content -->\n    <ion-content class="sidemennu">\n        <ion-list>\n            \n            <!-- Side menu profile option with icon-->\n            <ion-item class="side_menu_item">\n                <span class="icon-user_id"></span> Profile\n            </ion-item>\n            \n            <!-- Side menu Jobs option with icon-->\n            <ion-item class="side_menu_item">\n                <span class="icon-business"></span>\n                Jobs\n                <!-- Side menu add and subtract icon to hide and show sub menu-->\n                <span class="icon-add" (click)="viewJobs()" *ngIf="!showJobs"></span>\n                <span class="icon-remove" (click)="viewJobs()" *ngIf="showJobs"></span>\n            </ion-item>\n\n            <!-- Sub menu option for Jobs option in Side menu  -->\n            <div *ngIf="showJobs" class="side_menu_subitem">\n\n                <ion-item class="side_menu_subitem">Recommended jobs</ion-item>\n                <ion-item class="side_menu_subitem">Jobs applied</ion-item>\n                <ion-item class="side_menu_subitem">My Preferences</ion-item>\n            </div>\n\n            <!-- Side menu Recommendations option with icon-->\n            <ion-item class="side_menu_item">\n                <span class="icon-like"></span>Recommendations\n                <span class="icon-add"></span>\n            </ion-item>\n\n            <!-- Side menu Policy option with icon-->\n            <ion-item class="side_menu_item">\n                <span class="icon-document"></span>Policy\n            </ion-item>\n\n            <!-- Side menu FAQ option with icon-->\n            <ion-item class="side_menu_item">\n                <span class="icon-help"></span>FAQ\n            </ion-item>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- Sets home page as root page referencing side menu -->\n<ion-nav [root]="rootPage" #nav></ion-nav>'/*ion-inline-end:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(platform, navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.aboutmeExpand = false;
        this.aboutmeClass = 'aboutmeDivShort';
        platform.ready().then(function (readySource) {
            _this.screenHeight = platform.width();
        });
    }
    ProfilePage.prototype.ngAfterViewInit = function () {
        var aboutmeDiv = document.getElementsByClassName('aboutmeDivShort');
        var aboutmeHeight = aboutmeDiv[0].clientHeight;
        if (aboutmeHeight > (this.screenHeight * 0.25)) {
            aboutmeDiv[0].className = "aboutmeDivLong";
            this.aboutmeClass = "aboutmeDivLong";
        }
    };
    ProfilePage.prototype.aboutmeToggle = function () {
        var aboutmeDiv = document.getElementsByClassName(this.aboutmeClass);
        this.aboutmeExpand = !this.aboutmeExpand;
        // console.log(this.aboutmeExpand);
        if (this.aboutmeExpand) {
            aboutmeDiv[0].className = "aboutmeDivShort";
            this.aboutmeClass = "aboutmeDivShort";
        }
        else {
            aboutmeDiv[0].className = "aboutmeDivLong";
            this.aboutmeClass = "aboutmeDivLong";
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/pages/profile/profile.html"*/'<ion-content padding class="profile_page_background">\n\n\n\n\n  <!-- displays menu icon and talenet marketplace logo -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/imgs/heading_image.png" class="heading_image">\n        <span class="icon-burger_menu" icon-only menuToggle="right"> </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n<!-- EMPLOYEE PROFILE -->\n  <div class="profileDetailsDiv">\n    <!-- employee profile pic -->\n    <img src="../../assets/imgs/employee.png" class="employee_image">\n    <!-- name of employee -->\n    <h2 class="employee_name">Albert Manoraj Y</h2>\n    \n    <!-- details pannel of employee -->\n    <ion-grid class="employee_details_pannel">\n      <ion-row>\n        \n        <!-- left pannel of employee details -->\n        <ion-col col-6 class="employee_left_pannel">\n          <h2 class="employee_left_pannel_details">Assistant Manger</h2>\n          <h2 class="employee_left_pannel_details">Service Function</h2>\n          <h2 class="employee_left_pannel_details">Group B3</h2>\n        </ion-col>\n        \n        <!-- details pannel seperator -->\n        <ion-col col-1>\n          <img src="../../assets/imgs/seperator.png" class="profile_seperator">\n        </ion-col>\n        \n        <!-- right pannel of employee details -->\n        <ion-col col-5 class="employee_right_pannel">\n          <h2 class="employee_right_pannel_details">\n            <span class="icon-analysis"></span>2.5</h2>\n          <h2 class="employee_right_pannel_details">\n            <span class="icon-handshake"></span>0</h2>\n          <h2 class="employee_right_pannel_details">\n            <span class="icon-trophy"></span>0</h2>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <!-- employee linkedin connection division -->\n    <div class="employee_linkedin">\n      <h5>\n        <span class="icon-linkedin"></span> Connect my LinkedIn</h5>\n    </div>\n\n  </div>\n\n<!-- Profile details division CLOSES-->\n\n\n\n\n\n\n <!-- ABOUT ME -->\n  <div class="aboutmeHeadingDiv">\n    <!-- about me heading and icon -->\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-11>About me</ion-col>\n        <ion-col col-1>\n          <span class="icon-edit"></span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n  <!-- about me content -->\n  <div class="aboutmeDivShort">\n    <p class="staff_value">\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy\n      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently\n      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy\n      text of the printing and typesetting industry.\n    </p>\n  </div>\n\n  <!-- about me footer to expand and hide about me -->\n  <div class="aboutmeFooter" (click)="aboutmeToggle()">\n    <div id="aboutmeIcon">\n      <span *ngIf="!aboutmeExpand" class="icon-arrow_down"></span>\n      <span *ngIf="aboutmeExpand" class="icon-arrow_drop_up"></span>\n    </div>\n  </div>\n\n\n\n\n\n\n<!-- WORK EXPERIENCE -->\n<!-- work experience heading -->\n  <div class="workExperienceHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Work Experience</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- work experience content -->\n  <div class="workExperienceContentDiv">\n    <ion-grid>\n      <ion-row>\n        <ion-col class="staff_key" col-6>Assistant Manager</ion-col>\n        <ion-col class="seperator" col-1>I</ion-col>\n        <ion-col class="staff_value" col-5>\n          <b>8</b> years &\n          <b>1</b> month</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n\n\n  <!-- TRP DETAILS -->\n  <!-- trp details heading -->\n  <div class="trpDetailsHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>TRP Details</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- trp details content -->\n  <div class="trpDetailsContentDiv">\n    <ion-grid class="content_divs">\n      <ion-row>\n        <ion-col col-1>\n          <span class="icon-circle_add"></span>\n        </ion-col>\n        <ion-col col-11 class="trp_Content">Add responsibilities</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n\n\n\n<!-- CERTIFICATION -->\n<!-- certification heading -->\n  <div class="certificationsHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Certifications</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- certification content -->\n  <div class="certificationsContentDiv">\n    <ion-grid class="content_divs">\n      <ion-row>\n        <ion-col col-1>\n          <span class="icon-circle_add"></span>\n        </ion-col>\n        <ion-col col-11 class="certification_Content">Add a certificate</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n\n\n  <!-- BASIC INFORMATION -->\n  <!-- basic info heading -->\n  <div class="basicInformationHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Basic Information</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- basic info content -->\n  <div class="basicInformationContentDiv">\n    <ion-grid class="content_divs">\n      <ion-row>\n        <ion-col col-1>\n          <span class="icon-circle_add"></span>\n        </ion-col>\n        <ion-col col-11 class="basicInfo_Content">+91 8948 3894</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-1>\n          <span class="icon-circle_add"></span>\n        </ion-col>\n        <ion-col col-11 class="basicInfo_Content">albert.manoraj@wipro.com</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-1>\n          <span class="icon-circle_add"></span>\n        </ion-col>\n        <ion-col col-11 class="basicInfo_Content">Tower 8,ground floor, C wing, Electronic City-III, Bengaluru,Karnataka, India </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n\n\n<!-- SKILLS -->\n<!-- skills heading -->\n  <div class="skillsHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Skills</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- skills content -->\n  <div class="skillsContentDiv">\n  </div>\n\n\n\n\n\n\n<!-- STAFFING -->\n<!-- staffing heading -->\n  <div class="staffingDetailsHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Staffing Details</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- staffing content -->\n  <div class="staffingDetailsContentDiv">\n    <ion-grid class="content_divs">\n      <ion-row>\n        <ion-col col-5 class="staff_key">Comapny Code</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">WT01</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5 class="staff_key">Band</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">Group B3</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5 class="staff_key">Stream</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">Functional Stream</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5 class="staff_key">Cost Center</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">T1130</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5 class="staff_key">Cost Center Desc</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">Information Systems</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5 class="staff_key">Verticle</ion-col>\n        <ion-col class="seperator">|</ion-col>\n        <ion-col col-6 class="staff_value">Service Function</ion-col>\n      </ion-row>\n\n\n    </ion-grid>\n  </div>\n\n\n\n\n\n\n<!-- ROLES -->\n<!-- roles heading -->\n  <div class="rolesHandledHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-11>Roles Handled</ion-col>\n        <ion-col col-1>\n          <span class="icon-edit"></span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- roles content -->\n  <div class="rolesHandledContentDiv">\n  </div>\n\n\n\n\n\n\n<!-- EXISTING RECOMMENDATION -->\n<!-- exisitng recommendation heading -->\n  <div class="existingRecommendationsHeadingDiv">\n    <ion-grid class="heading_divs">\n      <ion-row>\n        <ion-col col-12>Existing Recommendations</ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n<!-- exisitng recommendation content -->\n  <div class="existingRecommendationsContentDiv">\n    <ion-grid class="content_divs">\n      <ion-row>\n\n        <ion-col col-12 class="recom_content">(You do not have existing recommendations)</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/sharangmalhotra/Desktop/TALENT_MARKETPLACE/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map