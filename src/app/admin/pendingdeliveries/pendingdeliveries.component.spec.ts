import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingdeliveriesComponent } from './pendingdeliveries.component';

describe('PendingdeliveriesComponent', () => {
  let component: PendingdeliveriesComponent;
  let fixture: ComponentFixture<PendingdeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingdeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingdeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
