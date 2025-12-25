import { Component, HostListener } from '@angular/core';
import { TablerIconComponent } from 'angular-tabler-icons';

@Component({
  selector: 'app-search',
  imports: [TablerIconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  showLocations = false;
  showCalendar = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.group')) {
      this.showLocations = false;
      this.showCalendar = false;

      // i tu akcja wyszukaj
    }
  }
}
