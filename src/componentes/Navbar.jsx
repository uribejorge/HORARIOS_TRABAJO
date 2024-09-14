
import React from 'react';
import '../styles/navbar.css';

function Navbar({ setActivePage }) {

  return (
    <nav>
      <button onClick={() => setActivePage('WorkSchedule')}>Horarios</button>
      <button onClick={() => setActivePage('ExtraHours')}>Horas Extra</button>
      <button onClick={() => setActivePage('Reports')}>Reportes</button>
    </nav>
  );
}

export default Navbar;