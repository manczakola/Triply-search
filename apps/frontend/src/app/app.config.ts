import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideTablerIcons } from 'angular-tabler-icons';
import {
  IconAdjustmentsHorizontal,
  IconArrowsSort,
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClockHour4,
  IconCompass,
  IconFilter,
  IconHeart,
  IconHeartFilled,
  IconLayoutGrid,
  IconList,
  IconLocation,
  IconMap2,
  IconMapPin,
  IconMenu2,
  IconSearch,
  IconUserCircle,
  IconUsers,
} from 'angular-tabler-icons/icons';
import { routes } from './app.routes';

registerLocaleData(localePl, 'pl');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTablerIcons({
      IconMapPin,
      IconCalendar,
      IconSearch,
      IconLocation,
      IconHeart,
      IconCompass,
      IconMenu2,
      IconUserCircle,
      IconFilter,
      IconMap2,
      IconHeartFilled,
      IconClockHour4,
      IconUsers,
      IconAdjustmentsHorizontal,
      IconCheck,
      IconArrowsSort,
      IconChevronDown,
      IconLayoutGrid,
      IconList,
      IconChevronLeft,
      IconChevronRight,
    }),
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
};
