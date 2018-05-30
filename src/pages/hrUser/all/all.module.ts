import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllPage } from './all';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    AllPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(AllPage),
  ],
})
export class AllPageModule {}
