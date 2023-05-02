import React from 'react'
import imgListSvg from '../images/list.svg'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  const [sideBar, setSideBar] = React.useState(false);
  const showSideBar = () => setSideBar(!sideBar)

  React.useEffect(() => {
    document.body.style.overflow = 'auto'
    if (sideBar) {
      document.body.style.overflow = 'hidden'
    }
  }, [sideBar])

  return (
    <div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <h1>gcontrole</h1>
        <button 
          style={{ width: 30, height: 30, background: 'None' }}
          onClick={ showSideBar }
        >
          <img style={{ width: 30, height: 30 }} src={imgListSvg} alt="img list" />
        </button>
      </div>
      { sideBar && 
      <section className={ styles.sideBar}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/analytics/payment">
          <p>Análise de pagamentos</p>
        </Link>
        <Link to="/analytics/category">
          <p>Análise de categoria</p>
        </Link>
        <Link to="/donation">
          <p>Contribuir</p>
        </Link>
      </section>
      }
    </div>
  )

}

export default NavBar