import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'timeline',
  template: `
    <!--    Author: Keshav Lingala -->
    <ng-content></ng-content>
  `,
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
