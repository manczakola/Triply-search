import { TestBed } from '@angular/core/testing';
import { TripCardComponent } from './trip-card.component';

describe('TripCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripCardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TripCardComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
