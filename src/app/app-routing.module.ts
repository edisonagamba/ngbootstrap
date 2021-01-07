import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ToastComponent } from './toast/toast.component';



const routes: Routes = [
  {path:'accordion',component:AccordionComponent },
  {path:'alert',component: AlertComponent},
  {path:'button',component: ButtonsComponent},
  {path:'dropdown',component: DropdownComponent},
  {path:'modal',component: ModalComponent},
  {path:'bar',component: ProgressbarComponent},
  {path:'toast',component:ToastComponent},
  {path:'**', pathMatch:'full', redirectTo:'toast'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
