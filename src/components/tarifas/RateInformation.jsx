import { useState } from "react";
import DeleteRate from "./eliminarTarifa/DeleteRate";

export default function RateInformation({rate}){
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return(
        <>
        <tr key={rate.idTipoTarifa}>
                <td>{rate.descripcionTarifa}</td>
                <td className="columna_centrada">{rate.porcentajeTarifa}%</td>
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
                            {/* <form action={`/cambiarEstado/${room.idRoom}`} method="get">
                                <input type="submit" value="Cambiar Estado" />
                            </form> */}
                            <DeleteRate rate={rate}/>
                            <form action={`/actualizartarifa/${rate.idTipoTarifa}`} method="get">
                                <input type="submit" value="Actualizar" className="boton botonAzul"/>
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}