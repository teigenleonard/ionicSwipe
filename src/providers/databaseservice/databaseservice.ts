import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireModule } from 'angularfire2';
// For Database
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// For Auth
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// For Observables
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseserviceProvider {

  constructor(public http: Http) {
    console.log('Hello DatabaseserviceProvider Provider');
  }

}

export class Databaseservice {
   constructor(private_af: AngularFireModule) {
   }
   public listAccounts(): FirebaseListObservable<any[]>{
      console.log(this)
    return this
   }
}
