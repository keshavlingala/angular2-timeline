import {Component} from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid overflow-hidden">
      <div data-aos="fade-down" class="row justify-content-center mt-4">
        <button class="btn btn-info" (click)="more.push(0)">Add More</button>
      </div>
      <timeline>
        <timeline-item attr.data-aos="fade-{{i%2!==0?'left':'right'}}"
                       *ngFor="let version of androidVersions;index as i">
          <div class="item">
            <div class="row">
              <div class="col-9 ">
                <h1 class="mb-1">
                  {{version.name}}
                </h1>
                <h3>
                  V{{version.version}}
                </h3>
                <p class="overflow-hidden">
                  Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown
                </p>
              </div>
              <div class="col-3  d-flex flex-column align-items-center justify-content-center border-left">
                <h3 style="font-size: 1.3rem">
                  {{version.date | date:'MMM'}}
                </h3>
                <h1 style="font-size: 2rem;font-weight: 500">
                  {{version.date | date:'dd'}}
                </h1>
                <h3 style="font-size: 1.1rem">
                  {{version.date | date:'yyyy'}}
                </h3>
              </div>
            </div>
          </div>
        </timeline-item>
        <timeline-item *ngFor="let x of more">
          <div class="item">
            <h1>Title</h1>
            <h3>Subtitle</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s.</p>
          </div>
        </timeline-item>
      </timeline>
    </div>
  `,
  styles: [`
    .item {
      padding: 16px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);;
    }

    .item h1 {
      font: 400 24px/32px Roboto, "Helvetica Neue", sans-serif;
      letter-spacing: normal;
      margin: 0 0 16px;
    }

    .item h3 {
      font: 400 16px/28px Roboto, "Helvetica Neue", sans-serif;
      letter-spacing: normal;
      margin: 0 0 16px;
    }
  `
  ]
})
export class AppComponent {
  androidVersions = [
    ['Cupcake', '1.5', 'April 27, 2009'],
    ['Donut', '1.6', 'September 15, 2009'],
    ['Eclair', '2.1', 'October 26, 2009'],
    ['Froyo', '2.2.3', 'May 20, 2010'],
    ['Gingerbread', '2.3.7', 'December 6, 2010'],
    ['Honeycomb', '3.2.6', 'February 22, 2011'],
    ['Ice Cream Sandwich', '4.0.4', 'October 18, 2011'],
    ['Jelly Bean', '4.3.1', 'July 9, 2012'],
    ['KitKat', '4.4.4', 'October 31, 2013'],
    ['Lollipop', '5.1.1', 'November 12, 2014'],
    ['Marshmallow', '6.0.1', 'October 5, 2015'],
    ['Nougat', '7.1.2', 'August 22, 2016'],
    ['Oreo', '8.1', 'August 21, 2017'],
    ['Pie', '9', 'August 6, 2018'],
    ['Android 10', '10', 'September 3, 2019'],
  ].map(i => {
    return {
      name: i[0],
      version: i[1],
      date: new Date(i[2]).getTime()
    }
  }).sort(i => -i.date);
  more = [];

  constructor() {
    console.log(this.androidVersions)
    AOS.init();
    console.log(AOS);
  }
}
