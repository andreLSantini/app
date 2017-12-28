import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HostPageNumberPhone } from '../HostPageNumberPhone/HostPageNumberPhone';

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
   
  }
 

  getMyStyles(){
    let myStyles = {
      'background-color': this.isClickedTitle ? 'red' : 'white',
   };
   return myStyles;
  }

}
