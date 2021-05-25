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

export const getFlightById = (state: AppState, id: string): Flight => {
  const getFlightData: any = getById(state)[id];
  const {
    deep_link,
    cityFrom, cityTo,
    countryFrom = {}, countryTo = {},
    conversion = {},
    duration = {},
  } = getFlightData;

  // const durationTime = duration.departure;


  return {
    ...getFlightData,
    fromName: `${cityFrom} - ${countryFrom.name}`,
    toName: `${cityTo} - ${countryTo.name}`,
    flightUrl: deep_link,
    price: `€${conversion.EUR}`,
    duration: duration.departure || 0,
  };
}
  

export const getIsLoading = createSelector(
  getFlights,
  (flights: StateFlights): boolean =>
  !!flights.loading
);
