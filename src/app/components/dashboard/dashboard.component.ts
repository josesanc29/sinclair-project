import { Component, OnInit } from '@angular/core';
import { SistemasRetroService } from 'src/app/services/sistemas-retro.service';
import { Constants } from '../../constants/sistemas.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emuladores = Constants.SISTEMAS;
  logs = [];
  indice = 0;

  constructor(private service: SistemasRetroService) { }
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  printLogs(){
    this.service.getLogs().subscribe(resp => console.log(resp));
  }
  // tslint:disable-next-line:typedef
  mandarMsgTxt(text){
    if (text === ''){
      return false;
    }
    this.service.escribeMsgTxt(text);
  }

  // tslint:disable-next-line:typedef
  selectSystemRetro(rowIndex){
    // this.emuladores[rowIndex]);
    console.log(this.emuladores[rowIndex].download);
  }

  // tslint:disable-next-line:typedef
  openModal(){}

}
