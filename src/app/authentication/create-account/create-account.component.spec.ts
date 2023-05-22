import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { Auth } from '@angular/fire/auth';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  const authMock = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountComponent],
      providers: [
        {
          provide: Auth,
          useValue: authMock,
        }
      ]
    });
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
