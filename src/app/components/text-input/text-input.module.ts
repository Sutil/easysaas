import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';



@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }
