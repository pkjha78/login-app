import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from '../services/alert.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent], //this is  very important
  providers: [AlertService]
})
export class AlertModule { }
