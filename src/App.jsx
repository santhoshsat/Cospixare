import { useState } from 'react'
import './App.css'
import Navbar from './Components/nav_bar/nav_bar'
import Footer from './Components/footer/footer'
import UIXServicePage from './Components/ux-ui/ux-ui'
import ThankYouSection from './Components/Thank_you/thank-you'
import WebDevelopmentPage from './Components/web-dev/web-dev'

function App() {
  
  return (
    <>
     <Navbar/>
     <ThankYouSection/>
     <UIXServicePage/>
     
     <WebDevelopmentPage/>
     <Footer/>
     
    </>
  )
}

export default App
