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

    public workspaceHeight: number;
    public workspaceWidth: number;

    public x: number;
    public y: number;
 
    //public test = ComponentRef<WindowComponent>;

  	constructor(private windowService: WindowService ) { 
 
    }
 
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
			width: 650,
			minWidth: 300
		});
 
         
        // const userInfo = windowRef.window.title;
        // userInfo.name = 'admin';
        // userInfo.age = 42;

        windowRef.result.subscribe((result) => {
            if (result instanceof WindowCloseResult) {
                console.log('Window was closed!');
            }
        });

        console.log(windowRef.window);

        windowRef.window._component.dragStart.emit = this.onDragStart;
        windowRef.window._component.dragEnd.emit = this.onDragEnd;
        
 
        // var workspaceid = document.getElementById('workspace');

        // this.workspaceHeight = workspaceid.offsetHeight;
        // this.workspaceWidth = workspaceid.offsetWidth;

        // var width = this.workspaceWidth;


        // document.getElementById('workspace').addEventListener('mousemove', function(evt) {

        //     var x = evt.clientX;
        //     var y = evt.clientY;
        

        //     if(x < 0 ) {
        //          windowRef.window._component.dragEnd.emit = this.onDragEnd;
        
        //     }
        //     //console.log(x, y)

        // });


    }

    public onDragStart(): void {
        
        // console.log(this.emit = this.onDragEnd)

        
        var workspaceid = document.getElementById('workspace');

        this.workspaceHeight = workspaceid.offsetHeight;
        this.workspaceWidth = workspaceid.offsetWidth;
        
        console.log('Workspace Dimensions: ' + this.workspaceHeight+' X '+this.workspaceWidth)
        console.log('Drag Start - Aries')
    }

    public onDragEnd(): void { 
        console.log('Drag End - Aries');
    }

 
 
    // document.getElementById('workspace').addEventListener('mousemove', function(evt) {

    //     var x = evt.clientX;
    //     var y = evt.clientY;

    //     console.log(x, y)
    // });

}

