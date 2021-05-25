import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { getFlightById } from '../../redux/selectors/flights.selectors';
import FlightCard from './FlightCard';
import { Props } from './FlightCard.interfaces';

const mapState = (state: AppState, ownprops: Props): Props => {
  const flight: any = getFlightById(state, ownprops.id);
  console.log('Flichg', flight);

  return {
    id: flight.id,
    from: flight.fromName,
    to: flight.toName,
    price: flight.price,
    duration: flight.duration,
    flightUrl: flight.flightUrl,
    route: flight.route,
  }
};
export default connect(
  mapState,
  {},
)(React.memo(FlightCard));
