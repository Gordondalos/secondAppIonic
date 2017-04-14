import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Settings } from './settings';
import { WrapperContentModule } from "../../common/w-component/wrpper-content.module";

@NgModule ( {
    declarations : [
        Settings,
    ],
    imports : [
        WrapperContentModule,
        IonicModule.forRoot ( Settings ),
    ],
    exports : [
        Settings
    ]
} )
export class SettingsModule {
}
