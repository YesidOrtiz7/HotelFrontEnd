import { useState } from "react";
import { addNewMunicipio } from "../useFetch";
export default function NewMunicipio() {
    const [nombreMun, setNombreMun] = useState('');

    const [message,setMessage]=useState('');

    const clearForm = () => {
        setNombreMun('');
    }

    const formData = {
        nombreMun,
    }

    return (
        <div>
            {message && <p>{message}</p>}
            <form id="rate-form" onSubmit={(event) => addNewMunicipio(event, formData, setMessage, clearForm)}>
                <div>

                    <label>Nombre Municipio</label>
                    <input
                        name="nombreMun"
                        type="text"
                        value={nombreMun}
                        onChange={(e) => setNombreMun(e.target.value)}
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}