import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credencials } from '../constants/credentials.constants';

@Injectable({
  providedIn: 'root'
})
export class SistemasRetroService {
  private username: string;
  private password: string;
  login = false;
  constructor(public http: HttpClient) {
    this.username = Credencials.CREDENTIALS.userName;
    this.password = Credencials.CREDENTIALS.password;
  }
  // tslint:disable-next-line:typedef
  public authentication(user: string, pass: string){
    console.log('datos del component ', user, pass);
    // return this.http.post('', user, pass).pipe(datos =>{
    //   if ( user === this.username && pass === this.password){
    //     this.login = true;
    //     this.estaLogueado(this.login);
    //     return 'OK';
    //   } else {
    //     this.estaLogueado(this.login);
    //     return 'NO';
    //   }
    // });
  }

  // tslint:disable-next-line:typedef
  estaLogueado(estado){
    return estado;
  }

}
