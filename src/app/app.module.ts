import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import * as $ from 'jquery';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
