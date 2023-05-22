import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { ThemeService } from '../services/theme/theme.service';
import { LogoComponent } from '../components/logo/logo.component';
import { RouterModule } from '@angular/router';

class ThemeServiceMock extends ThemeService {
  constructor() {
    super(null as any)
  }
}

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [AuthenticationComponent, LogoComponent],
      providers: [
        {
          provide: ThemeService,
          useClass: ThemeServiceMock,
        }
      ]
    });
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
