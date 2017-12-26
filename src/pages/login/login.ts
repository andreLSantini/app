import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  isClickedTitle = false;

  constructor(public navCtrl: NavController) {

  }

  teste(){
    console.log('teste')
    this.isClickedTitle = true;
    var interval = window.setTimeout(function() {
      console.log('oi 32' )
      this.isClickedTitle = false;
      // clearInterval(interval);
    }, 2000);
    this.isClickedTitle = false;
  }

  onTap() {
    console.log('tapped');
  }
  onPress($event) {
      console.log('pressed');
  }

  getMyStyles(){
    console.log('this.isClickedTitle', this.isClickedTitle)
    let myStyles = {
      'background-color': this.isClickedTitle ? 'red' : 'white',
   };
   return myStyles;
  }

}
