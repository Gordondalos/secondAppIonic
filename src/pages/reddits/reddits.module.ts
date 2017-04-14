import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Reddits } from './reddits';
import { WrapperContentModule } from "../../common/w-component/wrpper-content.module";

@NgModule({
  declarations: [
    Reddits,
  ],
  imports: [
    WrapperContentModule,
    IonicModule.forRoot(Reddits),
  ],
  exports: [
    Reddits
  ]
})
export class RedditsModule {}
