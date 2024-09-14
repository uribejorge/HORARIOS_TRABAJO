import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './componentes/Navbar';
import Horariotrabajo from './componentes/HorarioTrabajo';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <br />
    <Horariotrabajo/>
    
  </StrictMode>,
)
