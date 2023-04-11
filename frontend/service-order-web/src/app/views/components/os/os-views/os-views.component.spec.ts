import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsViewsComponent } from './os-views.component';

describe('OsViewsComponent', () => {
  let component: OsViewsComponent;
  let fixture: ComponentFixture<OsViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
