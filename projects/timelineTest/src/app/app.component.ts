import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  code = `
  <div style="height: 100px;width: 100%;background-color: #534bae;color: white">
  Something
  </div>
`
  arr = Array.from({length: 2}, () => this.code);
  more = [];

  addRandom() {

  }
}
