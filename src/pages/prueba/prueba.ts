import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
})
export class PruebaPage {
culosucio;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.culosucio = navParams.data.itememem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PruebaPage');
  }

}
