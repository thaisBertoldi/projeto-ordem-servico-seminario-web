import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsClosedComponent } from './os-closed.component';

describe('OsClosedComponent', () => {
  let component: OsClosedComponent;
  let fixture: ComponentFixture<OsClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
