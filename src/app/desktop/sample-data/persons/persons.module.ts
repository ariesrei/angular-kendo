import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*----------------------------------------------
/  Services
-----------------------------------------------*/ 
import { PersonsService }          from './persons.service';



@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule
    ],
    providers: [ 
        //PersonsService
        {provide: String, useValue: "stringValue"}
    ]
})
export class PersonsModule { }

