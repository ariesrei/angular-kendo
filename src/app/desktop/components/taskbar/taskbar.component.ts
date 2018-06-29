import { Component } from '@angular/core';

import { DesktopService } from '../../desktop.service';

@Component({
	selector: 'app-taskbar',
	templateUrl: './taskbar.component.html',
	styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {

  	constructor(public desktopService: DesktopService) { }

  	toggleLauncher() { 
  		this.desktopService.toggleLauncher();
  	}

}
