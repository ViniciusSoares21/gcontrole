import React from 'react'
import NavBar from '../components/NavBar'
import styles from './Donation.module.css'

function Donation() {
  return (
    <main>
      <NavBar />
      <p className={styles.paragraph}>
      Essa é uma pagína para apoiar o site !!! 
      </p>
      <a 
        href="https://nubank.com.br/pagar/hkpd8/HBTiit1ewM"
        target="_blank" 
        rel="noopener noreferrer">
      <button
        className={ styles.donation}
      >
        CONTRIBUIR
      </button>
      </a>
    </main>
  )
}

export default Donation