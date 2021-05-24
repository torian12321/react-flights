import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Props } from './SelectCountry.interfaces';
import styles from './SelectCountry.module.scss';

export interface Option {
  value: string,
  label: string,
};

const opt: Option[] = [];

const SelectCountry = ({ onChange, label = 'Search' }: Props) => {
  const [options, setOptions] = useState(opt);
  const handleOnChange = (values: any) => {
    onChange(values);
  };
  const handleOnInputChange = (value: string) => {
    axios
    .get(`https://api.skypicker.com/locations?term=${value}&location_types=airport`)
    .then((response: any) => {
      const { data = {} } = response;
      const { locations = [] } = data;
      setOptions(locations.map((location: any = {}) => ({
        value: location.id,
        label: location.name,
      })))
    })
    .catch((error: Error) => console.log(error));
  };

  return (
    <Select
      isMulti
      options={options}
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
      placeholder={label}
      className={styles.wrapper}
    />
  );
};
export default SelectCountry;
