import React from 'react'
import NavBar from '../components/NavBar'
import styles from './Donation.module.css'
import Footer from '../components/Footer'

function Donation() {
  return (
    <main>
      <NavBar />
      <p className={styles.paragraph}>
      Essa é uma página para apoiar o site !!! 
      </p>
      <a 
        href="https://nubank.com.br/pagar/hkpd8/HBTiit1ewM"
        target="_blank" 
        rel="noopener noreferrer">
      <p
        className={ styles.donation}
      >
        CONTRIBUIR
      </p>
      </a>
      <Footer />
    </main>
  )
}

export default Donation