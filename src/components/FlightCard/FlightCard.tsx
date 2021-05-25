import React from 'react';
import Button from '../Button';
import { Props } from './FlightCard.interfaces';
import styles from './FlightCard.module.scss';

const formatTime = (time: number = 0): string => {
  return (time / (60 * 60)).toFixed(2) + 'h'
};

const RouteStep = ({ from, to, duration}: any) => (
  <div className={styles.step}>
    <span className={styles.stepDetail}>{from}</span>
    <span className={styles.stepDetail}>↓</span>
    <span className={styles.stepDetail}>{formatTime(duration)}</span>
    <span className={styles.stepDetail}>↓</span>
    <span className={styles.stepDetail}>{to}</span>
  </div>
)
const FlightCard: React.FunctionComponent<Props> = ({
  from, to, price,
  flightUrl, route = [],
}) => {
  const renderRoute = () => (
    route.map((step: any = {}) => (
      <RouteStep
        key={step.id}
        from={step.cityFrom}
        to={step.cityTo}
        duration={step.aTime - step.dTime}
      />))
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles.content}>
        <span className={styles.contentHeader}>
          {from} - {to}
        </span>
        {renderRoute()}
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
