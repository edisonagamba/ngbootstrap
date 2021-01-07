import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor(private config:NgbProgressbarConfig) {
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true
   }

  ngOnInit(): void {
  }

}
