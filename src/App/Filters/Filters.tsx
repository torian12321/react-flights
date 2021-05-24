import React from 'react';
import moment from 'moment';
import { Form as RFFForm } from 'react-final-form';
import Button from '../../components/Button';
import SelectCountry from '../../components/SelectCountry';
import DateRange from '../../components/DateRange';
import { Props, State } from './Filters.interfaces';

const isValid = (values: any = {}) => {
  const { dates = {}} = values;

  return (
    (values["from"] !== undefined) &&
    (values["to"] !== undefined) &&
    (dates["from"] !== undefined) &&
    (dates["to"] !== undefined)
  );
}
const Filtes = ({
  isLoading = false,
  onSubmit
}: Props & State) => {
  const handleOnSubmit = (values: any) => {
    const { from = [], to = [], dates = {} } = values;
    
    onSubmit({
      from: from.map((f: any) => f.value).join(','),
      to: to.map((t: any) => t.value).join(','),
      dateFrom: moment(dates.from).format('DD/MM/YYYY'),
      dateTo: moment(dates.to).format('DD/MM/YYYY'),
    });
  };

  return (
    <RFFForm onSubmit={handleOnSubmit} onChange={(e: any) => console.log(e)}>
      {({ values, handleSubmit }: any) => (
        <form onSubmit={handleSubmit}>
          <SelectCountry name='from' label="From" />
          <SelectCountry name='to' label="To" />
          <DateRange name="dates" />
          <Button label="Search" loading={isLoading} disabled={!isValid(values)} />
        </form>
      )}
    </RFFForm>
  );
};
export default Filtes;
