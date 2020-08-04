import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TimelineModule} from "angular2-timeline";
import {FormsModule} from "@angular/forms";
import {SafestylePipe} from "./safestyle.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SafestylePipe
  ],
  imports: [
    BrowserModule,
    TimelineModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
