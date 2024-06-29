import React, { useState } from "react";
import { addNewRoomStatus } from "./useFetch";

export default function NewRoomStatus() {
  
  const [statusName, setStatusName] = useState('');
  const [message, setMessage] = useState('');


  const clearForm = () => {
    setStatusName('');
  };

  const formData = {
    statusName,
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <form id="client-form" onSubmit={(event) => addNewRoomStatus(event, formData, setMessage, clearForm)}>
        <div>
        
          <label>Descripcion estado habitación</label>
          <input
            name="statusName"
            type="text"
            value={statusName}
            onChange={(e) => setStatusName(e.target.value)}
          />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
