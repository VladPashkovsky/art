import cl from 'classnames'
import { aboutEng, aboutRus } from '../../public/constants'
import ruFlag from '../../public/images/modalOpen/flag-ru-svgrepo-com.svg'
import gbFlag from '../../public/images/modalOpen/flag-gb-svgrepo-com.svg'
import React, { useState } from 'react'
import { Button, Modal } from 'antd'

import styles from './style.module.scss'
import Image from 'next/image'

interface SocialNetworksProps {
  type?: 'header' | 'footer';
  className?: string;
}

const socialNetworks = [
  {
    id: 1,
    title: 'Info',
    className: 'Info',
    link: '',
  },
  // {
  //   id: 2,
  //   title: 'Twitter',
  //   className: 'Twitter',
  //   link: 'https://twitter.com',
  // },
]


export const SocialNetworks: React.FC<SocialNetworksProps> = ({ type = 'header', className }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }



  return (
    <ul className={cl(styles.socialNetworks, className, styles[type])}>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.id}>
          <a
            // href={socialNetwork.link}
            // target="_blank"
            rel="noreferrer"
            className={cl(styles.socialNetworksLink, styles[`socialNetworks${socialNetwork.className}`])}
            onClick={showModal}
          >
            {socialNetwork.title}
          </a>
              <Modal title="ABOUT:" open={isModalOpen} width={1000} onOk={handleOk} onCancel={handleCancel}
                     footer={[<Button key="submit" type="primary" onClick={handleOk}>OK</Button>]} getContainer={false} zIndex={1000}>
                <hr />
                <Image src={ruFlag} alt="" width={50} style={{position: 'relative', left: '50%'}} />
                <div style={{fontSize: '15px'}}>{aboutRus}</div> <br />
                <hr />
                <Image src={gbFlag} alt="" width={50} style={{position: 'relative', left: '50%'}} />
                <div style={{fontSize: '15px'}}>{aboutEng}</div> <br />
              </Modal>
        </li>
      ))}
    </ul>
  )
}