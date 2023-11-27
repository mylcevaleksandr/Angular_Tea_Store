import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from "./order.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [OrderComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule {
}
