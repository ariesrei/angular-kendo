import { Component, Input, ViewEncapsulation, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridDataResult, 
        PageChangeEvent, 
        DataStateChangeEvent }  from '@progress/kendo-angular-grid';

import { State }               from '@progress/kendo-data-query';



import { PersonsService } from './persons.service';


@Component({
  selector: 'user-info',
  template: `
    <kendo-grid #grid
        [data]="view | async"
        [pageable]="true"
        [selectable]="true" 
        [reorderable]="true" 
        [resizable]="true"
        [sortable]="true"

        [pageSize]="state.take"
        [skip]="state.skip"
        [sort]="state.sort"
        
        [scrollable]="none"
        [navigable]="true"
        [loading]="view.loading"
        (dataStateChange)="dataStateChange($event)"
        > 
 
        <ng-template kendoGridToolbarTemplate [position]="position">
            

           <button (click)="onClick()" class="k-button">New</button>
           <button (click)="onClick()" class="k-button">Edit</button>
           <button (click)="onClick()" class="k-button">Delete</button>
    
           <select class="k-button">
                <option> 10 </option>
                <option> 20 </option>
                <option> 50 </option>
                <option> 100 </option>
           </select>
        </ng-template>

        <kendo-grid-column field="CategoryID" width="130"></kendo-grid-column>
        <kendo-grid-column field="CategoryName" width="200"></kendo-grid-column>
        <kendo-grid-column field="Description" [sortable]="false"></kendo-grid-column>


        </kendo-grid>

        <grid-context-menu [for]="grid" [menuItems]="['Move Up', 'Move Down']" (select)="onSelect($event)">
        </grid-context-menu>
        

        `
})
export class UserInfoComponent {
 
    @Input() public name: string;
    @Input() public age: number;

    public position: 'top' | 'bottom' | 'both' = 'top';

    public view: Observable<GridDataResult>;

    public state: State = {
        skip: 0,
        take: 5
    };

 
    constructor(private persons: PersonsService ) {
        
        //this.loadItems();

        this.view = persons;
        this.persons.query(this.state);

        console.log(this.view)

    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.persons.query(state);
    }

    
    onClick() {
        console.log('Click button')
    }

    // public onSelect({ dataItem, item }): void {

    //   const index = this.view.indexOf(dataItem);

    //   if (item === 'Move Up') {
    //     if (index > 0) {
    //         this.swap(index - 1, index);
    //     }
    //   } else if (index < this.view.length - 1) {
    //     this.swap(index, index + 1);
    //   }
    // }

    // private swap(index1, index2): void {
    //     const temp = this.view[index1];
    //     this.view[index1] = this.view[index2];
    //     this.view[index2] = temp;
    // }

    // private loadItems(): void {

    //     this.gridView = {
    //         data: this.items.slice(this.state['skip'], this.state['skip'] + this.state['take']),
    //         total: this.items.length
    //     };
    // }

    // public pageChange(event: PageChangeEvent): void {
    //     this.skip = event.skip;
    //     this.loadItems();
    // }

}