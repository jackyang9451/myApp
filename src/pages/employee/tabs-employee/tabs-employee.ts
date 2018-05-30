import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsEmployeePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-employee',
  templateUrl: 'tabs-employee.html'
})
export class TabsEmployeePage {

  checkRoot = 'CheckPage'
  stateRoot = 'StatePage'
  detailRoot = 'DetailPage'
  settingRoot = 'SettingPage'
  empId: number;


  constructor(public navCtrl: NavController,public navParams: NavParams,){
    console.log(this.navParams.data)
    this.empId = this.navParams.data
  }

}
