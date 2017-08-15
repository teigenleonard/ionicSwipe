import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Imports modules required for swipe feature
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

// Imports modules required for Firebase
// import { Databaseservice } from "../providers/databaseservice";
import { AngularFireModule } from "angularfire2";
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';

export const firebaseConfig = {
apiKey: '',
authDomain: '',
databaseURL: '',
storageBucket: '',
messagingSenderId: ''
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseserviceProvider
  ]
})
export class AppModule {}
