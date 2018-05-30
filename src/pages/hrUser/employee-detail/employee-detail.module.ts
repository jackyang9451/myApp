import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeDetailPage } from './employee-detail';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    EmployeeDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(EmployeeDetailPage),
  ],
})
export class EmployeeDetailPageModule {}
