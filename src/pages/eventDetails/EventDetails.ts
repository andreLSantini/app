import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventListMenager } from '../eventlistmenager/EventListMenager';
import { EventObject } from '../newevent/newEventObject';
import { EventDetailsService } from './EventDetailsService';
import { LoginPage } from '../login/login';
import { EventList } from '../eventlist/eventlist';

@Component({
  selector: 'page-eventDetails',
  templateUrl: 'EventDetails.html'
})
export class EventDetails {
    public event :  EventObject;
    tab1Root = LoginPage;
    events = EventDetails;

    constructor(public navCtrl: NavController,private navParams: NavParams,public service: EventDetailsService) {
        this.event = new EventObject();
        let id = navParams.get('id');
        console.log('xxxx - > ',id)
     this.service.getOneEvent(id)
     .map(res => res.json())
    .subscribe(data => {
      this.event.description = data.description;
      let firstDate = new Date(data.firstDate).toISOString();
      let lastDate = new Date(data.lastDate).toISOString();
      this.event.firstDate = firstDate;
      this.event.lastDate = lastDate;  
    }); 
       
  }
  back(){
    this.navCtrl.setRoot(EventList);
  }

}
