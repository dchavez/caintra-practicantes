webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchoolPlanPage = /** @class */ (function () {
    function SchoolPlanPage(platform, navCtrl, alertCtrl, loadingCtrl, menu, userService, dataShare, transfer, fileOpener) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.userService = userService;
        this.dataShare = dataShare;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.userData = {};
        this.userEmpresa = {};
        this.userPoliza = {};
        this.token = {};
        this.storageDirectory = '';
        this.logoUni = '';
        this.token = this.dataShare.getToken();
        this.userData = this.dataShare.getUserData().Generales;
        this.userEmpresa = this.dataShare.getUserData().Empresa;
        this.userPoliza = this.dataShare.getUserData().Poliza;
        this.logoUni = "http://peev2.topsoluciones.com.mx/images/logoUniversidad/" + this.userData.LogoUniversidad;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.dataDirectory;
            }
            else {
                return false;
            }
        });
    }
    SchoolPlanPage.prototype.downloadPEE = function () {
        var _this = this;
        this.showLoading();
        var fileTransfer = this.transfer.create();
        var url = 'http://webapicaintra.segupoliza.com/docs/pee.pdf';
        fileTransfer.download(url, this.storageDirectory + 'pee.pdf').then(function (entry) {
            _this.loading.dismiss();
            _this.fileOpener.open(entry.toURL(), 'application/pdf')
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) { return console.log('Error openening file', e); });
        }, function (error) {
            console.log(error);
            _this.showInfo("Error al descargar el documento");
        });
    };
    SchoolPlanPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    SchoolPlanPage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    SchoolPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schoolplan',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\schoolplan\schoolplan.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PLAN ESCUELA EMPRESA</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n  <ion-card text-center>\n\n\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n        <div text-center>\n\n          <ion-img width="80px" height="80px" src="assets/peer.png"></ion-img>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-label center>{{userData.NombreCompleto}}</ion-label>\n\n\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n        <div text-center>\n\n          <ion-img width="90px" height="48px" src="{{logoUni}}"></ion-img>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n\n    <h2 style="color:#1d3a6c;">\n\n      INSTITUCIÓN ACADÉMICA\n\n    </h2>\n\n    <ion-label>{{userData.Universidad}}</ion-label>\n\n    <ion-label class="aright">Vence el: {{userPoliza.FinVigencia}}</ion-label>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card text-center>\n\n    <br />\n\n\n\n    <h2 style="color:#1d3a6c;">\n\n      SERVICIO SOCIAL\n\n    </h2>\n\n\n\n    <ion-row text-left>\n\n      <ion-col>\n\n        <ion-label style="color:#1d3a6c;margin: 0;">Empresa</ion-label>\n\n        <ion-label style="margin: 0;">{{userEmpresa.RazonSocial}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row text-left>\n\n      <ion-col>\n\n        <ion-label style="color:#1d3a6c;margin: 0;">Dirección</ion-label>\n\n        <ion-label style="margin: 0;">{{userEmpresa.Calle}}</ion-label>\n        <ion-label style="margin: 0;">{{userEmpresa.Colonia}}</ion-label>\n        <ion-label style="margin: 0;">{{userEmpresa.Poblacion}}, {{userEmpresa.Estado}} {{userEmpresa.CP}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n  <div>\n\n\n\n    <button ion-button full color="primary" style="" (click)="downloadPEE()">\n\n      VER CONVENIO PEE\n\n    </button>\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\schoolplan\schoolplan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]])
    ], SchoolPlanPage);
    return SchoolPlanPage;
}());

//# sourceMappingURL=schoolplan.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccidentInsurancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medicalcare_medicalcare__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccidentInsurancePage = /** @class */ (function () {
    function AccidentInsurancePage(platform, navCtrl, menu, userService, alertCtrl, loadingCtrl, dataShare, transfer, fileOpener) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.userData = {};
        this.userEmpresa = {};
        this.userPoliza = {};
        this.token = {};
        this.storageDirectory = '';
        this.token = this.dataShare.getToken();
        this.userData = this.dataShare.getUserData().Generales;
        this.userEmpresa = this.dataShare.getUserData().Empresa;
        this.userPoliza = this.dataShare.getUserData().Poliza;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.dataDirectory;
            }
            else {
                return false;
            }
        });
    }
    AccidentInsurancePage.prototype.goMedicalCare = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medicalcare_medicalcare__["a" /* MedicalCarePage */]).then(function (data) {
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    AccidentInsurancePage.prototype.getPolicy = function () {
        var _this = this;
        this.showLoading();
        this.userService.getUrlPDFPolicy(this.userPoliza.Poliza).subscribe(function (data) {
            var urlPdf = data.value;
            var fileTransfer = _this.transfer.create();
            var url = urlPdf;
            fileTransfer.download(url, _this.storageDirectory + 'polizaacidente' + '2438' + '.pdf').then(function (entry) {
                _this.loading.dismiss();
                _this.fileOpener.open(entry.toURL(), 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error openening file', e); });
            }, function (error) {
                console.log(error);
                _this.loading.dismiss();
                _this.showInfo("Error al descargar el documento");
            });
        }, function (error) {
            _this.showError("Error al descargar el documento");
        });
    };
    AccidentInsurancePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    AccidentInsurancePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    AccidentInsurancePage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    AccidentInsurancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accidentinsurance',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\accidentinsurance\accidentinsurance.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SEGURO DE ACCIDENTES</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n  <ion-card text-center>\n\n\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n        <div text-center>\n\n          <ion-img width="80px" height="80px" src="assets/gm.png"></ion-img>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-label center>{{userData.NombreCompleto}}</ion-label>\n\n\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n        <div text-center>\n\n          <ion-img width="90px" height="48px" src="assets/logoAIG.png"></ion-img>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <h2 style="color:#1d3a6c;">\n\n      NÚMERO DE PÓLIZA\n\n    </h2>\n\n    <ion-label>{{userPoliza.ClavePoliza}}</ion-label>\n\n    <ion-label class="aright">Vence el: {{userPoliza.FinVigencia}}</ion-label>\n\n\n\n  </ion-card>\n\n\n  <ion-card text-center>\n\n    <br />\n\n\n\n    <h2 style="color:#1d3a6c;">\n\n      BENEFICIOS\n\n    </h2>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="color:#1d3a6c;margin: 0;">Cobertura</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label style="color:#1d3a6c;margin: 0;">Suma Asegurada</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">Muerte Accidental</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">{{userPoliza.SAMuerte}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">Perdidas Orgánicas</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">{{userPoliza.SAPerdidas}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">Reembolso Gastos Médicos</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label style="margin: 0;">{{userPoliza.SAReembolso}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n  <div>\n\n\n\n    <button ion-button full color="primary" style="" (click)="getPolicy()">\n\n      VER PÓLIZA DE SEGURO\n\n    </button>\n\n\n\n  </div>\n\n  <div>\n\n\n\n    <button ion-button full color="primary" style="padding: 30px;" (click)="goMedicalCare()">\n\n      ATENCIÓN MÉDICA<br />POR ACCIDENTE\n\n    </button>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\accidentinsurance\accidentinsurance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]])
    ], AccidentInsurancePage);
    return AccidentInsurancePage;
}());

