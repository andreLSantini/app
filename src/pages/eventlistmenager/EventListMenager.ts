import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EventList } from '../eventlist/eventlist';
import { Settings } from '../settings/settings';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-eventListMenager',
  templateUrl: 'EventListMenager.html'
})
export class EventListMenager {
    tab1Root = LoginPage;
    events = EventList;
    settings = Settings;
    constructor(public navCtrl: NavController,private camera: Camera) {
    }

  goHome(){
    this.navCtrl.setRoot(LoginPage);
  }

  openCam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     });

  }
 

}
