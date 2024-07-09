import {deleteRate} from "../useFetch";

import { useState } from "react";

export default function DeleteRate({rate}){
    const [message, setMessage] = useState('');
    return(
        <div>
            <form id="delete-rate-form" onSubmit={(event) => deleteRate(event, rate, setMessage)}>
                <input type="submit" value="Eliminar" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}