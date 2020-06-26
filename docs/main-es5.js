(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Utd3JhcHBlclxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgbWluLWhlaWdodDogMTAwdmhcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgIiwiI3BhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_pages_pages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pages/pages.json */ "./src/assets/pages/pages.json");
var _assets_pages_pages_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/pages/pages.json */ "./src/assets/pages/pages.json", 1);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.HOME_PAGE = 0;
        this.currentPage = _assets_pages_pages_json__WEBPACK_IMPORTED_MODULE_2__["pages"][this.HOME_PAGE];
        this.pages = _assets_pages_pages_json__WEBPACK_IMPORTED_MODULE_2__["pages"];
        this.changeBodyColor();
    }
    AppComponent.prototype.changeBodyColor = function () {
        var color = this.currentPage.color;
        var red = parseInt(color.substring(1, 3), 16);
        var green = parseInt(color.substring(3, 5), 16);
        var blue = parseInt(color.substring(5, 7), 16);
        document.body.style.cssText = "background: rgba(" + red + "," + green + "," + blue + ",.2);";
        //  ::-webkit-scrollbar-thumb{background: rgb(78, 78, 78)}`;
    };
    AppComponent.prototype.updateCurrentPage = function (event) {
        this.currentPage = event;
        this.changeBodyColor();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <div id=\"page-wrapper\">\n      <app-header [currentPage]=\"currentPage\" \n              [pages]=\"pages\" \n              (changePage)=\"updateCurrentPage($event)\"></app-header>\n      <deck [cards]=\"currentPage.cards\" \n            [currentPage]=\"currentPage\" \n            [ngStyle]=\"{'background-image': currentPage.background}\"></deck>\n      <app-footer [currentPageColor]=\"currentPage.color\"></app-footer>\n    </div>\n    <topButton [currentPageColor]=\"currentPage.color\"></topButton>\n  ",
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-button/top-button.component */ "./src/app/top-button/top-button.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _deck_deck_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deck/deck.component */ "./src/app/deck/deck.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_6__["TopButtonComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _deck_deck_component__WEBPACK_IMPORTED_MODULE_8__["DeckComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.sass":
/*!******************************************!*\
  !*** ./src/app/card/card.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: none;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 0px 8px 12px -5px black;\n  box-sizing: content-box;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  align-content: space-around;\n  max-height: 100%;\n  padding: 10px;\n  background-color: white;\n  opacity: 0;\n  -webkit-animation: popUp ease-out;\n          animation: popUp ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  overflow: hidden;\n  min-width: -webkit-fill-available;\n}\n\n.card-icon {\n  width: 20%;\n  height: 20%;\n  float: left;\n  clear: right;\n  border-radius: 10px;\n}\n\n.cardText {\n  padding: 15px;\n  width: 80%;\n}\n\n.line {\n  border-radius: 3px;\n  border: 2px solid;\n  -webkit-transition: all 0s;\n  transition: all 0s;\n  margin-bottom: 12px;\n}\n\n.content {\n  text-align: left;\n  letter-spacing: 50%;\n  line-height: 1.5em;\n}\n\n.card-title {\n  font-size: 1.3rem;\n  font-weight: bold;\n  font-family: \"Red Hat Display\", sans-serif;\n  text-align: center;\n}\n\n@-webkit-keyframes showUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n\n@keyframes showUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n\n@-webkit-keyframes popUp {\n  0% {\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes popUp {\n  0% {\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ0RKOztBRG9CQTtFQUNJLFVBSGE7RUFJYixXQUphO0VBUWIsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQ25CSjs7QURxQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRG9CQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2xCSjs7QURvQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ2pCSjs7QURtQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VDaEJOO0VEaUJFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNmTjtBQUNGOztBRFFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ2hCTjtFRGlCRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDZk47QUFDRjs7QURpQkE7RUFDSTtJQUNJLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VDZk47RURpQkU7SUFDSSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFQ2ZOO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VDZk47RURpQkU7SUFDSSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFQ2ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2FzcydcclxuICAgIFxyXG4uY2FyZCBcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMnB4IC01cHggYmxhY2tcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94IFxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCBcclxuICAgIG1heC1oZWlnaHQ6IDEwMCUgXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG4gICAgb3BhY2l0eTogMFxyXG4gICAgYW5pbWF0aW9uOiBwb3BVcCBlYXNlLW91dCAvLyBjdWJpYy1iZXppZXIoMSwtMC4wMiwgMC44NSwgMS4zKVxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgIG1pbi13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZVxyXG5cclxuICAgIC8vICY6Zm9jdXNcclxuICAgIC8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgaHJcclxuICAgIC8vICAgICAgICAgYm9yZGVyOiAzcHggc29saWRcclxuICAgICAgICBcclxuICAgIC8vICAgICAuY29udGVudFxyXG4gICAgLy8gICAgICAgICBkaXNwbGF5OiBpbml0aWFsXHJcblxyXG4gICAgLy8gaHJcclxuICAgIC8vICAgICBib3JkZXI6IDBcclxuICAgIFxyXG4gICAgLy8gLmNvbnRlbnRcclxuICAgIC8vICAgICBkaXNwbGF5OiBub25lXHJcblxyXG4kaWNvbi1kaW1lbnNpb246IDIwJVxyXG5cclxuLmNhcmQtaWNvbiAgXHJcbiAgICB3aWR0aDogJGljb24tZGltZW5zaW9uXHJcbiAgICBoZWlnaHQ6ICRpY29uLWRpbWVuc2lvblxyXG4gICAgLy8gZGlzcGxheTogYmxvY2tcclxuICAgIC8vIG1hcmdpbjogYXV0b1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvIFxyXG4gICAgZmxvYXQ6IGxlZnRcclxuICAgIGNsZWFyOiByaWdodFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgXHJcbi5jYXJkVGV4dFxyXG4gICAgcGFkZGluZzogMTVweCAgIFxyXG4gICAgd2lkdGg6IDgwJVxyXG5cclxuLmxpbmUgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4XHJcblxyXG4uY29udGVudCAgXHJcbiAgICAvLyBkaXNwbGF5OiBub25lIFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCBcclxuICAgIGxldHRlci1zcGFjaW5nOiA1MCUgXHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW0gXHJcblxyXG4uY2FyZC10aXRsZSAgXHJcbiAgICBmb250LXNpemU6IDEuM3JlbSBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIFxyXG4gICAgZm9udC1mYW1pbHk6ICdSZWQgSGF0IERpc3BsYXknLCBzYW5zLXNlcmlmIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG5Aa2V5ZnJhbWVzIHNob3dVcFxyXG4gICAgMCVcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDBweClcclxuICAgIDEwMCVcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXHJcblxyXG4gICAgICAgIFxyXG5Aa2V5ZnJhbWVzIHBvcFVwXHJcbiAgICAwJVxyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIFxyXG4gICAgMTAwJVxyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSlcclxuICAgICAgICBvcGFjaXR5OiAxIiwiLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTJweCAtNXB4IGJsYWNrO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBvcFVwIGVhc2Utb3V0O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkVGV4dCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5saW5lIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJlZCBIYXQgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgc2hvd1VwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9wVXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.ANIMATION_FACTOR = 0.6;
        this.TIME_MEASURE = 's';
    }
    CardComponent.prototype.styleObject = function () {
        return {
            borderColor: this.color,
            animationDelay: this.id * this.ANIMATION_FACTOR + this.TIME_MEASURE,
            animationDuration: this.ANIMATION_FACTOR + this.TIME_MEASURE,
        };
    };
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.renderTextOf = function (id) {
        document.getElementById(id).innerHTML = this.card.content.join("\n");
    };
    CardComponent.prototype.ngAfterContentInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "id", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: "\n  <button class=\"card\" [ngStyle]=\"styleObject()\">\n    <img class=\"card-icon\" [src]=\"card.source\"/>\n    <div class=\"cardText\"> \n        <div class=\"card-title\">{{card.title}}</div>\n        <div class=\"line\"></div>\n        <!-- <div class=\"preview\">\n            {{preview}}\n        </div> -->\n        <article id=\"article{{id}}\" class=\"content\">\n          {{renderTextOf('article' + id)}}\n        </article>\n    </div>\n  </button>\n",
            styles: [__webpack_require__(/*! ./card.component.sass */ "./src/app/card/card.component.sass")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/deck/deck.component.sass":
/*!******************************************!*\
  !*** ./src/app/deck/deck.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deck {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  margin: 15px;\n  -webkit-column-gap: 30px;\n     -moz-column-gap: 30px;\n          column-gap: 30px;\n}\n@media only screen and (min-width: 601px) {\n  #deck {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2;\n    margin: 30px;\n  }\n  #deck.work, #deck.education {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1;\n  }\n\n  .it-skills {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(3, auto);\n  }\n}\n@media only screen and (max-width: 600px) {\n  #deck {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC9kZWNrL2RlY2suY29tcG9uZW50LnNhc3MiLCIvaG9tZS9hbGVzc2FuZHJvL0Rlc2t0b3AvRnJvbURlbGxMYXB0b3AvQWxlc3NhbmRyb0FtYW50aW5pLUNWL3NyYy92YXJpYWJsZXMuc2FzcyIsInNyYy9hcHAvZGVjay9kZWNrLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBY0ksdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JDbEJVO0tEa0JWLHFCQ2xCVTtVRGtCVixnQkNsQlU7QUNJZDtBRm1CQTtFQUNJO0lBRUksdUJBQUE7T0FBQSxvQkFBQTtZQUFBLGVBQUE7SUFDQSxZQzNCTTtFQ1NaO0VGb0JNO0lBRUksdUJBQUE7T0FBQSxvQkFBQTtZQUFBLGVBQUE7RUVuQlY7O0VGcUJFO0lBQ0ksa0NBQUE7SUFDQSxtQ0FBQTtFRWxCTjtBQUNGO0FGa0NBO0VBQ0k7SUFFSSx1QkFBQTtPQUFBLG9CQUFBO1lBQUEsZUFBQTtFRWpDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVjay9kZWNrLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNhc3MnXHJcbiAgICBcclxuI2RlY2tcclxuICAgIC8vLS0tLUZFTFhCT1ggTEFZT1VULS0tLS1cclxuICAgIC8vIGRpc3BsYXk6IGZsZXggICBcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAvLyBmbGV4LWZsb3c6IHJvdyB3cmFwXHJcblxyXG4gICAgLy8tLS0tLS1HUklEIExBWU9VVC0tLS0tLVxyXG4gICAgLy8gZGlzcGxheTogZ3JpZFxyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKVxyXG4gICAgLy8gZ3JpZC1jb2x1bW4tZ2FwOiAkY2FyZC1tYXJnaW5cclxuICAgIC8vIG1hcmdpbjogJGNhcmQtbWFyZ2luXHJcblxyXG4gICAgLy8tLS0tTUFTT05SWSBMQVlPVVQtLS0tXHJcbiAgICBjb2x1bW4tY291bnQ6IDJcclxuICAgIG1hcmdpbjogMTVweFxyXG4gICAgY29sdW1uLWdhcDogJGNhcmQtbWFyZ2luXHJcblxyXG4gICAgJiA+ICogXHJcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KVxyXG4gICAgI2RlY2tcclxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpXHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAyXHJcbiAgICAgICAgbWFyZ2luOiAkY2FyZC1tYXJnaW5cclxuICAgICAgICBcclxuICAgICAgICAmLndvcmssIFxyXG4gICAgICAgICYuZWR1Y2F0aW9uIFxyXG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDFcclxuXHJcbiAgICAuaXQtc2tpbGxzXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmclxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pXHJcblxyXG4gICAgICAgIC8vICYgPiAqXHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxyXG4gICAgICAgIC8vICAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxIC8gc3BhbiAxXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJiA+IGNhcmQgKyBjYXJkXHJcbiAgICAgICAgLy8gICAgIGdyaWQtYXJlYTogMiAvIDEgLyBzcGFuIDEgLyBzcGFuIDFcclxuXHJcbiAgICAgICAgLy8gJiA+IGNhcmQgKyBjYXJkICsgY2FyZCBcclxuICAgICAgICAvLyAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMyAvIHNwYW4gMVxyXG5cclxuICAgICAgICAvLyAmID4gY2FyZCArIGNhcmQgKyBjYXJkICsgY2FyZFxyXG4gICAgICAgIC8vICAgICBncmlkLWFyZWE6IDMgLyAxIC8gc3BhbiAxIC8gc3BhbiAxXHJcblxyXG4gICAgICAgIFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcclxuICAgICNkZWNrXHJcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKVxyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMVxyXG4gICAgICAgIFxyXG4gICAgICAgICIsIiRjYXJkLW1hcmdpbjogMzBweCIsIiNkZWNrIHtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbHVtbi1nYXA6IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICNkZWNrIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgbWFyZ2luOiAzMHB4O1xuICB9XG4gICNkZWNrLndvcmssICNkZWNrLmVkdWNhdGlvbiB7XG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG5cbiAgLml0LXNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjZGVjayB7XG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/deck/deck.component.ts":
/*!****************************************!*\
  !*** ./src/app/deck/deck.component.ts ***!
  \****************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeckComponent = /** @class */ (function () {
    function DeckComponent() {
    }
    DeckComponent.prototype.ngOnInit = function () {
    };
    DeckComponent.prototype.classify = function (name) {
        return name.toLowerCase().replace(/\s/, "-");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DeckComponent.prototype, "cards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DeckComponent.prototype, "currentPage", void 0);
    DeckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'deck',
            template: "\n    <div id=\"deck\" [class]=\"classify(currentPage.name)\">\n      <card *ngFor=\"let card of cards; let id = index\" \n          [color]=\"currentPage.color\" \n          [card]=\"card\"   \n          [id]=\"id\"></card>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./deck.component.sass */ "./src/app/deck/deck.component.sass")]
        })
    ], DeckComponent);
    return DeckComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  grid-row-gap: 10px;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  width: 100vw;\n  position: relative;\n  bottom: 0;\n  padding: 10px;\n}\nfooter > div {\n  text-align: center;\n}\nfooter > hr {\n  width: 90%;\n  margin: 1px auto;\n}\n.full-row {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n@media screen and (max-width: 600px) {\n  footer {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  footer > div {\n    margin-bottom: 10px;\n  }\n  footer > hr {\n    margin: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREdBO0VBQ0k7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNBTjtFREVNO0lBQ0ksbUJBQUE7RUNBVjtFREVNO0lBQ0ksWUFBQTtFQ0FWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIFxyXG4gICAgZGlzcGxheTogZ3JpZFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpXHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHhcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIHdpZHRoOiAxMDB2d1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBib3R0b206IDBcclxuICAgIHBhZGRpbmc6IDEwcHhcclxuXHJcbiAgICAmID4gZGl2XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4gICAgJiA+IGhyXHJcbiAgICAgICAgd2lkdGg6IDkwJVxyXG4gICAgICAgIG1hcmdpbjogMXB4IGF1dG9cclxuXHJcbi5mdWxsLXJvd1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDFcclxuICAgIGdyaWQtY29sdW1uLWVuZDogM1xyXG5cclxuICAgICAgICAgXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDYwMHB4ICkgICAgICAgXHJcbiAgICBmb290ZXIgXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHJcbiAgICAgICAgJiA+IGRpdiBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG5cclxuICAgICAgICAmID4gaHIgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgIiwiZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5mb290ZXIgPiBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgPiBociB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXB4IGF1dG87XG59XG5cbi5mdWxsLXJvdyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGZvb3RlciA+IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBmb290ZXIgPiBociB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FooterComponent.prototype, "currentPageColor", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: "\n    <footer [ngStyle]=\"{'background-color': currentPageColor}\">\n        <div><b>Phone:</b> +44 7919824459</div>\n        <div><b>Email:</b> ale.amantini1997@gmail.com</div>\n        <div><b>Github: </b><a href='https://github.com/Amantini1997' style=\"color: lightgrey;\">Amantini1997</a></div>\n        <div><b>Location:</b> Newcombe Road, CV5 6NL, Coventry, UK</div>\n        <hr class=\"full-row\"/>\n        <div class=\"full-row\">Last update 2020</div>\n    </footer> \n  ",
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 10vh;\n}\n\nheader * {\n  overflow: hidden;\n}\n\n#title {\n  display: none;\n}\n\n.topnav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  height: inherit;\n  max-width: 100vw;\n  background-color: black;\n  font-size: 1.3rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.topnav input {\n  width: 0;\n  display: none;\n}\n\n.page-link {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  -webkit-transition: font-size 0.2s;\n  transition: font-size 0.2s;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n\n.page-link:hover {\n  font-size: 1.5rem;\n}\n\n.nav-toggle {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  .topnav {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    justify-content: space-around;\n    -webkit-box-align: center;\n            align-items: center;\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    font-size: 1.3rem;\n    font-family: \"Nunito\", sans-serif;\n    position: fixed;\n    top: 0;\n    left: -100vw;\n    -webkit-transition: all 0.7s;\n    transition: all 0.7s;\n    z-index: 3;\n  }\n  .topnav > label {\n    width: 100%;\n  }\n\n  #title, .nav-toggle {\n    display: block;\n    position: absolute;\n    height: inherit;\n    z-index: 2;\n    color: white;\n    background-color: transparent;\n    font-size: 1.5rem;\n    line-height: 10vh;\n  }\n\n  #title {\n    text-align: center;\n    width: 100vw;\n  }\n\n  .nav-toggle {\n    border: none;\n    left: 5vw;\n  }\n  .nav-toggle:active + .topnav, .nav-toggle:focus-within + .topnav {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFIWTtBQ0VoQjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRUo7O0FEQUk7RUFDSSxRQUFBO0VBQ0EsYUFBQTtBQ0VSOztBREFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQUEsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREk7RUFDSSxpQkFBQTtBQ0dSOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZBO0VBQ0k7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSw2QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlDQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7SUFBQSxvQkFBQTtJQUNBLFVBQUE7RUNLTjtFREhNO0lBQ0ksV0FBQTtFQ0tWOztFREhFO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQXhFUTtFQzhFZDs7RURKRTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQ09OOztFRExFO0lBQ0ksWUFBQTtJQUNBLFNBQUE7RUNRTjtFRE5NO0lBRUksT0FBQTtFQ09WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1oZWlnaHQ6IDEwdmhcclxuICAgIFxyXG5oZWFkZXJcclxuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHRcclxuXHJcbmhlYWRlciAqXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICBcclxuI3RpdGxlXHJcbiAgICBkaXNwbGF5OiBub25lXHJcbiAgICBcclxuLnRvcG5hdiBcclxuICAgIGRpc3BsYXk6IGZsZXggICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIGhlaWdodDogaW5oZXJpdFxyXG4gICAgbWF4LXdpZHRoOiAxMDB2d1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtXHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWZcclxuXHJcbiAgICAmIGlucHV0IFxyXG4gICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gXHJcbi5wYWdlLWxpbmtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIC4yc1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcblxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtXHJcblxyXG4ubmF2LXRvZ2dsZVxyXG4gICAgZGlzcGxheTogbm9uZVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDYwMHB4IClcclxuICAgIC50b3BuYXYgXHJcbiAgICAgICAgZGlzcGxheTogZmxleCAgXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW1cclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWZcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgICBsZWZ0OiAtMTAwdndcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjdzXHJcbiAgICAgICAgei1pbmRleDogM1xyXG5cclxuICAgICAgICAmID4gbGFiZWwgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgI3RpdGxlLCAubmF2LXRvZ2dsZVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0XHJcbiAgICAgICAgei1pbmRleDogMlxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cclxuICAgICAgICBsaW5lLWhlaWdodDogJGhlYWRlci1oZWlnaHRcclxuXHJcbiAgICAjdGl0bGVcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICB3aWR0aDogMTAwdndcclxuXHJcbiAgICAubmF2LXRvZ2dsZVxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIGxlZnQ6IDV2d1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6YWN0aXZlICsgLnRvcG5hdixcclxuICAgICAgICAmOmZvY3VzLXdpdGhpbiArIC50b3BuYXZcclxuICAgICAgICAgICAgbGVmdDogMCIsImhlYWRlciB7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuaGVhZGVyICoge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9wbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLnRvcG5hdiBpbnB1dCB7XG4gIHdpZHRoOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wYWdlLWxpbms6aG92ZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9wbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwdnc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgei1pbmRleDogMztcbiAgfVxuICAudG9wbmF2ID4gbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3RpdGxlLCAubmF2LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTB2aDtcbiAgfVxuXG4gICN0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5uYXYtdG9nZ2xlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbGVmdDogNXZ3O1xuICB9XG4gIC5uYXYtdG9nZ2xlOmFjdGl2ZSArIC50b3BuYXYsIC5uYXYtdG9nZ2xlOmZvY3VzLXdpdGhpbiArIC50b3BuYXYge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.selectPage = function (page) {
        this.changePage.emit(page);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "changePage", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: "\n    <header [ngStyle]=\"{'background-color': currentPage.color}\">\n      <span id=\"title\">{{currentPage.name}}</span>\n      <button class=\"nav-toggle\" type=\"checkbox\">\t&#9776;</button>\n      <nav class=\"topnav\" [ngStyle]=\"{'background-color': currentPage.color}\">\n        <ng-container *ngFor=\"let page of pages\">\n          <input type=\"radio\" \n                [id]=\"page.name\"\n                (click)=\"selectPage(page)\"\n                [name]=\"page\">\n          <label class=\"page-link\" [for]=\"page.name\">{{page.name}}</label>\n        </ng-container>\n      </nav> \n    </header>\n  ",
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/top-button/top-button.component.sass":
/*!******************************************************!*\
  !*** ./src/app/top-button/top-button.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top-button {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  #top-button {\n    text-decoration: none !important;\n    background-color: white;\n    position: fixed;\n    bottom: -45px;\n    height: 45px;\n    width: 45px;\n    border-radius: 45px;\n    right: 4vmin;\n    opacity: 0;\n    border: solid 2px;\n    font-weight: bold;\n    text-align: center;\n    box-shadow: 2px 3px 6px -3px black;\n    -webkit-transition: box-shadow 0.2s;\n    transition: box-shadow 0.2s;\n    cursor: pointer;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  #top-button:active {\n    -webkit-transition: box-shadow 0.1s;\n    transition: box-shadow 0.1s;\n    box-shadow: 2px 3px 2px -4px black;\n  }\n  #top-button.visible {\n    bottom: 4vmin;\n    opacity: 0.85;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXNzYW5kcm8vRGVza3RvcC9Gcm9tRGVsbExhcHRvcC9BbGVzc2FuZHJvQW1hbnRpbmktQ1Yvc3JjL2FwcC90b3AtYnV0dG9uL3RvcC1idXR0b24uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3RvcC1idXR0b24vdG9wLWJ1dHRvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksZ0NBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsWUFaVTtJQWFWLFdBYlU7SUFjVixtQkFkVTtJQWVWLFlBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUVBLGtCQUFBO0lBQ0Esa0NBQUE7SUFDQSxtQ0FBQTtJQUFBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLDRCQUFBO0lBQUEsb0JBQUE7SUFFQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ0hOO0VES007SUFDSSxtQ0FBQTtJQUFBLDJCQUFBO0lBQ0Esa0NBQUE7RUNIVjtFREtNO0lBQ0ksYUFBQTtJQUNBLGFBQUE7RUNIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGFycm93LWRpbWVuc2lvbjogNDVweFxyXG5cclxuI3RvcC1idXR0b25cclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjAwcHggKVxyXG4gICAgI3RvcC1idXR0b25cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICAgICAgYm90dG9tOiAtJGFycm93LWRpbWVuc2lvblxyXG4gICAgICAgIGhlaWdodDogJGFycm93LWRpbWVuc2lvblxyXG4gICAgICAgIHdpZHRoOiAkYXJyb3ctZGltZW5zaW9uXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGFycm93LWRpbWVuc2lvblxyXG4gICAgICAgIHJpZ2h0OiA0dm1pblxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICAgICAgLy8gZm9udC1zaXplOiB4LWxhcmdlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggLTNweCBibGFja1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjJzXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41c1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcblxyXG4gICAgICAgICY6YWN0aXZlXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjFzXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IC00cHggYmxhY2tcclxuXHJcbiAgICAgICAgJi52aXNpYmxlXHJcbiAgICAgICAgICAgIGJvdHRvbTogNHZtaW5cclxuICAgICAgICAgICAgb3BhY2l0eTogLjg1XHJcblxyXG5cclxuICAgIFxyXG4gICAgIiwiI3RvcC1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjdG9wLWJ1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgcmlnaHQ6IDR2bWluO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IC0zcHggYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI3RvcC1idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXM7XG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAycHggLTRweCBibGFjaztcbiAgfVxuICAjdG9wLWJ1dHRvbi52aXNpYmxlIHtcbiAgICBib3R0b206IDR2bWluO1xuICAgIG9wYWNpdHk6IDAuODU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/top-button/top-button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top-button/top-button.component.ts ***!
  \****************************************************/
/*! exports provided: TopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopButtonComponent", function() { return TopButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopButtonComponent = /** @class */ (function () {
    function TopButtonComponent() {
        this.SCROLL_THRESHOLD = 300; // px
        this.displayButton = false;
    }
    TopButtonComponent.prototype.ngOnInit = function () {
    };
    TopButtonComponent.prototype.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    TopButtonComponent.prototype.setDisplayButton = function () {
        this.displayButton = window.pageYOffset > this.SCROLL_THRESHOLD;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TopButtonComponent.prototype, "currentPageColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
    ], TopButtonComponent.prototype, "setDisplayButton", null);
    TopButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'topButton',
            template: "\n    <button id=\"top-button\" \n            [ngStyle]=\"{ 'color': currentPageColor}\" \n            [ngClass]=\"{'visible' : displayButton}\" \n            (click)=\"scrollToTop()\"\n            (scroll)=\"setDisplayButton()\" >\n      &#8679;\n    </button>\n  ",
            styles: [__webpack_require__(/*! ./top-button.component.sass */ "./src/app/top-button/top-button.component.sass")]
        })
    ], TopButtonComponent);
    return TopButtonComponent;
}());



