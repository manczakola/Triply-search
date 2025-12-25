import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { HomeStore } from '../../store/home.store';
import { TablerIconComponent } from 'angular-tabler-icons';
import { TripsStore } from '../../store';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-destinations',
  imports: [TablerIconComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  homeStore = inject(HomeStore);
  readonly store = inject(TripsStore);
  currentIndex = 1;

  @ViewChild('slider') slider!: ElementRef;

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    // Obliczamy index na podstawie szerokości scrolla i elementu
    const itemWidth = 600 + 32; // min-w + gap
    const index = Math.round(element.scrollLeft / itemWidth) + 1;

    if (this.currentIndex !== index) {
      this.currentIndex = index;
    }
  }

  scroll(direction: 'left' | 'right') {
    const element = this.slider.nativeElement;
    const scrollAmount = 632; // Szerokość karty + gap
    const maxScroll = element.scrollWidth - element.clientWidth;

    if (direction === 'right') {
 
      if (element.scrollLeft >= maxScroll - 10) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else {
     
      if (element.scrollLeft <= 10) {
        element.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }
}
