import { useState } from "react";

import {deleteRoomType} from "./useFetch";

export default function DeleteRoomType(props){
    const [message, setMessage] = useState('');

    return (
        <div>
            <form id="delete-roomtype-form" onSubmit={(event) => deleteRoomType(event, props.idRoomType, setMessage)}>
                <input type="submit" value="Eliminar" className="boton botonRojo"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}