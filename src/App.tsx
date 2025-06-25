import Contactanos from './Sections/contactanos/Contactanos'
import Footer from './components/footer/FooterComponent'
import TerminosCondiciones from './components/condiciones/condicion'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AvisoPrivacidad from './components/Aviso/Privacidad'



function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    

          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Contactanos/>}/>
                <Route path='conditions' element={<TerminosCondiciones/>}/>
                <Route path='aviso' element={<AvisoPrivacidad/>}/>
              </Routes>
          </BrowserRouter>
        <Footer />
        
        
      </div>
    </>
  )
}

export default App