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
import { NewEventMenager } from '../pages/neweventsmenager/newEventMenager';
import { NewEvent } from '../pages/newevent/newevent';
import { NewEventService } from '../pages/newevent/newevent.service';
import { EventList } from '../pages/eventlist/eventlist';
import { EventListMenager } from '../pages/eventlistmenager/EventListMenager';
import { EventListService } from '../pages/eventlist/eventlist.service';
import { EventDetails } from '../pages/eventDetails/EventDetails';
import { EventDetailsService } from '../pages/eventDetails/EventDetailsService';

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
    NewEventMenager,
    NewEvent,
    EventList,
    EventListMenager,
    EventDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // Configs for your app
      tabsHideOnSubPages: true,
    }, 
  )],
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
    NewEventMenager,
    NewEvent,
    EventList,
    EventListMenager,
    EventDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HostPageNumberPhoneService,
    InsertPinCodeHostService,
    NewEventService,
    EventListService,
    EventDetailsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
