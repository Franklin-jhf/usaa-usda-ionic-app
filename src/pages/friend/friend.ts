import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { EventsPage } from '../events/events';

/**
 * Generated class for the FriendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }

  showInRight(){
    console.log("showInRight");
    this.navCtrl.push(EventsPage);
  }
  showOnTop(){
    console.log("showImage");
    this.appCtrl.getRootNav().push(EventsPage);
  }

}
