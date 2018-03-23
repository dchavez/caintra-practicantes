import { Component } from '@angular/core';
import { App, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchoolPlanPage } from '../pages/schoolplan/schoolplan'
import { AccidentInsurancePage } from '../pages/accidentinsurance/accidentinsurance'
import { MedicalCarePage } from '../pages/medicalcare/medicalcare';
import { ProfilePage } from '../pages/profile/profile';

import { CompletarAvisoPage } from '../pages/completaraviso/completaraviso';


@Component({
  templateUrl: 'app.html'
})
export class CaintraApp {
  rootPage: any = LoginPage; //LoginPage;
  loginPage = LoginPage;

  constructor(
    platform: Platform,
    app: App,
    menu: MenuController,
    statusBar: StatusBar, 
    splashScreen: SplashScreen
  ) {
    this.menu = menu;
    this.platform = platform;

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }


  goSchoolPlan() {
      this.app.getActiveNav().push(SchoolPlanPage);
      this.menu.close();
  }

  goAccidentInsurance() {
    this.app.getActiveNav().push(AccidentInsurancePage);
    this.menu.close();
  }

  goMedicalCare() {
      this.app.getActiveNav().push(MedicalCarePage);
      this.menu.close();
  }

  goProfile() {
    this.app.getActiveNav().push(ProfilePage);
    this.menu.close();
  }

  goHome() {
    this.app.getActiveNav().push(HomePage);
    this.menu.close();
  }

  closeApp() {
    this.app.getActiveNav().push(LoginPage);
    this.menu.close();
  }
}
