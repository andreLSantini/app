import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HostPageNumberPhoneService {

	private static instance: HostPageNumberPhoneService;
  user:any;
  private

	public static getInstance(): HostPageNumberPhoneService {
        if( HostPageNumberPhoneService.instance == null) {
            HostPageNumberPhoneService.instance = new HostPageNumberPhoneService(null);
        }

        return HostPageNumberPhoneService.instance;
    }

	setPermaUser(user){
		this.user = user;
	}
	getPermaUser(){
		return this.user;
	}

    url = 'http://5a443d63342c490012f3fd1a.mockapi.io/sendPinMessage';
    constructor(private http: Http) { }

    sendPinMessage(numberPhone){

        return this.http.post(this.url,numberPhone)
        .toPromise();
    }
}
