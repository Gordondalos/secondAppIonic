import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DetailPage } from './detail-page';
import { WrapperContentModule } from "../../common/w-component/wrpper-content.module";

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
      WrapperContentModule,
    IonicModule.forRoot(DetailPage),
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule {}
