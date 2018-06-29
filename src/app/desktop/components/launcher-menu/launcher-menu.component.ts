import { Component } from '@angular/core';

import { DesktopService } from '../../desktop.service';


@Component({
  	selector: 'app-launcher-menu',
   	template: `
        <kendo-menu [items]="items" [vertical]="true" style="font-size: 13px; line-height: 20px; display:block;">
        </kendo-menu>
    `
})
export class LauncherMenuComponent {
 	
 	public items: any[];

  	constructor(public desktopService: DesktopService) { 

  		this.desktopService.fetchLauncherMenu()
  		.subscribe( menu => {
            this.items = this.mapItems( menu, ['CategoryName', 'ProductName'], ['Products']);
        });

  	}

 	// convert the received data to menu items.
    private mapItems(items: any[], textFields: string[], childFields: string[], level: number = 0): any[] {

        const childField = childFields[level];
        const textField = textFields[level];

        return items.map(item => {
            const result: any = {
                text: item[textField]
            };
            // convert the children data to menu items.
            if (childField && item[childField]) {
                result.items = this.mapItems(item[childField], textFields, childFields, level + 1);
            }

            return result;
        });
    }
}	
