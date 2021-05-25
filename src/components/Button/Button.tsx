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
  className,
  onClick = () => {}
}: Props) => {
  const isClickable = !(disabled || loading);
  const content = children || label;
  const handleOnClick = () => {
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
        className,
      )}
    >
    {!loading ? content : 'Loading...'}
    </button>
  ) : null;
};

export default Form;
