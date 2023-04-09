import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReadComponent } from './customer-read.component';

describe('CustomerReadComponent', () => {
  let component: CustomerReadComponent;
  let fixture: ComponentFixture<CustomerReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
