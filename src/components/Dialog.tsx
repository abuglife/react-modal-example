import React, { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';
import styles from "./Dialog.module.scss";

interface DialogHeaderProps {
  title: ReactNode,
  onDismiss?: Function
}
export const DialogHeader = ({ title, onDismiss }: DialogHeaderProps) => {
    return <div className={styles.heading}>
      <div className={styles.title}>{title}</div>
      <button className={styles.btnClose} onClick={() => {
        if (onDismiss) { onDismiss() }
      }}>
        <FiX />
      </button>
    </div>
}

interface DialogBodyProps {
  children: ReactNode
}

export const DialogBody = ({ children }: DialogBodyProps) => {
  return <div className={styles.body}>
    {children}
  </div>
}

interface DialogFooterProps {
  children: ReactNode 
}

export const DialogFooter = ({children}: DialogFooterProps) => {
  return <div className={styles.footer}>{children}</div>
}