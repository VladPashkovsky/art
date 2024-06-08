import React, { FC } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface ItemModalInfoProps {
  image: string,
  information: string | undefined;
}

const ItemModalInfo: FC<ItemModalInfoProps> = ({ image, information }) => {
  return (
    <div className={styles.InfoContainer}>
      <img className={styles.Img} src={image} alt="./images/example/Zeus_Compressed.jpeg" />
      <span className={styles.Information}>
        {information}
      </span>
    </div>
  )
}

export default ItemModalInfo