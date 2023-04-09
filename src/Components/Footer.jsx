import React from 'react'
import DH from '../assets/DH.png'
import FB from '../assets/ico-facebook.png'
import INSTA from '../assets/ico-instagram.png'
import TIK from '../assets/ico-tiktok.png'
import WPP from '../assets/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer>
        <img src={DH} alt='DH-logo' />
        <div>
          <img src={FB} alt='facebook' />
          <img src={INSTA} alt='instagram' />
          <img src={TIK} alt='tiktok' />
          <img src={WPP} alt='whatsapp' />
        </div>
    </footer>
  )
}

export default Footer
