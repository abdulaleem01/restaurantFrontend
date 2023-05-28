import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentoflineComponent } from './paymentofline.component';

describe('PaymentoflineComponent', () => {
  let component: PaymentoflineComponent;
  let fixture: ComponentFixture<PaymentoflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentoflineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentoflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
