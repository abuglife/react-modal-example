import { Button } from '@mui/material';
import styles from './ExamplePage.module.scss';
import { useConfirmModal } from './useConfirmModal';

const ExamplePage = () => {
  const { getConfirm } = useConfirmModal()

  const onConfirmModal = async () => {
    const isConfirm = await getConfirm({
      title: "Signout Confirmation",
      message: "Are you sure to signout?"
    })
    if(isConfirm) {
      // Signout Confirmed
    }
  }
  return <div className={styles.container}>
    <h1 className={styles.heading}>Modal with Context</h1>
    <Button 
      className={styles.button}
      onClick={onConfirmModal}
      >Open Modal</Button>
  </div>
}

export default ExamplePage;