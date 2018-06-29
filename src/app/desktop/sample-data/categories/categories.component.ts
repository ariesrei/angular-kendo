import { Component, 
        Input, 
        ViewEncapsulation, 
        Renderer2 }                 from '@angular/core';
import { Observable }               from 'rxjs/Observable';

import { GridDataResult, 
        PageChangeEvent, 
        DataStateChangeEvent }      from '@progress/kendo-angular-grid';

import { State, 
        SortDescriptor, 
        orderBy }                   from '@progress/kendo-data-query';

import { CategoriesService }        from './categories.service';


@Component({
  selector: 'user-info',
  template: `
    <kendo-grid #grid
        [data]="view | async"
 
        [pageable]="{
            buttonCount: buttonCount,
            pageSizes: pageSizes,
            previousNext: previousNext
        }"
        [selectable]="true" 
        [reorderable]="true" 
        [resizable]="true"
        [sortable]="true"

        [pageSize]="state.take"
        [skip]="state.skip"
        [sort]="state.sort"
        
        [scrollable]="scrollable"
        [navigable]="true"
        [loading]="view.loading"
        (dataStateChange)="dataStateChange($event)"
        > 
 
        <ng-template kendoGridToolbarTemplate [position]="position">
            

           <button (click)="onClick()" class="k-button">New</button>
           <button (click)="onClick()" class="k-button">Edit</button>
           <button (click)="onClick()" class="k-button">Delete</button>

        </ng-template>

    </kendo-grid>`
})
export class CategoriesComponent {
 
    @Input() public name: string;
    @Input() public age: number;

    public position: 'top' | 'bottom' | 'both' = 'top';
    public buttonCount = 5;
    public pageSizes = true;

    public view: Observable<GridDataResult>;

    public state: State = {
        skip: 0,
        take: 10
    };

 
    constructor(private categories: CategoriesService ) {
        
        this.view = categories;
        this.categories.query(this.state);

        //console.log(this.view)

    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.categories.query(state);
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


    onClick() {
        console.log('Click button')
    }

}