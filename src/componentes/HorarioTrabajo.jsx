import React, { useState } from 'react';
import '../styles/horariotrabajo.css'; // Ajusta la ruta si es necesario

function WorkSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [employee, setEmployee] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addSchedule = () => {
    if (employee && startTime && endTime) {
      const newSchedule = { employee, startTime, endTime };
      setSchedules([...schedules, newSchedule]);
      setEmployee('');
      setStartTime('');
      setEndTime('');
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Registro de Horarios</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Empleado"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          className="input"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="input"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="input"
        />
        <button onClick={addSchedule} className="button">
          Registrar
        </button>
      </div>

      <ul className="list">
        {schedules.map((schedule, index) => (
          <li key={index} className="listItem">
            <strong>{schedule.employee}</strong>: {schedule.startTime} - {schedule.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkSchedule;
