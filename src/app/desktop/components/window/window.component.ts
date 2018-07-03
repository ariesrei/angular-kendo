import { Component } from '@angular/core';


@Component({
  selector: 'app-window',
  template: `<div kendoWindowContainer></div>`
})
export class WindowComponent {
	
	// public items = [ 'Apples', 'Juice', 'Eggs', 'Bread' ];


    event: MouseEvent;
    clientX = 0;
    clientY = 0;


  	constructor() {}

  	onEvent(event: MouseEvent): void {
        this.event = event;
    }

}
