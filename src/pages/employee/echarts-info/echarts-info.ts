import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  * as echarts from 'echarts';

/**
 * Generated class for the EchartsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-echarts-info',
  templateUrl: 'echarts-info.html',
})
export class EchartsInfoPage {
  followers;
  empNameList: string[] = []    //这里应该初始化为空数组    要不识别不出push方法
  gradeList: number[] = []

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.followers = this.navParams.data
    this.followers.forEach(element => {
        this.empNameList.push(element.empName);
        this.gradeList.push(element.boss);
    });
    this.initTable(this.empNameList,this.gradeList);
    console.log('ionViewDidLoad EchartsInfoPage');
  }


  private initTable(empNameList,gradeList) {
    let chart = echarts.init(document.getElementById('chart') as any);

    chart.setOption({
      title: {
          text: '绩效分数统计图'
      },
      tooltip: {},
      legend: {
          data:['绩效分数'] 
      },
      xAxis: {
          data: empNameList
      },
      yAxis: {},
      series: [{
          name: '绩效分数',
          type: 'bar',
          data: gradeList
      }]
  });
  }
}
