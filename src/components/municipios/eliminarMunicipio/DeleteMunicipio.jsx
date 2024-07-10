import { deleteMunicipio } from "../useFetch";

import { useState } from "react";

export default function DeleteMunicipio({municipio}){
    const [message,setMessage]=useState('');
    return(
        <div>
            <form id="delete-municipio-form" onSubmit={(e)=>deleteMunicipio(e,municipio,setMessage)}>
                <input type="submit" value="Eliminar"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}