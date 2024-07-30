import React, { useState } from "react";

import deleteRoom from '../useFetch';

export default function DeleteRoom(props) {
    const [message, setMessage] = useState('');

    return (
        <div>
            <form id="delete-room-form" onSubmit={(event) => deleteRoom(event, props.idRoom, setMessage)}>
                <input type="submit" value="Eliminar" className="boton botonRojo"/>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}