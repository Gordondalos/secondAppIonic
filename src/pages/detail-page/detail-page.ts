import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonService } from "../../app/service/common.service";

@IonicPage ()
@Component ( {
    selector : 'page-detail-page',
    templateUrl : 'detail-page.html',
} )
export class DetailPage implements OnInit{

    item : any;

    constructor (
        public commonService: CommonService,
        public navCtrl : NavController,
        public navParams : NavParams ) {
        this.item = this.navParams.get ( 'item' );
    }



    ngOnInit () {

    }


    ionViewDidLoad () {
        this.commonService.setTitleInHeaderFunction(this.item.title);
        // console.log ( 'ionViewDidLoad DetailPage' );
    }



    ionViewWillEnter() {
        // console.log("Looks like I'm about to leave :(");
    }

    ionViewWillLeave() {
        this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);
        // console.log("123");
    }

    ionViewDidLeave(){
      //  this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);


    }

    ionViewDidEnter(){
        // console.log('1111')
    }






}
