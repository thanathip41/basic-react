import { connect } from 'react-redux'
import React, { Component} from 'react'
import store from '../reducers/index'
const auth = () => {
    // console.log(this.props)
    const id = localStorage.getItem("id")
    let auth = false
        if(id) auth = true
    return auth 
}
export default auth
// class Auth {
//     constructor() {
//         console.log(this.props)
//     }
//     auth () {
//         const id = localStorage.getItem("id")
//         let auth = false
//             if(id) auth = true
//         return auth 
//     }

// }
// export default (connect)(Auth)


// class Auth {
    
// }

// const mapStateToProps = (state) => {
//     return {
//         store:state.users
//     }
// }

// export default connect(mapStateToProps)(Auth)
