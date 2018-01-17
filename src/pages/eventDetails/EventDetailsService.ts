import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventDetailsService {
    url = "http://5a443d63342c490012f3fd1a.mockapi.io/events/";

    constructor(private http: Http) { }

    getOneEvent(id){
        return this.http.get(this.url+id)
    }
    
}