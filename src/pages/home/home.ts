import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from "../../app/service/common.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public commonService: CommonService ,
      public navCtrl: NavController) {

  }
  ionViewWillEnter () {
    this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);
  }

}
