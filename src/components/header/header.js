import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

function isLarge(large) {
  if (large) {
    return <h1>
      <Link
        to="/"
        className={`${styles.link} ${styles.largeText}`}
      >
        cool
    </Link>
    </h1>
  }
  else {
    return
  }
}

let Header = ({ large }) => (
  <div
    className={styles.header}
  >
    <div className={styles.headerContainer}>

      <nav>

        <div className={`${styles.navFlexBox}`} >
          <div className={`${styles.navItem}`}>
            <Link to="/" className={`${styles.link}`}>:~$</Link>
          </div>
          <div className={`${styles.navFlexBox}`} >
            <div className={`${styles.navItem}`}>
              <Link to="/cool/"
                className={`${styles.navLink}`}
                activeClassName={`${styles.activeNavLink}`}>cool</Link>
            </div>
            <div className={`${styles.navItem}`}>
              <Link to="/cool/"
                className={`${styles.navLink}`}
                activeClassName={`${styles.activeNavLink}`}>blog</Link>
            </div>
            <div className={`${styles.navItem}`}>
              <Link to="/cool/"
                className={`${styles.navLink}`}
                activeClassName={`${styles.activeNavLink}`}>shop</Link>
            </div>
            <div className={`${styles.navItem}`}>
              <Link to="/factorio/"
                className={`${styles.navLink}`}
                activeClassName={`${styles.activeNavLink}`}>factorio</Link>
            </div>
          </div>
        </div>

      </nav>

      {isLarge(large)}
    </div>
  </div >
)

export default Header
