import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateEmployeePage } from './update-employee';

@NgModule({
  declarations: [
    UpdateEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateEmployeePage),
  ],
})
export class UpdateEmployeePageModule {}
