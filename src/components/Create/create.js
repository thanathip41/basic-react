import React, { Component } from 'react'
import axios from 'axios'
import env from '../../config/env'
import { connect } from 'react-redux'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.DOM = document.querySelector.bind(document)
    }

    submitCreate = async(e) => {
        e.preventDefault();
        const username = this.DOM('#username').value
        const email = this.DOM('#email').value
        const name = this.DOM('#name').value

        const body = {
            username,
            email,
            name
        }

        const res = await axios.post(`${env.API_URL}/store`,body)
        const data = res.data.data

        this.props.dispatch({
            type: 'ADD',
            data
        }) 

        this.DOM('#username').value = '' 
        this.DOM('#name').value = '' 
        this.DOM('#email').value = '' 
      
    }

    render() {
        return (
            <div className="row">
                <form className="form" onSubmit={this.submitCreate}>
                    <input type="text" className="form-control" id="username" placeholder="username" required/>
                    <input type="text" className="form-control" id="email" placeholder="email" required/>
                    <input type="text" className="form-control" id="name" placeholder="name" required/>
                    <button className="btn btn-primary"> submit </button>
                </form>
            </div>
        )
    }
}

export default  connect()(Create)
