import styles from './styles.module.scss'
import { NewArtButton } from '../../components/NewArtButton'
import Video from '../../components/Video'
import Gallery from '../../components/Gallery'
import HeaderPages from '../../components/HeaderPages'


const GalleriaBorghese = () => {
  function officialSite() {
    window.open('https://galleriaborghese.beniculturali.it/en/')
  }

  return (
    <article className={styles.container}>
      <HeaderPages color="white" logo='Borghese' title=''>
        <NewArtButton type="White" onClick={officialSite}>
          Official Site
        </NewArtButton>
      </HeaderPages>
      <Video source='/videos/Borghese/Borghese_comp.mp4'/>
      <div className={styles.gallery}>
        <Gallery />
      </div>
    </article>

  )
}

export default GalleriaBorghese