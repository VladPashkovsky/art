import React, { FC } from 'react'
import styles from './style.module.scss'
import cl from 'classnames'

export type HeaderLogo = 'British' | 'Borghese' | 'Louvre' | 'Hermitage' | 'Vatican'

interface HeaderProps {
  color: 'black' | 'white',
  children: React.ReactNode,
  logo?: HeaderLogo,
  title?: string,
}

const HeaderPages: FC<HeaderProps> = ({ color, children, logo, title }) => {
  return (
    <div className={cl(styles.header, color && styles[`header${color}`])}>
      <div className={styles.header_inner}>
        <div className={cl(styles.logo, logo && styles[`logo${logo}`])}></div>
        <span className={cl(styles.title, title && styles[`title${title}`])}>{title}</span>
        <div className={styles.button}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeaderPages