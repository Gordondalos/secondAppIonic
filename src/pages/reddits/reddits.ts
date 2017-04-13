import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditsService } from "../../app/service/reddits.service";
import { DetailPage } from "../detail-page/detail-page";

/**
 * Generated class for the Reddits page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class Reddits implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditsService: RedditsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reddits');
  }

  items:any=[];

  category:any;
  limit: any;

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

  getPosts(){
    this.redditsService.getPoste(this.category,this.limit)
        .subscribe(response => {
          console.log( response.data.children );
          this.items = response.data.children;
        })

  }

  ngOnInit(){
    this.getDefaults();
    this.getPosts();
  }

  changeCategory(){

    console.log(this.category);
    this.getPosts();
  }


  viewItem(item){
    this.navCtrl.push(DetailPage, {
      item: item
    })
  }

}
