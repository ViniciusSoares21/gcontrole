import React from 'react'
import imgListSvg from '../images/list.svg'
import imgClose from '../images/close_FILL0_wght400_GRAD0_opsz48.svg'
import imgHome from '../images/house-door.svg'
import imgGraph from '../images/clipboard-data.svg'
import imgDonation from '../images/volunteer_activism_FILL0_wght400_GRAD0_opsz48.svg'
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
      <div className={!sideBar ? styles.container : styles.containerWithSideBar}>
        <h1>gcontrole</h1>
        {!sideBar ? (
          <button 
          style={{ width: 30, height: 30, background: 'None' }}
          onClick={ showSideBar }
          >
            <img style={{ width: 30, height: 30 }} src={imgListSvg} alt="img list" />
          </button>
        ) : (
        <section className={ styles.sideBar }>
          <button 
            style={{ width: 30, height: 30, background: 'None', marginBottom: 22 }}
            onClick={ showSideBar }
            >
              <img 
                style={
                  { marginLeft: 80, marginTop: 20, width: 30, height: 30 }
                }
                src={imgClose} 
                alt="img list" 
              />
          </button>
          <Link to="/" className={ styles.containerLink}>
            <img src={imgHome} alt="Home" style={{ marginLeft: 14, marginRight: 8 }}/>
            <p>Home</p>
          </Link>
          <Link to="/analytics/payment" className={ styles.containerLink}>
            <img src={imgGraph} alt="graph" style={{ marginLeft: 14, marginRight: 8 }}/>
            <p>Análise de pagamentos</p>
          </Link>
          <Link to="/analytics/category" className={ styles.containerLink}>
            <img src={imgGraph} alt="graph" style={{ marginLeft: 14, marginRight: 8 }}/>
            <p>Análise de categoria</p>
          </Link>
          <Link to="/donation" className={ styles.containerLink}>
            <img src={imgDonation} alt="Donation" style={{ marginLeft: 14, marginRight: 5 }}/>
            <p>Contribuir</p>
          </Link>
        </section>
        )
      }
      </div>
    </div>
  )

}

export default NavBar