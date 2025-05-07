import React from 'react'
import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader } from './utils'
import { NavBar, Footer } from './components'

import AppRoutes from './AppRoutes'

function App() {

  return (
    <>
      <CustomPreLoader />
      <CustomCursor />
      <GoogleAnalytics />
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
