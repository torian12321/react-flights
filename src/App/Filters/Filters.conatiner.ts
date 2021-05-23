import React from 'react';
import { connect } from 'react-redux';
import { searchFlights }  from '../../redux/actions';
import { AppState } from '../../redux/reducers';
import Filters from './Filters';
import { Props, State } from './Filters.interfaces';

const mapState = (state: AppState): Props => ({});
const mapDispatchToProps = (dispatch: Function): State => ({
  onSubmit: () => dispatch(searchFlights()),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(Filters));
