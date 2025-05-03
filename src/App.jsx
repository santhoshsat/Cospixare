import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader } from './utils'
import { NavBar, Home, About, Contact } from './components'

function App() {

  return (
    <>
      <h1>CosPixare Technology</h1>
      <CustomPreLoader />
      <CustomCursor />
      <GoogleAnalytics />
      <NavBar />
      <Home />
      <About />
      <Contact />
    </>
  )
}

export default App
