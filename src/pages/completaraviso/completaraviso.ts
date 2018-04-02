import { Component } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { HomePage } from '../home/home';

import { UserService } from '../../providers/user-service';

import { SharedService } from '../../providers/shared-service';

@Component({
    selector: 'page-completaraviso',
    templateUrl: 'completaraviso.html'
})
export class CompletarAvisoPage {
  homePage = HomePage;
  loading: Loading;
  userData: any = {};
  token: any = {};
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  aviso = {
    Token : "",

    NombreAfectado : "",
    EdadAfectado : "",
    NombrePadreMadre : "",
    Domicilio : "",

    LugarAccidente : "",
    FechaYHora : "",
    Descripcion : "",

    NombreJefe : "",
    Puesto : "",
    Telefono : "",
    Email : ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public userService: UserService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataShare: SharedService
  ) {
    this.token = this.dataShare.getToken();
    this.userData = this.dataShare.getUserData().Generales;
    this.aviso.Token = this.token;
    this.aviso.NombreAfectado = this.userData.NombreCompleto;
    this.paso1();
  }

  paso1() {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
  }

  paso2() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
  }

  paso3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    this.step4 = false;
    this.step5 = false;
  }

  paso4() {
    this.showLoading();

    this.userService.getGenerateAviso(this.aviso).subscribe(
      (data) => {
        this.loading.dismiss();
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = true;
        this.step5 = false;
      },
      (error) => {
        this.showError("Error al generar el aviso de accidente.");
      }
    )
  }

  paso5() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = true;
  }

  goHome() {
    this.navCtrl.setRoot(HomePage).then(data => {
    }, (error) => {
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
