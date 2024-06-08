import React, { FC } from 'react'
import styles from './style.module.scss'

interface VideoProps {
  source: string
}

const Video: FC<VideoProps> = ({source}) => {
  return (
    <div className={styles.video}>
      <video autoPlay loop muted className={styles.videoContent}>
        <source src={source} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video