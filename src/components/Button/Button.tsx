import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import ScaleLoader from "react-spinners/ScaleLoader";
import classnames from 'classnames';
import styles from './Button.module.scss';

export interface IButtonProps extends ButtonProps {
  isLoading?: boolean;
}
const Button = (props: IButtonProps) => {
  const { children, isLoading, ...restProps } = props
  if (!restProps.variant) {
    restProps.variant = 'contained'
  }

  const priorityClassName = getPriorityClassName(props.color)
  return <MuiButton {...restProps} className={classnames(
    styles.btn,
    priorityClassName
  )}>
    {isLoading && <ScaleLoader color="#FFFFFF" height={16} loading={isLoading} />}
    {!isLoading && <>{children}</>}
  </MuiButton>
}

const getPriorityClassName = (color: string = '') => {
  switch (color) {
    case 'primary':
      return styles.btnPrimary
    case 'info':
      return styles.btnInfo
    case 'success':
      return styles.btnSuccess
    case 'danger':
      return styles.btnDanger
    case 'warning':
      return styles.btnWarning
    default:
      return null
  }
}

export default Button