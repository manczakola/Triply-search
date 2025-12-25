import { Component, inject } from '@angular/core';
import { PartnersComponent, SearchComponent } from '../../../features/components';
import { ActivitiesComponent } from '../../../features/components/activities/activities.component';
import { DestinationsComponent } from '../../../features/components/destinations/destinations.component';
import { HomeStore } from '../../../features/store/home.store';

@Component({
  selector: 'app-home.component',
  imports: [ActivitiesComponent, DestinationsComponent, PartnersComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeStore = inject(HomeStore);
}
