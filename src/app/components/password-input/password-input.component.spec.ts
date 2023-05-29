import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, NgControl } from '@angular/forms';
import { FormControlErrorModule } from '../form-control-error/form-control-error.module';
import { PasswordInputComponent } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [FormControlErrorModule, FormsModule],
      declarations: [PasswordInputComponent],
      providers: [NgControl]
    });
    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
