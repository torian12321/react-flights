import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

export interface Location {
  id: string,
  name: string,
  url: string,
  imgUrl: string,
}

export interface State {
  allIds: string[],
  byIds: {
    [key: string]: Location,
  },
};

const initialState: State = {
  allIds: [],
  byIds: {},
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.LOCATIONS_ADD:
      const { locations = []}: any = action.payload;
      const newLocations: any = {};

      locations.forEach((location: any) => {
        newLocations[location.id] = {
          ...location,
        };
      });

      return {
        ...state,
        allIds: [
          ...state.allIds,
          ...locations.map((location: any)=> location.id)
        ],
        byIds: {
          ...state.byIds,
          ...newLocations
        },
      };
    case ACTIONS.LOCATIONS_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
