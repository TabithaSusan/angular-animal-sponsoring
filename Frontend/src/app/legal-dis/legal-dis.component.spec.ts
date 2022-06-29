import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDisComponent } from './legal-dis.component';

describe('LegalDisComponent', () => {
  let component: LegalDisComponent;
  let fixture: ComponentFixture<LegalDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
