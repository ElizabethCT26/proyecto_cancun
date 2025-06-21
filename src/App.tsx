import Info from './Sections/Informacion/Informacion'
import Contactanos from './components/Contacto/contactanos'
import Home from './components/Home/Home'
import Footer from './components/footer/FooterComponent'
import Header from './components/header/Header'



function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    
        <Header />
        <Home />
        <Info />
        <Contactanos/>
        <Footer />
        
      </div>
    </>
  )
}

export default App