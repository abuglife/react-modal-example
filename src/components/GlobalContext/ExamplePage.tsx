import { Button } from '@mui/material';
import Modal from '../shared/Modal';
import styles from './ExamplePage.module.scss';
import SignInModal from './SignInModal';
import { useDialog } from './useDialog';

const ExamplePage = () => {
  const { openDialog } = useDialog()

  const onOpenSignInModal = () => {
    openDialog({
      dialog: SignInModal,
      onConfirm: () => { },
      onDismiss: () => { }
    })
  }
  
  const onOpenConfirmModal = () => {
    openDialog({
      dialog: Modal,
      title: "Remove confirmation",
      message: "Are your sure to remove this user?",
      onConfirm: () => { },
      onDismiss: () => { }
    })
  }

  return <div className={styles.container}>
    <h1 className={styles.heading}>Global Context</h1>
    <Button
      className={styles.button}
      onClick={onOpenSignInModal}
    >SignIn Modal</Button>
    <Button
      className={styles.button}
      onClick={onOpenConfirmModal}
    >Confirm Modal</Button>
  </div>
}

export default ExamplePage;