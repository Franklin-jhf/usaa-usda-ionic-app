import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

/*
  Generated class for the Search provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FoodApiService {


  private API_KEY = 'obvua2epLvdVSovZmfFNR3fYXbr83Z7Jb5gwNGy0';

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  searchFood(data:any) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get("https://api.nal.usda.gov/ndb/search/?format=json&api_key=" + this.API_KEY +  "&q=" + data).map(res=>res.json());
  }

  getFoodInfo(id:any) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');


    return this.http.get("https://api.nal.usda.gov/ndb/reports/?format=json&api_key=" + this.API_KEY +  "&ndbno=" + id).map(res=>res.json());
  }

  // moreData(id) {
  //   this.navCtrl.push(Repository, {id:id});
  // }

}
  // private subject = new Subject<any>();
 
  //   sendMessage(message: string) {
  //       this.subject.next({ text: message });
  //   }
 
  //   clearMessage() {
  //       this.subject.next();
  //   }
 
  //   getMessage(): Observable<any> {
  //       return this.subject.asObservable();
  //   }

  //   public food = new Subject<any>();


  // searchFood(data:any) {
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');

  //   let queryData = this.http.get("https://api.nal.usda.gov/ndb/search/?format=json&api_key=" + this.API_KEY +  "&q=" + data).map(res => res.json())
  //   console.log(queryData.subscribe(res => this.food = res.list.item )); 
  //   this.food.next(queryData);
  // }

  // retrieveFood(): Observable<any> {
  //   return t