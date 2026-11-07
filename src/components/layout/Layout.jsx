import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <div>
      <Header/>
      <main id="main-content" tabIndex={-1}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
