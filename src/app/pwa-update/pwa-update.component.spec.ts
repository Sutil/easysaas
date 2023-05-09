import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaUpdateComponent } from './pwa-update.component';

describe('PwaUpdateComponent', () => {
  let component: PwaUpdateComponent;
  let fixture: ComponentFixture<PwaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwaUpdateComponent]
    });
    fixture = TestBed.createComponent(PwaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
