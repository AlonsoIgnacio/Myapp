import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NacpagePage } from './nacpage';

@NgModule({
  declarations: [
    NacpagePage,
  ],
  imports: [
    IonicPageModule.forChild(NacpagePage),
  ],
})
export class NacpagePageModule {}
