import * as ACTIONS from '../actions/actions.types';
import { Action } from '../common';

export interface Flight {
  id: string,
  name: string,
  url: string,
  imgUrl: string,
}

export interface State {
  allIds: string[],
  byIds: {
    [key: string]: Flight,
  },
};

const initialState: State = {
  allIds: [],
  byIds: {},
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.FLIGHTS_ADD:
      const { flights = []}: any = action.payload;
      const newFlights: any = {};

      console.log('I am here');
      console.log(action.payload);
      flights.forEach((flight: any) => {
        newFlights[flight.id] = {
          ...flight,
        };
      });


      console.log(flights);
      console.log(newFlights);
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
    case ACTIONS.FLIGHTS_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
