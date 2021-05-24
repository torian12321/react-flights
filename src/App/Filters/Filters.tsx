import React from 'react';
import Form from '../../components/Form';
import Button from '../../components/Button';
import SelectCountry from '../../components/SelectCountry';
import DateRange from '../../components/DateRange';
import { Props, State } from './Filters.interfaces';

const Filtes = ({
  isLoading = false,
  onSubmit
}: Props & State) => {
  const handleSubmit = (values: any) => {
    console.log('we are doing submit here');
    console.log(values);
    console.log('we are doing submit here');
    onSubmit(values);
  }
  return (
    <Form onSubmit={handleSubmit} onChange={(e: any) => console.log(e)}>
      <SelectCountry name='from' label="From" />
      <SelectCountry name='to' label="To" />
      <DateRange name="dates" />
      <Button label="Search" loading={isLoading} />
    </Form>
  );
};
export default Filtes;
