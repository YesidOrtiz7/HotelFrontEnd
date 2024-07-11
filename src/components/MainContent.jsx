import "../App.css"

import React from "react";
import { Link } from "react-router-dom";

export default function MainContent() {
    return (
        <div>
            <div className="enlaces">
                <Link id="clients" to="/clientes" className="enlace-boton enlace-boton_azul">Gestionar Clientes</Link>
                <Link id="rooms" to="/habitaciones" className="enlace-boton enlace-boton_azul">Gestionar habitaciones</Link>
                <Link id="rate" to="/tarifas" className="enlace-boton enlace-boton_azul">Gestionar tarifas</Link>
                <Link id="municipios" to="/municipios" className="enlace-boton enlace-boton_azul">Gestionar municipios</Link>
                <Link id="tipopago" to="/tiposdepago" className="enlace-boton enlace-boton_azul">Ver Tipos de Pago</Link>
                <Link id="servicios" to="/servicios" className="enlace-boton enlace-boton_azul">Servicios</Link>
                <Link id="recepcionistas" to="/recepcionistas" className="enlace-boton enlace-boton_azul">Gestionar Recepcionistas</Link>
            </div>

        </div>
    );
}