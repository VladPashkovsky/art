import styles from './styles.module.scss'
import { NewArtButton } from '../../components/NewArtButton'
import Video from '../../components/Video'
import Gallery from '../../components/Gallery'
import HeaderPages from '../../components/HeaderPages'


const Hermitage = () => {
  function officialSite() {
    window.open('https://hermitagemuseum.org/wps/portal/hermitage?lng=en/')
  }

  return (
    <article className={styles.container}>
      <HeaderPages color="black" logo='Hermitage' title='The State Hermitage Museum' >
        <NewArtButton type="White" onClick={officialSite}>
          Official Site
        </NewArtButton>
      </HeaderPages>
      <Video source='/videos/Hermitage/Hermitage_comp.mp4'/>
      <div className={styles.gallery}>
        <Gallery />
      </div>
    </article>

  )
}

export default Hermitage