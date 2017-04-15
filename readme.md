## Создание приложения
    ionic start quicklists blank --v2
    
## Запуск приложения

    ionic serve
    
Генерируем страницы
    
    ionic g page Название странцы

## все подключаем в app.module

## подключаем платформы

ionic platform add ios
ionic platform add android

## Добавляем плагины кардовы котоыре пригодятся нам для использования на реальных девайсах

sqlite

    ionic plugin add cordova-sqlite-storage --save
    npm install @ionic-native/status-bar --save
    
statusbar

    ionic plugin add cordova-plugin-statusbar --save

splash-screen

    npm install @ionic-native/splash-screen --save
    ionic plugin add cordova-plugin-splashscreen --save


Keyboard

    ionic plugin add ionic-plugin-keyboard --save
    npm install @ionic-native/keyboard --save

Whitelist

    ionic plugin add cordova-plugin-whitelist --save


Подключим политику безопасности разрешающую все вставить в index.html


<meta http-equiv="Content-Security-Policy" content="font-src 'self' data:;
img-src * data:; default-src gap://ready file://* *; script-src 'self'
'unsafe-inline' 'unsafe-eval' * ; style-src 'self' 'unsafe-inline' *">


подключен плагин Crosswalk он добавляет функциональности в старые браузеры
Crosswalk

    ionic plugin add cordova-plugin-crosswalk-webview --save
    

WKWebView это плагин для Ios устройств то же самое сто и Crosswalk

    ionic plugin add https://github.com/driftyco/cordova-plugin-wkwebview-engine.git    --save

Вставим такую фигню в config.xml перед тегом </widget >


<allow-navigation href="http://localhost:8080/*"/>
<feature name="CDVWKWebViewEngine">
<param name="ios-package" value="CDVWKWebViewEngine" />
</feature>
<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />


###Вот таким образом можно получить файковые данные 
     
     constructor(public http: Http) {
        this.baseUrl = 'https://www.reddit.com/r/'
      }
    
      getPoste(category, limit){
        return this.http.get(this.baseUrl+category+'/top.json?limit='+limit)
            .map(res=>res.json())
      }

### Компиляция

под андроид

cordova platform add android
cordova platform add ios

делал это 

https://www.youtube.com/watch?v=ilM8YorL_jI


### Использование плагинов кардова

    ionic plugin add plugin-name
    
### получить доступ к функции плагина

    window.plugins.somePlugin.someMethod();
    
 список плагинов
 • Device
 • Network Information
 • Camera
 • Geolocation
 • File
 • In App Browser
 • Media
 • Splash Screen
 • Local Notifications
 • Facebook Connect
 • SQLite
 • Social Sharing

Бывает что не происходит компиляция так как тайп скрипт не знает про
плагин, чтобы работало можно грубо написать что то типа этого,
над местом использования плагина

        declare var variableCausingProblems;
        
либо использовать нативные функци ионика примерно так

    npm install @ionic-native/geolocation --save
    ionic plugin add cordova-plugin-geolocation
    
    import { Geolocation } from ‘@ionic-native/geolocation’;
    
    providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
    
Далее нужно в классе где будем использовать сделать так

    import { Geolocation } from '@ionic-native/geolocation';
    import { Platform } from 'ionic-angular';
    
    class MyComponentOrService {
    
      constructor(private platform: Platform, private geolocation: Geolocation) {
    
        platform.ready().then(() => {
    
          // get current position
          geolocation.getCurrentPosition().then(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          });
    
          const watch = geolocation.watchPosition().subscribe(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          });
    
          // to stop watching
          watch.unsubscribe();
    
        });
    
      }
    
    }
    
    подробнее посмотри тут http://ionicframework.com/docs/native/
