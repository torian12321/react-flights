import React from 'react';
import { connect } from 'react-redux';
import { searchFlights }  from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import { getIsLoading } from '../../redux/selectors/flights.selectors';
import Filters from './Filters';
import { Props, State } from './Filters.interfaces';

const mapState = (state: AppState): Props => ({
  isLoading: getIsLoading(state),
});
const mapDispatchToProps = (dispatch: Function): State => ({
  onSubmit: (vals: any) => dispatch(searchFlights(vals)),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Filters));
