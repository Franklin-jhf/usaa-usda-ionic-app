import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { FoodApiService } from '../../providers/food-api-service';
// import { Http, Headers } from '@angular/http';


import { MainContentPage } from '../main-content/main-content';
import { FriendPage } from '../friend/friend';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FoodApiService]
})
export class HomePage {


  // private API_KEY = 'obvua2epLvdVSovZmfFNR3fYXbr83Z7Jb5gwNGy0';

  // searchApiUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&api_key=' + API_KEY +  '?q=';

  rootPage: any;
  category: any;

  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public ServiceProvider: FoodApiService) {
  }

  food: any;


  searchFood(key:any){
    this.ServiceProvider.searchFood(key.target.value)
      .subscribe(
        res => {this.food = res.list.item; console.log(this.food) }
      );
  }


  // searchFood(key:any){
  //   this.ServiceProvider.searchFood(key.target.value);
  // }

  ionViewDidLoad() {
    this.rootPage = MainContentPage;
  }

  setCategory(category) {
    switch (category) {
      case 'home':
        this.rootPage = MainContentPage;
        break;
      case 'favorites':
        this.rootPage = FriendPage;
        break;
      case 'events':
        this.navCtrl.push(EventsPage);
        break;
      case 'submenu':
        console.log("submenu");
        this.menuCtrl.enable(true, 'submenu');
        this.menuCtrl.enable(false, 'mainmenu');
        break;
      case 'mainmenu':
        this.menuCtrl.enable(false, 'submenu');
        this.menuCtrl.enable(true, 'mainmenu');
        break;
    }
    this.menuCtrl.close();
  }

}
