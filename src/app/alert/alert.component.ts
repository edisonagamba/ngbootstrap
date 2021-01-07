import { Component, OnInit } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(private configAlert:NgbAlertConfig) {
    configAlert.type="success";
    configAlert.dismissible=true;
  }

  cerrar(alerta){
    document.getElementById(alerta).style.display="none";
  }

  ngOnInit(): void {
    setTimeout(() =>document.getElementById('uno').style.display="none",5000 );
  }

}
