import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAdoptionComponent } from './success-adoption.component';

describe('SuccessAdoptionComponent', () => {
  let component: SuccessAdoptionComponent;
  let fixture: ComponentFixture<SuccessAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
