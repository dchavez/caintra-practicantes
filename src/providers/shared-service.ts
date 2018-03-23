import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {

    constructor() {
    }

    token: any;
    userData: any = {};

    setToken(token) {
      this.token = token;
    }

    getToken() {
      return this.token;
    }

    setUserData(userData) {
      this.userData = userData;
    }

    getUserData() {
      return this.userData;
    }

}
