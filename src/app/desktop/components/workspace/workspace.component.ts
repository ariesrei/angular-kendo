import { Component, OnInit, TemplateRef, Input, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

import { WindowService, WindowCloseResult, WindowSettings } from '@progress/kendo-angular-dialog';


import { PersonsComponent } from '../../sample-data/persons/persons.component';
import { ProductsComponent } from '../../sample-data/products/products.component';
import { CategoriesComponent } from '../../sample-data/categories/categories.component';


@Component({
	selector: 'app-workspace',
	templateUrl: 'workspace.component.html'
})
export class WorkspaceComponent implements OnInit {

    @ViewChild("container", { read: ViewContainerRef })
    public containerRef: ViewContainerRef;

 	public moduleContent: any;

  	constructor(private windowService: WindowService) {

    }


    ngOnInit() {
    }

 

  	public showWindow(modulename: any) {

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
            appendTo: this.containerRef,
			title: modulename,
			content: this.moduleContent,
			width: 850,
			minWidth: 850
		});

		const userInfo = windowRef.content.instance;
		userInfo.name = 'admin';
		userInfo.age = 42;

        windowRef.result.subscribe((result) => {

            if (result instanceof WindowCloseResult) {
                console.log('Window was closed!');
            }
        });


       // var winObject = windowRef.instance;

        // windowRef.dragging._draggable.bind("drag", function() {
            
        //     var windowWrapper = winObject.wrapper,
        //         windowPosition = windowWrapper.offset(),
        //         shouldOverridePosition = false,
        //         newTop = windowPosition.top,
        //         newLeft = windowPosition.left;

        //     if (windowPosition.top > 200) {
        //         shouldOverridePosition = true;
        //         newTop = 200;
        //     }

        //     if (windowPosition.left > 200) {
        //         shouldOverridePosition = true;
        //         newLeft = 200;
        //     }

        //     if (shouldOverridePosition) {
        //         windowWrapper.css({top: newTop, left: newLeft});
        //     }

        // });

  	}

 
}
