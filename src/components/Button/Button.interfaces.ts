export interface Props {
  id?: string,
  children?: any,
  label?: string,
  disabled?: boolean,
  loading?: boolean,
  className?: string,
  type?: 'submit' | 'reset' | 'button',
  onClick?: Function,
};
