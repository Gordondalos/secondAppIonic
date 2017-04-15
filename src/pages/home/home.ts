import { Component } from '@angular/core';
import { CommonService } from "../../app/service/common.service";
import { NavController, AlertController, Platform } from 'ionic-angular';


import { Data } from '../../providers/data';
import { Keyboard } from '@ionic-native/keyboard';
import { Checklist } from "../checklist/checklist";
import { ChecklistModel } from "../checklist/checklist-model";

import { Intro } from '../intro/intro';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';

@Component ( {
    selector : 'page-home',
    templateUrl : 'home.html',
    providers : [ Keyboard ]
} )
export class HomePage {

    nav : NavController;

    constructor ( public dataService : Data,
                  public storage: Storage,
                  public alertCtrl : AlertController,
                  public platform : Platform,
                  public keyboard : Keyboard,
                  public commonService : CommonService,
                  public navCtrl : NavController ) {
        this.nav = navCtrl;
        //this.storage.clear()

    }

    ionViewWillEnter () {
        this.commonService.setTitleInHeaderFunction ( this.navCtrl[ 'tabTitle' ] );

    }

    ionViewDidLoad () {
        this.platform.ready ().then ( () => {
            this.dataService.getData ().then ( ( checklists ) => {
                let savedChecklists : any = false;
                if ( typeof(checklists) != "undefined" ) {
                    savedChecklists = JSON.parse ( checklists );
                }
                if ( savedChecklists ) {
                    savedChecklists.forEach ( ( savedChecklist ) => {
                        let loadChecklist = new ChecklistModel ( savedChecklist.title,
                            savedChecklist.items );
                        this.checklists.push ( loadChecklist );
                        loadChecklist.checklistUpdates ().subscribe ( update => {
                            this.save ();
                        } );
                    } );
                }
            } );
        } );

    }

    checklists : any = [];

    addChecklist () : void {
        let prompt = this.alertCtrl.create ( {
            title : 'Новое дело',
            message : 'Введите то что нужно проверить',
            inputs : [
                {
                    name : 'name'
                }
            ],
            buttons : [
                {
                    text : 'Отменить'
                },
                {
                    text : 'Сохранить',
                    handler : data => {
                        let newChecklist = new ChecklistModel ( data.name, [] );
                        this.checklists.push ( newChecklist );
                        newChecklist.checklistUpdates ().subscribe ( update => {
                            this.save ();
                        } );
                        this.save ();
                    }
                }
            ]
        } );
        prompt.present ();
    }

    ionSwipe ( event ) {
        console.log ( event );
    }

    renameChecklist ( checklist, item ) : void {


        let prompt = this.alertCtrl.create ( {
            title : 'Изменение чеклиста',
            message : 'Введите новое имя',

            inputs : [
                {
                    name : 'name',
                    value : checklist.title
                }
            ],
            buttons : [
                {
                    text : 'Отмена'
                },
                {
                    text : 'Сохранить',
                    handler : data => {
                        let index = this.checklists.indexOf ( checklist );
                        if ( index > -1 ) {
                            this.checklists[ index ].setTitle ( data.name );
                            this.save ( item );
                        }
                    }
                }
            ]
        } );
        prompt.present ();
    }

    viewChecklist ( checklist ) : void {
        this.nav.push ( Checklist, {
            checklist : checklist
        } );
    }

    logDrag ( event ) {
        // console.log(event);
    }

    removeChecklist ( checklist ) : void {
        let index = this.checklists.indexOf ( checklist );
        if ( index > -1 ) {
            this.checklists.splice ( index, 1 );
            this.save ();
        }
    }

    save ( item : any = {} ) : void {
        if ( !_.isEmpty ( item ) ) {
            item.close ();
        }
        this.keyboard.close ();
        this.dataService.save ( this.checklists );
    }

}
