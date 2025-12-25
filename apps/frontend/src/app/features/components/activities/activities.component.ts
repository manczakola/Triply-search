import { Component, inject } from '@angular/core';
import { HomeStore } from '../../store/home.store';

@Component({
  selector: 'app-activities',
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  homeStore = inject(HomeStore);
}
