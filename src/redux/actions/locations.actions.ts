import axios from 'axios';
import { Action, Dispatch } from '../common';
import * as ACTIONS from './actions.types';

export const locationsReset = () => ({
  type: ACTIONS.LOCATIONS_RESET,
});

export const locationsAdd = (loctions: any[]): Action => ({
  type: ACTIONS.LOCATIONS_ADD,
  payload: {
    loctions,
  },
});


export const fetchLocations = () => (
  dispatch: Dispatch,
  // getState: () => AppState
): Promise<any> => {
  console.log('locations');
  return axios
    .get('https://api.skypicker.com/locations?term=Bcn&location_types=airport')
    .then((response: any) => {
      const { data = [] } = response;
      console.log(response);

      dispatch(locationsAdd(data.map((profile: any = {}) => ({
        id: profile.id,
        name: profile.login,
        url: profile.url,
        imgUrl: profile.avatar_url,
      }))));
    })
    .catch((error: Error) => console.log(error));
};
