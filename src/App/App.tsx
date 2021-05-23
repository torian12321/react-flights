import React, { useEffect } from 'react';
import { Props, State } from './App.interfaces';
import Filters from './Filters';
import FlightsList from '../components/FlightsList';
// import './App.css';

const App: React.FunctionComponent<Props & State> = ({ onLoad }) => {
  useEffect(() => {
    // onLoad && onLoad();
  }, [onLoad]);

  return (
    <div className="App">
      <Filters />
      <FlightsList />
    </div>
  );
}

export default App;
