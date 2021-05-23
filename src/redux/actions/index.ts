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
