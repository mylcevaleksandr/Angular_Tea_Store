import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent
  ]
})
export class SharedModule {
}
