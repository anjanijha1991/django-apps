import React from 'react'
import HeaderRoutingInfo from '../RoutingInfo-header'
import ContentRoutingInfo from '../RoutingInfo-content'
import Footer from '../Footer'
import '../assets/css/App.css';

const App = () => (
  <div>
    <HeaderRoutingInfo />
    <ContentRoutingInfo />
    <Footer />
  </div>
)

export default App
