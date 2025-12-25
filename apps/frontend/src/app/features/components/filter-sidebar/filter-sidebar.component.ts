import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablerIconComponent } from 'angular-tabler-icons';

@Component({
  selector: 'app-filter-sidebar',
   imports: [CommonModule,TablerIconComponent,FormsModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
offices = signal([
    { id: 'p1', name: 'PakujPlecak', checked: false },
    { id: 's1', name: 'Soliści', checked: false },
    { id: 'l1', name: 'Logos', checked: false },
    { id: 'm1', name: 'MK Tramping', checked: false },
    { id: 'o1', name: 'Outway', checked: false },
    { id: 'c1', name: '4 Challenge', checked: false }
  ]);

  difficulties = signal(['Łatwa', 'Średnia', 'Trudna']);
  
  categories = signal([
    'Góry', 'Trekking', 'Plaża', 'Safari', 
    'Kultura', 'Przyroda', 'Egzotyka', 'Europa', 'Azja'
  ]);

  maxPrice = signal(15000);
}
