import DeleteClient from "./eliminarCliente/DeleteClient";

import { useState } from "react";

export default function ClientInformation({ cliente }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <tr key={cliente.idCliente}>
                <td>{cliente.documentoCliente}</td>
                <td>{cliente.primerNombreCliente}</td>
                <td>{cliente.segundoNombreCliente}</td>
                <td>{cliente.primerApellidoCliente}</td>
                <td>{cliente.segundoApellidoCliente}</td>
                <td>{cliente.celularCliente}</td>
                <td>
                    <button onClick={toggleExpand} className="boton botonAzul">
                        {isExpanded ? "Cerrar" : "Opciones"}
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="7">
                        <div className="contenedorBoton">
                            <DeleteClient idClient={cliente.idCliente} />
                            <form action={`/cliente/${cliente.idCliente}`} method="get">
                                <input type="submit" value="Actualizar" className="botonAzul boton"/>
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}