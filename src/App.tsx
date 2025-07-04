import Contactanos from './Sections/contactanos/Contactanos'
import Footer from './components/footer/FooterComponent'
import TerminosCondiciones from './components/condiciones/condicion'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AvisoPrivacidad from './components/Aviso/Privacidad'
import Log from './Sections/login/login'
import Dashboard from './components/Dashboard/Dash'
import HeaderAdministrador from './components/HeaderAdm/HeaderAdmin'



function App() {


  return (
    <>
     <div className="flex flex-col min-h-screen ">

    

          <BrowserRouter>
              <Routes>
                  <Route path='headerAd' element={<HeaderAdministrador/>}/>
                <Route path='/' element={<Contactanos/>}/>
                <Route path='conditions' element={<TerminosCondiciones/>}/>
                <Route path='aviso' element={<AvisoPrivacidad/>}/>
                <Route path="login" element={<Log />} />
                <Route path='footer' element={<Footer/>}/>
                <Route path='dashboard' element={<Dashboard/>} />
              

                 
              </Routes>
          </BrowserRouter>
      
        
        
      </div>
    </>
  )
}

export default App