import { Component, inject } from '@angular/core';
import { HomeStore } from '../../store/home.store';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  homeStore = inject(HomeStore);
}