//# sourceMappingURL=accidentinsurance.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletarAvisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompletarAvisoPage = /** @class */ (function () {
    function CompletarAvisoPage(navCtrl, menu, userService, alertCtrl, loadingCtrl, dataShare) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.userData = {};
        this.token = {};
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
        this.aviso = {
            Token: "",
            NombreAfectado: "",
            EdadAfectado: "",
            NombrePadreMadre: "",
            Domicilio: "",
            LugarAccidente: "",
            FechaYHora: "",
            Descripcion: "",
            NombreJefe: "",
            Puesto: "",
            Telefono: "",
            Email: ""
        };
        this.token = this.dataShare.getToken();
        this.userData = this.dataShare.getUserData().Generales;
        this.aviso.Token = this.token;
        this.aviso.NombreAfectado = this.userData.NombreCompleto;
        this.paso1();
    }
    CompletarAvisoPage.prototype.paso1 = function () {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
    };
    CompletarAvisoPage.prototype.paso2 = function () {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
        this.step4 = false;
        this.step5 = false;
    };
    CompletarAvisoPage.prototype.paso3 = function () {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
        this.step4 = false;
        this.step5 = false;
    };
    CompletarAvisoPage.prototype.paso4 = function () {
        var _this = this;
        this.showLoading();
        this.userService.getGenerateAviso(this.aviso).subscribe(function (data) {
            _this.loading.dismiss();
            _this.step1 = false;
            _this.step2 = false;
            _this.step3 = false;
            _this.step4 = true;
            _this.step5 = false;
        }, function (error) {
            _this.showError("Error al generar el aviso de accidente.");
        });
    };
    CompletarAvisoPage.prototype.paso5 = function () {
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.step5 = true;
    };
    CompletarAvisoPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function (data) {
        }, function (error) {
        });
    };
    CompletarAvisoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    CompletarAvisoPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CompletarAvisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completaraviso',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\completaraviso\completaraviso.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>COMPLETAR AVISO DE ACCIDENTE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div [hidden]="!step1" style="background-color:#FFF;">\n    <form (ngSubmit)="paso2()" #rec1="ngForm">\n      <ion-row>\n        <ion-col text-center>\n          <ion-list inset>\n\n            <h3>\n              Por favor ingrese la siguiente información\n            </h3>\n\n            <ion-row>\n              <ion-col width-67>\n                <img src="assets/step1.png" style="height: 40px;width: auto;" />\n              </ion-col>\n            </ion-row>\n\n            <h3>\n              Datos del Afectado\n            </h3>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Nombre del Afectado" name="NombreAfectado" [(ngModel)]="aviso.NombreAfectado" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Edad del Afectado" name="EdadAfectado" [(ngModel)]="aviso.EdadAfectado" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Nombre del Padre o Madre" name="NombrePadreMadre" [(ngModel)]="aviso.NombrePadreMadre" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Domicilio" name="Domicilio" [(ngModel)]="aviso.Domicilio" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full  type="submit" [disabled]="!rec1.form.valid">SIGUIENTE</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n  <div [hidden]="!step2" style="background-color:#FFF;">\n    <form (ngSubmit)="paso3()" #rec2="ngForm">\n      <ion-row>\n        <ion-col text-center>\n          <ion-list inset>\n\n            <h3>\n              Por favor ingrese la siguiente información\n            </h3>\n\n            <ion-row>\n              <ion-col width-67>\n                <img src="assets/step2.png" style="height: 40px;width: auto;" />\n              </ion-col>\n            </ion-row>\n\n            <h3>\n              Datos del Accidente\n            </h3>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Lugar donde ocurrio el evento" name="LugarAccidente" [(ngModel)]="aviso.LugarAccidente" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Fecha y Hora" name="FechaYHora" [(ngModel)]="aviso.FechaYHora" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea type="text" placeholder="Descripción detallada del accidente" name="Descripcion" [(ngModel)]="aviso.Descripcion" required></ion-textarea>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec2.form.valid">SIGUIENTE</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n  <div [hidden]="!step3" style="background-color:#FFF;">\n    <form (ngSubmit)="paso4()" #rec3="ngForm">\n      <ion-row>\n        <ion-col text-center>\n          <ion-list inset>\n\n            <h3>\n              Por favor ingrese la siguiente información\n            </h3>\n\n            <ion-row>\n              <ion-col width-67>\n                <img src="assets/step3.png" style="height: 40px;width: auto;" />\n              </ion-col>\n            </ion-row>\n\n            <h3>\n              Datos del Jefe Inmediato\n            </h3>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Nombre" name="NombreJefe" [(ngModel)]="aviso.NombreJefe" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Puesto" name="Puesto" [(ngModel)]="aviso.Puesto" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Teléfono" name="Telefono" [(ngModel)]="aviso.Telefono" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Correo Electrónico" name="Email" [(ngModel)]="aviso.Email" required></ion-input>\n            </ion-item>\n\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec3.form.valid">GENERAR AVISO DE ACCIDENTE</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n  <div [hidden]="!step4" style="background-color:#FFF;">\n    <form (ngSubmit)="paso5()" #rec4="ngForm">\n      <ion-row>\n        <ion-col text-center>\n          <ion-list inset>\n\n            <h3>\n              Por favor verifique que la información sea correcta\n            </h3>\n\n            <ion-card text-center>\n              <br />\n\n              <h2 style="color:#1d3a6c;">\n                Datos del Afectado\n              </h2>\n\n              <ion-row text-left>\n                <ion-col>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Nombre: </strong>{{aviso.NombreAfectado}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Edad: </strong>{{aviso.EdadAfectado}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Nombre del Padre o Madre: </strong>{{aviso.NombrePadreMadre}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Domicilio: </strong>{{aviso.Domicilio}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n            </ion-card>\n\n            <ion-card text-center>\n              <br />\n\n              <h2 style="color:#1d3a6c;">\n                Datos del Accidente\n              </h2>\n\n              <ion-row text-left>\n                <ion-col>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Lugar: </strong>{{aviso.LugarAccidente}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Fecha y Hora: </strong>{{aviso.FechaYHora}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Descripción detallada del accidente: </strong>{{aviso.Descripcion}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n            </ion-card>\n\n            <ion-card text-center>\n              <br />\n\n              <h2 style="color:#1d3a6c;">\n                Datos del Jefe Inmediato\n              </h2>\n\n              <ion-row text-left>\n                <ion-col>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Nombre: </strong>{{aviso.NombreJefe}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Puesto: </strong>{{aviso.Puesto}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Teléfono: </strong>{{aviso.Telefono}}</ion-label>\n                  <ion-label style="margin: 0;" text-uppercase text-wrap><strong>Correo Electrónico: </strong>{{aviso.Email}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n            </ion-card>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec4.form.valid">CONFIRMAR INFORMACIÓN</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n\n  <div [hidden]="!step5" style="background-color:#FFF;">\n\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img src="assets/success.png" />\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <form (ngSubmit)="goHome()" #rec5="ngForm">\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <ion-list inset>\n\n\n\n            <h3>\n\n              El aviso de accidente ha sido enviado por correo electrónico a usted y a su jefe inmediato\n\n            </h3>\n\n\n\n            <ion-row text-left>\n\n              <ion-col>\n\n                <ion-label style="margin: 0;" class="text-uppercase"><strong>El aviso de accidente se debe: </strong></ion-label>\n\n                <ion-label style="margin: 0;" class="text-uppercase">1. Imprimir</ion-label>\n\n                <ion-label style="margin: 0;" class="text-uppercase">2. Firmar y sellar por su jefe inmediato</ion-label>\n\n                <ion-label style="margin: 0;" class="text-uppercase">3. Firmar y sellar por usted</ion-label>\n\n                <ion-label style="margin: 0;" class="text-uppercase">4. Entregar en el centro hospitalario asignado por el call center</ion-label>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <h4 text-left>\n\n              Para cualquier duda, favor de llamar al:<br /> <strong>01 800 001 2244</strong>\n\n            </h4>\n\n\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec5.form.valid">ACEPTAR</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\completaraviso\completaraviso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */]])
    ], CompletarAvisoPage);
    return CompletarAvisoPage;
}());

