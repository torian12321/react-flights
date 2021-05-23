import axios from 'axios';
import { get } from 'lodash';
import { fetchLocations } from './locations.actions';
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
  console.log('testttt');
  return axios
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
      console.log('VVVV');
      console.log(response);
      console.log(flights);

      // dispatch(locationsAdd(data.map((profile: any = {}) => ({
      //   id: profile.id,
      //   name: profile.login,
      //   url: profile.url,
      //   imgUrl: profile.avatar_url,
      // }))));
    })
    .catch((error: Error) => console.log(error));
  // dispatch(fetchLocations())
  //   .then(() => console.log('locations loaded'))
  //   .catch((error: Error) => console.log(error));
};
