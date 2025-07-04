import { useState } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';

import Contactanos from './Sections/contactanos/Contactanos';
import Footer from './components/footer/FooterComponent';
import TerminosCondiciones from './components/condiciones/condicion';
import AvisoPrivacidad from './components/Aviso/Privacidad';
import Log from './Sections/login/login';
import Dashboard from './components/Dashboard/Dash';
import HeaderAdministrador from './components/HeaderAdm/HeaderAdmin';
import Sidebar from './components/Sidebar/Sidebar';
import Usuarios from './components/Administrador/Crud/Usuarios';

function AppContent() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  // Mostrar sidebar y header en rutas administrativas
  const showAdminLayout = ['/dashboard', '/usuarios'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showAdminLayout && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      {showAdminLayout && <HeaderAdministrador setSidebar={setSidebar} />}

      <Routes>
        <Route path="/" element={<Contactanos />} />
        <Route path="/conditions" element={<TerminosCondiciones />} />
        <Route path="/aviso" element={<AvisoPrivacidad />} />
        <Route path="/login" element={<Log />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
