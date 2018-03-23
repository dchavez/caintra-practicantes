import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { UserService } from '../../providers/user-service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public userService: UserService,
  ) {
    this.initData();
  }

  initData() {

  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad profilePage');
    }

}
