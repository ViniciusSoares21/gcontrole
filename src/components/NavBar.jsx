import React from 'react'
import imgListSvg from '../images/list.svg'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <h1>gcontrole</h1>
        <img src={imgListSvg} alt="img list" />
      </div>
    </div>
  )
}

export default NavBar