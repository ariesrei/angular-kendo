import { Component, OnInit, TemplateRef, Input, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

import { WindowService } from '@progress/kendo-angular-dialog';


import { PersonsComponent } from '../../sample-data/persons/persons.component';
import { ProductsComponent } from '../../sample-data/products/products.component';
import { CategoriesComponent } from '../../sample-data/categories/categories.component';

@Component({
	selector: 'app-launcher',
	templateUrl: './launcher.component.html',
	styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent {
	
	@ViewChild("container", { read: ViewContainerRef })
    public containerRef: ViewContainerRef;


 	public moduleContent: any;

  	constructor(private windowService: WindowService) { }

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
  	}


}
