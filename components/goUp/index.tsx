import React, { FC } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface GoUpProps {
  className?: string,
}

const GoUp: FC<GoUpProps> = ({className}) => {
  return (
    <div className={styles.GoUpContainer} >
      <img src="/images/goUp/Roman_Soldiers.png" alt="" className={styles.Pic} />
    </div>
  )
}

export default GoUp