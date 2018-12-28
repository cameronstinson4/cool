import React, { Component } from "react"
// components
import Layout from '../components/layout/layout.js'
// styles
import styles from './index.module.scss'
import headerStyles from '../components/header/header.module.scss'
// content
import text from '../text-content'

const textChangeInterval = 5000

class IndexPage extends Component {

  constructor(props) {
    super(props)
    this.intros = text.intros;
    this.index = 0;

    this.state = {
      intro: this.intros[this.index],
      faded: false
    };
  }

  transitionText = () => {

    this.setState({intro: this.intros[this.index]});
    this.unFadeText();

    if (this.index < this.intros.length - 1) {
      this.index += 1;
    }
    else {
      this.index = 0;
    }

    setTimeout(this.fadeText, textChangeInterval - 500)
    setTimeout(this.transitionText, textChangeInterval)
  }

  fadeText = () => {
    this.setState({faded: true})
  }

  unFadeText = () => {
    this.setState({faded: false})
  }

  componentDidMount = () => {

    this.transitionText()

  }

  render = () => (
    <Layout largeHeader={true} className={styles.layout}>
      <div className={styles.content}>
        <h1 className={`${headerStyles.largeText} ${this.state.faded ? styles.faded : styles.unFaded}` }> {this.state.intro} </h1>
      </div>
    </Layout>
  )
}

export default IndexPage
