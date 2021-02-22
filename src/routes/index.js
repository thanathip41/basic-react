import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute  from './private'

import Home from '../components/Index/index'
import Create from '../components/Create/create'
import Edit from '../components/Edit/edit'
import Auth from '../components/Auth/auth'
import Login from '../components/Auth/login'
import NotFound from '../components/Errors/notfound'
const user = {
  id : '1',
  username : 'thanathipz'
}

const router = () => (
  <Switch>
    <Route exact path="/" component={() => <Home user={user}></Home>} />
    <Route path="/create" component={Create}  />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/login" component={Login} />
    {/* <Route path="/login" render={(props) => <Login {...props}/>}/> */}

    <PrivateRoute  path='/auth' user={user} component={Auth} />

    {/* ####################################### */}
    <Route path='*'component={NotFound}></Route>
  </Switch>
)
export default router