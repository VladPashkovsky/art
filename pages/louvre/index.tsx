import styles from './style.module.scss'
import { NewArtButton } from '../../components/NewArtButton'
import Video from '../../components/Video'
import Gallery from '../../components/Gallery'
import HeaderPages from '../../components/HeaderPages'


const Index = () => {
  function officialSite() {
    window.open('https://www.louvre.fr/en')
  }

  return (
    <article className={styles.container}>
      <HeaderPages color="black" logo='Louvre' title=''>
        <NewArtButton type="White" onClick={officialSite}>
          Official Site
        </NewArtButton>
      </HeaderPages>
      <Video source='/videos/Louvre/Louvre_comp_cut.mp4' />
      <div className={styles.gallery}>
        <Gallery />
      </div>
    </article>

  )
}

export default Index