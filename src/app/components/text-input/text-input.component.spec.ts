import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormControlErrorModule } from '../form-control-error/form-control-error.module';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormControlErrorModule, ReactiveFormsModule, FormsModule],
      declarations: [TextInputComponent],
      providers: [NgControl]
    });
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