//# sourceMappingURL=completaraviso.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, menu, userService, alertCtrl, loadingCtrl, dataShare) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.userData = {};
        this.rec = {
            pwd: '',
            pwd2: ''
        };
        this.showChangePwd = false;
        this.token = {};
        this.token = this.dataShare.getToken();
        this.userData = this.dataShare.getUserData().Generales;
    }
    ProfilePage.prototype.viewChangePwd = function () {
        this.showChangePwd = true;
    };
    ProfilePage.prototype.changePwd = function () {
        var _this = this;
        if (this.rec.pwd == "" || this.rec.pwd2 == "" || this.rec.pwd != this.rec.pwd2) {
            return;
        }
        this.showLoading();
        this.userService.getChangePassword({ Token: this.token, Pwd: this.rec.pwd }).subscribe(function (data) {
            _this.loading.dismiss();
            _this.showChangePwd = false;
        }, function (error) {
            _this.showError("Error al cambiar la contraseña.");
        });
    };
    ProfilePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ProfilePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MI PERFIL</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div style="background-color:#FFF;">\n\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <ion-icon name="md-person" style="color: #FFF;font-size: 60px;padding-left: 25%;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-center [hidden]="showChangePwd">\n\n      <br />\n\n\n\n      <h2 style="color:#1d3a6c;">\n\n        GENERALES\n\n      </h2>\n\n\n\n      <ion-row text-left>\n\n        <ion-col>\n\n          <ion-label style="margin: 0;" class="text-uppercase"><strong>Nombre: </strong>{{userData.NombreCompleto}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase"><strong>RFC: </strong>{{userData.RFC}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase"><strong>Teléfono(s): </strong>{{userData.Celular}} {{userData.Telefono}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase"><strong>E-mail: </strong>{{userData.EMail}}</ion-label>\n\n          <br />\n\n          <ion-label style="margin: 0;" class="text-uppercase"><strong>Dirección: </strong><br />{{userData.Calle}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase">Colonia {{userData.Colonia}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase">{{userData.Poblacion}}, {{userData.Estado}}</ion-label>\n\n          <ion-label style="margin: 0;" class="text-uppercase">Código Postal {{userData.CP}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n    </ion-card>\n\n\n\n    <ion-row text-center [hidden]="showChangePwd">\n\n      <ion-col>\n\n        <ion-label style="color:#1d3a6c;" (click)="viewChangePwd()">Para cambiar tu contraseña presiona aquí.</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card text-center [hidden]="!showChangePwd">\n\n      <form (ngSubmit)="changePwd()" #rec1="ngForm">\n\n        <h2 style="color:#1d3a6c;">\n\n            Por favor ingresa tu nueva contraseña\n\n        </h2>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Contraseña" name="pwd" [(ngModel)]="rec.pwd" required></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Confirma tu Contraseña" name="pwd2" [(ngModel)]="rec.pwd2" required></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button color="light" full (click)="showChangePwd=false">CANCELAR</button>\n\n          </ion-col>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full  type="submit" [disabled]="!rec1.form.valid">CAMBIAR</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </form>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.http = http;
    }
    UserService.prototype.getLogin = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            Login: credentials.email,
            Pwd: credentials.password
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/Login', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getDataUser = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            value: token
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/Generales', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getDataUserFromRFC = function (rfc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            value: rfc
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/ValidateRFC', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.setDataUserCreate = function (dataValue) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify(dataValue);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/Register', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUrlPDFPolicy = function (policy) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            value: policy
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/RecoverPolicyUri', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getRecoverPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify({
            value: email
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/RecoverPassword', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getChangePassword = function (input) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify(input);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/ChangePassword', data, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getGenerateAviso = function (input) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify(input);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* API_ENDPOINT */] + 'api/Caintra/AvisoAccidente', data, options).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, menu, navParams, userService, alertCtrl, loadingCtrl, dataShare) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.registerCredentials = { email: '', password: '' };
        this.token = {};
        this.userData = {};
        this.data = {};
        this.rec = {
            rfc: '',
            tel: '',
            email: '',
            pwd: '',
            pwd2: '',
            UID: '',
            Matricula: ''
        };
        this.menu = menu;
        this.menu.enable(false, 'mnuMain');
    }
    RegisterPage.prototype.next = function () {
        var _this = this;
        if (this.rec.rfc == "") {
            return;
        }
        this.showLoading();
        this.userService.getDataUserFromRFC(this.rec.rfc).subscribe(function (data) {
            _this.data = data;
            if (data.Matricula == "" || data.UID == "") {
                _this.showError("No se encontro al usuario asociado a este RFC.");
                return;
            }
            _this.rec.UID = data.UID;
            _this.rec.Matricula = data.Matricula;
            _this.rec.tel = data.Celular;
            _this.rec.email = data.EMail;
            _this.step1 = false;
            _this.step2 = true;
            _this.step3 = false;
            _this.loading.dismiss();
        }, function (error) {
            _this.showError("No se encontro al usuario asociado a este RFC.");
        });
    };
    RegisterPage.prototype.create = function () {
        var _this = this;
        if (this.rec.tel == "" || this.rec.email == "" || this.rec.pwd == "" || this.rec.pwd2 == "") {
            return;
        }
        if (this.rec.pwd != this.rec.pwd2) {
            this.showError("La contraseña con la confirmación de la misma, no son iguales, intente de nuevo.");
            this.rec.pwd2 = "";
            return;
        }
        this.showLoading();
        var dataValue = {
            UID: this.rec.UID,
            Matricula: this.rec.Matricula,
            RFC: this.rec.rfc,
            Telefono: this.rec.tel,
            Login: this.rec.email,
            Password: this.rec.pwd
        };
        this.registerCredentials = { email: dataValue.Login, password: dataValue.Password };
        this.userService.setDataUserCreate(dataValue).subscribe(function (data) {
            _this.userService.getLogin(_this.registerCredentials).subscribe(function (data) {
                _this.token = data.Token;
                _this.dataShare.setToken(_this.token);
                _this.userService.getDataUser(_this.token).subscribe(function (data) {
                    _this.userData = data.Generales;
                    _this.dataShare.setUserData(data);
                    _this.step1 = false;
                    _this.step2 = false;
                    _this.step3 = true;
                    _this.loading.dismiss();
                }, function (error) {
                    _this.showError("Token no válido");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function (data) {
                    }, function (error) {
                    });
                });
            }, function (error) {
                _this.showError("El usuario fue creado pero se le a denegado el acceso, intente firmarse manualmente.");
            });
        }, function (error) {
            _this.showError("No se pudo crear al usuario revise sus datos e intente de nuevo.");
        });
    };
    RegisterPage.prototype.gohome = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function (data) {
        }, function (error) {
            _this.showError("Acceso denegado");
        });
    };
    RegisterPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    RegisterPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REGISTRO DE USUARIO</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div [hidden]="!step1" style="background-color:#FFF;">\n\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img src="assets/write.png" />\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <form (ngSubmit)="next()" #rec1="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-label>\n\n              Por favor ingresa tu R.F.C. para registrar tu información\n\n            </ion-label>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="# R.F.C." name="rfc" [(ngModel)]="rec.rfc" required></ion-input>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full  type="submit" [disabled]="!rec1.form.valid">CONTINUAR</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n\n\n  <div [hidden]="!step2" style="background-color:#FFF;">\n\n    <form (ngSubmit)="create()" #rec2="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-label>\n\n              Por favor ingrese la siguiente información\n\n            </ion-label>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Número de Teléfono" name="tel" [(ngModel)]="rec.tel" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Correo Electrónico" name="email" [(ngModel)]="rec.email" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Contraseña" name="pwd" [(ngModel)]="rec.pwd" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Confirmar Contraseña" name="pwd2" [(ngModel)]="rec.pwd2" required></ion-input>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec2.form.valid">CREAR CUENTA</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n\n\n  <div [hidden]="!step3" style="background-color:#FFF;">\n\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img src="assets/success.png" />\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <form (ngSubmit)="gohome()" #rec3="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-label>\n\n              Hola {{userData.NombreCompleto}}, bienvenido.\n\n            </ion-label>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!rec3.form.valid">CONTINUAR</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__["a" /* SharedService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverpassPage = /** @class */ (function () {
    function RecoverpassPage(navCtrl, menu, userService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.successChangePwd = false;
        this.email = "";
    }
    RecoverpassPage.prototype.recoverPass = function () {
        var _this = this;
        if (this.email == "") {
            return;
        }
        this.showLoading();
        this.userService.getRecoverPassword(this.email).subscribe(function (data) {
            _this.successChangePwd = true;
            _this.loading.dismiss();
        }, function (error) {
            _this.showError("No se encontro al usuario asociado a este email.");
        });
    };
    RecoverpassPage.prototype.successRecoverPass = function () {
        this.navCtrl.pop();
    };
    RecoverpassPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    RecoverpassPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RecoverpassPage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RecoverpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recoverpass',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\recoverpass\recoverpass.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recupera tu contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card text-center [hidden]="successChangePwd">\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img src="assets/write.png" />\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <form (ngSubmit)="recoverPass()" #rec1="ngForm">\n      <br />\n      <h2 style="color:#1d3a6c;">\n          Por favor ingresa tu correo electrónico\n      </h2>\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Correo electrónico" name="email" [(ngModel)]="email" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full  type="submit" [disabled]="!rec1.form.valid">CONTINUAR</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-card>\n\n  <ion-card text-center [hidden]="!successChangePwd">\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img src="assets/success.png" />\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <form (ngSubmit)="successRecoverPass()" #rec1="ngForm">\n      <br />\n      <h2 style="color:#1d3a6c;">\n          Revisa tu correo electrónico y sigue las indicaciones que te hemos enviado.\n      </h2>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full  type="submit" [disabled]="!rec1.form.valid">ACEPTAR</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\recoverpass\recoverpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RecoverpassPage);
    return RecoverpassPage;
}());

