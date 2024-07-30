//import "./updateRoom.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoomById, updateRoom } from "../useFetch";
import { getRoomStatus } from "../estadosHabitacion/useFetch";
import { getRoomType } from "../tipoHabitacion/useFetch";

export default function UpdateRoom() {
  //const [idRoom, setIdRoom]=useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [idRoomStatus, setIdRoomStatus] = useState('');
  const [roomStatuses, setRoomStatuses] = useState([]);
  const [roomType, setRoomType] = useState('');
  const [roomTypes, setRoomTypes] = useState([]);
  const [roomPrice24Hours, setRoomPrice24Hours] = useState('');
  const [bedsNumber, setBedsNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const setRoomData = (roomData) => {
    // setIdRoom(roomData.idRoom);
    setRoomNumber(roomData.roomNumber);
    setIdRoomStatus(roomData.idRoomStatus.idStatus);
    setRoomType(roomData.roomType.idRoomType);
    setRoomPrice24Hours(roomData.roomPrice24Hours);
    setBedsNumber(roomData.bedsNumber);
  };

  const clearForm = () => {
    setRoomNumber('');
    setIdRoomStatus('');
    setRoomType('');
    setRoomPrice24Hours('');
    setBedsNumber('');
  };

  const { roomId } = useParams();

  useEffect(() => {
    getRoomStatus(setRoomStatuses, setMessage, setLoading);
    getRoomType(setRoomTypes, setMessage, setLoading);
    getRoomById(roomId, setRoomData, setMessage, setLoading);
  }, [roomId]);

  const formData = {
    roomNumber,
    idRoomStatus: roomStatuses.find(status => status.idStatus === parseInt(idRoomStatus)),
    roomType: roomTypes.find(type => type.idRoomType === parseInt(roomType)),
    roomPrice24Hours,
    bedsNumber,
    idRoom: roomId
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRoom(event, formData, setMessage);
  };

  return (
    <div className="formulario">
      {message && <p>{message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form
          id="update-room-form"
          onSubmit={handleSubmit}
          >
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
            <label>Room Status</label>
            <select value={idRoomStatus} onChange={(e) => setIdRoomStatus(e.target.value)}>
              <option value="">Select Status</option>
              {roomStatuses.map(status => (
                <option key={status.idStatus} value={status.idStatus}>
                  {status.statusName}
                </option>
              ))}
            </select>
          </div>
          <div className="inputGroup">
            <label>Room Type</label>
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option value="">Select Type</option>
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
            <button type="submit" className="boton botonAzul">Actualizar</button>
          </div>
        </form>
      )}
    </div>
  );
}