import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NzUploadFile} from 'ng-zorro-antd';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AppHelper {

  constructor() {
  }

  static jwtDecode(jwt) {
    const helper = new JwtHelperService();
    // const expirationDate = helper.getTokenExpirationDate(jwt);
    // const isExpired = helper.isTokenExpired(jwt);
    return helper.decodeToken(jwt);
  }

  static isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
  }

  static getBase64(file: NzUploadFile | Blob): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  static intersection(arr1, arr2) {
    return _.intersection(arr1, arr2);
  }
}
