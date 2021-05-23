import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

export interface Option {
  value: string,
  label: string,
};

const opt: Option[] = [];

const SelectCountry = () => {
  const [options, setOptions] = useState(opt);

  const handleOnChange = (value: string) => {
    axios
    .get(`https://api.skypicker.com/locations?term=${value}&location_types=airport`)
    .then((response: any) => {
      const { data = {} } = response;
      const { locations = [] } = data;
      setOptions(locations.map((location: any = {}) => ({
        value: location.id,
        label: location.name,
      })))
      console.log(response);
    })
    .catch((error: Error) => console.log(error));
  };

  return (
    <Select
      isMulti
      options={options}
      onInputChange={handleOnChange}
      placeholder="From"
    />
  );
};
export default SelectCountry;
