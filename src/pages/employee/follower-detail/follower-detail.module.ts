import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowerDetailPage } from './follower-detail';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    FollowerDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(FollowerDetailPage),
  ],
})
export class FollowerDetailPageModule {}
