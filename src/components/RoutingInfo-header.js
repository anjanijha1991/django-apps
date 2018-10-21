import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeHeader from './HomeHeader'
import Header from './Header'


const HeaderRoutingInfo = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeHeader} />
      <Route exact path='/home' component={HomeHeader} />
      <Route path="/**/" component={Header} />
    </Switch>
  </main>
)

export default HeaderRoutingInfo
