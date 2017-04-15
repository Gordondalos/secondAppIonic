import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Keyboard } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditsModule } from "../pages/reddits/reddits.module";
import { SettingsModule } from "../pages/settings/settings.module";
import { RedditsService } from "./service/reddits.service";
import { HttpModule } from "@angular/http";
import { DetailPageModule } from "../pages/detail-page/detail-page.module";
// import { WrapperComponent } from "../common/w-component/wrapper-content";
import { WrapperContentModule } from "../common/w-component/wrpper-content.module";
import { CommonService } from "./service/common.service";
import { IntroModule } from "../pages/intro/intro.module";
import { ChecklistModule } from "../pages/checklist/checklist.module";
import { Data } from "../providers/data";
import { IonicStorageModule } from "@ionic/storage";
import { SimpleAlert } from "../providers/simple-alert";
import { FotoProvider } from "../providers/foto-provider";
import { SlideshowModule } from "../pages/slideshow/slideshow.module";
import { DaysAgo } from "../pipes/days-ago";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';







@NgModule ( {
    declarations : [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        DaysAgo,


    ],
    imports : [
        BrowserModule,
        RedditsModule,
        SettingsModule,
        HttpModule,
        DetailPageModule,
        WrapperContentModule,
        IonicStorageModule.forRoot(),
        IntroModule,
        SlideshowModule,

        ChecklistModule,
        IonicModule.forRoot ( MyApp )
    ],
    bootstrap : [ IonicApp ],
    entryComponents : [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers : [
        StatusBar,
        SplashScreen,
        RedditsService,
        CommonService,
        Keyboard,
        SimpleAlert,
        FotoProvider,
        Data,
        LocalNotifications,
        File,
        Camera,
        SocialSharing,


        { provide : ErrorHandler, useClass : IonicErrorHandler }
    ]
} )
export class AppModule {
}
