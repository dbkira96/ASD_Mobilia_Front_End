import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [						
    AppComponent,
      WelcomeComponent,
      LoginComponent,
      ErrorComponent,
      ProductsComponent,
      BoardAdminComponent,
      HomePageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
