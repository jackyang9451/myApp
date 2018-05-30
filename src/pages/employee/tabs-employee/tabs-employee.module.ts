import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsEmployeePage } from './tabs-employee';

@NgModule({
  declarations: [
    TabsEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsEmployeePage),
  ]
})
export class TabsEmployeePageModule {}
