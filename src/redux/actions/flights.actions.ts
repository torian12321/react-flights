import { Action } from '../common';
import * as ACTIONS from './actions.types';

export const flightsReset = () => ({
  type: ACTIONS.FLIGHTS_RESET,
});

export const flightsAdd = (flights: any[]): Action => ({
  type: ACTIONS.FLIGHTS_ADD,
  payload: {
    flights,
  },
});

export const flightsSetLoading = (loading: boolean): Action => ({
  type: ACTIONS.FLIGHTS_SET_LOADER,
  payload: {
    loading,
  },
});
