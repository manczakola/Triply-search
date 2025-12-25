const trips = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    organizer: 'PakujPlecak',
    title: 'Himalaje: ABC i trekking dookoła Annapurny',
    location: 'Nepal',
    difficulty: 'Trudna',
    tags: ['Góry', 'Trekking'],
    dates: '12-28.05.2025',
    duration: '16 dni',
    participants: 'max 10 osób',
    description: 'Kultowa trasa dla miłośników wysokich gór.',
    price: 8400,
    oldPrice: 9200,
    isPromoted: true,
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1526481280693-3bfa75ac88b1?auto=format&fit=crop&w=800&q=80',
    organizer: 'Soliści',
    title: 'Peru: Machu Picchu i trekking Salkantay',
    location: 'Peru',
    difficulty: 'Średnia',
    tags: ['Przygoda', 'Kultura'],
    dates: '10-24.06.2025',
    duration: '14 dni',
    participants: 'max 12 osób',
    description: 'Odkryj tajemnice Inków i Andyjską przyrodę.',
    price: 11500,
    isPromoted: false,
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    organizer: 'Logos',
    title: 'Safari: Wielka Migracja w Masai Mara',
    location: 'Kenia',
    difficulty: 'Łatwa',
    tags: ['Safari', 'Przyroda'],
    dates: '15-25.08.2025',
    duration: '10 dni',
    participants: 'max 8 osób',
    description: 'Spotkanie z Wielką Piątką w sercu Afryki.',
    price: 13900,
    isPromoted: false,
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    organizer: 'Outway',
    title: 'Tajlandia: Ukryte wyspy i dzika dżungla',
    location: 'Tajlandia',
    difficulty: 'Łatwa',
    tags: ['Egzotyka', 'Plaża'],
    dates: '05-19.11.2025',
    duration: '14 dni',
    participants: 'max 14 osób',
    description: 'Autentyczna Tajlandia z dala od kurortów.',
    price: 7200,
    oldPrice: 7900,
    isPromoted: true,
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
    organizer: '4 Challenge',
    title: 'Islandia: Ring Road i gorące źródła',
    location: 'Islandia',
    difficulty: 'Średnia',
    tags: ['Natura', 'Roadtrip'],
    dates: '12-22.07.2025',
    duration: '11 dni',
    participants: 'max 9 osób',
    description: 'Wyprawa dookoła wyspy lodu i ognia.',
    price: 10800,
    isPromoted: false,
  },
];

import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Trip } from '../../../../../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private _platformId = inject(PLATFORM_ID);
  constructor(private http: HttpClient) {}

  getTrips$(): Observable<Trip[]> {
    if (!isPlatformBrowser(this._platformId)) return EMPTY;
    // return this.http.get<Trip[]>(`${environment.apiUrl}/trips`, {
    //   withCredentials: true,
    // });

    return of(trips as any);
  }
}
