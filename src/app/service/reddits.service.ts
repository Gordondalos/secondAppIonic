import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RedditsService {

  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'https://www.reddit.com/r/'
  }

  getPoste(category, limit){
    return this.http.get(this.baseUrl+category+'/top.json?limit='+limit)
        .map(res=>res.json())
  }

}
