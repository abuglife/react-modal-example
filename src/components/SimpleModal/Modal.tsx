import React, { ReactNode } from 'react';
import { Button, Dialog, Slide, SlideProps } from '@mui/material';
import styles from "./Modal.module.scss";
import { DialogBody, DialogFooter, DialogHeader } from '../Dialog';

export interface ModalProps {
  open: boolean,
  title: ReactNode,
  message: ReactNode,
  onConfirm?: Function,
  onDismiss?: Function
}

const Transition = React.forwardRef<SlideProps, SlideProps>(({ children, ...props }, ref) => {
  return <Slide direction="up" ref={ref} {...props} >{children}</Slide>;
});

const Modal = ({ open, title, message, onConfirm, onDismiss }: ModalProps) => {
  return <Dialog open={open}
    keepMounted
    TransitionComponent={Transition}
  >
    <DialogHeader title={title} onDismiss={onDismiss} />
    <DialogBody>
      <div className={styles.message}>{message}</div>
    </DialogBody>
    <DialogFooter>
      <Button variant="text" color="secondary" className={styles.btnCancel} onClick={() => {
        if (onDismiss) { onDismiss() }
      }}>Cancel</Button>
      <Button variant="contained" color="primary" className={styles.btnConfirm} onClick={() => {
        if (onConfirm) { onConfirm() }
      }}>Confirm</Button>
    </DialogFooter>
  </Dialog>
}

export default Modal;