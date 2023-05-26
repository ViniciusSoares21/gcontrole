import React from 'react'
import styles from './Footer.module.css'
import imgLinkedinSvg from '../images/linkedin.svg'
import imgGitHubSvg from '../images/github.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={ styles.container }>
      <div  className={ styles.subContainer }>
        <a 
          href="https://www.linkedin.com/in/vinicius-soares21/" 
          className={styles.text}
          target="_blank" 
          rel="noopener noreferrer"
          >
          Created By
        </a>
        <a 
          href="https://www.linkedin.com/in/vinicius-soares21/"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img className={ styles.image } src={imgLinkedinSvg} alt="Linkedin" />
        </a>
        <a 
          href="https://github.com/ViniciusSoares21"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img className={ styles.image } src={imgGitHubSvg} alt="GitHub" />
        </a>
        </div>
      <Link to="/PrivacyPolicy">
        <p 
          style={
            { 
              fontSize: 12,
              color: 'rgba(188, 188, 188, 1)',
              textAlign: 'center',
              margin: 0
            }
          }
        >
          Política de Privacidade
        </p>
      </Link>
    </footer>
  )
}

export default Footer