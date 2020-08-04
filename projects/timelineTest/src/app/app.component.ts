import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="more.push(0)">Add More</button>
    <timeline>
      <timeline-item>
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </timeline-item>
      <timeline-item>
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </timeline-item>
      <timeline-item *ngFor="let i of more">
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
        </div>
      </timeline-item>
    </timeline>
  `,
})
export class AppComponent {
  more = [];
}
