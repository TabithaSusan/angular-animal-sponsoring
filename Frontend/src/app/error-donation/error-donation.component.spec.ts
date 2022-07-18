import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDonationComponent } from './error-donation.component';

describe('ErrorDonationComponent', () => {
  let component: ErrorDonationComponent;
  let fixture: ComponentFixture<ErrorDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
