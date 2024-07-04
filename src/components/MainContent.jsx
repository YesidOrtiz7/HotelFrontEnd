import "../App.css"

import React from "react";
import { Link } from "react-router-dom";

export default function MainContent() {
    return (
        <div>
            <div className="enlaces">
                <Link id="clients" to="/clientes" className="enlace-boton enlace-boton_azul">Gestionar Clientes</Link>
                <Link id="rooms" to="/habitaciones" className="enlace-boton enlace-boton_azul">Gestionar habitaciones</Link>
            </div>

        </div>
    );
}