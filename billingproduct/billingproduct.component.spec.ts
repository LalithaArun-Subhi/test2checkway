import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingproductComponent } from './billingproduct.component';

describe('BillingproductComponent', () => {
  let component: BillingproductComponent;
  let fixture: ComponentFixture<BillingproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingproductComponent]
    });
    fixture = TestBed.createComponent(BillingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
