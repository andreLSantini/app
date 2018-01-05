import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HostPageNumberPhone } from '../HostPageNumberPhone/HostPageNumberPhone';
import { InsertPinCodeGuest } from '../insertPinCodeGuest/insertPinCodeGuest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  isClickedTitle = false;
  constructor(public navCtrl: NavController) {
  }

  public goToHostPhone(){
    console.log("go to host phone");
    this.navCtrl.push(HostPageNumberPhone);

  }
  goToGuestPin(){
    console.log("go to host phone");
    this.navCtrl.push(InsertPinCodeGuest);
  }
 

  getMyStyles(){
    let myStyles = {
      'background-color': this.isClickedTitle ? 'red' : 'white',
   };
   return myStyles;
  }

}
