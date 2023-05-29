import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ESTranslateModule } from 'src/app/services/translate/translate.module';
import { FormControlErrorComponent } from './form-control-error.component';



@NgModule({
  declarations: [
    FormControlErrorComponent
  ],
  imports: [
    CommonModule,
    ESTranslateModule,
  ],
  exports: [FormControlErrorComponent]
})
export class FormControlErrorModule { }
