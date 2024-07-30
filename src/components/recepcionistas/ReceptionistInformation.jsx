import { useState } from "react";
export default function ReceptionistInformation({receptionist}){
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <tr key={receptionist.idRecep}>
                <td>{receptionist.docRecep}</td>
                <td>{receptionist.receptionistNames}</td>
                <td>{receptionist.receptionistLastNames}</td>
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
                            {/* <DeleteClient idClient={cliente.idCliente} /> */}
                            <form action={`/actualizar/${receptionist.idRecep}`} method="get">
                                <input type="submit" value="Actualizar" className="boton botonAzul"/>
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}