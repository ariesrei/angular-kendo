import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { GridDataResult } 	from '@progress/kendo-angular-grid';
// import { toODataString } 	from '@progress/kendo-data-query';

// import { Observable } 		from 'rxjs/Observable';
// import { BehaviorSubject } 	from 'rxjs/BehaviorSubject';
// import { map } 				from 'rxjs/operators/map';
// import { tap } 				from 'rxjs/operators/tap';



/* extends */
import { DesktopService } from '../../desktop.service';


@Injectable()
export class CategoriesService extends DesktopService {

    constructor(http: HttpClient) { 
    	super(http, 'Categories');
   	}

}