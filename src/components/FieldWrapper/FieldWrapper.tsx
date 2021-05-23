import React from 'react';
import { Field as RFFField } from 'react-final-form';
import { Props } from './FieldWrapper.interfaces';

export interface Option {
  value: string,
  label: string,
};

const Field = ({ name }: any) => (
  <RFFField name={name}>
    {(props: any) => (
      <div>
        <input {...props.input} />
      </div>
    )}
  </RFFField>
);

export default Field;
