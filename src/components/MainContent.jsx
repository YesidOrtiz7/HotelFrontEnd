import React from "react";
import { Link } from "react-router-dom";

export default function MainContent() {
    return (
        <div>
            <ul>
                <li key="id"><Link id="clients" to="/clientes">Gestionar Clientes</Link></li>
                <li key="rooms"><Link id="rooms" to="/habitaciones">Gestionar habitaciones</Link></li>
                <li key="roomType"><Link id="roomType" to="/tipohabitaciones">Gestionar tipos de habitaciones</Link></li>
                <li key="roomStatos"><Link id="roomStatus" to="/estadoshabitaciones">Gestionar estados de habitaciones</Link></li>
            </ul>

        </div>
    );
}