import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable ()
export class Data {

    constructor ( public storage : Storage, public http:Http ) {
    }

    getData () : Promise<any> {
        return this.storage.get ( 'checklists' );
    }

    save ( data ) : void {
        let saveData = [];
//Remove observables
        data.forEach ( ( checklist ) => {
            saveData.push ( {
                title : checklist.title,
                items : checklist.items
            } );
        } );
        let newData = JSON.stringify ( saveData );
        this.storage.set ( 'checklists', newData );
    }
}