//# sourceMappingURL=recoverpass.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReembolsoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__completaraviso_completaraviso__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReembolsoPage = /** @class */ (function () {
    function ReembolsoPage(platform, navCtrl, alertCtrl, loadingCtrl, transfer, fileOpener) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.storageDirectory = '';
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.dataDirectory;
            }
            else {
                return false;
            }
        });
    }
    ReembolsoPage.prototype.downloadAvisoAccidente = function () {
        var _this = this;
        this.showLoading();
        var fileTransfer = this.transfer.create();
        var url = 'http://webapicaintra.segupoliza.com/docs/AvisoAccidentes.pdf';
        fileTransfer.download(url, this.storageDirectory + 'AvisoAccidentes.pdf').then(function (entry) {
            _this.loading.dismiss();
            _this.fileOpener.open(entry.toURL(), 'application/pdf')
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) { return console.log('Error openening file', e); });
        }, function (error) {
            console.log(error);
            _this.showInfo("Error al descargar el documento");
        });
    };
    ReembolsoPage.prototype.goCompletarAviso = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__completaraviso_completaraviso__["a" /* CompletarAvisoPage */]).then(function (data) {
            console.log('Profile', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    ReembolsoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ReembolsoPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ReembolsoPage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ReembolsoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reembolso',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\reembolso\reembolso.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REEMBOLSO DE GASTOS MÉDICOS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n  <p style="margin: 5px;" class="text-normal" class="text-normal">\n\n    Para el trámite del reembolso de gastos médicos, es necesario presentar en las oficinas de AIG:\n\n  </p>\n\n  <ion-card text-left>\n\n\n\n    <p style="margin: 5px;" class="text-normal">\n\n      1.- Formato de aviso de accidente completamente requisitado.\n\n    </p>\n\n\n\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row text-center>\n\n      <ion-col width-50 col-6>\n\n        <button ion-button color="primary" class="btnAviso" (click)="downloadAvisoAccidente()">\n\n          DESCARGAR<br />AVISO ACCIDENTE\n\n        </button>\n\n      </ion-col>\n\n      <ion-col width-50 col-6>\n\n        <button ion-button color="primary" class="btnAviso" (click)="goCompletarAviso()">\n\n          COMPLETAR<br />AVISO ACCIDENTE\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-card text-left>\n\n\n\n    <p style="margin: 5px;" class="text-normal">\n\n      2.- Comprobantes originales de los pagos (facturas), los cuales pueden ser expedidos a favor de la persona que solicite el reembolso.\n\n    </p>\n\n\n\n  </ion-card>\n\n  <ion-card text-left>\n\n\n\n    <p style="margin: 5px;" class="text-normal">\n\n      3.- Los siguientes documentos:<br />\n\n      -Póliza de seguro<br />\n\n      -Identificación oficial del asegurado<br />\n\n      -Formato de identificación del cliente, debidamente llenado y firmado (Art.140)<br />\n\n      -Información adicional<br />\n\n    </p>\n\n\n\n  </ion-card>\n\n  <p class="text-normal">\n\n    El pago deberá de realizarse en 5 días hábiles.<br />\n\n    Para cualquier duda, favor de llamar al:<br />\n\n    <strong>01 800 001 2244</strong>\n\n  </p>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\reembolso\reembolso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]])
    ], ReembolsoPage);
    return ReembolsoPage;
}());

