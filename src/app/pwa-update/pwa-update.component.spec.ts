import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaUpdateComponent } from './pwa-update.component';
import { Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { BsModalService } from 'ngx-bootstrap/modal';

class SwUpdateMock  {
  constructor() {
    
  }

  versionUpdates: any = new Subject<{}>()
}

describe('PwaUpdateComponent', () => {
  let component: PwaUpdateComponent;
  let fixture: ComponentFixture<PwaUpdateComponent>;

  const bsModalServiceMock = {}

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [PwaUpdateComponent],
      providers: [
        {
          provide: SwUpdate,
          useClass: SwUpdateMock
        },
        {
          provide: BsModalService,
          useValue: bsModalServiceMock,
        }
      ]
    });
    fixture = TestBed.createComponent(PwaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
