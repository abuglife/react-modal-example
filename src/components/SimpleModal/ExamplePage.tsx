import { Button } from '@mui/material';
import React, { useState } from 'react';
import styles from './ExamplePage.module.scss';
import Modal from "./Modal";

const ExamplePage = () => {
  const [open, setOpen] = useState(false)
  return <div className={styles.container}>
    <h1 className={styles.heading}>Simple Modal</h1>
    <Button 
      className={styles.button}
      onClick={() => {
        setOpen(!open)
      }}
      >Open Modal</Button>
    <Modal 
      open={open}
      title="Remove confirmation"
      message="Are you sure to remove user?"
      onDismiss={() => {
        setOpen(false)
      }}
      onConfirm={() => {
        setOpen(false)
      }}
      />
  </div>
}

export default ExamplePage;