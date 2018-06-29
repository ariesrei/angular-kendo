import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


import { DesktopService } from './desktop.service';

@Component({
	selector: 'app-desktop',
	templateUrl: './desktop.component.html',
	styleUrls: ['./desktop.component.scss'],
  	animations: [
	    trigger(
	      	'launcherAnimate', [
	        	transition(':enter', [
	          		style({transform: 'translateY(50%)', opacity: 0}),
	          		animate('100ms', style({transform: 'translateY(0)', opacity: 1}))
	        	]),
	        	transition(':leave', [
	          		style({transform: 'translateY(0)', opacity: 1}),
	          		animate('100ms', style({transform: 'translateY(-100%)', opacity: 0}))
	        	])
	      	]
	    )
  	],
})
export class DesktopComponent {


  	constructor(public desktopService: DesktopService) {}


	/* Clear elements when workspace is click e.g Launcher */
  	workspaceClear() {
  		this.desktopService.workspaceClear();
  	}


}
