import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InsertPinCodeHostService } from './InsertPinCodeHost.service';
import { Events } from '../events/Events';

@Component({
  selector: 'page-insertpincodehost',
  templateUrl: 'InsertPinCodeHost.html'
})
export class InsertPinCodeHost {

  pin : string;
  constructor(public navCtrl: NavController,public service: InsertPinCodeHostService) {
  }


  sendPinCode(){
    let pinCodeComplete = this.pin;
    this.service.sendPinCode(pinCodeComplete)
      .then(response => this.goToEvents(response))
      .catch();
  }

  onChangeLastPin(){
    console.log('this.pin.length',this.pin.length);

    if(this.pin==null || this.pin == undefined || this.pin.length <4){
      return;
    }
    this.sendPinCode();
  }

  onChangePin(event){
    this.pin = event;
    this.onChangeLastPin();
  }

  goToEvents(response){
    this.navCtrl.push(Events);
  };

}
