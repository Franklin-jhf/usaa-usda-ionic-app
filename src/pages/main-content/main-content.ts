import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';


import { FoodApiService } from '../../providers/food-api-service';
import { FoodPage } from '../foodinfo/foodinfo';

// import { Subscription } from 'rxjs/Subscription';


// import { FoodApiService } from '../../providers/food-api-service';

/**
 * Generated class for the MainContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-main-content',
  templateUrl: 'main-content.html',
})
export class MainContentPage {
  // food: any;
  // subscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public ServiceProvider: FoodApiService) {
    }

  food: any;


  searchFood(key:any){
    this.ServiceProvider.searchFood(key.target.value)
      .subscribe(
        res => {this.food = res.list.item; console.log(this.food) }
      );
  }

  fooditem: any;

  showFood(id) {
    this.ServiceProvider.getFoodInfo(id)
      .subscribe( res => {this.fooditem = res.report; console.log(this.fooditem) }
      );
    let modal = this.modalCtrl.create(FoodPage, {food: this.fooditem});
    modal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainContentPage');
  }

}
