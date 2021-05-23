import { combineReducers } from 'redux';
import locations, { State as StateLocations } from './locations.reducers';
import flights, { State as StateFlights } from './flights.reducers';
// import game, { State as StateGame } from './game.reducers';
// import profiles, { State as StateProfiles } from './profiles.reducers';
// import board, { State as StateBoard } from './board.reducers';

export interface AppState {
  flights: StateFlights,
  locations: StateLocations,
  // game: StateGame,
  // profiles: StateProfiles,
  // board: StateBoard,
};

const rootReducer = combineReducers({
  flights,
  locations,
  // game,
  // profiles,
  // board,
});


export default rootReducer;
