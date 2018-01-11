import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewEventMenager } from '../neweventsmenager/newEventMenager';
import { Settings } from '../settings/settings';
import { CameraOptions, Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-events',
  templateUrl: 'Events.html'
})
export class Events {

  tab1Root = LoginPage;
  events = NewEventMenager;
  settings = Settings;

  constructor(public navCtrl: NavController,private camera: Camera) {
  }

  sendPinCode(){
    // this.service.sendPinCode(this.user.phone)
    //   .then(response => this.goToEvents(response))
    //   .catch();
  }

  goToEvents(response){
    // this.navCtrl.push(InsertPinCodeHost);
  }
  goHome(){
    this.navCtrl.setRoot(LoginPage);
  }

  newEvent(){
    console.log('test')
  }

  openCam(){
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

  }

}