//# sourceMappingURL=reembolso.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoDirectoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__completaraviso_completaraviso__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PagoDirectoPage = /** @class */ (function () {
    function PagoDirectoPage(platform, navCtrl, alertCtrl, loadingCtrl, dataShare, transfer, fileOpener) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.userData = {};
        this.userEmpresa = {};
        this.userPoliza = {};
        this.token = {};
        this.storageDirectory = '';
        this.token = this.dataShare.getToken();
        this.userData = this.dataShare.getUserData().Generales;
        this.userEmpresa = this.dataShare.getUserData().Empresa;
        this.userPoliza = this.dataShare.getUserData().Poliza;
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.dataDirectory;
            }
            else {
                return false;
            }
        });
    }
    PagoDirectoPage.prototype.downloadAvisoAccidente = function () {
        var _this = this;
        this.showLoading();
        var fileTransfer = this.transfer.create();
        var url = 'http://webapicaintra.segupoliza.com/docs/AvisoAccidentes.pdf';
        fileTransfer.download(url, this.storageDirectory + 'AvisoAccidentes.pdf').then(function (entry) {
            _this.loading.dismiss();
            _this.fileOpener.open(entry.toURL(), 'application/pdf')
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) { return console.log('Error openening file', e); });
        }, function (error) {
            console.log(error);
            _this.showInfo("Error al descargar el documento");
        });
    };
    PagoDirectoPage.prototype.goCompletarAviso = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__completaraviso_completaraviso__["a" /* CompletarAvisoPage */]).then(function (data) {
            console.log('Profile', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    PagoDirectoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    PagoDirectoPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PagoDirectoPage.prototype.showInfo = function (text) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PagoDirectoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagodirecto',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\pagodirecto\pagodirecto.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>VÍA PAGO DIRECTO</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n  <p style="margin: 5px;" class="text-normal" class="text-normal">\n\n    Para el pago directo pueda realizarse, se requiere:\n\n  </p>\n\n\n  <ion-card text-left>\n\n\n\n    <p style="margin: 5px;" class="text-normal">\n\n      1.- Reportar el accidente al call center de red asistencia <strong>01 800 001 2244</strong>.\n\n    </p>\n\n\n\n  </ion-card>\n\n\n\n    <ion-card text-left>\n\n\n\n      <p style="margin: 5px;" class="text-normal">\n\n        2.- Proporcionar al call center la siguiente información:<br />\n        <strong>Nombre:</strong> {{userData.NombreCompleto}}<br />\n        <strong>Empresa:</strong> {{userEmpresa.RazonSocial}}<br />\n        <strong># Póliza:</strong> {{userPoliza.ClavePoliza}}<br />\n        <strong>Vigencia de la Póliza:</strong> {{userPoliza.FinVigencia}}\n\n      </p>\n\n\n\n    </ion-card>\n\n\n    <ion-card text-left>\n\n\n\n      <p style="margin: 5px;" class="text-normal">\n\n        3.- Acudir al centro hospitalario indicando por el call center.\n\n      </p>\n\n\n\n    </ion-card>\n\n\n  <ion-card text-left>\n\n\n\n    <p style="margin: 5px;" class="text-normal">\n\n      4.- Presentar en el hospital una identificación oficial y el aviso de accidentes requisitado de forma completa para la sección I.\n\n    </p>\n\n\n    <ion-grid>\n\n      <ion-row text-center>\n\n        <ion-col width-50 col-6>\n\n          <button ion-button color="primary" class="btnAviso" (click)="downloadAvisoAccidente()">\n\n            DESCARGAR<br />AVISO ACCIDENTE\n\n          </button>\n\n        </ion-col>\n\n        <ion-col width-50 col-6>\n\n          <button ion-button color="primary" class="btnAviso" (click)="goCompletarAviso()">\n\n            COMPLETAR<br />AVISO ACCIDENTE\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n  </ion-card>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\pagodirecto\pagodirecto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]])
    ], PagoDirectoPage);
    return PagoDirectoPage;
}());

