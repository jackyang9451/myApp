import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatePage } from './state';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    StatePage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(StatePage),
  ],
})
export class StatePageModule {}
