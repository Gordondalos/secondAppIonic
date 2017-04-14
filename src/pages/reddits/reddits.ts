import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditsService } from "../../app/service/reddits.service";
import { DetailPage } from "../detail-page/detail-page";
import { CommonService } from "../../app/service/common.service";

/**
 * Generated class for the Reddits page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage ()
@Component ( {
    selector : 'page-reddits',
    templateUrl : 'reddits.html',
} )
export class Reddits implements OnInit {

    constructor ( public commonService : CommonService, public navCtrl : NavController, public navParams : NavParams, public redditsService : RedditsService ) {
    }



    items : any = [];

    category : any;
    limit : any;

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

    getPosts () {
        this.redditsService.getPoste ( this.category, this.limit )
            .subscribe ( response => {
                this.items = response.data.children;
            } )

    }

    ionViewWillEnter () {
        this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);
    }

    ngOnInit () {
        this.getDefaults ();
        this.getPosts ();
        // console.log ( this.navCtrl );
        // this.commonService.setTitleInHeaderFunction(this.navCtrl[ 'tabTitle' ]);

    }

    changeCategory () {

        console.log ( this.category );
        this.getPosts ();
    }


    viewItem ( item ) {
        this.navCtrl.push ( DetailPage, {
            item : item
        } )
    }

}
