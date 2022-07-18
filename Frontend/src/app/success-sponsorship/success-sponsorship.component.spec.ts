import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSponsorshipComponent } from './success-sponsorship.component';

describe('SuccessSponsorshipComponent', () => {
  let component: SuccessSponsorshipComponent;
  let fixture: ComponentFixture<SuccessSponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessSponsorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
