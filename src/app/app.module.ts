import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HostPageNumberPhone } from '../pages/HostPageNumberPhone/HostPageNumberPhone';
import {Ionic2MaskDirective} from "ionic2-mask-directive";
import { HttpModule} from '@angular/http';
import { HostPageNumberPhoneService } from '../pages/HostPageNumberPhone/HostPageNumberPhone.service';
import { InsertPinCodeHost } from '../pages/InsertPinCodeHost/InsertPinCodeHost';
import { Events } from '../pages/events/Events';
import { InsertPinCodeHostService } from '../pages/InsertPinCodeHost/InsertPinCodeHost.service';
import { NewEvents } from '../pages/newevents/newEvent';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HostPageNumberPhone,
    Ionic2MaskDirective,
    InsertPinCodeHost,
    Events,
    NewEvents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HostPageNumberPhone,
    InsertPinCodeHost,
    Events,
    NewEvents
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HostPageNumberPhoneService,
    InsertPinCodeHostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
