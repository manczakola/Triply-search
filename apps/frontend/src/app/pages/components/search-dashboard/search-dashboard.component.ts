import { Component, inject } from '@angular/core';
import { FilterSidebarComponent } from '../../../features/components/filter-sidebar/filter-sidebar.component';
import { ResultsHeaderComponent } from '../../../features/components/results-header/results-header.component';
import { SearchSmallComponent } from '../../../features/components/search-small/search-small.component';
import { TripCardComponent } from '../../../features/components/trip-card/trip-card.component';
import { TripsStore } from '../../../features/store/trips.store';

@Component({
  selector: 'app-search-dashboard',
  imports: [FilterSidebarComponent, ResultsHeaderComponent, TripCardComponent, SearchSmallComponent],
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss'],
})
export class SearchDashboardComponent {
  readonly tripsStore = inject(TripsStore);

  handleSort(newMode: string) {
    console.log(newMode);

    this.tripsStore.setSortMode(newMode);
  }
}
