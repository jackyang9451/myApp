import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EchartsInfoPage } from './echarts-info';

@NgModule({
  declarations: [
    EchartsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EchartsInfoPage),
  ],
})
export class EchartsInfoPageModule {}
