import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from './_authenticaton/auth.guard';
import { AuthInterceptor } from './_authenticaton/auth.interceptor';
import { UserService } from './_services/user/user.service';
import { OwnerService } from './_services/owner/owner.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// notifiction 
import { ToastrModule } from 'ngx-toastr';


import {

  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
// import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
// auth owner
import { LoginComponent as ownerlogin } from './features/auth/owner/login/login.component';
import { RegisterComponent as ownerRegister } from './features/auth/owner/register/register.component';
// auth user
import { RegisterComponent as userRegister } from './features/auth/user/register/register.component';
import { LoginComponent as userlogin } from './features/auth/user/login/login.component';

// home COmponents
import { Cards0Component } from "./core/home/components/cards0/cards0.component";
import { Cards1Component } from "./core/home/components/cards1/cards1.component";
import { AccordionComponent } from "./core/home/components/accordion/accordion.component";
import { SlideShowComponent } from "./core/home/components/slide-show/slide-show.component";
import { ContactUsComponent } from "./core/home/components/contact-us/contact-us.component";
import { ImagesComponent } from "./core/home/components/images/images.component";
import { RegisterButtonComponent } from "./core/home/components/register-button/register-button.component";
import { RegisterButtonUserComponent } from "./core/home/components/register-button-user/register-button-user.component";
import { PlaygroundListComponent } from './features/playground/playground-list/playground-list.component';
import { PlaygroundDetailsComponent } from './features/playground/playground-details/playground-details.component';
import { ResetPasswordComponent } from './features/auth/resetPassword/reset-password/reset-password.component';
import { ConfirmPasswordComponent } from './features/auth/resetPassword/confirm-password/confirm-password.component';
import { CoverComponent } from './core/home/components/cover/cover.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    // auth owner
    ownerlogin,
    ownerRegister,
    // auth user
    userRegister,
    userlogin,
    //--------//
    //home components
    Cards0Component,
    Cards1Component,
    AccordionComponent,
    SlideShowComponent,
    ContactUsComponent,
    ImagesComponent,
    RegisterButtonComponent,
    RegisterButtonUserComponent,
    PlaygroundListComponent,
    PlaygroundDetailsComponent,
    ResetPasswordComponent,
    ConfirmPasswordComponent,
    CoverComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB90FxtYG_ybAYXGkz0ybkmkboE2nEbezI"
    }),

    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar:true
    }),
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
    , UserService
    , OwnerService
    , AuthGuard,

    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
