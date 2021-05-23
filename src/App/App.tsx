import React, { useEffect } from 'react';
import { Props, State } from './App.interfaces';
import SelectCountry from '../components/SelectCountry';
import DateRange from '../components/DateRange';
// import logo from './logo.svg';
// import './App.css';

const App: React.FunctionComponent<Props & State> = ({ onLoad }) => {
  useEffect(() => {
    // onLoad && onLoad();
  }, [onLoad]);

  return (
    <div className="App">
      <SelectCountry />
      <DateRange />
      my page ocntent
    </div>
  );
}

export default App;
