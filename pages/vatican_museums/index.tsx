import styles from './styles.module.scss'
import { NewArtButton } from '../../components/NewArtButton'
import Video from '../../components/Video'
import Gallery from '../../components/Gallery'
import HeaderPages from '../../components/HeaderPages'


const VaticanMuseums = () => {
  function officialSite() {
    window.open('https://www.museivaticani.va/content/museivaticani/en.html/')
  }

  return (
    <article className={styles.container}>
      <HeaderPages color="white" logo='Vatican' title='' >
        <span className={styles.titleStyle}>MUSEI VATICANI</span>
        <NewArtButton type="White" onClick={officialSite}>
          Official Site
        </NewArtButton>
      </HeaderPages>
      <Video source='/videos/Vatican_Museums/Vatican_comp.mp4'/>
      <div className={styles.gallery}>
        <Gallery />
      </div>
    </article>

  )
}

export default VaticanMuseums