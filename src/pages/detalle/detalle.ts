import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../providers/user-service';
import { Constants } from '../../util/constants';

/*
  Generated class for the Detalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var window;
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
  providers: [UserService, Constants]
})
export class DetallePage {
  mascota: any;
  detalle: any={};  
  SERVER_IP: string;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public navParams: NavParams,
    public constants: Constants) {

      this.SERVER_IP = constants.SERVER_IP;
      this.mascota = this.navParams.get('mascota');
      console.log(this.mascota);

    }
  

}
