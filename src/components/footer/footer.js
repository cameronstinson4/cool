import React from 'react'

import styles from './footer.module.scss'
import pageStyles from '../../pages/pages.module.scss'

const Footer = ({ }) => (
  <div>
    <div className={styles.footerContainer}>
      <h3> Just be cool </h3>

      <a className={pageStyles.link} href="https://cameronstinson.com">{"\u21b5"} return to cameronstinson.com</a>
    </div>
  </div>
)

export default Footer
