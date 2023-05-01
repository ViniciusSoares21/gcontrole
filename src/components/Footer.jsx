import React from 'react'
import styles from './Footer.module.css'
import imgLinkedinSvg from '../images/linkedin.svg'
import imgGitHubSvg from '../images/github.svg'

function Footer() {
  return (
    <footer className={ styles.container }>
      <a href="https://www.linkedin.com/in/vinicius-soares21/" className={styles.text}>
        Created By
      </a>
      <a href="https://www.linkedin.com/in/vinicius-soares21/">
        <img className={ styles.image } src={imgLinkedinSvg} alt="Linkedin" />
      </a>
      <a href="https://github.com/ViniciusSoares21">
        <img className={ styles.image } src={imgGitHubSvg} alt="GitHub" />
      </a>
    </footer>
  )
}

export default Footer