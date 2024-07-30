import { useState } from "react";

import {deleteRoomStatus} from "./useFetch";

export default function DeleteRoomStatus(props){
    const [message, setMessage] = useState('');

    return (
        <div>
            <form id="delete-roomstatus-form" onSubmit={(event) => deleteRoomStatus(event, props.idRoomStatus, setMessage)}>
                <input type="submit" value="Eliminar" className="boton botonRojo"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}