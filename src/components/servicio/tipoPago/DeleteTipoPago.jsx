//import { deleteTipoPago } from "./useFetch";
import { deleteQuery } from "../../useFetch";
//servicio/eliminar

import { useState } from "react";

export default function DeleteTipoPago({tipo}){
    const [message,setMessage]=useState('');
    return(
        <div>
            <form id="delete-municipio-form" onSubmit={(e)=>deleteQuery(tipo,setMessage,`tipoPago/eliminar`)}>
                <input type="submit" value="Eliminar" className="boton botonRojo"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}