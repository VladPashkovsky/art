import React, { ElementRef, FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface LastPageProps {
  ref?: ElementRef<any>
  children?: ReactNode,
}

const LastPage: FC<LastPageProps> = ({ref, children}) => {

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Emperor}></div>
      <form className={styles.Form}>{children}</form>
    </div>
  )
}

export default LastPage