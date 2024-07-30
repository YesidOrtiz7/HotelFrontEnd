import { deleteTipoPago } from "./useFetch";

import { useState } from "react";

export default function DeleteTipoPago({tipo}){
    const [message,setMessage]=useState('');
    return(
        <div>
            <form id="delete-municipio-form" onSubmit={(e)=>deleteTipoPago(e,tipo,setMessage)}>
                <input type="submit" value="Eliminar" className="boton botonRojo"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}