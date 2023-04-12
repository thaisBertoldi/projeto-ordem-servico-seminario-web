import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncerrarComponent } from './modal-encerrar.component';

describe('ModalEncerrarComponent', () => {
  let component: ModalEncerrarComponent;
  let fixture: ComponentFixture<ModalEncerrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEncerrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEncerrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
