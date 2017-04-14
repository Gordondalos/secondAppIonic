import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {

    private setTitleInHeader = new Subject<string> ();
    setTitleInHeader$ = this.setTitleInHeader.asObservable ();
    setTitleInHeaderFunction ( data : any ) {
        this.setTitleInHeader.next ( data );
    }

    constructor() { }





}