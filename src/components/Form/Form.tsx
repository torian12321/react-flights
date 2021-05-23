import React from 'react';
import { Form as RFFForm } from 'react-final-form';

const Form = ({
  children,
  onSubmit = () => {}
}: any) => {
  const handleOnSubmit = (v: any) => {
    console.log(v);
    onSubmit();
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
