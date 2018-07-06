import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* extends */
import { DesktopService } from '../desktop.service';


@Injectable()
export class CategoriesService extends DesktopService {

    constructor(http: HttpClient) { 
    	super(http, 'Categories');
   	}

}