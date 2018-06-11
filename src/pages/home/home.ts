import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NacpagePage } from '../nacpage/nacpage';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }


otrapagina()
{
this.navCtrl.push(NacpagePage);
}

alertaprro() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }



}
