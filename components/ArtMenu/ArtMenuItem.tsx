import Image from 'next/image'
import cl from 'classnames'

import {NewArtButton, TypeNewArtButton} from '../NewArtButton'

import styles from './style.module.scss'

interface ArtMenuItemProps {
  id: number;
  href?: string;
  title: string;
  image: string;
  isOpened: boolean;
  onClick: (event: React.MouseEvent) => void;
  onClickButton: () => void;
}

const getTypeById = (id: number): TypeNewArtButton => {
  if (id === 1) {
    return 'Angle_Grey'
  }

  if (id === 2) {
    return 'Angle_Grey'
  }

  if (id === 3) {
    return  'Angle_Grey'
  }

  return 'Angle_Grey'
}

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
                                                          id,
                                                          image,
                                                          title,
                                                          isOpened,
                                                          onClick,
                                                          onClickButton,
                                                        }) => (
  <div
    onClick={onClick} className={cl(
    styles.artMenuItem,
    isOpened && styles.artMenuItemActive)}
  >
    <h3 className={styles.artMenuTitle}>{title}</h3>
    <div className={cl(
      styles.cardMore,
      styles.artMenuCard,
    )}>
      <NewArtButton
        type={getTypeById(id)}
        onClick={onClickButton}
        className={styles.cardMoreButton}
      >
        Collection
      </NewArtButton>
      <Image
        src={image}
        alt={title}
        width="271"
        height="184"
        className={styles.cardMoreImage}
      />
    </div>
    <span className={styles.artMenuDecorator} />
  </div>
)