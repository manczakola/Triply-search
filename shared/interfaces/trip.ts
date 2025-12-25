import { Category } from '../enums/category';
import { Countries } from '../enums/countries';

export interface Trip {
  id: string;
  image: string;
  organizer: string; // np. "PakujPlecak", "Soliści"
  organizerLogo?: string; // Opcjonalnie ścieżka do małego logo
  title: string;
  location: string;
  difficulty: 'Łatwa' | 'Średnia' | 'Trudna';
  category: Category[];
  country: Countries[];
  date: string; // np. "15-29.04.2025"
  month: string;
  year: string;
  duration: string; // np. "14 dni"
  participants: string; // np. "max 12 osób"
  description: string;
  oldPrice?: number; // Opcjonalna stara cena dla promocji
  price: number;
  isPromoted?: boolean; // Czy jest to oferta promocyjna?
  isBookmarked?: boolean; // Czy użytkownik dodał do ulubionych
}
