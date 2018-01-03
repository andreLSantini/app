import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EventList } from '../eventlist/eventlist';

@Component({
  selector: 'page-eventListMenager',
  templateUrl: 'EventListMenager.html'
})
export class EventListMenager {
    tab1Root = LoginPage;
    eventList = EventList;
    constructor(public navCtrl: NavController) {
  }
 

}
