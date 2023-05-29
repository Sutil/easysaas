import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlErrorModule } from '../form-control-error/form-control-error.module';
import { TextInputComponent } from './text-input.component';


@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormControlErrorModule,
  ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }
