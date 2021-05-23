import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './DateRange.module.scss';

const DateRange = ({ onChange }: any) => {
  const iniDateDefault: Date = new Date();
  const endDateDefault: Date = new Date();
  const [startDate, setStartDate]: any = useState(iniDateDefault);
  const [endDate, setEndDate]: any = useState(endDateDefault.setDate(endDateDefault.getDate() + 7));

  useEffect(() => {
    onChange({
      from: startDate,
      to: endDate,
    });
  }, [startDate, endDate]);
  const handleOnIniChange = (date: Date) => {
    setStartDate(date);
  }
  const handleOnEndChange = (date: Date) => {
    setEndDate(date);
  }
  return (
    <div className={styles.wrapper}>
      <DatePicker
        className={styles.input}
        selected={startDate}
        onChange={handleOnIniChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        className={styles.input}
        selected={endDate}
        onChange={handleOnEndChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRange;
