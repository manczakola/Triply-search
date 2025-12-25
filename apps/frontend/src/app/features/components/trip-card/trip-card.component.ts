import { CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TablerIconComponent } from 'angular-tabler-icons';
import { Trip } from '../../../../../../../shared/interfaces';

@Component({
  selector: 'app-trip-card',
  imports: [TablerIconComponent,CurrencyPipe, DecimalPipe, NgClass],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent {
@Input({ required: true }) trip!: Trip;

  toggleBookmark(): void {
    this.trip.isBookmarked = !this.trip.isBookmarked;
  }
}
