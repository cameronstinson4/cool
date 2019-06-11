import React, { Component } from "react"
import axios from 'axios'

import Layout from '../components/layout/layout'

class FactorioPage extends Component {
    constructor(props) {
        super(props)
        this.response = {};

    }

    activateLasers() {
        axios.get('https://8cjemcrb4e.execute-api.us-east-1.amazonaws.com/default/StopEC2Instances')
            .then(response => this.response = response)
    }

    render = () => (
        <Layout>
            <h1>Here's a button that turns off the factorio server</h1>
            <p>Please don't touch it</p>

            <button onClick={this.activateLasers}>
                Activate Lasers
            </button>
            <p>{this.response}</p>
        </Layout>
    )
}

export default FactorioPage
