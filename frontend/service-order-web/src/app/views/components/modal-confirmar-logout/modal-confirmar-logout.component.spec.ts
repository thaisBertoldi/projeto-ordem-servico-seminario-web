import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarLogoutComponent } from './modal-confirmar-logout.component';

describe('ModalConfirmarLogoutComponent', () => {
  let component: ModalConfirmarLogoutComponent;
  let fixture: ComponentFixture<ModalConfirmarLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmarLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
