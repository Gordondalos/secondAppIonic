import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { WrapperComponent } from "./wrapper-content";


@NgModule({
    declarations: [
        WrapperComponent,
    ],
    imports: [
        IonicModule.forRoot(WrapperComponent),
    ],
    exports: [
        WrapperComponent
    ]
})
export class WrapperContentModule {}
