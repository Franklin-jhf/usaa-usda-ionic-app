import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodApiService } from '../providers/food-api-service';


import { MainContentPage } from '../pages/main-content/main-content';
import { FriendPage } from '../pages/friend/friend';
import { EventsPage } from '../pages/events/events';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainContentPage,
    FriendPage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainContentPage,
    FriendPage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodApiService
  ]
})
export class AppModule {}
