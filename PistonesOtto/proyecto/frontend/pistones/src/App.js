import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage';
import SeguimientoPage from './pages/SeguimientoPage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';
// import SeguiemtoSearch from './components/SeguimientoSearch';


function App() {
  return (
    <div className="App">  
     
    

     <BrowserRouter>
       <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/seguimiento" element={<SeguimientoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
     </BrowserRouter>
   {/* <SeguiemtoSearch /> */}
      <Footer/> 

    </div>
  );
}

export default App;
