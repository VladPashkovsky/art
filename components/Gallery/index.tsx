import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { links, ModalInfo } from '../ArtMenu/MenuInterfaces'
import GalleryItem from './GalleryItem'
import { Modal } from '../Modal'
import { ItemModal } from '../ItemModal'
import { GlassCard } from '../GlassCard'
import ItemModalInfo from '../ItemModalInfo'


export const Gallery = () => {

  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null)
  const [itemModal, setItemModal] = useState<any | null>(null)
  const router = useRouter()

  useEffect(() => {
    window.onkeydown = function( event ) {
      if ( event.key == 'Escape' ) {
        setItemModal(null)
      }
    }
  }, [])


  return (
    <>
      {links.map((link) => (
        link.href === router.pathname &&
        <GalleryItem
          key={link.id}
          icon={link.image}
          onClickButton={() => {
            setModalInfo(link.modalInfo)
            console.log('modalInfo', link.modalInfo)
          }}
        />
      ))}

      {modalInfo && (
        <Modal
          backgroundUrl={modalInfo.coverImage}
          onClickClose={() => {setModalInfo(null)}}
          onKeyDown={() => {}}
          titleUrl={modalInfo.titleUrl}
          title={modalInfo.title}
          text={modalInfo.content}
          scrollContent={
            <div className={styles.cardList}>
              {modalInfo.listImages.map((item, id) => (
                <GlassCard
                  type={item.type}
                  key={id}
                  imageUrl={item.src}
                  itemInfo={() => {
                    setItemModal(item)
                  }}
                />
              ))}
            </div>
          }
        />
      )}

      {itemModal && (
        <ItemModal
          onClickClose={() => {setItemModal(null)}}
          scrollContent={
            <ItemModalInfo
              image={itemModal.src}
              information={itemModal.info}
            />
          }
        />
      )}
    </>
  )
}

export default Gallery