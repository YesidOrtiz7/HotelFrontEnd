import React, { useState, useEffect } from "react";
import { addNewRoom } from "../useFetch";
import { getRoomStatus } from "../estadosHabitacion/useFetch";
import { getRoomType } from "../tipoHabitacion/useFetch";

export default function NewRoom() {
  const [roomNumber, setRoomNumber] = useState('');
  const [idRoomStatus, setIdRoomStatus] = useState(0);
  const [roomStatuses, setRoomStatuses] = useState([]);
  const [roomType, setRoomType] = useState(0);
  const [roomTypes, setRoomTypes] = useState([]);
  const [roomPrice24Hours, setRoomPrice24Hours] = useState('');
  const [bedsNumber, setBedsNumber] = useState('');

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);


  const clearForm = () => {
    setRoomNumber(''),
      setIdRoomStatus(''),
      setRoomType(''),
      setRoomPrice24Hours('');
    setBedsNumber('');
  };

  const formData = {
    roomNumber,
    idRoomStatus: roomStatuses.find(status => status.idStatus === idRoomStatus),
    roomType: roomTypes.find(type => type.idRoomType === roomType),
    roomPrice24Hours,
    bedsNumber,
  };

  useEffect(() => {
    getRoomStatus(setRoomStatuses, setMessage, setLoading);
    getRoomType(setRoomTypes, setMessage, setLoading);
  }, []);


  return (
    <div className="formulario">
      {message && <p>{message}</p>}
      <form id="client-form" onSubmit={(event) => addNewRoom(event, formData, setMessage, clearForm)}>
        <div className="inputGroup">
          <label>Numero Habitacion</label>
          <input
            name="roomNumber"
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Estado</label>
          <select value={idRoomStatus} onChange={(e) => setIdRoomStatus(parseInt(e.target.value))}>
            <option value="">Seleccione Estado</option>
            {roomStatuses.map(status => (
              <option key={status.idStatus} value={status.idStatus}>
                {status.statusName}
              </option>
            ))}
          </select>
        </div>
        <div className="inputGroup">
          <label>Tipo</label>
          <select value={roomType} onChange={(e) => setRoomType(parseInt(e.target.value))}>
            <option value="">Seleccione Tipo</option>
            {roomTypes.map(type => (
              <option key={type.idRoomType} value={type.idRoomType}>
                {type.roomTypeDescription}
              </option>
            ))}
          </select>
        </div>
        <div className="inputGroup">
          <label>Precio Habitacion</label>
          <input
            name="roomPrice24Hours"
            type="number"
            value={roomPrice24Hours}
            onChange={(e) => setRoomPrice24Hours(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Numero de camas</label>
          <input
            name="bedsNumber"
            type="number"
            value={bedsNumber}
            onChange={(e) => setBedsNumber(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="botonAzul boton">Enviar</button>
        </div>
      </form>
    </div>
  );
}
