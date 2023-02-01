import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function MainLayout({children}) {
  return (
    <div className="MainLayout">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default MainLayout