import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from "../../app/service/common.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
      public commonService: CommonService,
      public navCtrl: NavController) {

  }

  ionViewWillEnter () {
    this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);
  }

}
