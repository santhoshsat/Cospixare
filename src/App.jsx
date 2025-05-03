import './App.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { CustomCursor, CustomPreLoader, Privacy, Terms, ThankYou } from './utils'
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
      <Cloud />
      <Logo />
      <Uiux />
      <Software />
      <Web />
      {/* <DigitalMarketing /> */}
      {/* <Home />
      <About />
      <Contact />
      <Career />
      <Footer />
      <Privacy />
      <Terms />
      <Service />
      <ThankYou /> */}
    </>
  )
}

export default App
