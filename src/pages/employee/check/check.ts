import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { PerformanceProvider } from '../../../providers/performance/performance';

/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {
  empId;
  followers;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private performanceProvider: PerformanceProvider,
    public toastCtrl: ToastController,) {

  }

  ionViewDidLoad() {
    this.empId = this.navParams.data
    this.getFollowers(this.empId)
    console.log(this.empId);
  }
  /**
   * 签到
   */
  checkIn() {
    this.performanceProvider.checkIn(this.empId)
    .subscribe(
      flag => {
        if (flag) {
          this.showToast('已经签到')
        } else {
          this.showToast('不符合签到条件,请确认')
          console.log()
        }
      }
    )
  }


  /**
   * 签退
   */
  checkOut() {
    this.performanceProvider.checkOut(this.empId)
    .subscribe(
      flag => {
        if (flag) {
          this.showToast("已经签退")
        } else {
          this.showToast('请勿重复签退')
        }
      }
    )
  }

  /**
   * 获取followers
   */
  getFollowers(empId) {
    this.performanceProvider.getFollowers(empId)
    .subscribe(
      followers => this.followers = followers
    )
  }

  /**
   * 查看小跟班的绩效详情
   */
  showDetail(follower) {
    this.navCtrl.push('FollowerDetailPage',follower);
  }

  /**
   * 使用图表形式展示绩效分数
   */
  showEcharts() {
    this.navCtrl.push('EchartsInfoPage',this.followers);
  }

  /**
   * Toast
   */
  showToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }


}
