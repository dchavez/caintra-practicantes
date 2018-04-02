import { Component } from '@angular/core';
import { MenuController, NavController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

import { MedicalCarePage } from '../medicalcare/medicalcare';
import { SharedService } from '../../providers/shared-service';

import { UserService } from '../../providers/user-service';

declare var cordova: any;

@Component({
    selector: 'page-accidentinsurance',
    templateUrl: 'accidentinsurance.html'
})
export class AccidentInsurancePage {
  loading: Loading;
  userData: any = {};
  userEmpresa: any = {};
  userPoliza: any = {};
  token: any = {};
  storageDirectory: string = '';

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public menu: MenuController,
    public userService: UserService,
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

  goMedicalCare() {
    this.navCtrl.push(MedicalCarePage).then(data => {
    }, (error) => {
      this.showError("Access Denied");
    });
  }

  getPolicy(){
      this.showLoading();
      this.userService.getUrlPDFPolicy(this.userPoliza.Poliza).subscribe(
        (data) => {
          let urlPdf = data.value;
          const fileTransfer: FileTransferObject = this.transfer.create();
          const url = urlPdf;
          fileTransfer.download(url, this.storageDirectory + 'polizaacidente' + '2438' + '.pdf').then((entry) => {
            this.loading.dismiss();
            this.fileOpener.open(entry.toURL(), 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error openening file', e));
          }, (error) => {
            console.log(error);
            this.loading.dismiss();
            this.showInfo("Error al descargar el documento");
          });
        },
        (error) => {
          this.showError("Error al descargar el documento");
        }
      )
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
