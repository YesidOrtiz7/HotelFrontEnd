import React, { useState } from "react";

import deleteClient from './queryDeleteClient';

export default function DeleteClient(props) {
    const [message, setMessage] = useState('');

    return (
        <div>
            <form id="delete-client-form" onSubmit={(event) => deleteClient(event, props.idClient, setMessage)}>
                <input type="submit" value="Eliminar" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}