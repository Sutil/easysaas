import { AfterContentInit, Component, INJECTOR, Inject, Injector, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'es-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextInputComponent)
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor, AfterContentInit {

  @Input()
  formControlName = 'input'

  @Input()
  placeholderText?: string;

  public control?: AbstractControl
  public isDisabled = false
  public value: string | number = ''

  _onChange = (val: string | number) => {}
  _onTouch = () => {}

  constructor(@Inject(INJECTOR) private injector: Injector) {}

  ngAfterContentInit(): void {
    const ngControl = this.injector.get(NgControl)
    if(ngControl && ngControl.control) {
      this.control = ngControl.control
    }
  }


  writeValue(value: string | number): void {
      this.value = value
  }

  registerOnChange(fn: any): void {
      this._onChange = fn
  }

  registerOnTouched(fn: any): void {
      this._onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled
  }

}
