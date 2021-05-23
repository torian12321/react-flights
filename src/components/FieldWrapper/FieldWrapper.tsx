import React from 'react';
import { Field as RFFField } from 'react-final-form';
import { Props } from './FieldWrapper.interfaces';

export interface Option {
  value: string,
  label: string,
};

const Field = ({ name }: Props) => (
  <RFFField name={name}>
    {(props: any) => (
      <div>
        <input {...props.input} />
      </div>
    )}
  </RFFField>
);

export default Field;
