import { computed } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { HomeActivity, HomeDestination, HomePartner } from '../../../../../../shared/interfaces';

export interface HomeState {
  activities: HomeActivity[];
  destinations: HomeDestination[];
  partners: HomePartner[];
}

const initialState: HomeState = {
  activities: [],
  destinations: [],
  partners: [],
};

export const HomeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const activities = computed<HomeActivity[]>(() => [
      {
        name: 'Trekkingi',
        image: 'assets/images/trekking.jpg',
      },
      {
        name: 'Joga',
        image: 'assets/images/joga.jpg',
      },
      {
        name: 'Safari',
        image: 'assets/images/safari.jpg',
      },
      {
        name: 'Fotowyprawy',
        image: 'assets/images/fotowyprawa.jpg',
      },
      {
        name: 'Kultura',
        image: 'assets/images/kultura.jpg',
      },
      {
        name: 'Natura',
        image: 'assets/images/natura.jpg',
      },
      {
        name: 'Wyprawy Rowerowe',
        image: 'assets/images/rowery.jpg',
      },
      {
        name: 'Nurkowanie',
        image: 'assets/images/nurkowanie.jpg',
      },
      {
        name: 'Rodzinna Przygoda',
        image: 'assets/images/rodzina.jpg',
      },
    ]);

    const destinations = computed<HomeDestination[]>(() => [
      {
        name: 'Tajlandia',
        trips: 12,
        image:
          'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop',
      },
      {
        name: 'Indonezja',
        trips: 8,
        image:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Islandia',
        trips: 5,
        image:
          'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Kenia',
        trips: 7,
        image:
          'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Oman',
        trips: 4,
        image: 'assets/images/oman.jpg',
      },
    ]);

    const partners = computed<HomePartner[]>(() => [
      { name: 'PakujPlecak', logo: 'assets/images/pakujplecak.png' },
      { name: 'Soliści', logo: 'assets/images/solisci.png' },
      { name: 'Outway', logo: 'assets/images/outway.png' },
      { name: '4Challenge', logo: 'assets/images/4challenge.png' },
    ]);

    return { activities, destinations, partners };
  }),
);
