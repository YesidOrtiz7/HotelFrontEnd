import React, { useState } from "react";
import { addNewRoomType } from "./useFetch";

export default function NewRoomType() {
  
  const [roomTypeDescription, setRoomTypeDescription] = useState('');
  const [message, setMessage] = useState('');


  const clearForm = () => {
    setRoomTypeDescription('');
  };

  const formData = {
    roomTypeDescription,
  };

  return (
    <div className="formulario">
      {message && <p>{message}</p>}
      <form id="client-form" onSubmit={(event) => addNewRoomType(event, formData, setMessage, clearForm)}>
        <div className="inputGroup">
        
          <label>Descripcion tipo habitación</label>
          <input
            name="roomTypeDescription"
            type="text"
            value={roomTypeDescription}
            onChange={(e) => setRoomTypeDescription(e.target.value)}
          />
        </div>
        
        <button type="submit" className="boton botonAzul">Enviar</button>
      </form>
    </div>
  );
}
