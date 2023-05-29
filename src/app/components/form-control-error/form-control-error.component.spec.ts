import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESTranslateModule } from 'src/app/services/translate/translate.module';
import { FormControlErrorComponent } from './form-control-error.component';

describe('FormControlErrorComponent', () => {
  let component: FormControlErrorComponent;
  let fixture: ComponentFixture<FormControlErrorComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [ESTranslateModule],
      declarations: [FormControlErrorComponent],
    });
    fixture = TestBed.createComponent(FormControlErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