/***/ }),

/***/ "./src/assets/pages/pages.json":
/*!*************************************!*\
  !*** ./src/assets/pages/pages.json ***!
  \*************************************/
/*! exports provided: pages, default */
/***/ (function(module) {

module.exports = {"pages":[{"name":"About Me","color":"#000000","cards":[{"source":"assets/images/profile.png","title":"In General","content":["Hello,<br />","My name is Alessandro, a Computer Science (with Management) student at <a href='https://www.kcl.ac.uk/'>King's College London</a>.","Currently, I am a placement student working in Coventry for PCMS. I am <b>Italian</b>, living in Rome, ","but I moved to London in 2017 to attend University. I love programming because it's very logical and I ","like solving problems, creating algorithms and seeing the results of what I do in real time."]},{"source":"assets/images/contacts.png","title":"Contacts and References","content":["<ul>","<li>","<b>Phone:</b> +44 7919824459","</li>","<li>","<b>Email:</b> ale.amantini1997@gmail.com","</li>","<li>","<b>Github:</b> <a href='https://github.com/Amantini1997'>Amantini1997</a>","</li>","<li>","<b>Location:</b> Newcombe Road, CV5 6NL, Coventry, UK","</li>","</ul>"]},{"source":"assets/images/hobbies.png","title":"Hobbies","content":["My main hobbies are:","<ul>","<li>","<b>Programming:</b> when I decided to attend a Computer Science course at University, the main ","reason was the passion for it. I like everything about programming: the history, the evolution ","and the logic behind it.","</li>","<li>","<b>Hanging out with friends:</b> At least once a week I go out with friends.","</li>","<li>","<b>Sport:</b> I feel the need to do sport activities, especially when the weather outside is nice.","</li>","<li>","<b>Travel:</b> visiting new places, getting in contact with different population and expending your culture.","</li>","</ul>"]}]},{"name":"Education","color":"#800000","cards":[{"source":"assets/images/KCL.png","title":"King's College London","content":["<ul>","<li>","<b>Start:</b> September 2017","</li>","<li>","<b>End:</b> June 2020<br />","</li>","<li>","<b>Program:</b> Bsci Computer Science with Management and Year in Industry","</li>","<li>","<b>Main Subjects:</b>","<ul>","<li>","Java/Scala/C++/Javascript programming","</li>","<li>","Algorithms and Data structures","</li>","<li>","Databases","</li>","<li>","Operating systems and cuncurrent programming","</li>","<li>","Advanced logic","</li>","</ul>","</li>","</ul>"]}],"background":"assets/images/KCL.png"},{"name":"Work","color":"#000060","cards":[{"source":"assets/images/pcms.png","title":"PCMS","content":["<ul>","<li>","<b>Company:</b> PCMS","</li>","<li>","<b>Role:</b> Software Developer","</li>","<li>","<b>Start:</b> 1st July 2019","</li>","<li>","<b>End:</b> 31st June 2020 ","</li>","<li>","<b>Experience:</b> working for this company is improving my time management, is teaching me ","how to work in a big and professional team and is getting me more and more familiar with agile ","methodologies. The tools and frameworks used are also expanding my technical knwoledge.","</li>","</ul>"]}]},{"name":"Web Development","color":"#006400","cards":[{"source":"assets/images/CSS-HTML-JS.png","title":"Web Pages","content":["I learnt <b>HTML</b> when I was back in high school, and now I have a solid ","understanding that allows me to easily create web pages. This knwoledge ","is backed up also by a remarkable <b>CSS</b> knwoledge which, alongside <b>Javascript</b>, ","allows me to create powerful and good looking websites."]},{"source":"assets/images/nodejs.png","title":"Node.Js","content":["In order to improve the usage of Javascript, I decided to learn <b>Node.Js</b>: ","I now have a solid understanding of how to use and what it means global ","and local packages, the nvm to upgrade node, and all the main terminal commands."]},{"source":"assets/images/frontend.jpg","title":"Front End","content":["Via Node.js I started to practice with some of its most famous packages:","<ul>","<li>","<b>React:</b> it has been my first frontend tool. Here I learnt <b>SCSS</b> precompiler","and the oneway data binding;","</li>","<li>","<b>Angular:</b> (used to build this website) thanks to this framework I learnt <b>Typescript</b>,","practised with pipes and learnt the twoways data binding;","</li>","<li>","<b>Ionic:</b> I use this framework in the company I work for to turn web apps into smartphone apps;","</li>","<li>","<b>Mocha and Jasmine:</b> testing tools for javascript.","</li>","<ul>"]}]},{"name":"IT Skills","color":"#066b6e","cards":[{"source":"assets/images/junit.png","title":"Testing","content":["No good program is ever complete without tests, this is why I learnt some ","testing frameworks including <b>JUnit</b> and <b>Mockito</b> for Java, and ","<b>Mocha</b> and <b>Jasmine</b> for Javascript."]},{"source":"assets/images/linux.png","title":"OS","content":["I have a deep understanding of how <b>operating systems</b> work and I can easily switch ","from a <b>Linux</b> distro to <b>Windows</b>. Also, I execute most of the commands from the terminal ","thanks to my good knwoledge of <b>bash</b> and <b>batch</b> commands."]},{"source":"assets/images/ml.jpg","title":"Machine Learning","content":["Given a solid interest in Machine Learning, I decideced to do some self studies.","So doing, I ended up learning and practising a lot with <b>python</b> and some of its most ","popular libraries, i.e. <b>numpy, pandas, matplotlib</b> and <b>scikit</b>. Altough I am still","spending a lot of time learning ML algorithms, the knowledge about the first 3 libraries is","already very good."]},{"source":"assets/images/languages.png","title":"Programming Languages","content":["My University provided me with knwoledge in different languages including:","<ul>","<li>","<b>Java:</b> Java has been my first OOP language. I practised a lot with it, both at University ","and at work. I have a deep understanding of it and I can be very efficient. My java knowledge ","extends to <i>Java8</i>, thus, I can easily use lambdas to make my code functional and more elegant. ","I have also been trained on multi-threading (both in pseudo code and java).","</li>","<li>","<b>C++:</b> working with C++'s syntax, using pointers and references explicitly, had me","practising a lot on low level machine structure.","</li>","<li>","<b>Scala:</b> this has been my first functional language. I studied it at University for a module ","it helped me learning how functional languages work and the importance of immutable collections.","</li>","<li>","<b>Python:</b> as mentioned in the machine learning section, my knowledge in python is pretty good, ","especially when combined with main labraries such as numpy, pandas and matplotlib.","</li>","<li>","<b>Javascript:</b> as mentioned in the web development section, I lately gained a lot of expertise in ","Javascript using it a lot both at University and work.","</li>","<ul>"]},{"source":"assets/images/sql.png","title":"Database","content":["My IT knowledge includes databases as well, more specifically, I have been ","trained on the relational database <b>MySql.</b>"]}]}]};

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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alessandro/Desktop/FromDellLaptop/AlessandroAmantini-CV/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map