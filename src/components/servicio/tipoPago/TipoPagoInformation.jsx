import { useState } from "react";
import DeleteTipoPago from "./DeleteTipoPago";

export default function TipoPagoInformation({ paymentType }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <tr key={paymentType.idPago}>
                <td>{paymentType.descripcionPago}</td>
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
                            <DeleteTipoPago tipo={paymentType}/>
                            {/* <form action={`/actualizarmunicipio/${municipio.idMunicipios}`} method="get">
                                <input type="submit" value="Actualizar" />
                            </form> */}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}