import React from 'react';
import { Props } from './FlightCard.interfaces';
import styles from './FlightCard.module.scss';

const FlightCard: React.FunctionComponent<Props> = ({}) => {
  // useEffect(() => {
  //   // onLoad && onLoad();
  // }, [onLoad]);

  return (
    <div className={styles.wrapper}>
      Flight goes here
      my page ocntent
    </div>
  );
}

export default FlightCard;
