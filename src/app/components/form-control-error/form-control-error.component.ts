import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'es-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent {

  @Input()
  control?: AbstractControl

  errorMessage: string | null | undefined;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.updateErrorMessage();
    this.control?.statusChanges.subscribe(() => this.updateErrorMessage())
  }

  private updateErrorMessage() {
    let errorMessages: string[] = [];
    if(this.control?.errors) {
      const errorObj = this.control.errors
      Object.keys(errorObj).forEach(key => {
        const params = this.getParams(errorObj[key])
        if(Object.keys(params).length > 0) {
          errorMessages.push(`${this.translateService.instant(key, params)}`);
        } else {
          errorMessages.push(`${this.translateService.instant(key)}`);
        }
      })      
    }
    if(errorMessages.length > 0) {
      this.errorMessage = errorMessages.join(' - ');
    } else {
      this.errorMessage = null;
    }
  }

  private getParams(errorObj: any): {[k: string]: any } {
    return Object.keys(errorObj)
      .filter(k => (typeof errorObj[k]) === 'string' || (typeof errorObj[k]) === 'number')
      .reduce((acc, k) => ({...acc, [k]: errorObj[k]}), {})
  }

}
