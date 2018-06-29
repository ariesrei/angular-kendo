import { Component, Input } from '@angular/core';

@Component({
  selector: 'persons',
  template: `I am AT Widget`
})
export class PersonsComponent {

    @Input() public name: string;
    @Input() public age: number;

}