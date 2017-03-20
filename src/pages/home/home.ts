import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserService} from '../../providers/user-service';
import { Constants } from '../../util/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService, Constants]
})

export class HomePage {
  mascotas: any;
  SERVER_IP: string;

  constructor(
    public navCtrl: NavController, 
    public userService: UserService,
    public constants: Constants
    ) {

      this.SERVER_IP = constants.SERVER_IP;

    this.userService.getExtraviado()
    .then(data => {
      this.mascotas = data;
      console.log(this.mascotas);
      for (let mascotas in data) {
        data[mascotas].mascota.imagen = data[mascotas].mascota.imagen.replace('https://www.pethomeloja.tk,www.pethomeloja.tk', this.SERVER_IP)
      }
    }) ;
  }

}
