import styles from '../styles/home.module.scss'
import cl from 'classnames'
// @ts-ignore
import Fullpage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage'
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { SocialNetworks } from '../components/SocialNetworks'
import { ArtMenu } from '../components/ArtMenu'
import { Title } from '../components/Title'
import { AnimatedMenu } from '../components/AnimatedMenu'
import { LogoList } from '../components/LogoList'
import { NewArtButton } from '../components/NewArtButton'
import LastPage from '../components/lastPage'
import { useEffect } from 'react'
import GoUp from '../components/goUp'
import Link from 'next/link'


export default function Home() {
  const [ref, inView, entry] = useInView({threshold: 1.0});

  const [animatedStyles, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        opacity: 1,
        transform: 'translateY(0px)',
        config: { duration: 700 },
        delay: 500
      });
    }
  }, [inView, api]);


  return (
    <article className={styles.article}>
      <Fullpage>
        <FullPageSections>
          <FullpageSection>

              <section className={cl(styles.section, styles.sectionMain)}>
                <header className={styles.header}>
                  <SocialNetworks />
                  <NewArtButton type="Icon_White" onClick={() => {
                  }}>
                    GitHub
                  </NewArtButton>
                </header>

                <div className={styles.titleAndButton}>
                  <Title color="Black" size="Medium"> WORLD ART </Title>
                  <ul className={styles.buttonList}>
                    <li>
                      <NewArtButton type="Black" onClick={() => {
                      }}>
                        ENTER
                      </NewArtButton>
                    </li>
                    <li>
                      <NewArtButton type="Black" onClick={() => {
                      }}>
                        Sign In
                      </NewArtButton>
                    </li>
                  </ul>
                </div>
              </section>

          </FullpageSection>
          <FullpageSection >

          <section className={cl(styles.section, styles.sectionKolonnade)} >
              <Title size="Large" className={styles.sectionKolonnadeText}>
                MUSEUMS
              </Title>
              <ArtMenu />
            </section>

          </FullpageSection>
          <FullpageSection >

            <section className={cl(styles.section, styles.sectionAnimation)}>
              <Title size="Small" className={styles.smallTitle} >
                Culture of Europe
              </Title>
              <AnimatedMenu />
            </section>

          </FullpageSection>
          <FullpageSection>

            <section className={cl(styles.section, styles.sectionLogos)} >
              <Title size="Small" className={styles.subTitle}>Partners</Title>
              <div className={styles.goUp}>
                <Link href='/'> <GoUp /> </Link>
              </div>

              <animated.div style={animatedStyles} ref={ref} >
                <LastPage>
                  <LogoList className={styles.logoList}  />
                </LastPage>
              </animated.div>
            </section>

          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </article>
  )
}