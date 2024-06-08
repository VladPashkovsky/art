import styles from './styles.module.scss'
import { NewArtButton } from '../../components/NewArtButton'
import Video from '../../components/Video'
import Gallery from '../../components/Gallery'
import HeaderPages from '../../components/HeaderPages'


const BritishMuseum = () => {
  function officialSite() {
    window.open('https://www.britishmuseum.org/')
  }

  return (
    <article className={styles.container}>
      <HeaderPages color="black" logo='British' title=''>
        <NewArtButton type="White" onClick={officialSite}>
          Official Site
        </NewArtButton>
      </HeaderPages>
      <Video source='/videos/British_Museum/Tour_of_the_British_Museum.mp4'/>
      <div className={styles.gallery}>
        <Gallery />
      </div>

    </article>

  )
}

export default BritishMuseum