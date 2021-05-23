import React from 'react';
import { Field as RFFField } from 'react-final-form';
import DateRange from './DateRange';
import { Props } from './DateRange.interfaces';

export interface Option {
  value: string,
  label: string,
};

const Field = ({ name, label = 'Search' }: Props) => (
  <RFFField name={name}>
    {(props: any) => (
      <div>
        <DateRange
          label={label}
          {...props.input}
        />
      </div>
    )}
  </RFFField>
);

export default Field;
