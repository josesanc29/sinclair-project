import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SistemasRetroService {
  localhost = environment.backendUrl;
  private headers = new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    Accept: '*/*',
  });

  constructor(public http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getLogs() {
    // tslint:disable-next-line:no-shadowed-variable
    const url = this.localhost + '/logs';
    return this.http.get(url);
  }

  // tslint:disable-next-line:typedef
  escribeMsgTxt( mensaje) {
    const options = {headers: this.headers};
    return this.http.post(`${this.localhost}/mensaje`, mensaje, options);
  }
}
