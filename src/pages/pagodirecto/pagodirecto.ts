import { Component } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

import { CompletarAvisoPage } from '../completaraviso/completaraviso';

import { SharedService } from '../../providers/shared-service';

declare var cordova: any;

@Component({
    selector: 'page-pagodirecto',
    templateUrl: 'pagodirecto.html'
})
export class PagoDirectoPage {
  userData: any = {};
  userEmpresa: any = {};
  userPoliza: any = {};
  token: any = {};
  loading: Loading;
  storageDirectory: string = '';

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataShare: SharedService,
    private transfer: FileTransfer,
    private fileOpener: FileOpener
  ) {
    this.token = this.dataShare.getToken();
    this.userData = this.dataShare.getUserData().Generales;
    this.userEmpresa = this.dataShare.getUserData().Empresa;
    this.userPoliza = this.dataShare.getUserData().Poliza;
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

  downloadAvisoAccidente() {
    this.showLoading();
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://webapicaintra.segupoliza.com/docs/AvisoAccidentes.pdf';
    fileTransfer.download(url, this.storageDirectory + 'AvisoAccidentes.pdf').then((entry) => {
      this.loading.dismiss();
      this.fileOpener.open(entry.toURL(), 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
    }, (error) => {
      console.log(error);
      this.showInfo("Error al descargar el documento");
    });
  }

    goCompletarAviso() {
      this.navCtrl.push(CompletarAvisoPage).then(data => {
        console.log('Profile', data);
      }, (error) => {
        this.showError("Access Denied");
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
        title: '',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
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
