import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewEventMenager } from '../neweventsmenager/newEventMenager';


@Component({
  selector: 'page-events',
  templateUrl: 'Events.html'
})
export class Events {

  tab1Root = LoginPage;
  events = NewEventMenager;

  constructor(public navCtrl: NavController) {
  }

  sendPinCode(){
    // this.service.sendPinCode(this.user.phone)
    //   .then(response => this.goToEvents(response))
    //   .catch();
  }

  goToEvents(response){
    // this.navCtrl.push(InsertPinCodeHost);
  }

  newEvent(){
    console.log('test')
  }

}
