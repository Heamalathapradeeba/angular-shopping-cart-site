import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { DataServiceService } from './services/data-service.service';
import { FooterComponent } from './components/footer/footer.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    ProductdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
