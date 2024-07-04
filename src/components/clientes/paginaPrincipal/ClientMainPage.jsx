import "../../../App.css";

import { getClients } from "../useFetch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import ClientInformation from "../ClientInformation";

export default function ClientMainPage() {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(()=>{

        getClients(setData, setMessage, setLoading);
    },[]);

    return (
        <div id="client-main-page">

            {!loading &&
                <div>
                    <div className="enlaces">
                    <Link id="newClient" to="/registro" className="enlace-boton enlace-boton_azul">Registrar Cliente</Link>
                    <Link id="clientQuery" to="/buscar" className="enlace-boton enlace-boton_azul">Buscar Cliente</Link>
                    </div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Primer Nombre</th>
                                <th>Segundo Nombre</th>
                                <th>Primer Apellido</th>
                                <th>Segundo Apellido</th>
                                <th>Celular</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((cliente) => (
                                    <ClientInformation cliente={cliente}/>))
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