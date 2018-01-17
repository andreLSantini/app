import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HostPageNumberPhoneService } from '../HostPageNumberPhone/HostPageNumberPhone.service';
import { SettingsService } from './settings.service'
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings implements OnInit{

  user = {
      phone : '',
      phonechecked : true
  }

  userdetails = {
      plan : '',
      eventscapacity : '',
      paymentoption : '',
  }


  constructor(public navCtrl: NavController,private hostPageNumberPhoneService: HostPageNumberPhoneService,public service : SettingsService) {
  	this.hostPageNumberPhoneService = HostPageNumberPhoneService.getInstance();
  }

  ngOnInit(): void {
	 this.user = this.hostPageNumberPhoneService.getPermaUser();
	 console.log('this,,',this.hostPageNumberPhoneService)
	  this.service.getUserInfo(this.user.phone)
	 	.then(x => this.setInfo(x));
   }

   setInfo(response) {
   	 this.userdetails.plan = response.plan;
   	 this.userdetails.eventscapacity = response.eventscapacity;
   	 this.userdetails.paymentoption = response.paymentoption;
   }

   back(){
    this.navCtrl.push(LoginPage)
  }

}
