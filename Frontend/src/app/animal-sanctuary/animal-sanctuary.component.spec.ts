import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSanctuaryComponent } from './animal-sanctuary.component';

describe('AnimalSanctuaryComponent', () => {
  let component: AnimalSanctuaryComponent;
  let fixture: ComponentFixture<AnimalSanctuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSanctuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSanctuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
