import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectLogoutComponent } from './redirect-logout.component';

describe('RedirectLogoutComponent', () => {
  let component: RedirectLogoutComponent;
  let fixture: ComponentFixture<RedirectLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
