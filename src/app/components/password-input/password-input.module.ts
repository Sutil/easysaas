import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlErrorModule } from '../form-control-error/form-control-error.module';
import { PasswordInputComponent } from './password-input.component';



@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormControlErrorModule,
  ],
  exports: [
    PasswordInputComponent
  ]
})
export class PasswordInputModule { }
