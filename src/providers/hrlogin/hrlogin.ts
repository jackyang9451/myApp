import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HostAddress } from '../host';
/*
  Generated class for the HrloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HrloginProvider {
  private hrUrl = `${HostAddress.MyHost}/hr`;

  constructor(public http: HttpClient) {
    console.log('Hello HrloginProvider Provider');
  }

  validate(id: number): Observable<boolean> {
    const url = `${this.hrUrl}/${id}`;
    return this.http.get<boolean>(url);
  }
}
