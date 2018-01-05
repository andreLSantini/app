import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewEvent } from '../newevent/newevent';

@Component({
  selector: 'page-neweventsmenager',
  templateUrl: 'newEventMenager.html'
})
export class NewEventMenager {



  constructor(public navCtrl: NavController) {
  }
 
  back(){
    this.navCtrl.push(LoginPage);
  }

  newevent(){
    this.navCtrl.push(NewEvent);
  }
}
