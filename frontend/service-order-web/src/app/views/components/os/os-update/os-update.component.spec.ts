import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsUpdateComponent } from './os-update.component';

describe('OsUpdateComponent', () => {
  let component: OsUpdateComponent;
  let fixture: ComponentFixture<OsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
