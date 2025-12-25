import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TablerIconComponent, TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-results-header',

  imports: [CommonModule, TablerIconComponent],
  templateUrl: './results-header.component.html',
  styleUrls: ['./results-header.component.scss'],
})
export class ResultsHeaderComponent {
  totalResults = input<number>(0);

  // Output do powiadomienia rodzica o zmianie sortowania
  sortChange = output<string>();

  currentSort = 'Najnowsze';

  onSortChange(mode: string) {
    this.currentSort = mode;
    this.sortChange.emit(mode);
  }
}
