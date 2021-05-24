import React from 'react';
import { Props } from './FlightCard.interfaces';
import styles from './FlightCard.module.scss';

const FlightCard: React.FunctionComponent<Props> = ({
  price
}) => (
  <div className={styles.wrapper}>
    <span className={styles.content}>
      Flight goes here
      my page ocntent
    </span>
    <span className={styles.price}>
      {price}
    </span>
    
  </div>
);

export default FlightCard;
