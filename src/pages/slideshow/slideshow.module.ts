import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Slideshow } from './slideshow';

@NgModule({
  declarations: [
    Slideshow,
  ],
  imports: [
    IonicModule.forRoot(Slideshow),
  ],
  exports: [
    Slideshow
  ]
})
export class SlideshowModule {}
