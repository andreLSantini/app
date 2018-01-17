import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { EventDetailsMenager } from '../pages/eventDetailsMenager/eventDetailsMenager';
import { Settings } from '../pages/settings/settings';
import { SettingsService } from '../pages/settings/settings.service';
import { InsertPinCodeGuest } from '../pages/insertPinCodeGuest/insertPinCodeGuest';
import { InsertPinCodeGuestService } from '../pages/insertPinCodeGuest/insertPinCodeGuest.service';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
    HostPageNumberPhone,
    Ionic2MaskDirective,
    InsertPinCodeHost,
    Events,
    NewEventMenager,
    NewEvent,
    EventList,
    EventListMenager,
    EventDetails,
    EventDetailsMenager,
    Settings,
    InsertPinCodeGuest
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
    HostPageNumberPhone,
    InsertPinCodeHost,
    Events,
    NewEventMenager,
    NewEvent,
    EventList,
    EventListMenager,
    EventDetails,
    EventDetailsMenager,
    Settings,
    InsertPinCodeGuest
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HostPageNumberPhoneService,
    InsertPinCodeHostService,
    NewEventService,
    EventListService,
    EventDetailsService,
    SettingsService,
    InsertPinCodeGuestService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
