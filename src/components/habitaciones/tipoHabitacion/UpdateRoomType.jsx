import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {getRoomTypeById,updateRoomType} from "./useFetch";
import { Link } from "react-router-dom";

export default function UpdateRoomType() {
  const [roomTypeData, setRoomTypeData] = useState({
    idRoomType: '',
    roomTypeDescription: '',
  });
  const [message, setMessage] = useState('');

  const {id}=useParams();

  useEffect(() => {
    getRoomTypeById(id, setRoomTypeData, setMessage);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomTypeData({
      ...roomTypeData,
      [name]: value
    });
  };

  return (
    <div className="formulario">
      <Link id="roomType" to="/tipohabitaciones">Gestionar tipos de habitaciones</Link>
      <h2>Actualizar tipo habitacion</h2>
      {message && <p>{message}</p>}
      <form id="update-client-form" onSubmit={(event) => updateRoomType(event, roomTypeData, setMessage)}>
        <div className="inputGroup">
          <label>Descripcion tipo habitacion</label>
          <input
            name="roomTypeDescription"
            type="text"
            value={roomTypeData.roomTypeDescription}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="boton botonAzul">Actualizar</button>
      </form>
    </div>
  );
}