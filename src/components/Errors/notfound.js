import React, { Component , useParams} from 'react'
import axios from 'axios'
import env from '../../config/env'
import { connect } from 'react-redux'

class NotFound extends Component {
    render() {
        return (
            <div> 404 </div>
        );
    }
}

export default NotFound