import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateFlights, Flight } from '../reducers/flights.reducers';

const getFlights = (state: AppState): StateFlights =>
  state.flights || state || {};

export const getFlightIds = createSelector(
  getFlights,
  (flights: StateFlights): string[] =>
  flights.allIds || []
);
const getById = createSelector(
  getFlights,
  (flights: StateFlights): {[key: string]: Flight} =>
  flights.byIds || {}
);

export const getFlightById = (state: AppState, id: string): Flight =>
  getById(state)[id];

export const getIsLoading = createSelector(
  getFlights,
  (flights: StateFlights): boolean =>
  !!flights.loading
);
