import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventListService } from './eventlist.service';
import { NewEvent } from '../newevent/newevent';
import { EventDetails } from '../eventDetails/EventDetails';
import { LoginPage } from '../login/login';
import { EventDetailsMenager } from '../eventDetailsMenager/eventDetailsMenager';

@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html'
})
export class EventList implements OnInit{
  public events: Array<any>;
    constructor(public navCtrl: NavController,public service:EventListService) {
    
    }
 
  ngOnInit(): void {
      this.getAllEvents();
  }

  getAllEvents(){
    this.service.getAllEvents()
    .map(res => res.json())
    .subscribe(data => {
      this.events = data;
    }); 
  }

  itemSelected(item){
    this.navCtrl.push(EventDetailsMenager,{id : item.id});
  }

  newEvent(){
    this.navCtrl.push(NewEvent);
  }
  back(){
    this.navCtrl.push(LoginPage);
  }
}
