import React from 'react';
import { Props } from './App.interfaces';
import Filters from './Filters';
import FlightsList from '../components/FlightsList';
import styles from './App.module.scss';

const App: React.FunctionComponent<Props> = () =>(
  <div className={styles.wrapper}>
    <div className={styles.filters}>
      <Filters />
    </div>
    <div className={styles.table}>
      <FlightsList />
    </div>
  </div>
);

export default App;
