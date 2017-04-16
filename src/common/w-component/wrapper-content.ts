import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from "ionic-angular";
import { CommonService } from "../../app/service/common.service";

@Component ( {
    selector : 'w-content',
    templateUrl : 'wrapper.component.html'
} )
export class WrapperComponent implements OnInit {

    title : string;

    constructor (
        public platform: Platform,
        public navCtrl : NavController, public commonService : CommonService ) {
        this.commonService.setTitleInHeader$.subscribe ( data => {
            this.setThisTitle(data);

        } )
    }


    setThisTitle ( title ) {
        this.title = title;
    }

    goBack(){
        this.setThisTitle ( this.navCtrl[ 'tabTitle' ] );
        this.navCtrl.pop();
    }






    ngOnInit () {
        this.setThisTitle ( this.navCtrl[ 'tabTitle' ] )
    }

}