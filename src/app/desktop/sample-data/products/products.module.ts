import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*----------------------------------------------
/  Services
-----------------------------------------------*/ 
import { ProductsService }          from './products.service';



@NgModule({
  	imports: [
    	CommonModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule
  	],
    providers: [ 
        ProductsService
    ]
})
export class ProductsModule { }
