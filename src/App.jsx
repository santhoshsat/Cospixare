import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader, Terms, ThankYou, Privacy } from './utils'
import { NavBar, Home, About, Contact, 
  Career, Service,  Footer, DigitalMarketing,
  Cloud, Logo, Uiux, Software, Web, CourseList, CourseLandingPage, WebDev
} from './components'

function App() {

  return (
    <>
      <WebDev />
      {/* <CustomPreLoader />
      <CustomCursor />
      <GoogleAnalytics />
      <NavBar /> */}
      {/* <Routes>
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
        <Route path='/terms' element={<Terms />} />
        <Route path='/policy' element={<Privacy />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/courseList' element={<CourseList />} />
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App
