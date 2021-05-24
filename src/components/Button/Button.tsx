import React from 'react';
import classNames from 'classnames';
import { Props } from './Button.interfaces';
import styles from './Button.module.scss';

const Form = ({
  children,
  type = 'submit',
  label,
  disabled = false,
  loading = false,
  onClick = () => {}
}: Props) => {
  const isClickable = !(disabled || loading);
  const content = children || label;
  const handleOnClick = (v: any) => {
    if(isClickable) {
      onClick();
    };
  };

  return !!content ? (
    <button
      type={type}
      onClick={handleOnClick}
      disabled={!isClickable}
      className={classNames(
        styles.btn,
        !isClickable && styles.disabled,
      )}
    >
    {content}
    </button>
  ) : null;
};

export default Form;