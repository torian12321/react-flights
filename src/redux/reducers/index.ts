import { combineReducers } from 'redux';
import locations, { State as StateLocations } from './locations.reducers';
import flights, { State as StateFlights } from './flights.reducers';
export interface AppState {
  flights: StateFlights,
  locations: StateLocations,
};

const rootReducer = combineReducers({
  flights,
  locations,
});


export default rootReducer;
