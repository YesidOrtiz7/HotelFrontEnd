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
        <div className="formulario">
            <h3>Registrar Nuevo Municipio</h3>
            {message && <p>{message}</p>}
            <form id="rate-form" onSubmit={(event) => addNewMunicipio(event, formData, setMessage, clearForm)}>
                <div className="inputGroup">

                    <label>Nombre Municipio</label>
                    <input
                        name="nombreMun"
                        type="text"
                        value={nombreMun}
                        onChange={(e) => setNombreMun(e.target.value)}
                    />
                </div>

                <button type="submit" className="boton botonAzul">Enviar</button>
            </form>
        </div>
    );
}