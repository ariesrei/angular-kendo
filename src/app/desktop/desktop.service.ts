import { Injectable } 		from '@angular/core';
import { HttpClient } 		from '@angular/common/http';

import { GridDataResult } 	from '@progress/kendo-angular-grid';
import { toODataString } 	from '@progress/kendo-data-query';

import { Observable } 		from 'rxjs/Observable';
import { BehaviorSubject } 	from 'rxjs/BehaviorSubject';
import { map } 				from 'rxjs/operators/map';
import { tap } 				from 'rxjs/operators/tap';


@Injectable({
	providedIn: 'root'
})
export abstract class DesktopService extends BehaviorSubject<GridDataResult> {

	public loading: boolean;

 	public showLauncher: boolean = false;

	private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';

	// clearObj: any = [
	// 	'showLauncher':this.showLauncher, 
	// ]
	
  	constructor( public http: HttpClient, protected widgetName: string) { 
  		super(null);
  	}


    toggleLauncher() {
        return this.showLauncher = !this.showLauncher;
    }


    workspaceClear() {
    	
    	if(this.showLauncher = false) {
    		return false;
    	}
    	else {
    		return false;
    	}  	
    }
 

    /* Fetch Launcher Menu */
  	public fetchLauncherMenu(): Observable<any[]> {

        return this.launcherMenu(`${this.BASE_URL}/Categories?$expand=Products`);
    }

    /* Launcher Menu */
    public launcherMenu(url: string): Observable<any[]> {

        return this.http.get(url)
            .pipe(map((response: any) => response.value));
    }


    public query(state: any): void {

        this.fetch(this.widgetName, state)
            .subscribe(x => super.next(x));
    }

    public fetch(widgetName: string, state: any): Observable<GridDataResult> {
        
        const queryStr = `${toODataString(state)}&$count=true`;        
		this.loading = true;

        return this.http.get(`${this.BASE_URL}${widgetName}?${queryStr}`)
            .pipe(
                map(response => (<GridDataResult> {
	                    data: response['value'],
	                    total: parseInt(response['@odata.count'], 10)
                	})
                ),
                tap(() => this.loading = false)
            );
    }

 	
}

