import React from 'react'
import cl from 'classnames'
import styles from './style.module.scss'

interface GlassCardProps {
  imageUrl: string;
  type: 'color' | 'dark',
  itemInfo?: () => void
}

export const GlassCard: React.FC<GlassCardProps> = ({ imageUrl, type, itemInfo }) => {

  return (
    <div className={cl(styles.classCard)}>
      <img src={imageUrl} alt="Card" className={styles.classCardImage} onClick={itemInfo}/>
    </div>
  )
}