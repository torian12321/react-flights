import React from 'react';
import FlightCard from '../FlightCard';
import { Props } from './FlightsList.interfaces';
import styles from './FlightsList.module.scss';

const FlightList: React.FunctionComponent<Props> = ({
  flights = [],
  isLoading = false,
}) => {
  const hasFlights = !!flights.length;
  const renderTiles = () => flights.map((flightId: string) => (
    <FlightCard
      key={flightId}
      id={flightId}
    />));

  return (
    <div className={styles.wrapper}>
      {!!isLoading
        ? 'Loading...'
        : (
          hasFlights
          ? renderTiles()
          : 'Please, select flight conditions'
        )
      }
    </div>
  )
};

export default FlightList;
