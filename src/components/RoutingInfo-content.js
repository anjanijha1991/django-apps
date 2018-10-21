import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LeftSideBar, RightSideBar,NoSideBar} from './SideBar'
import SignUpLogin from './SignUpLogin'
import Login from './Login'
import SignUp from './SignUp'
 
const ContentRoutingInfo = () => (
	<main>
		<Switch>
      <Route path='/leftsidebar' component={LeftSideBar} />
      <Route path='/rightsidebar' component={RightSideBar} />
      <Route path="/nosidebar" component={NoSideBar} />
      <Route path='/loginsignup' component={SignUpLogin} />  
      {/* <Route path='/login' component={Login} />  
      <Route path='/signup' component={SignUp} />       */}
    </Switch>
	</main>
)

export default ContentRoutingInfo
