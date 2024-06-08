import React, { ReactNode } from 'react'
import cl from 'classnames'

import styles from './style.module.scss'

interface TitleProps {
  size?: 'Medium' | 'Large' | 'Small' | 'X-Medium',
  color?: 'Black' | 'White',
  children: ReactNode,
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
                                              size = 'Medium',
                                              color,
                                              children,
                                              className,
                                            }) => {
  return (
    <h2 className={cl(styles.title, styles[`title${size}`], styles[`title${color}`], className)}>
      {children}
    </h2>
  )
}