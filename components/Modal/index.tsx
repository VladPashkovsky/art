import { ReactNode, useEffect } from 'react'
import { NewArtButton } from '../NewArtButton'
import { Text } from '../Text'
import { animated, useTransition } from '@react-spring/web'

import styles from './style.module.scss'

interface ModalProps {
  backgroundUrl: string;
  titleUrl: string;
  onClickClose: () => void;
  title: string;
  text: ReactNode;
  scrollContent: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
                                              backgroundUrl,
                                              titleUrl,
                                              onClickClose,
                                              title,
                                              text,
                                              scrollContent,
                                            }) => {


  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  })


  useEffect(() => {
    document.body.classList.add('bodyOverflow')

    return () => {
      document.body.classList.remove('bodyOverflow')
    }
  }, [])

  return (transitions((style) =>
    <animated.div style={style}>
      <div
        className={styles.modal}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
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
          <h2 style={{ backgroundImage: `url(${titleUrl})` }}
              className={styles.modalTitle}
          >
            {title}
          </h2>
          <Text className={styles.modalText}>{text}</Text>
          <div className={styles.modalContent}>
            {scrollContent}
          </div>
        </div>
      </div>
    </animated.div>,
  ))
}