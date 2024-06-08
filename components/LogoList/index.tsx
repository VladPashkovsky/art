import cl from 'classnames'

import styles from './style.module.scss'

interface LogoListProps {
  id: number,
  title: string,
  pic: string,
  link: string,
}

const logos: LogoListProps[] = [
  {
    id: 1,
    title: 'World History Encyclopedia',
    pic: './images/LogoListPics/World_History.png',
    link: 'https://www.worldhistory.org/',
  },
  {
    id: 2,
    title: 'Oxford Encyclopedias',
    pic: './images/LogoListPics/Oxford.png',
    link: 'https://oxfordre.com/',
  },

  {
    id: 3,
    title: 'Great Russian Encyclopedia',
    pic: './images/LogoListPics/Rus_Enc.png',
    link: 'https://old.bigenc.ru/',
  },
  {
    id: 4,
    title: 'Ancient Rome History',
    pic: './images/LogoListPics/Ancient.png',
    link: 'https://ancientrome.ru/',
  },
]

interface LogoListClass {
  className: string,
  onClick?: (e: React.MouseEvent) => void,
}

export const LogoList: React.FC<LogoListClass> = ({ className, onClick }) => {

  return (
    <ul className={cl(className, styles.logoList)}>
      {logos.map((item) => (
        <li key={item.id} className={styles.logoItem} onClick={() => window.open(item.link)}>
          <img className={styles.logoItemPics} src={item.pic}></img>
          <span className={styles.logoItemText}>{item.title}</span>
          <span className={styles.logoItemAngleLeft} />
        </li>
      ))}
    </ul>
  )
}