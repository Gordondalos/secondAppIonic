import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";

@Component({
    selector: 'w-content',
    templateUrl: 'wrapper.component.html'
})
export class WrapperComponent implements OnInit {

    title: string;

    constructor(public navCtrl: NavController) { }

    ngOnInit() {
        console.log(this.navCtrl);
        this.title = this.navCtrl['tabTitle'];
    }

}