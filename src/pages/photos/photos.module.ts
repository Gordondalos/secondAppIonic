import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Photos } from './photos';

@NgModule({
  declarations: [
    Photos,
  ],
  imports: [
    IonicModule.forRoot(Photos),
  ],
  exports: [
    Photos
  ]
})
export class PhotosModule {}
