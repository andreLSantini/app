import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InsertPinCodeHostService } from './InsertPinCodeHost.service';
import { Events } from '../events/Events';

@Component({
  selector: 'page-insertpincodehost',
  templateUrl: 'InsertPinCodeHost.html'
})
export class InsertPinCodeHost {
 
  pin1 : any;
  pin2 : any;
  pin3 : any;
  pin4 : any;
  constructor(public navCtrl: NavController,public service: InsertPinCodeHostService) {
  }


  sendPinCode(){
    let pinCodeComplete = this.pin1+this.pin2+this.pin3+this.pin4;
    this.service.sendPinCode(pinCodeComplete)
      .then(response => this.goToEvents(response))
      .catch();
  }

  onChangeLastPin(){
    if(this.pin1==null || this.pin1 == undefined){
      return;
    }
    if(this.pin2==null || this.pin2 == undefined){
      return;
    }
    if(this.pin3==null || this.pin3 == undefined){
      return;
    }
    if(this.pin4==null || this.pin4 == undefined){
      return;
    }
    this.sendPinCode();
  }

  onChangePin1(event){
    this.pin1 = event;
    this.onChangeLastPin();
  }
  onChangePin2(event){
    this.pin2 = event;
    this.onChangeLastPin();
  }
  onChangePin3(event){
    this.pin3 = event;
    this.onChangeLastPin();
  }
  onChangePin4(event){
    this.pin4 = event;
    this.onChangeLastPin();
  }
  goToEvents(response){
    this.navCtrl.push(Events);
  };

}
