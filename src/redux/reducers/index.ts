import { combineReducers } from 'redux';
import locations, { State as StateLocations } from './locations.reducers';
// import game, { State as StateGame } from './game.reducers';
// import profiles, { State as StateProfiles } from './profiles.reducers';
// import board, { State as StateBoard } from './board.reducers';

export interface AppState {
  locations: StateLocations,
  // game: StateGame,
  // profiles: StateProfiles,
  // board: StateBoard,
};

const rootReducer = combineReducers({
  locations,
  // game,
  // profiles,
  // board,
});


export default rootReducer;
