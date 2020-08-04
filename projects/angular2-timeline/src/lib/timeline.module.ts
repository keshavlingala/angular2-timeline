import {NgModule} from '@angular/core';
import {TimelineComponent} from './timeline.component';
import {TimelineItemComponent} from "./timeline-item.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [TimelineComponent, TimelineItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TimelineComponent, TimelineItemComponent]
})
export class TimelineModule {
}
