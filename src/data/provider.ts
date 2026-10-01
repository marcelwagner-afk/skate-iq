/**
 * DataProvider – the swap point between Phase 1 (static bundles) and
 * Phase 2 (REST API over PostgreSQL). UI and engines only see this interface.
 */
import type {
  Athlete, Club, Competition, Country, DataQualityRecord, DataSource, Event,
  Performance, Season,
} from '../core/types';

export interface DataBundle {
  generatedAt: string;
  synthetic: boolean;                 // preview builds MUST be true (privacy)
  countries: Country[];
  clubs: Club[];
  athletes: Athlete[];
  seasons: Season[];
  competitions: Competition[];
  events: Event[];
  performances: Performance[];
  sources: DataSource[];
  quality: DataQualityRecord[];
}

export interface DataProvider { load(): Promise<DataBundle>; }

export class StaticProvider implements DataProvider {
  constructor(private bundle: DataBundle) {}
  load(): Promise<DataBundle> { return Promise.resolve(this.bundle); }
}

/** Phase 2: class ApiProvider implements DataProvider { fetch('/api/bundle…') } */
