import axios from 'axios';
import { get } from 'lodash';
import { fetchLocations } from './locations.actions';
import { flightsAdd, flightsSetLoading } from './flights.actions';
import { Dispatch } from '../common';

export const iniApp = () => (
  dispatch: Dispatch,
) => {
  dispatch(fetchLocations())
    .then(() => console.log('locations loaded'))
    .catch((error: Error) => console.log(error));
};

export const searchFlights = (values: any) => (
  dispatch: Dispatch,
) => {
  dispatch(flightsSetLoading(true));
  const { from, to, dateFrom, dateTo } = values;

  axios
  .get('https://api.skypicker.com/flights',
    {
      params: {
        v: '3',
        fly_from: from,
        fly_to: to,
        partner: 'skypicker',
        date_from: dateFrom,
        date_to: dateTo,
        sort: 'price',
        asc: 1,
        limit: 20,
      }
    })
    .then((response: any = {}) => {
      const flights = get(response, 'data.data', []);
      dispatch(flightsAdd(flights.map((flight: any) => ({
        id: flight.id,
        ...flight
      }))));
    })
    .catch((error: Error) => console.log(error))
    .finally(() => dispatch(flightsSetLoading(false)));
};