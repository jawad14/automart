import type { ValueIconKey } from '@/config/site.config';
import type { CategoryKey, VehicleTypeKey } from './data';

const sw = 1.7;

export function ValueIcon({ k }: { k: ValueIconKey }) {
  switch (k) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" strokeLinejoin="round" />
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M1 3h13v10H1z" />
          <path d="M14 7h4l3 3v3h-7" strokeLinejoin="round" />
          <circle cx="5.5" cy="16.5" r="2" />
          <circle cx="17.5" cy="16.5" r="2" />
        </svg>
      );
    case 'headset':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" />
          <path
            d="M21 19a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'badge':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="8" r="6" />
          <path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function CategoryIcon({ k }: { k: CategoryKey }) {
  switch (k) {
    case 'bumper':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M3 14c0-3.3 3.6-5 9-5s9 1.7 9 5v3H3z" strokeLinejoin="round" />
          <path d="M3 17v2M21 17v2" strokeLinecap="round" />
        </svg>
      );
    case 'light':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M4 7h9a6 6 0 0 1 0 12H4z" strokeLinejoin="round" />
          <path d="M17 10h3M17 14h3" strokeLinecap="round" />
        </svg>
      );
    case 'corner':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M5 6h7l5 6-5 6H5z" strokeLinejoin="round" />
          <path d="M19 9v6" strokeLinecap="round" />
        </svg>
      );
    case 'fog':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <circle cx="9" cy="12" r="5" />
          <path d="M17 9h4M16 12h5M17 15h4" strokeLinecap="round" />
        </svg>
      );
    case 'hood':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M3 16 6 7h12l3 9z" strokeLinejoin="round" />
          <path d="M9 7v9M15 7v9" />
        </svg>
      );
    case 'grille':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 6v12M11 6v12M15 6v12M19 6v12" strokeWidth={1.3} />
        </svg>
      );
    case 'mirror':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <rect x="5" y="6" width="14" height="10" rx="3" />
          <path d="M8 19h8" strokeLinecap="round" />
          <path d="m8 13 3-3" strokeLinecap="round" />
        </svg>
      );
    case 'splash':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" strokeLinejoin="round" />
        </svg>
      );
    case 'ac':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      );
    case 'fan':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <circle cx="12" cy="12" r="2" />
          <path
            d="M12 10c-1-4 .5-7 2-7s1 4-2 7M14 12c4-1 7 .5 7 2s-4 1-7-2M12 14c1 4-.5 7-2 7s-1-4 2-7M10 12c-4 1-7-.5-7-2s4-1 7 2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'radiator':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 5v14M11 5v14M15 5v14M19 5v14" strokeWidth={1.2} />
        </svg>
      );
    case 'fender':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M3 17c0-7 5-11 11-11h7v11" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="9" cy="17" r="3" />
        </svg>
      );
    case 'door':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M5 4h10l4 4v12H5z" strokeLinejoin="round" />
          <path d="M9 13h4" strokeLinecap="round" />
        </svg>
      );
    case 'trunk':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path d="M3 8c3-2 15-2 18 0v9H3z" strokeLinejoin="round" />
          <path d="M9 14h6" strokeLinecap="round" />
        </svg>
      );
    case 'frame':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" strokeWidth={1.3} />
        </svg>
      );
  }
}

export function VehicleIcon({ k }: { k: VehicleTypeKey }) {
  switch (k) {
    case 'sedan':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M5 24h46M8 24c-2 0-3-1-3-3l1-4c.3-2 2-3 4-3h26l8 5h3c2 0 3 1 3 3v2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 11l2-4h12l6 7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="25" r="4" />
          <circle cx="40" cy="25" r="4" />
        </svg>
      );
    case 'suv':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M5 25h46M7 25c-1.5 0-2-1-2-2v-7c0-2 1-3 3-3h30l8 5h2c2 0 3 1 3 3v4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 13V8h18v5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="25" r="4" />
          <circle cx="40" cy="25" r="4" />
        </svg>
      );
    case 'truck':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M4 25h48M6 25v-9h22l6 5v4M28 16V9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="25" r="4" />
          <circle cx="40" cy="25" r="4" />
        </svg>
      );
    case 'hatch':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M6 24h44M9 24c-2 0-4-1-4-3v-4c0-2 1-3 3-3h22l10 10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 14l3-6h11l6 6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="24" r="4" />
          <circle cx="38" cy="24" r="4" />
        </svg>
      );
    case 'coupe':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M5 24h46M8 24c-2 0-3-1-3-3v-3c0-2 2-4 5-5l6-5h10l12 8h2c2 0 3 1 3 3v5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="24" r="4" />
          <circle cx="40" cy="24" r="4" />
        </svg>
      );
    case 'van':
      return (
        <svg viewBox="0 0 56 34" fill="none" stroke="currentColor" strokeWidth={sw}>
          <path
            d="M5 25h46M7 25V12c0-2 1-3 3-3h26c3 0 5 2 6 5l3 5v6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M22 9v16" strokeWidth={1.3} />
          <circle cx="16" cy="25" r="4" />
          <circle cx="40" cy="25" r="4" />
        </svg>
      );
  }
}
