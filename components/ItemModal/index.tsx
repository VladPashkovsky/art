import React, { ReactNode, useEffect } from 'react'
import { NewArtButton } from '../NewArtButton'

import styles from './styles.module.scss'

interface ModalProps {
  onClickClose: () => void;
  onClickNext?: () => void;
  scrollContent?: ReactNode | any;
  isNext?: boolean;
}

export const ItemModal: React.FC<ModalProps> = ({ onClickClose, scrollContent }) => {

  useEffect(() => {
    document.body.classList.add('bodyOverflow')

    return () => {
      document.body.classList.remove('bodyOverflow')
    }
  }, [])

  return (

    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <header className={styles.modalHeader}>
          <NewArtButton
            onClick={onClickClose}
            type="Angle_Glass_Back"
            className={styles.modalButton}
          >
            Close
          </NewArtButton>
        </header>
        <div className={styles.modalContent}>
          {scrollContent}
        </div>
      </div>
    </div>
  )
}