import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute  from './private'

import Home from '../components/Index/index'
import Create from '../components/Create/create'
import Example from '../components/Example/example'
import Edit from '../components/Edit/edit'
import Auth from '../components/Auth/auth'
import Login from '../components/Auth/login'
import NotFound from '../components/Errors/notfound'

const router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/create" component={Create} />
    <Route path="/example" component={Example} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/login" component={Login} />
    <PrivateRoute  path='/auth' authed="true" component={Auth} />

    {/* ####################################### */}
    <Route path='*'component={NotFound}></Route>
  </Switch>
)
export default router