import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DetailPage),
  ],
})
export class DetailPageModule {}
