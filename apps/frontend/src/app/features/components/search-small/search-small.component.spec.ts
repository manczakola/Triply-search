import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './search-small.component';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
