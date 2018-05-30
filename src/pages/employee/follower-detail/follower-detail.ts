import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerformanceProvider } from '../../../providers/performance/performance';

/**
 * Generated class for the FollowerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follower-detail',
  templateUrl: 'follower-detail.html',
})
export class FollowerDetailPage {
  follower;
  performance;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private performanceProvider: PerformanceProvider) {
  }

  ionViewDidLoad() {
    this.follower = this.navParams.data;
    this.getPerformance(this.follower.empId);
    console.log('ionViewDidLoad FollowerDetailPage');
  }

  getPerformance(empId) {
    this.performanceProvider.getPerformance(empId)
    .subscribe(
      performance => this.performance = performance
    )
  }  

}
