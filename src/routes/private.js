import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../middleware/auth'

function PrivateRoute ({component: Component, authed, ...rest}) {
    const checkAuth = Auth()
    return (
      <Route
        {...rest}
        render={(props) => checkAuth  === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} 
          />}
      />
    )
  }
// export default connect(mapStateToProps)(Index)
export default PrivateRoute 