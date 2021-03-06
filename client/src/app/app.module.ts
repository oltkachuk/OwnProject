import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MainModule } from './layout/main/main.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DashbordModule } from './dashbord/dashbord.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    MainModule,
    DashbordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
