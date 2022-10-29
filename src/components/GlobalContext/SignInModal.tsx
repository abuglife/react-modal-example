import React, { ReactNode } from 'react';
import { Button, Dialog, Slide, SlideProps } from '@mui/material';
import styles from "./SignInModal.module.scss";
import SignInForm, { FormValues } from './Form/SignInForm';

export interface ModalProps {
  open: boolean,
  onConfirm?: Function,
  onDismiss?: Function
}

const Transition = React.forwardRef<SlideProps, SlideProps>(({ children, ...props }, ref) => {
  return <Slide direction="up" ref={ref} {...props} >{children}</Slide>;
});

const SignInModal = ({ open, onConfirm, onDismiss }: ModalProps) => {
  const onSignIn = (dto: FormValues) => {
    try {
      // await signin(dto)    << Call Signin Functin then complete this modal this onConfirm
      if (onConfirm) { onConfirm(dto); }
    } catch (error) {

    }
  }
  return <Dialog open={open}
    keepMounted
    onClose={() => { if(onDismiss) { onDismiss() }}}
    TransitionComponent={Transition}
  >
    <div className={styles.container}>
      <h2 className={styles.title}>Sign In</h2>
      <SignInForm
        onSubmit={onSignIn}
      />
    </div>
  </Dialog>
}

export default SignInModal;