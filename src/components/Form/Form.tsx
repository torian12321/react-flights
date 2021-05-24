import React from 'react';
import { Form as RFFForm } from 'react-final-form';
import moment from 'moment';

const Form = ({
  children,
  onSubmit = () => {}
}: any) => {
  const handleOnSubmit = (values: any) => {
    const { from = [], to = [], dates = {} } = values;
    
    onSubmit({
      from: from.map((f: any) => f.value).join(','),
      to: to.map((t: any) => t.value).join(','),
      dateFrom: moment(dates.from).format('DD/MM/YYYY'),
      dateTo: moment(dates.to).format('DD/MM/YYYY'),
    });
  }
  return (
    <RFFForm onSubmit={handleOnSubmit} onChange={(e: any) => console.log(e)}>
      {(props: any) => (
        <form onSubmit={props.handleSubmit}>
          {children}
        </form>
      )}
    </RFFForm>
  );
};

export default Form;
