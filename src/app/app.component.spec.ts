import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PwaUpdateComponent } from './pwa-update/pwa-update.component';
import { SwUpdate } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';


describe('AppComponent', () => {
  let app: AppComponent;
  const swUpdateMock = {}
  const bsModalServiceMock = {}
  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [
        AppComponent,
        PwaUpdateComponent,
      ],
      providers: [
        {
          provide: SwUpdate,
          useValue: swUpdateMock
        },
        {
          provide: BsModalService,
          useValue: bsModalServiceMock
        }
      ]
    });
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

});
