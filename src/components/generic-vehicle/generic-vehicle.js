import React, { Component } from "react"

import styles from './generic-vehicle.module.scss'


class GenericVehicle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isEnabled: true,
      enabledFunction: () => true
    }
  }

  render = () => (
    <div className={styles.genericVehicle}>



    </div>
  )
}
export default GenericVehicle
