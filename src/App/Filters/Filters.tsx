import React from 'react';
import Form from '../../components/Form';
// import Field from '../../components/FieldWrapper';
import Button from '../../components/Button';
import SelectCountry from '../../components/SelectCountry';
import DateRange from '../../components/DateRange';
import { searchFlights }  from '../../redux/actions';
const Filtes = ({ onSubmit }: any) => {
  const handleSubmit = (e: any) => {
    console.log('we are doing submit here');
    console.log(e);
    console.log('we are doing submit here');
    onSubmit();
  }
  return (
    <Form onSubmit={handleSubmit}>
      {/* <Field name='field 1' label="From" />
      <Field name='field 2' label="To" />
      <Field name='field 3' /> */}
      <SelectCountry name='from' label="From" />
      <SelectCountry name='to' label="To" />
      <DateRange name="dates" />
      <Button label="Search" />
    </Form>
  );
};
export default Filtes;
