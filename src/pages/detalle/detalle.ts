import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Detalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DetallePage Page');
  }

}
