import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AttendeesProvider } from '../../providers/attendees';

import {UserDetailPage} from '../user-detail/user-detail'
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users = [];

  constructor(public navCtrl: NavController, 
              private provider: AttendeesProvider) {
    provider.load().then(data => {
      console.log(data);
      this.users = data["users"];
    });
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

  viewUserDetail(user: any){
      this.navCtrl.push(UserDetailPage, {
         user: user
      });
  }

}