import React from 'react';
import { Form as RFFForm } from 'react-final-form';

const Form = ({
  children,
  type = 'submit',
  label,
  onClick = () => {}
}: any) => {
  const content = children || label;
  const handleOnClick = (v: any) => {
    onClick();
  };

  return !!content ? (
    <button
      type={type}
      onClick={handleOnClick}
    >
    {content}
    </button>
  ) : null;
};

export default Form;
