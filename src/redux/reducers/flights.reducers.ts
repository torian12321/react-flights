import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

export interface Flight {
  id: string,
  name: string,
  url: string,
  imgUrl: string,
}

export interface State {
  loading: boolean,
  allIds: string[],
  byIds: {
    [key: string]: Flight,
  },
};

const initialState: State = {
  loading: false,
  allIds: [],
  byIds: {},
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.FLIGHTS_ADD:
      const { flights = []}: any = action.payload;
      const newFlights: any = {};

      flights.forEach((flight: any) => {
        newFlights[flight.id] = {
          ...flight,
        };
      });

      return {
        ...state,
        allIds: [
          ...state.allIds,
          ...flights.map((flight: any)=> flight.id)
        ],
        byIds: {
          ...state.byIds,
          ...newFlights
        },
      };

    case ACTIONS.FLIGHTS_SET_LOADER:
        const { loading = false }: any = action.payload;
        return {
          ...state,
          loading,
        };
    case ACTIONS.FLIGHTS_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
