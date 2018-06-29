import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*----------------------------------------------
/  Services
-----------------------------------------------*/ 
import { CategoriesService }        from './categories.service';



@NgModule({
  	imports: [
    	CommonModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule
  	],
    providers: [ 
        CategoriesService
    ]
})
export class CategoriesModule { }
