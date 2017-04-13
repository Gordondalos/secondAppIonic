import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditsService } from "../../app/service/reddits.service";
import { Reddits } from "../reddits/reddits";

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage ()
@Component ( {
    selector : 'page-settings',
    templateUrl : 'settings.html',
} )
export class Settings {

    category : any;
    limit : any;

    constructor ( public navCtrl : NavController, private redditsService : RedditsService ) {
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
