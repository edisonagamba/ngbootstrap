import { Component, OnInit } from '@angular/core';
import { NgbToastConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
mostrar:boolean=false;
  constructor(private config:NgbToastConfig) {
     config.delay=3000;
     config.autohide=false;
     config.ariaLive="polite";
  }

  ngOnInit(): void {}
  aparecerToast(valor:boolean){
    this.mostrar=valor;
  }
}
