import React from 'react';
import Form from '../../components/Form';
import Field from '../../components/FieldWrapper';
import Button from '../../components/Button';

const Filtes = () => {
  const handleSubmit = () => {
    console.log('we are doing submit here');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Field name='field 1' />
      <Field name='field 2' />
      <Field name='field 3' />
      <Button label="Search" />
    </Form>
  );
};
export default Filtes;
