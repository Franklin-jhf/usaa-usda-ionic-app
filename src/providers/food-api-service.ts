import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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

    console.log(this.http.get("https://api.nal.usda.gov/ndb/search/?format=json&api_key=" + this.API_KEY +  "&q=" + data).map(res=>res.json()));
    return this.http.get("https://api.nal.usda.gov/ndb/search/?format=json&api_key=" + this.API_KEY +  "&q=" + data).map(res=>res.json());
  }

}