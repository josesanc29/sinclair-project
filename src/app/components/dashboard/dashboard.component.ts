import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/sistemas.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emuladores = Constants.SISTEMAS;
  constructor() { }
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  selectSystemRetro(rowIndex){
    // this.emuladores[rowIndex]);
    console.log(this.emuladores[rowIndex]);
  }

  // tslint:disable-next-line:typedef
  openModal(){}

}
