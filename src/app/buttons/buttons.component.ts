import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
modelo={
  boton1:true,
  boton2:false
}
model=1;

public checkboxGroup:FormGroup;

public radioGroup:FormGroup;
  constructor(private formulario:FormBuilder) { }

  ngOnInit(): void {
    this.checkboxGroup = this.formulario.group({
      boton1:true,
      boton2:false
    });

    this.radioGroup = this.formulario.group(
      {
        'radioModel':1
      }
    );

  }

}
