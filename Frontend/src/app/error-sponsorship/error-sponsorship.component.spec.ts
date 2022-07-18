import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSponsorshipComponent } from './error-sponsorship.component';

describe('ErrorSponsorshipComponent', () => {
  let component: ErrorSponsorshipComponent;
  let fixture: ComponentFixture<ErrorSponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSponsorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
