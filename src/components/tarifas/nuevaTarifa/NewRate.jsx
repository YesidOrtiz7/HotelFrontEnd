import { useState } from "react";
import { addNewRate } from "../useFetch";
export default function NewRate() {
    const [descripcionTarifa, setDescripcionTarifa] = useState('');
    const [porcentajeTarifa, setPorcentajeTarifa] = useState(0);

    const [message,setMessage]=useState('');

    const clearForm = () => {
        setDescripcionTarifa('');
        setPorcentajeTarifa(0);
    }

    const formData = {
        descripcionTarifa,
        porcentajeTarifa,
    }

    return (
        <div className="formulario">
            {message && <p>{message}</p>}
            <form id="rate-form" onSubmit={(event) => addNewRate(event, formData, setMessage, clearForm)}>
                <div className="inputGroup">

                    <label>Descripcion Tarifa</label>
                    <input
                        name="descripcionTarifa"
                        type="text"
                        value={descripcionTarifa}
                        onChange={(e) => setDescripcionTarifa(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <label>Porcentaje tarifa</label>
                    <input
                        name="porcentajeTarifa"
                        type="number"
                        value={porcentajeTarifa}
                        onChange={(e) => setPorcentajeTarifa(e.target.value)}
                    />

                </div>

                <button type="submit" className="boton botonAzul">Enviar</button>
            </form>
        </div>
    );
}