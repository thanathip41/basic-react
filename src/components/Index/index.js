import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './index.css';
import env from '../../config/env'
import { connect } from 'react-redux'

class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users: []
        }
        this.store = props.store
        this.DOM = document.querySelector.bind(document)
        console.log(props.user)
    }

    async componentDidMount() {
    
        if(!this.store.data?.length){
            const response = await axios.get(`${env.API_URL}/index`)
            const data = await response.data.data
        
            this.props.dispatch({
                type: 'LOAD',
                data
            })

        } 
        this.setState({ users : this.store.data }) 
    }

    componentDidUpdate(prevProps , prevState, snapshot) {
        // console.log('this mount on updated !')
    }

    delete = async (e) => {
        const id = parseInt(e.target.getAttribute('data-id'))
        const res = await axios.delete(`${env.API_URL}/delete/${id}`)
        const data = res.data
        if(data.result === 'Success') {
            this.props.dispatch({
                type: 'DELETE',
                data: { id }
            })
            this.setState({ users : this.store.data })
        }
    }

    render() {
        const users = []
        for (const i in this.state.users) {
            const user = this.state.users[i]
            const tr = <tr key={i}>
                <td> {user.id}</td>
                <td> {user.username}</td>
                <td> {user.email}</td>
                <td> {user.name}</td>
                <td> 
                    <Link to={`edit/${user.id}`} className="btn btn-warning">  edit </Link>
                    <button className="btn btn-danger" onClick={this.delete} data-id={user.id}>  delete </button>
                </td>
            </tr>
          users.push(tr)
        }
        return (
            <div className="row">
                <div className="col-md-12 mr-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>email</th>
                                <th>name</th>
                                <th>action </th>
                            </tr>
                        </thead>
                        <tbody>
                            { users}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        store:state.users
    }
}

export default connect(mapStateToProps)(Index)