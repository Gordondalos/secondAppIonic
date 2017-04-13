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