import { createSelector } from 'reselect';
import { AppState } from '../reducers';
// import { getProfileById } from '../selectors/profiles.selectors';
import { State as StateFlights, Flight } from '../reducers/flights.reducers';

const getFlights = (state: AppState): StateFlights =>
  state.flights || state || {};

// export const getBoardTiles = createSelector(
//   getBoard,
//   (board: StateBoard): string[] =>
//   board.tiles || []
// );

// export const getBoardSelections = createSelector(
//   getBoard,
//   (board: StateBoard): any[] =>
//   [board.tileSelected1, board.tileSelected2]
// );

// export const getBoardDiscoveries = createSelector(
//   getBoard,
//   (board: StateBoard): any[] =>
//   board.profilesDiscovered || []
// );
export const getFlightIds = createSelector(
  getFlights,
  (profiles: StateFlights): string[] =>
  profiles.allIds || []
);
const getById = createSelector(
  getFlights,
  (profiles: StateFlights): {[key: string]: Flight} =>
  profiles.byIds || {}
);

export const getFlightById = (state: AppState, id: string): Flight =>
  getById(state)[id];
// export const getTileById = (state: AppState, id: number): any=> {
//   const tiles = getBoardTiles(state);
//   const profile = getProfileById(state, tiles[id]);
//   const selections = getBoardSelections(state);
//   const discoveries = getBoardDiscoveries(state);

//   return {

//     // ...profile,
//     // isSelected: selections.includes(id),
//     // isDiscovered: discoveries.includes(profile.id)
//   }
// };
