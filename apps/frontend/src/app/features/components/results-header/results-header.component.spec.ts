import { TestBed } from '@angular/core/testing';
import { ResultsHeaderComponent } from './results-header.component';

describe('ResultsHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsHeaderComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResultsHeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
