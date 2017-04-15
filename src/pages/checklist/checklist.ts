import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage ()
@Component ( {
    selector : 'page-checklist',
    templateUrl : 'checklist.html',
} )
export class Checklist {

    checklist : any;

    constructor ( public nav : NavController, public navParams : NavParams, public alertCtrl : AlertController ) {
        this.checklist = this.navParams.get ( 'checklist' );
    }

    addItem () : void {

        let prompt = this.alertCtrl.create ( {
            title : 'Добавить дело',
            message : 'Введите название ниже:',
            inputs : [
                {
                    name : 'name'
                }
            ],
            buttons : [
                {
                    text : 'Отмена'
                },
                {
                    text : 'Сохранить',
                    handler : data => {
                        this.checklist.addItem ( data.name );
                    }
                }
            ]
        } );
        prompt.present ();
    }

    toggleItem ( item ) : void {
        this.checklist.toggleItem ( item );
    }

    removeItem ( item ) : void {
        this.checklist.removeItem ( item );
    }

    renameItem ( item ) : void {
        let prompt = this.alertCtrl.create ( {
            title : 'Переименовать',
            message : 'Исправьте название',
            inputs : [
                {
                    name : 'name'
                }
            ],
            buttons : [
                {
                    text : 'Отмена'
                },
                {
                    text : 'Сохранить',
                    handler : data => {
                        this.checklist.renameItem ( item, data.name );
                    }
                }
            ]
        } );
        prompt.present ();
    }

    uncheckItems(): void {
        this.checklist.items.forEach((item) => {
            if(item.checked){
                this.checklist.toggleItem(item);
            }
        });
    }

    ionViewDidLoad () {
        console.log ( 'ionViewDidLoad Checklist' );
    }

}
