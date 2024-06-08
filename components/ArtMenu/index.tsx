import { useState } from 'react'
import { ArtMenuItem } from './ArtMenuItem'
import { links } from './MenuInterfaces'
import styles from './style.module.scss'


export const ArtMenu: React.FC = () => {
  const [openedId, setOpenedId] = useState<number>(1)

  return (
    <>
      <div className={styles.artMenu}>
        {links.map((link) => (
          <ArtMenuItem
            key={link.id}
            onClick={(event) => {
              event.preventDefault()
              setOpenedId(link.id)
            }}
            onClickButton={() => {
              window.open(link.href)

            }}
            isOpened={link.id === openedId}
            {...link}
          />
        ))}
      </div>
    </>
  )
}