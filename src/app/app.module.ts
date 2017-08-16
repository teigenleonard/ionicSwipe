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
// import { AngularFireModule } from "angularfire2";
// import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';
// import { FirebaseProvider } from '../providers/firebase/firebase';

// Imports modules required for Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

// export const firebaseConfig = {
// apiKey: '',
// authDomain: '',
// databaseURL: '',
// storageBucket: '',
// messagingSenderId: ''
// };

const firebaseConfig = {
    apiKey: "YOURKEY",
    authDomain: "domain.firebaseapp.com",
    databaseURL: "https://domain.firebaseio.com",
    projectId: "yourvalues",
    storageBucket: "dmaoin.appspot.com",
    messagingSenderId: "yourvalues"
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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
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
    // DatabaseserviceProvider,
    // FirebaseProvider
    FirebaseProvider

  ]
})
export class AppModule {}
