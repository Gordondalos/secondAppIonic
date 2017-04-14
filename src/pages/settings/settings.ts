import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditsService } from "../../app/service/reddits.service";
import { Reddits } from "../reddits/reddits";
import { CommonService } from "../../app/service/common.service";


@IonicPage ()
@Component ( {
    selector : 'page-settings',
    templateUrl : 'settings.html',
} )
export class Settings implements OnInit{

    category : any;
    limit : any;

    ngOnInit(){
        // console.log(this.navCtrl);
    }


    ionViewWillEnter () {
        this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);
    }



    constructor (
        public commonService: CommonService,
        public navCtrl : NavController, private redditsService : RedditsService ) {
        this.getDefaults ();
    }

    getDefaults () {
        if ( localStorage.getItem ( 'category' ) != null ) {
            this.category = localStorage.getItem ( 'category' );
        } else {
            this.category = 'sports';
        }

        if ( localStorage.getItem ( 'limit' ) != null ) {
            this.limit = localStorage.getItem ( 'limit' );
        } else {
            this.limit = 10;
        }
    }

    setDefaults () {
        localStorage.setItem ( 'category', this.category );
        localStorage.setItem ( 'limit', this.limit );
        this.navCtrl.push ( Reddits );
    }


}
