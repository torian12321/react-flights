import React from 'react';
import FlightCard from '../FlightCard';
import { Props } from './FlightsList.interfaces';
// import Filters from './Filters';
// import './App.css';

const FlightList: React.FunctionComponent<Props> = ({ flights = [] }) => {
  const hasFlights = !!flights.length;
  const renderTiles = () => (
    flights.map((flightId: string) => <FlightCard key={flightId} id={flightId} />)
  );

  return hasFlights ? (
    <div>
      {renderTiles()}
    </div>
  ) : <>'Please filter better'</>
};

export default FlightList;
