import React, { Component } from "react"
import axios from 'axios'

import pageStyles from './pages.module.scss'
import Layout from '../components/layout/layout'

class FactorioPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serverResponse: "",
            instances: []
        };
        this.toggleServerStatus = this.toggleServerStatus.bind(this);
        this.getServerStatus = this.getServerStatus.bind(this);
    }

    componentDidMount() {
        this.getServerStatus();
    }

    getServerStatus() {
        axios.get('https://8cjemcrb4e.execute-api.us-east-1.amazonaws.com/default/getServerStatus')
            .then(response => {

                let instances = []

                for (let instance in response.data) {
                    instances.push({
                        id: instance,
                        status: response.data[instance].status,
                        publicIp: response.data[instance].public_ip_address,
                        instanceType: response.data[instance].instance_type
                    })
                }
                this.setState({ instances: instances })
                setTimeout(this.getServerStatus, 2000)

            })
    }

    toggleServerStatus(event) {

        const formData = new FormData(event.target);
        const postBody = {
            secret: formData.get("secret"),
            instance_id: formData.get("instance_id")
        }
        
        axios.post('https://8cjemcrb4e.execute-api.us-east-1.amazonaws.com/default/StopEC2Instances', postBody)
            .then(response => {
                this.setState({ serverResponse: response.data.body })
            })

        event.preventDefault();

    }

    render = () => (
        <Layout>
            <h3>Current EC2 Status: </h3>
            <hr></hr>
            {
                this.state.instances.map((instance) =>
                    <div key={instance.id}>

                        {instance.publicIp} : {instance.status}
                        <br></br>
                        {instance.instanceType} : {instance.name}
                        <br></br>

                        <h4>Secret is required to alter instance state</h4>

                        <form onSubmit={this.toggleServerStatus}>
                            <label>
                                Secret:
                                <input type="text" name="secret" />
                                <input type="hidden" name="instance_id" value={instance.id} />

                            </label>
                            <input className={pageStyles.formSubmitButton} type="submit" value={instance.status === "stopped" ? "Start" : "Stop"} />
                        </form>
                    </div>
                )
            }
            <hr></hr>

            <p>{this.state.serverResponse}</p>
        </Layout>
    )
}

export default FactorioPage
