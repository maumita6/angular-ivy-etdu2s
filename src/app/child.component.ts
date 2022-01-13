import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ChildComponent {
  @Input() pValue: string;
  @Input() config;
  constructor() {}

  ngOnChanges() {
    //Write your code here
    console.log(this.pValue);
  }
}
