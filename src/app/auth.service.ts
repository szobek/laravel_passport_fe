import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  before() {

  }

  run() {
      /*return this.http.post(
          `http://jwt.test/oauth/token`,
          {},
          {}
      );*/

      return {
          key: 'value'
      };

  }
}
