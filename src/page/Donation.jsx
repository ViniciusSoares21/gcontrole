import React from 'react'
import NavBar from '../components/NavBar'
import styles from './Donation.module.css'
import Footer from '../components/Footer'

function Donation() {
  return (
    <main>
      <NavBar />
      <p className={styles.paragraph}>
        Estamos buscando apoio para manter nosso site em funcionamento. 
        Sua doação pode ajudar a cobrir nossos gastos e garantir que continuemos.
      </p>
      <p 
        style={{textAlign: 'center', fontWeight: 800}}
      >
        Seu apoio é fundamental, somos gratos por sua contribuição!
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
    </main>
  )
}

export default Donation