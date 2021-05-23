import React from 'react';
import FlightCard from '../FlightCard';
import { Props } from './FlightsList.interfaces';
// import './App.css';

const FlightList: React.FunctionComponent<Props> = ({
  flights = [],
  isLoading = false,
}) => {
  const hasFlights = !!flights.length;
  const renderTiles = () => (
    flights.map((flightId: string) => (
      <FlightCard
        key={flightId}
        id={flightId}
      />))
  );

  return (
    <div>
      {!!isLoading
        ? 'Loading...'
        : (
          hasFlights
          ? renderTiles()
          : 'Please filter better'
        )
      }
    </div>
  )
};

export default FlightList;
