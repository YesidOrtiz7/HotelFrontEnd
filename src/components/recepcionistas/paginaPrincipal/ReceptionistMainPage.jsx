import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReceptionists } from "../useFetch";
import ReceptionistInformation from "../ReceptionistInformation";
export default function ReceptionistMainPage(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(()=>{
        getReceptionists(setData, setMessage, setLoading);
    },[]);
    return(
        <div>
            {!loading &&
                <div>
                    <div className="enlaces">
                    <Link id="newReceptionist" to="/nuevarecepcionista" className="enlace-boton enlace-boton_azul">Registrar Recepcionista</Link>
                    <Link id="receptionistQuery" to="/buscarrecepcionista" className="enlace-boton enlace-boton_azul">Buscar Recepcionista</Link>
                    </div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((recepcionista) => (
                                    <ReceptionistInformation receptionist={recepcionista}/>))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {message && <div>{message}</div>}
        </div>
    );
}