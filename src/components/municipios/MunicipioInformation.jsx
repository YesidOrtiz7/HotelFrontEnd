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
                    <button onClick={toggleExpand}>
                        {isExpanded ? "Cerrar" : "Opciones"}
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="7">
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <DeleteMunicipio municipio={municipio}/>
                            <form action={`/actualizarmunicipio/${municipio.idMunicipios}`} method="get">
                                <input type="submit" value="Actualizar" />
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}