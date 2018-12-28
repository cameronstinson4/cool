import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Header from '../header/header'
import Footer from '../footer/footer'

import text from '../../text-content'
import './layout.scss'
import styles from '../../pages/pages.module.scss'

const link = (isIndexPage) => {
  if (!isIndexPage) {
    return <Link className={styles.link} to="/">return {"\u21b5"}</Link>
  }
}

const Layout = ({ children, largeHeader }) => (
  <div>
    <Helmet
      title={text.title}
      meta={[
        { name: 'description', content: text.description },
        { name: 'keywords', content: text.keywords },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header large={largeHeader} />
    <div className={"container"}>
      {children}
      {link(largeHeader)}
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </div>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
