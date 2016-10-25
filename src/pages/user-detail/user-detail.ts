import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
  user: any = {};

  constructor(public navCtrl: NavController ,public params:NavParams) {
       this.user = params.get("user");
  }

}
