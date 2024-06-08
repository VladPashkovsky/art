import { ReactNode } from 'react'
import cl from 'classnames'

import styles from './style.module.scss'

export type TypeNewArtButton = 'Black' | 'White' | 'Icon_Black' | 'Icon_White' |
  'Angle_Black' | 'Angle_White' | 'Angle_Grey' | 'Angle_Black_Back' | 'Angle_White_Back' | 'Angle_Glass_Back'
  | 'Small_Glass';

interface ArtButtonProps {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
  type?: TypeNewArtButton;
}

export const NewArtButton: React.FC<ArtButtonProps> = ({ onClick, children, className, type }) => {
  return (
    <button
      className={cl(
        styles.artButton,
        className,
        type && styles.artButtonType,
        type && styles[`artButton${type}`],
      )}
      onClick={onClick}
    >
      {children}
      <span className={styles.artButtonOne} />
      <span className={styles.artButtonTwo} />
      <span className={styles.artButtonThree} />
      <span className={styles.artButtonFour} />
      <span className={styles.artButtonIcon} />
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </button>
  )
}