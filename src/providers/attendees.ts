import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Attendees provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AttendeesProvider {

  constructor(public http: Http) {
    console.log('Hello Attendees Provider');
  }
  
  load() {
    return new Promise(resolve => {
      this.http.get('assets/data/users.json').subscribe(res => {
        return resolve(res.json());
      });
    });
  }
}