import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from "ionic-angular";



@Injectable()
export class SimpleAlert {

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello SimpleAlert Provider');
  }

  createAlert(title: string, message: string): any {
    return this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
  }

}
