import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { DesktopModule } from './desktop/desktop.module';
// import { PersonsModule } from './desktop/sample-data/persons.module';
// import { ProductsModule } from './desktop/sample-data/products/products.module';


import { AppComponent } from './app.component';
import { SuiteSessionComponent } from './suite-session/suite-session.component';


@NgModule({
    declarations: [
        AppComponent,
        SuiteSessionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        DesktopModule,
        // PersonsModule,
        // ProductsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
 