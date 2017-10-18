import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-foodinfo',
  templateUrl: 'foodinfo.html',
})
export class FoodPage {
  // food: any;
  // subscription: Subscription;
  public food;
  public name;
  public nutrients;
  public isExpanded;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.food = this.navParams.data.food;
    //Get and format name
    this.name = this["food"]["name"];
    for(var i = 0; i < this.name.length; i++) {
      if(this.name.slice(i, i + 5) == (", UPC")) {
        this.name = this.name.slice(0, i);
      }
    }
    this.name = this.regularCase(this.name.trim());

    //Get and format ingredients
    this.nutrients = this.food["ing"]["desc"].split(',');
    for(var i = 0; i < this.nutrients.length; i++) {
      this.nutrients[i] = this.regularCase(this.nutrients[i].trim());
    }

    this.isExpanded = false;
  }

  regularCase(str) {
    var arr = str.split(' ');
    var toReturn = "";
    for(var i = 0; i < arr.length; i++) {
      toReturn += arr[i][0] + arr[i].slice(1, arr[i].length).toLowerCase() + " ";
    }
    return toReturn;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

}
