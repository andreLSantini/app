import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HostPageNumberPhoneService {

    url = 'http://5a443d63342c490012f3fd1a.mockapi.io/sendPinMessage';
    constructor(private http: Http) { }
    
    sendPinMessage(numberPhone){

        return this.http.post(this.url,numberPhone)
        .toPromise();
    }
}