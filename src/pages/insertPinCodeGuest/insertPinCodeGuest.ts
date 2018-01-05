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
 
  pin1 : any;
  pin2 : any;
  pin3 : any;
  pin4 : any;
  constructor(public navCtrl: NavController,public service: InsertPinCodeGuestService,private camera: Camera) {
  }


  sendPinCode(){
    let pinCodeComplete = this.pin1+this.pin2+this.pin3+this.pin4;
    this.service.sendPinCode(pinCodeComplete)
      .then(response => this.goToCamera())
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
