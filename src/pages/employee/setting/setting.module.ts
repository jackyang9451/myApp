import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SettingPage),
  ],
})
export class SettingPageModule {}
