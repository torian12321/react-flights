import React from 'react';
import Button from '../Button';
import { Props } from './FlightCard.interfaces';
import styles from './FlightCard.module.scss';

const FlightCard: React.FunctionComponent<Props> = ({
  from, to, price, duration = 0,
  flightUrl,
}) => {
  const timeFormatted = (duration / (60 * 60)).toFixed(2) + 'h';

  return (
    <div className={styles.wrapper}>
      <span className={styles.content}>
        {timeFormatted}
        {from} - {from}<br />
      </span>
      <span className={styles.details}>
        <span className={styles.price}>{price}</span>
        <a href={flightUrl}>
          <Button label='select' className={styles.btn} />
        </a>
      </span>
      
    </div>
  );
};

export default FlightCard;
