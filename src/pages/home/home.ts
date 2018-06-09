import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NacpagePage } from '../nacpage/nacpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

otrapagina()
{
this.navCtrl.push(NacpagePage);
}




}
