import React, { FC } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

interface GalleryItemProps {
  id?: number,
  onClickButton?: () => void,
  icon?: string,
}

const GalleryItem: FC<GalleryItemProps> = ({ id, onClickButton, icon }) => {
  return (
    <div className={styles.galleryContainer}>
      <span className={styles.galleryText}>Collection</span>
      <div className={styles.gallery} onClick={onClickButton}>
        <img src="/images/example/Hera_Compressed.jpg" alt="Hera" />
        <img src="/images/example/Aid_Compressed.jpg" alt="Aid" />
        <img src="/images/example/Zeus_Compressed.jpeg" alt="Zeus" />
        <img src="/images/example/Neptun_Compressed.jpg" alt="Neptun" />
      </div>
    </div>
  )
}

export default GalleryItem