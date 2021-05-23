import axios from 'axios';
import { get } from 'lodash';
import { fetchLocations } from './locations.actions';
import { flightsAdd, flightsSetLoading } from './flights.actions';
import { Dispatch } from '../common';
// import { AppState } from '../reducers';

export const iniApp = () => (
  dispatch: Dispatch,
) => {
  dispatch(fetchLocations())
    .then(() => console.log('locations loaded'))
    .catch((error: Error) => console.log(error));
};

export const searchFlights = () => (
  dispatch: Dispatch,
) => {
  dispatch(flightsSetLoading(true));
  axios
  .get('https://api.skypicker.com/flights',
    {
      params: {
        v: '3',
        fly_from: 'JFK',
        fly_to: 'MCO',
        partner: 'skypicker',
        date_from: '13/12/2021',
        date_to: '24/12/2021',
        sort: 'price',
        asc: 1,
        limit: 20,
      }
    })
    .then((response: any = {}) => {
      const flights = get(response, 'data.data', []);
      dispatch(flightsAdd(flights.map((f: any) => ({
        id: f.id,
        cityFrom: f.cityFrom,
        cityTo: f.cityTo,
      }))));
    })
    .catch((error: Error) => console.log(error))
    .finally(() => dispatch(flightsSetLoading(false)));
  // dispatch(fetchLocations())
  //   .then(() => console.log('locations loaded'))
  //   .catch((error: Error) => console.log(error));
};