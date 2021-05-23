export interface Props {
  id?: string,
  children?: any,
  label?: string,
  disabled?: boolean,
  loading?: boolean,
  type?: 'submit' | 'reset' | 'button',
  onClick?: Function,
};
