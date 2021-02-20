import React, { Component} from 'react'
import axios from 'axios'
import env from '../../config/env'
import { connect } from 'react-redux'

class Edit extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: null
        }
        this.id = this.props.match.params.id
        this.DOM = document.querySelector.bind(document)
    }
    async componentDidMount() {
        const response = await axios.get(`${env.API_URL}/edit/${this.id}`)
        const user = await response.data.data
        this.setState({ user })
        this.valueDOM(user)
    }
    submitUpdate = async(e) => {
        e.preventDefault();
        const username = this.DOM('#username').value
        const email = this.DOM('#email').value
        const name = this.DOM('#name').value

        const body = {
            username,
            email,
            name
        }
        const res = await axios.put(`${env.API_URL}/update/${this.id}`,body)
        const user = res.data.data
        this.props.dispatch({
            type: 'UPDATE',
            data:user
        })
        this.valueDOM(user)

        alert('Updated ! user')
    }

    valueDOM (user) {
        this.DOM('#username').value = user.username
        this.DOM('#name').value =  user.name
        this.DOM('#email').value =  user.email
    }


    render() {
        return (
            <div className="row">
                <form className="form" onSubmit={this.submitUpdate}>
                    <input type="text" className="form-control" id="username"  required/>
                    <input type="text" className="form-control" id="email" required/>
                    <input type="text" className="form-control" id="name" required/>
                    <button className="btn btn-primary"> submit </button>
                </form>
            </div>
        );
    }
}

export default connect()(Edit)