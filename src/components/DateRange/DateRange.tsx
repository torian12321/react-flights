import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = () => {
  const iniDateDefault: Date = new Date();
  const endDateDefault: Date = new Date();
  const [startDate, setStartDate]: any = useState(iniDateDefault);
  const [endDate, setEndDate]: any = useState(endDateDefault.setDate(endDateDefault.getDate() + 7));

  const handleOnIniChange = (date: Date) => {
    setStartDate(date);
  }
  const handleOnEndChange = (date: Date) => {
    setEndDate(date);
  }
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleOnIniChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={handleOnEndChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default DateRange;
