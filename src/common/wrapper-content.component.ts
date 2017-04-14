import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";


@Component({
    selector: 'content',
    templateUrl: './wrapper-content.component.html'
})
export class WrapperContentComponent implements OnInit {

    constructor(public router: NavController ) { }

    title: string;
    ngOnInit() {
        console.log();
        this.title = this.router['tabTitle'];

    }

}