import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillstatusComponent } from './billstatus.component';

describe('BillstatusComponent', () => {
  let component: BillstatusComponent;
  let fixture: ComponentFixture<BillstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
