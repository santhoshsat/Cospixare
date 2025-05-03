import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader } from './utils'
import { NavBar, Home, About, Contact, 
  Career, Service,  Footer, DigitalMarketing,
  Cloud, Logo, Uiux, Software, Web
} from './components'

function App() {

  return (
    <>
      <CustomPreLoader />
      <CustomCursor />
      <GoogleAnalytics />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service/web_service' element={<Web />} />
        <Route path='/service/software_service' element={<Software />} />
        <Route path='/service/uiux_service' element={<Uiux />} />
        <Route path='/service/logo_service' element={<Logo />} />
        <Route path='/service/cloud_service' element={<Cloud />} />
        <Route path='/service/digitalmarketing_service' element={<DigitalMarketing />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
