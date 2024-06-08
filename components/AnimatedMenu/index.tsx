import { useState } from 'react'
import cl from 'classnames'
import {items, AnimatedMenuProps} from './AnimatedMenuInterfaces'
import styles from './style.module.scss'


export const AnimatedMenu: React.FC<AnimatedMenuProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <>
      <div className={cl(styles.animatedMenu, className)}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cl(
              styles.animatedMenuItem,
              activeItem === index && styles.animatedMenuItemActive,
              activeItem === 0 && styles.animatedMenuItemPink,
              item.theme && styles[`animatedMenuItem${item.theme}`],
            )}
            onClick={() => setActiveItem(index)}
          >
            <div className={styles.animatedMenuItemContent}>
              <h4 className={styles.animatedMenuItemTitle}>{item.title}</h4>
              {item.text && (<p className={styles.animatedMenuItemText}>{item.text}</p>)}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.animatedImages}>
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url('${item.imageUrl}')`}}
            className={cl(styles.animatedImagesItem, activeItem === index && styles.animatedImagesItemActive)}
          />
        ))}
      </div>
    </>
  )
}