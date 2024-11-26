import { TestBed } from '@angular/core/testing';
import { BillingproductService } from './billingproduct.service';



describe('BillingproductService', () => {
  let service: BillingproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
