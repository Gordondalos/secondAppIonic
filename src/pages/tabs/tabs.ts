import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { Reddits } from "../reddits/reddits";
import { Settings } from "../settings/settings";
import { Slideshow } from "../slideshow/slideshow";
import { Photos } from "../photos/photos";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Slideshow;
  //tab3Root = ContactPage;
  tab3Root = Photos;
  tab4Root = Reddits;
  tab5Root = Settings;


  constructor() {

  }
}
