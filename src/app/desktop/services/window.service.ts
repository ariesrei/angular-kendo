import { Injectable, OnInit, TemplateRef, Output, EventEmitter } 		from '@angular/core';
import { HttpClient } 		from '@angular/common/http';

import { GridDataResult } 	from '@progress/kendo-angular-grid';
 
import { WindowService, WindowCloseResult, WindowSettings } from '@progress/kendo-angular-dialog';

import { Observable } 		from 'rxjs/Observable'; 

// import { ProductsService } from '../sample-data/products/products.service';
// import { CategoriesService } from '../sample-data/categories/categories.service';

import { PersonsComponent } from '../sample-data/persons/persons.component';
import { ProductsComponent } from '../sample-data/products/products.component';
import { CategoriesComponent } from '../sample-data/categories/categories.component';


@Injectable({
	providedIn: 'root'
})
export class AppWindowService implements OnInit {
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() dragStart: EventEmitter<any> = new EventEmitter();

	public moduleContent: any;

	public modulename: any;

  	constructor(private windowService: WindowService ) { }
 
    ngOnInit() {}

	public openWindow(titlebar: TemplateRef<any>, modulename: any) {
		
		if(modulename === 'Categories') {
  			this.moduleContent = CategoriesComponent;
  		}
  		if(modulename === 'Products') {
  			this.moduleContent = ProductsComponent;
  		}
  		if(modulename === 'Absence Tracking') {
  			this.moduleContent = PersonsComponent; 
  		}

	 	const windowRef = this.windowService.open({
            //appendTo: this.containerRef,
			title: modulename,
			content: this.moduleContent,
            //titleBarContent: titlebar,
			width: 850,
			minWidth: 850,
            events: {
                dragstart: this.onDragStart,
                dragStart: this.onDragStart
            },
            dragStart: this.onDragStart,
            dragstart: this.onDragStart
		});
 
        // const userInfo = windowRef.window.title;
        // userInfo.name = 'admin';
        // userInfo.age = 42;

        windowRef.result.subscribe((result) => {
            if (result instanceof WindowCloseResult) {
                console.log('Window was closed!');
            }
        });

        // windowRef.window.dragStart = this.onDragStart;
    }

    public onDragStart(e) {
        console.log('Drag Start')
    }

 	 
}

