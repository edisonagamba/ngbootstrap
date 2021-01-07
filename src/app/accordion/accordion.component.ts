import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor(private _config:NgbAccordionConfig) { 
    _config.closeOthers=false;
  }

  nomodificar($event:NgbPanelChangeEvent){
  if ($event.panelId === 'panel1' && $event.nextState === false){
    $event.preventDefault();  }
  }

  ngOnInit(): void {
  }

}
