import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventListMenager } from '../eventlistmenager/EventListMenager';
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

    constructor(public navCtrl: NavController,private navParams: NavParams) {
        this.event = new EventObject();
        let id = navParams.get('id');
    }

}
