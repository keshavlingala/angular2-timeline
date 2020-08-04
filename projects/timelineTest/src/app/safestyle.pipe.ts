import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeStyle'
})
export class SafestylePipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: string) {
    console.log(value)
    // return this.sanitized.sanitize(SecurityContext.HTML, value);
    return this.sanitized.bypassSecurityTrustHtml(value);

  }

}
