import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*----------------------------------------------
/  Desktop Components
-----------------------------------------------*/ 
import { DesktopComponent }         from './desktop.component';
import { TaskbarComponent }         from './components/taskbar/taskbar.component';
import { WorkspaceComponent }       from './components/workspace/workspace.component';
import { LauncherComponent }        from './components/launcher/launcher.component';
import { LauncherMenuComponent }    from './components/launcher-menu/launcher-menu.component';
import { WindowComponent }          from './components/window/window.component';


/*----------------------------------------------
/  App Components
-----------------------------------------------*/ 
import { PersonsComponent }         from './sample-data/persons/persons.component';
import { CategoriesComponent }      from './sample-data/categories/categories.component';
import { ProductsComponent }        from './sample-data/products/products.component';



/*----------------------------------------------
/  Kendo Modules
-----------------------------------------------*/ 
import { GridModule }               from '@progress/kendo-angular-grid';
import { PopupModule }              from '@progress/kendo-angular-popup';
import { WindowModule }             from '@progress/kendo-angular-dialog';
import { MenuModule }               from '@progress/kendo-angular-menu';
import { ToolBarModule }            from '@progress/kendo-angular-toolbar';



/*----------------------------------------------
/  App Component Modules
-----------------------------------------------*/ 
import { PersonsModule }            from './sample-data/persons/persons.module';
import { ProductsModule }           from './sample-data/products/products.module';
import { CategoriesModule }         from './sample-data/categories/categories.module';


/*----------------------------------------------
/  Services
-----------------------------------------------*/ 
import { DesktopService }           from './desktop.service';


@NgModule({
  	imports: [
    	CommonModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,

        // Kendo
        GridModule,
        PopupModule,
        WindowModule,
        MenuModule,
        ToolBarModule,

        PersonsModule,
        ProductsModule,
        CategoriesModule
  	],
  	declarations: [
  		DesktopComponent,
  		TaskbarComponent,
  		WorkspaceComponent,
  		LauncherComponent,
  		LauncherMenuComponent,
  		WindowComponent,
        /* widget components */
        PersonsComponent,
        CategoriesComponent,
        ProductsComponent
	],
	exports: [
		DesktopComponent,	
        TaskbarComponent,
        LauncherComponent,
        LauncherMenuComponent,
        PersonsComponent,
        CategoriesComponent,
        ProductsComponent,

        /* imported kendo */
        GridModule,
        PopupModule,
        WindowModule,
        MenuModule,
        ToolBarModule,

        PersonsModule,
        ProductsModule,
        CategoriesModule

	],
    entryComponents: [ 
        PersonsComponent,
        CategoriesComponent,
        ProductsComponent
    ],
    providers: []
})
export class DesktopModule { }
