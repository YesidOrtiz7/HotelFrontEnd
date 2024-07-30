import { useState } from "react";
import DeleteMunicipio from "./eliminarMunicipio/DeleteMunicipio";

export default function MunicipioInformation({ municipio }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <tr key={municipio.idMunicipios}>
                <td>{municipio.nombreMun}</td>
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
                            <DeleteMunicipio municipio={municipio}/>
                            <form action={`/actualizarmunicipio/${municipio.idMunicipios}`} method="get">
                                <input type="submit" value="Actualizar" className="boton botonAzul"/>
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}