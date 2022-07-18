import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAdoptionComponent } from './error-adoption.component';

describe('ErrorAdoptionComponent', () => {
  let component: ErrorAdoptionComponent;
  let fixture: ComponentFixture<ErrorAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
