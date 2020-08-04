import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'timeline',
  template: `
<!--     Author: Keshav Lingala-->
<!--     Github: https:github.com/keshavlingala-->
<!--     ( https://keshavlingala.github.io )-->
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
