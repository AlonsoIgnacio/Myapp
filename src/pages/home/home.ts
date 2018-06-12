import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NacpagePage } from '../nacpage/nacpage';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
testlista = [];
  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
 this.testlista = [
        {
          'title': 'Angular',
          'icon': 'angular',
          'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
          'color': '#E63135',
          'nec': 'La conchadetumadreallboys'
        }
      ]



  }


otrapagina()
{
this.navCtrl.push(NacpagePage);
}

alertaprro(test) {
    let alert = this.alerCtrl.create({
      title: test.nec,
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }



}
