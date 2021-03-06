import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { getFlightIds, getIsLoading } from '../../redux/selectors/flights.selectors';
import FlightsList from './FlightsList';
import { Props } from './FlightsList.interfaces';

const mapState = (state: AppState): Props => ({
  flights: getFlightIds(state),
  isLoading: getIsLoading(state),
});

export default connect(
  mapState,
  {},
)(React.memo(FlightsList));
