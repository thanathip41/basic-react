import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../middleware/auth'

function PrivateRoute ({component: Component, user, ...rest}) {
    const checkAuth = Auth()
    console.log(rest)
    return (
      <Route
        // {...rest}
         render={(props) => {
          return checkAuth  === true
          ? <Component {...props} />
          : <Redirect to={ {pathname: '/login', state: {user} }} 
          />
         }
        }
      />
    )
  }
// export default connect(mapStateToProps)(Index)
export default PrivateRoute 