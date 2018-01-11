import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from '../events/Events';
import { InsertPinCodeGuestService } from './insertPinCodeGuest.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-insertpincodeguest',
  templateUrl: 'InsertPinCodeGuest.html'
})
export class InsertPinCodeGuest {
 
  pin : any;
  constructor(public navCtrl: NavController,public service: InsertPinCodeGuestService,private camera: Camera) {
  }


  sendPinCode(){
    let pinCodeComplete = this.pin;
    this.service.sendPinCode(pinCodeComplete)
      .then(response => this.goToCamera())
      .catch();
  }

  onChangeLastPin(){
    if(this.pin==null || this.pin == undefined || this.pin.length <4){
      return;
    }
    this.sendPinCode();
  }

  onChangePin(event){
    this.pin = event;
    this.onChangeLastPin();
  }


  goToCamera(){
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        let base64Image = 'data:image/jpeg;base64,' + imageData;
       }, (err) => {
        // Handle error
       });

  };

}
