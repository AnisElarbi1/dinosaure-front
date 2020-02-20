import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ErrorComponent} from './components/error/error.component';
import {HeaderComponent} from './shared/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './components/signup/signup.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {DinosaursComponent} from './components/dinosaurs/dinosaurs.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    HeaderComponent,
    SignupComponent,
    PersonalInfoComponent,
    DinosaursComponent,
    UpdateInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