//# sourceMappingURL=pagodirecto.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.userData = {};
    }
    SharedService.prototype.setToken = function (token) {
        this.token = token;
    };
    SharedService.prototype.getToken = function () {
        return this.token;
    };
    SharedService.prototype.setUserData = function (userData) {
        this.userData = userData;
    };
    SharedService.prototype.getUserData = function () {
        return this.userData;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_schoolplan_schoolplan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_accidentinsurance_accidentinsurance__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_medicalcare_medicalcare__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reembolso_reembolso__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pagodirecto_pagodirecto__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_completaraviso_completaraviso__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_recoverpass_recoverpass__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CaintraApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schoolplan_schoolplan__["a" /* SchoolPlanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_accidentinsurance_accidentinsurance__["a" /* AccidentInsurancePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_medicalcare_medicalcare__["a" /* MedicalCarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reembolso_reembolso__["a" /* ReembolsoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pagodirecto_pagodirecto__["a" /* PagoDirectoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_completaraviso_completaraviso__["a" /* CompletarAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recoverpass_recoverpass__["a" /* RecoverpassPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CaintraApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CaintraApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schoolplan_schoolplan__["a" /* SchoolPlanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_accidentinsurance_accidentinsurance__["a" /* AccidentInsurancePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_medicalcare_medicalcare__["a" /* MedicalCarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reembolso_reembolso__["a" /* ReembolsoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pagodirecto_pagodirecto__["a" /* PagoDirectoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_completaraviso_completaraviso__["a" /* CompletarAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recoverpass_recoverpass__["a" /* RecoverpassPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
                //FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaintraApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_schoolplan_schoolplan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accidentinsurance_accidentinsurance__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_medicalcare_medicalcare__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { CompletarAvisoPage } from '../pages/completaraviso/completaraviso';
var CaintraApp = /** @class */ (function () {
    function CaintraApp(platform, app, menu, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]; //LoginPage;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.menu = menu;
        this.app = app;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    CaintraApp.prototype.goSchoolPlan = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_schoolplan_schoolplan__["a" /* SchoolPlanPage */]);
        this.menu.close();
    };
    CaintraApp.prototype.goAccidentInsurance = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_accidentinsurance_accidentinsurance__["a" /* AccidentInsurancePage */]);
        this.menu.close();
    };
    CaintraApp.prototype.goMedicalCare = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_8__pages_medicalcare_medicalcare__["a" /* MedicalCarePage */]);
        this.menu.close();
    };
    CaintraApp.prototype.goProfile = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
        this.menu.close();
    };
    CaintraApp.prototype.goHome = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.menu.close();
    };
    CaintraApp.prototype.closeApp = function () {
        //this.app.getActiveNav().push(LoginPage);
        //this.menu.close();
        //ionic.Platform.exitApp();
        this.platform.exitApp();
    };
    CaintraApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\app\app.html"*/'<ion-menu [content]="content" id="mnuMain">\n\n  <ion-header>\n    <ion-toolbar color="primary" class="center">\n      <ion-title>CAINTRA PRACTICANTES</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="goHome()">\n        <ion-icon name="md-school"></ion-icon>\n        &nbsp;&nbsp;&nbsp;&nbsp;Inicio\n      </button>\n      <button ion-item (click)="goProfile()">\n        <ion-icon name="md-person"></ion-icon>\n        &nbsp;&nbsp;&nbsp;&nbsp;Perfil\n      </button>\n      <button ion-item (click)="goSchoolPlan()">\n        <ion-icon name="md-school"></ion-icon>\n        &nbsp;&nbsp;&nbsp;&nbsp;PEE\n      </button>\n      <button ion-item (click)="goMedicalCare()">\n        <ion-icon name="ios-medkit-outline"></ion-icon>\n        &nbsp;&nbsp;&nbsp;&nbsp;Seguro\n      </button>\n      <!--<button ion-item menuClose detail-none>\n        <ion-icon name="md-exit"></ion-icon>\n        Cerrar\n      </button>-->\n      <!-- <button ion-item>\n        <ion-icon name="md-power" (click)="closeApp()"></ion-icon>\n        Salir\n      </button> -->\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <img src="assets/logoCaintra.png" style="width: 40px;height: auto;" />\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], CaintraApp);
    return CaintraApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });

