import React from 'react';
import { Field as RFFField } from 'react-final-form';
import SelectCountry from './SelectCountry';

export interface Option {
  value: string,
  label: string,
};

const Field = ({ name, label = 'Search' }: any) => (
  <RFFField name={name}>
    {(props: any) => (
      <div>
        <SelectCountry
          label={label}
          {...props.input}
        />
      </div>
    )}
  </RFFField>
);

export default Field;
