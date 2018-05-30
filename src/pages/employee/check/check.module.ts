import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckPage } from './check';

@NgModule({
  declarations: [
    CheckPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckPage),
  ],
})
export class CheckPageModule {}
