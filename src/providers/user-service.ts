import { Injectable } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../util/constants';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
   data: any;
   SERVER_IP: string;
   
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public platform: Platform,
    public constants: Constants
    ){      
      this.data = null;
      this.SERVER_IP = constants.SERVER_IP;
  }
  
 public getExtraviado(){    
    return new Promise(resolve => {
      this.http.get(this.SERVER_IP + '/mascota/api_mascota/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data                
          resolve(this.data);
        });
    });
  }

}
