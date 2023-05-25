import { Component, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class TextInputComponent implements ControlValueAccessor, OnChanges {

  @Input({required: true})
  formControlName = 'input'

  @Input()
  placeholderText?: string;

  public control?: AbstractControl
  public isDisabled = false
  public value: string | number = ''

  _onChange = (val: string | number) => {}
  _onTouch = () => {}

  constructor(private controlContainer: ControlContainer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['formControlName'] && changes['formControlName'].currentValue) {
      this.control = this.controlContainer.control?.get(this.formControlName) as AbstractControl
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
