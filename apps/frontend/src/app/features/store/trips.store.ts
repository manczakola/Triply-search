import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { Trip } from '../../../../../../shared/interfaces';
import { TripsService } from './trips.http-service';

export interface TripsState {
  trips: Trip[];
  isLoading: boolean;
  filterByOrganizer: string[];
  maxPrice: number;
  sortMode: string;
}

const initialState: TripsState = {
  trips: [],
  isLoading: false,
  filterByOrganizer: [],
  maxPrice: 20000,
  sortMode: 'Najnowsze',
};

export const TripsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ trips, filterByOrganizer, maxPrice, sortMode }) => ({
    // To jest nasz "finalny" sygnał, który trafi do HTML
    filteredTrips: computed(() => {
      let result = [...trips()];

      // 1. Filtrowanie po organizatorze
      if (filterByOrganizer().length > 0) {
        result = result.filter(t => filterByOrganizer().includes(t.organizer));
      }

      // 2. Filtrowanie po cenie
      result = result.filter(t => t.price <= maxPrice());

      // 3. Sortowanie
      if (sortMode() === 'Najniższa cena') {
        result.sort((a, b) => a.price - b.price);
      } else if (sortMode() === 'Najwyższa cena') {
        result.sort((a, b) => b.price - a.price);
      }

      return result;
    }),

    resultsCount: computed(() => trips().length),
  })),
  withMethods(store => {
    const tripsService = inject(TripsService);
    // const errorHandler = inject(CustomErrorHandler);
    // const notificationsStore = inject(NotificationsStore);

    const getTrips$ = rxMethod<void>(
      pipe(
        switchMap(() =>
          tripsService.getTrips$().pipe(
            tapResponse({
              next: trips => {
                patchState(store, { trips });
              },
              error: () => {},
            }),
          ),
        ),
      ),
    );

    const updateSort = (sortMode: string) => {
      patchState(store, { sortMode });
    };

    const toggleOrganizer = (name: string) => {
      const current = store.filterByOrganizer();
      const updated = current.includes(name) ? current.filter(n => n !== name) : [...current, name];
      patchState(store, { filterByOrganizer: updated });
    };

    const updateMaxPrice = (price: number) => {
      patchState(store, { maxPrice: price });
    };

    const setSortMode = (sortMode: string) => {
      patchState(store, { sortMode });
    };

    return {
      getTrips$,
      updateMaxPrice,
      updateSort,
      toggleOrganizer,
      setSortMode,
    };
  }),

  withHooks({
    onInit(store) {
      store.getTrips$();
    },
  }),
);
