import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Reddits } from './reddits';

@NgModule({
  declarations: [
    Reddits,
  ],
  imports: [
    IonicModule.forRoot(Reddits),
  ],
  exports: [
    Reddits
  ]
})
export class RedditsModule {}
