import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// import * as $ from 'jquery';
import {MainComponent} from './components/pages/main/main.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {CatalogComponent} from './components/pages/catalog/catalog.component';
import {ProductComponent} from './components/pages/product/product.component';
import {OrderComponent} from './components/pages/order/order.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {ProductCardComponent} from './components/common/product-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
