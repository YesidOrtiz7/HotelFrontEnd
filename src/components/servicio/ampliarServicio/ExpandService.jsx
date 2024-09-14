import { useParams } from "react-router-dom";
import { useState } from "react";
//import { expandService } from "../useFetch";
import { putQuery } from "../../useFetch";
export default function ExpandService() {
    const { idService } = useParams();
    const [message, setMessage] = useState('');
    const [dia, setDia] = useState(0);
    const [hora, setHora] = useState(0);
    const [minuto, setMinuto] = useState(0);
    
    const ENDPOINT = `servicio/`;

    const formData = {
        service: idService,
        dia: dia,
        hora: hora,
        minuto: minuto
    }
    return (
        <div className="formulario">
            <h2>Expandir la duracion del servicio</h2>
            {message && <p>{message}</p>}
            <form onSubmit={(e) => putQuery(e, formData, setMessage, `${ENDPOINT}extenderServicios`)}>
                <div className="inputGroup">
                    <label htmlFor="">Dias</label>
                    <input type="number" name="dia" value={dia} onChange={e => setDia(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Horas</label>
                    <input type="number" name="hora" value={hora} onChange={e => setHora(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Minutos</label>
                    <input type="number" name="minuto" value={minuto} onChange={e => setMinuto(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Aceptar" className="boton botonAzul" />
                </div>
            </form>
        </div>
    );
}