import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page401/page401.component';
import { RegistrationComponent } from './registration/registration.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page401Component,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyARE7tCLYQOvbIrKjHtZHBLKq4NFHumYc8",
      authDomain: "currency-converter-76791.firebaseapp.com",
      projectId: "currency-converter-76791",
      storageBucket: "currency-converter-76791.appspot.com",
      messagingSenderId: "144343602169",
      appId: "1:144343602169:web:23dd4ac856827110fa6328",
      measurementId: "G-JGC7HXNV7K"
    }),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
