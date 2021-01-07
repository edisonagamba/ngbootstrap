import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// componentes
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    DropdownComponent,
    ModalComponent,
    ProgressbarComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
