import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewEventService {

    url = 'http://5a443d63342c490012f3fd1a.mockapi.io/sendPinMessage';
    constructor(private http: Http) { }
    
    sendPinMessage(numberPhone){
        return this.http.post(this.url,numberPhone)
        .toPromise();
    }

    createEvent(evento){
        return this.http.post(this.url,evento)
        .toPromise();
    }
}