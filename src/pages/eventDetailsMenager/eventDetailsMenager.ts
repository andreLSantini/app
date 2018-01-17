import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventObject } from '../newevent/newEventObject';
import { LoginPage } from '../login/login';
import { EventDetails } from '../eventDetails/EventDetails';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-eventDetailsMenager',
  templateUrl: 'EventDetailsMenager.html'
})
export class EventDetailsMenager {
    public event :  EventObject;
    tab1Root = LoginPage;
    events = EventDetails;
    settings = Settings;

    constructor(public navCtrl: NavController) {
        this.event = new EventObject();
    }

    goHome(){
        this.navCtrl.setRoot(LoginPage);
    }

}
