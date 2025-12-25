import { TestBed } from '@angular/core/testing';
import { FilterSidebarComponent } from './filter-sidebar.component';

describe('FilterSidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSidebarComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FilterSidebarComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
