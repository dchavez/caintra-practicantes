import { Component } from '@angular/core';
import { MenuController, Platform, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

import { UserService } from '../../providers/user-service';
import { SharedService } from '../../providers/shared-service';

declare var cordova: any;

@Component({
    selector: 'page-schoolplan',
    templateUrl: 'schoolplan.html'
})
export class SchoolPlanPage {
  userData: any = {};
  userEmpresa: any = {};
  userPoliza: any = {};
  token: any = {};
  storageDirectory: string = '';
  logoUni: string = '';
  loading: Loading;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public menu: MenuController,
    public userService: UserService,
    private dataShare: SharedService,
    private transfer: FileTransfer,
    private fileOpener: FileOpener
  ) {
    this.token = this.dataShare.getToken();
    this.userData = this.dataShare.getUserData().Generales;
    this.userEmpresa = this.dataShare.getUserData().Empresa;
    this.userPoliza = this.dataShare.getUserData().Poliza;
    this.logoUni = "http://peev2.topsoluciones.com.mx/images/logoUniversidad/" + this.userData.LogoUniversidad;
    this.platform.ready().then(() => {
      if(!this.platform.is('cordova')) {
        return false;
      }
      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        return false;
      }
    });
  }

  downloadPEE() {
    this.showLoading();
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://webapicaintra.segupoliza.com/docs/pee.pdf';
    fileTransfer.download(url, this.storageDirectory + 'pee.pdf').then((entry) => {
      this.loading.dismiss();
      this.fileOpener.open(entry.toURL(), 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
    }, (error) => {
      console.log(error);
      this.showInfo("Error al descargar el documento");
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showInfo(text) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
