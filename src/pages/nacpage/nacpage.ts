import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the NacpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nacpage',
  templateUrl: 'nacpage.html',
})
export class NacpagePage {

  Lista1: Array<any> = [
    {
      titulo: "Perro",
      color: "#444"
    },
    {
      titulo: "Gato",
      color: "#9999"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  otrapaginas()
  {
this.navCtrl.push(ContactPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NacpagePage');
  }

}
