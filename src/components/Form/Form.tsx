import React from 'react';
import { Form as RFFForm } from 'react-final-form';

const Form = ({
  children,
  onSubmit = () => {}
}: any) => {
  const handleOnSubmit = (values: Object) => {
    onSubmit(values);
  }
  return (
    <RFFForm onSubmit={handleOnSubmit}>
      {(props: any) => (
        <form onSubmit={props.handleSubmit}>
          {children}
        </form>
      )}
    </RFFForm>
  );
};

export default Form;
