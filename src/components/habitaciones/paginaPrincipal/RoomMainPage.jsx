import "../../../App.css"

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getRooms } from "../useFetch";
import RoomInformation from "../RoomInformation";

export default function RoomMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getRooms(setData, setMessage, setLoading);
    }, []);

    return (
        <div className="contenedorHijo">
            <div className="enlaces">
                <Link id="newroom" to="/nuevahabitacion" className="enlace-boton enlace-boton_azul">Crear nueva habitacion</Link>
                <Link id="roomType" to="/tipohabitaciones" className="enlace-boton enlace-boton_azul">Gestionar tipos de habitaciones</Link>
                <Link id="roomStatus" to="/estadoshabitaciones" className="enlace-boton enlace-boton_azul">Gestionar estados de habitaciones</Link>
            </div>
            {!loading &&
                <div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Numero Habitacion</th>
                                <th>Estado</th>
                                <th>Tipo</th>
                                <th>Precio</th>
                                <th>Camas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((room) => (
                                    <RoomInformation room={room} />))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {message && <div>{message}</div>}
        </div>
    );
}