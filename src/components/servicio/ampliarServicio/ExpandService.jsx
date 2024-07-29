import { useParams } from "react-router-dom";
import { useState } from "react";
import { expandService } from "../useFetch";
export default function ExpandService(){
    const {idService}=useParams();
    const [message, setMessage]=useState('');
    const [dia, setDia]=useState(0);
    const [hora, setHora]=useState(0);
    const [minuto, setMinuto]=useState(0);
    // const clearForm=()=>{
    //     setDia(0);
    //     setHora(0);
    //     setMinuto(0);
    // }
    const formData={
        service: idService,
        dia: dia,
        hora: hora,
        minuto: minuto
    }
    return(
        <div>
            <h2>Expandir la duracion del servicio</h2>
            {message && <p>{message}</p>}
            <form onSubmit={(e)=>expandService(e,formData,setMessage)}>
                <label htmlFor="">Dias</label>
                <input type="number" name="dia" value={dia} onChange={e=>setDia(e.target.value)}/>
                <label htmlFor="">Horas</label>
                <input type="number" name="hora" value={hora} onChange={e=>setHora(e.target.value)}/>
                <label htmlFor="">Minutos</label>
                <input type="number" name="minuto" value={minuto} onChange={e=>setMinuto(e.target.value)}/>
                <div>
                    <input type="submit" value="Aceptar" />
                </div>
            </form>
        </div>
    );
}