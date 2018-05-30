import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerformanceProvider } from '../../../providers/performance/performance';

/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {
  empId;                                  //------传递过来的empId
  performance;
  grade;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private performanceProvider: PerformanceProvider) {
  }

  ionViewDidLoad() {
    console.log('Get Login ID：'+this.navParams.data)
    this.empId = this.navParams.data;
    this.getGrade(this.empId)
    console.log('ionViewDidLoad StatePage');
  }

  ionViewDidEnter() {
    this.getPerformance(this.empId);
  }

  getPerformance(empId) {
    this.performanceProvider.getPerformance(empId)
    .subscribe(
      performance => this.performance = performance
    )
  }

  getGrade(empId) {
    this.performanceProvider.getGrade(empId)
    .subscribe(
      grade => this.grade = grade
    )
  }

}
