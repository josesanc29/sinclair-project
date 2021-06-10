import { Component } from '@angular/core';
import { Constants } from './constants/sistemas.contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emuladores = Constants.SISTEMAS;

  constructor(){}

  // tslint:disable-next-line:typedef
  selectSystemRetro(rowIndex){
    // this.emuladores[rowIndex]);
    console.log(this.emuladores[rowIndex]);
  }

  // tslint:disable-next-line:typedef
  openModal(){}
}
