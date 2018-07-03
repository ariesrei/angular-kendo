import { Component, OnInit, TemplateRef, Input, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

// import { WindowService, WindowCloseResult, WindowSettings } from '@progress/kendo-angular-dialog';


import { DesktopService } from '../../desktop.service';
import { AppWindowService } from '../../services/window.service';


@Component({
	selector: 'app-workspace',
	templateUrl: 'workspace.component.html'
})
export class WorkspaceComponent implements OnInit {

    @Input() public name: string;
    @Input() public age: number;

    modulename: any;

  	constructor( public desktopService: DesktopService, 
        public appWindowService: AppWindowService ) { }


    ngOnInit() {}

    // public showList2(template: TemplateRef) {
    //     this.windowService.open({
    //           title: 'My List',
    //           content: template,
    //           width: 250,
    //           height: 230
    //     });
    // }


    // public showList(titlebar: TemplateRef<any>, modulename: any) {

    //     if(modulename === 'Absence Tracking') {
    //         this.moduleContent = PersonsComponent;
    //         this.modulename = modulename;
    //         //this.moduleTitle = 'Absence Tracking';
    //     }

    //     this.windowService.open({
    //         content: this.moduleContent,
    //         titleBarContent: titlebar,
    //         width: 850,
            
    //     });
    // }

  	public showWindow(titlebar: TemplateRef<any>, modulename: any) {

        this.appWindowService.openWindow(titlebar, modulename);
 


        // this.modulename = modulename;

  // 		if(modulename === 'Categories') {
  // 			this.moduleContent = CategoriesComponent;    
  // 		}
  // 		if(modulename === 'Products') {
  // 			this.moduleContent = ProductsComponent;
  // 		}
  // 		if(modulename === 'Absence Tracking') {
  // 			this.moduleContent = PersonsComponent; 
  //           //this.modulename = modulename;
  // 		}

		// const windowRef = this.windowService.open({
  //           appendTo: this.containerRef,
		// 	title: modulename,
		// 	content: this.moduleContent,
  //           titleBarContent: titlebar,
		// 	width: 850,
		// 	minWidth: 850
		// });

		// const userInfo = windowRef.content.instance;
		// userInfo.name = 'admin';
		// userInfo.age = 42;

        // windowRef.result.subscribe((result) => {

        //     if (result instanceof WindowCloseResult) {
        //         console.log('Window was closed!');
        //     }
        // });


        // var test = document.getElementById('workspace');
        // console.log(test)



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

    public onDragStart() {
        console.log('Drag Start');
    }


    public test() {
        console.log('Window Title click')
    }
 
}
