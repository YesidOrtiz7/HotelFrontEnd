import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {getRoomStatusById,updateRoomStatus} from "./useFetch";
import { Link } from "react-router-dom";

export default function UpdateRoomType() {
  const [roomStatusData, setRoomStatusData] = useState({
    idStatus: '',
    statusName: '',
  });
  const [message, setMessage] = useState('');

  const {id}=useParams();

  useEffect(() => {
    getRoomStatusById(id, setRoomStatusData, setMessage);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomStatusData({
      ...roomStatusData,
      [name]: value
    });
  };

  return (
    <div className="formulario">
      <Link id="roomStatus" to="/estadoshabitaciones">Gestionar estados de habitaciones</Link>
      <h2>Actualizar tipo habitacion</h2>
      {message && <p>{message}</p>}
      <form id="update-client-form" onSubmit={(event) => updateRoomStatus(event, roomStatusData, setMessage)}>
        <div className="inputGroup">
          <label>Descripcion estado habitacion</label>
          <input
            name="statusName"
            type="text"
            value={roomStatusData.statusName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="boton botonAzul">Actualizar</button>
      </form>
    </div>
  );
}