import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewEventService } from './newevent.service';
import { EventObject } from './newEventObject';
import { EventListMenager } from '../eventlistmenager/EventListMenager';

@Component({
  selector: 'page-newevent',
  templateUrl: 'newevent.html'
})
export class NewEvent {
    event :  EventObject;

    constructor(public navCtrl: NavController,public service:NewEventService) {
        this.event = new EventObject();
  }
 
  createEvent() {
      this.service.createEvent(this.event)
      .then(x => this.goToEventsList());
  }

  goToEventsList(){
    this.navCtrl.push(EventListMenager)
  }

  eventChecked(){
    if(this.event.description == null || this.event.description == undefined || this.event.description.length < 1){
      return true;
    }
    if(this.event.firstDate == null || this.event.firstDate == undefined){
      return true;
    }
    if(this.event.lastDate == null || this.event.lastDate == undefined){
      return true;
    }
    return false;
  }

}
