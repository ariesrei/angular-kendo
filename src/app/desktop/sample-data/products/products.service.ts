import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GridDataResult } 	from '@progress/kendo-angular-grid';
import { toODataString } 	from '@progress/kendo-data-query';

import { Observable } 		from 'rxjs/Observable';
import { BehaviorSubject } 	from 'rxjs/BehaviorSubject';
import { map } 				from 'rxjs/operators/map';
import { tap } 				from 'rxjs/operators/tap';

/* extends */
import { DesktopService } from '../../desktop.service';


@Injectable()
export class ProductsService extends DesktopService {

    constructor(http: HttpClient) { 
    	super(http, 'Products');
   	}

    queryAll(st?: any): Observable<GridDataResult> {
        const state = Object.assign({}, st);
        delete state.skip;
        delete state.take;

        return this.fetch(this.widgetName, state);
    }
}