import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Accounts Director</title>
        <meta property="og:title" content="Corporate Accounts Director" />
      </Helmet>
    </div>
  )
}

export default Home
