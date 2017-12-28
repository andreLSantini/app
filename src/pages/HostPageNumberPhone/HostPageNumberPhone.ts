import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HostPageNumberPhoneService } from './HostPageNumberPhone.service';
import { InsertPinCodeHost } from '../InsertPinCodeHost/InsertPinCodeHost';

@Component({
  selector: 'page-hostpagenumberphone',
  templateUrl: 'hostpagenumberphone.html'
})
export class HostPageNumberPhone {

  user = {
      phone : '',
      phonechecked : true
  }
  constructor(public navCtrl: NavController,public service: HostPageNumberPhoneService) {
  }

  validNumberPhone(){
    if(this.user.phone.length < 11){
      this.user.phonechecked = true;
    }
    this.user.phonechecked = false;
  }

  sendPinMessage(){
    this.service.sendPinMessage(this.user.phone)
      .then(response => this.goToInsertImessageCode(response))
      .catch();
  }

  goToInsertImessageCode(response){
    this.navCtrl.push(InsertPinCodeHost);
  }

}