var API_ENDPOINT = 'http://webapicaintra.segupoliza.com/';
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
        this.initData();
    }
    AboutPage.prototype.initData = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\about\about.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>about</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schoolplan_schoolplan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accidentinsurance_accidentinsurance__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medicalcare_medicalcare__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AboutPage } from '../about/about';








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, userService, alertCtrl, loadingCtrl, dataShare) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.userData = {};
        this.token = {};
        this.token = this.dataShare.getToken();
        this.menu = menu;
        this.menu.enable(true, 'mnuMain'); //persistent = "true"
        this.initData();
    }
    HomePage.prototype.initData = function () {
        this.getUserData();
    };
    HomePage.prototype.goSchoolPlan = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schoolplan_schoolplan__["a" /* SchoolPlanPage */]).then(function (data) {
            console.log('PlanEscuelaEmpresa', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    HomePage.prototype.goAccidentInsurance = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__accidentinsurance_accidentinsurance__["a" /* AccidentInsurancePage */]).then(function (data) {
            console.log('SeguroDeAccidentes', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    HomePage.prototype.goMedicalCare = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medicalcare_medicalcare__["a" /* MedicalCarePage */]).then(function (data) {
            console.log('AtencionMedicaPorAccidentes', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    HomePage.prototype.goProfile = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]).then(function (data) {
            console.log('Profile', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    HomePage.prototype.getUserData = function () {
        //this.showLoading();
        var _this = this;
        this.userService.getDataUser(this.token).subscribe(function (data) {
            _this.userData = data.Generales;
            _this.dataShare.setUserData(data);
        }, function (error) {
            _this.showError("Token no válido");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]).then(function (data) {
            }, function (error) {
            });
        });
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    HomePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n\n    <button ion-button [menuToggle]="activeMenu">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title class="center">\n\n      INICIO\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n  <div style="background-color:#1d3b6d; width:100%; padding: 5px; padding-top: 1px;padding-left: 15px;margin:0;">\n\n    <h2 style="color:#FFF">\n\n      Bienvenido<br />\n\n      {{userData.NombreCompleto}}\n\n    </h2>\n\n    <ion-label style="color:#FFF"><ion-icon name="ios-phone-portrait-outline"></ion-icon>&nbsp;&nbsp;{{userData.Celular}}</ion-label>\n\n    <ion-label style="color:#FFF"><ion-icon name="ios-mail-outline"></ion-icon>&nbsp;&nbsp;{{userData.EMail}}</ion-label>\n\n    <button ion-button small clear style="color:#FFF;float: right;top: -30px;" (click)="goProfile()">Perfil</button>\n\n  </div>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="home" nopadding>\n\n\n\n  <div style="padding-left:10px;padding-right:10px;color:#1d3b6d">\n\n    <div style="padding-bottom: 215px;">\n\n\n\n      <button class="button-caintra-large left" ion-button (click)="goSchoolPlan()">\n\n        <ion-img src="assets/logoPEE.png" style="width: 80px; height: 106px; position:absolute;margin-top: -30px;margin-left:0%;"></ion-img>\n\n        <h4 style="color:#1d3b6d;margin-top: 140px;">Plan Escuela<br />Empresa</h4>\n\n      </button>\n\n\n\n      <button class="button-caintra-large right" ion-button (click)="goAccidentInsurance()">\n\n        <ion-img src="assets/logoAIG.png" style="width: 90px; height: 50px; position:absolute;margin-top: -20px;margin-left:0%;"></ion-img>\n\n        <h4 style="color:#1d3b6d;margin-top: 140px;">Seguro de<br />Accidentes</h4>\n\n      </button>\n\n\n\n    </div>\n\n\n\n    <div>\n\n\n\n      <button ion-button full color="primary" style="padding: 30px;" (click)="goMedicalCare()">\n\n        ATENCIÓN MÉDICA<br />POR ACCIDENTE\n\n      </button>\n\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_shared_service__["a" /* SharedService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recoverpass_recoverpass__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menu, userService, alertCtrl, loadingCtrl, dataShare) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataShare = dataShare;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.registerPage = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.recoverPass = __WEBPACK_IMPORTED_MODULE_4__recoverpass_recoverpass__["a" /* RecoverpassPage */];
        this.registerCredentials = { email: '', password: '' };
        this.token = {};
        this.menu = menu;
        this.menu.enable(false, 'mnuMain'); //persistent = "true"
        dataShare.setToken("");
    }
    LoginPage.prototype.createAccount = function () {
        var _this = this;
        this.showLoading();
        this.registerCredentials = { email: '', password: '' };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]).then(function (data) {
            console.log('Registro', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
        //let _this = this;
        //_this.navCtrl.setRoot(RegisterPage).then(data => {
        //  console.log('register', data);
        //}, (error) => {
        //  console.log('error', error);
        //  _this.showError("Access Denied");
        //});
    };
    LoginPage.prototype.recoverPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recoverpass_recoverpass__["a" /* RecoverpassPage */]).then(function (data) {
        }, function (error) {
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.registerCredentials.email == "" || this.registerCredentials.password == "") {
            return;
        }
        this.showLoading();
        this.userService.getLogin(_this.registerCredentials).subscribe(function (data) {
            _this.token = data.Token;
            _this.dataShare.setToken(_this.token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function (data) {
            }, function (error) {
                _this.showError("Acceso denegado");
            });
        }, function (error) {
            _this.showError("Acceso denegado");
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67>\n\n      <!-- <img src="assets/logoCaintra.png" /> -->\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="ios-mail-outline"></ion-icon>\n\n              </ion-label>\n\n                <ion-input type="text" placeholder="Correo Electrónico" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n             </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="ios-lock-outline"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">ENTRAR</button>\n\n          <br />\n\n          <button ion-button class="register-btn" full (click)="createAccount()">REGISTRARME</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer class="login-footer">\n\n  <ion-toolbar>\n\n    <button ion-button class="lostpwd-btn center" clear full (click)="recoverPassword()">Olvidaste tu Usuario o Contraseña?</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_service__["a" /* SharedService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalCarePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reembolso_reembolso__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagodirecto_pagodirecto__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicalCarePage = /** @class */ (function () {
    function MedicalCarePage(navCtrl, menu, userService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.initData();
    }
    MedicalCarePage.prototype.initData = function () {
    };
    MedicalCarePage.prototype.goReembolso = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reembolso_reembolso__["a" /* ReembolsoPage */]).then(function (data) {
            console.log('Profile', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    MedicalCarePage.prototype.goPagoDirecto = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pagodirecto_pagodirecto__["a" /* PagoDirectoPage */]).then(function (data) {
            console.log('Profile', data);
        }, function (error) {
            _this.showError("Access Denied");
        });
    };
    MedicalCarePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    MedicalCarePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MedicalCarePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicalcare',template:/*ion-inline-start:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\medicalcare\medicalcare.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ATENCIÓN MÉDICA POR ACCIDENTE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n  <div style="background-color:#FFF;">\n\n    <ion-row class="logo-row" style="background-color: #1d3a6c;">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img src="assets/write.png" />\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <form>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal" >\n\n              Usted tiene 2 opciones para utilizar la cobertura de Gastos Médicos\n\n            </p>\n\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal" color="primary">\n\n              REEMBOLSO DE GASTOS MÉDICOS <button ion-button type="button" (click)="goReembolso()" style="margin: 0px;padding: 6px;height: 30px;">Ir</button>\n\n            </p>\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal">\n\n              El asegurado paga a los prestadores de servicios médicos para la atención de un accidente amparado por la póliza.\n\n            </p>\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal">\n\n              En caso de que el accidente sea amparado por la´póliza, AIG reembolsará al asegurado los gastos médicos cubiertos para su atención.\n\n            </p>\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal" color="primary">\n\n              VÍA PAGO DIRECTO <button ion-button type="button" (click)="goPagoDirecto()" style="margin: 0px;padding: 6px;height: 30px;">Ir</button>\n\n            </p>\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal">\n\n              El asegurado acude al centro hospitalario asignado por AIG para su atención.\n\n            </p>\n\n            <p style="margin: 5px;    margin-bottom: 10px;" class="text-normal">\n\n              El asegurado solo paga aquellos gastos que no sean cubiertos por la póliza. <strong color="primary">RECOMENDADO</strong>\n\n            </p>\n\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Diego\Proyectos\IONIC\AppMobil\caintra-practicantes\src\pages\medicalcare\medicalcare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MedicalCarePage);
    return MedicalCarePage;
}());

//# sourceMappingURL=medicalcare.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map