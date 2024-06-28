import { getClients } from "../useFetch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import ClientInformation from "../ClientInformation";
//const API_SERVER = "http://localhost:8080/";

export default function ClientMainPage() {
    //const { data, loading, error } = getClients(`${API_SERVER}cliente/clientes`);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    //const [controller, setController] = useState(null);

    useEffect(()=>{
        //const abortController=new AbortController();
        //setController(abortController);
        getClients(setData, setMessage, setLoading);
    },[]);

    return (
        <div id="client-main-page">

            {!loading &&
                <div>
                    <Link id="newClient" to="/registro">Registrar Cliente</Link>
                    <Link id="clientQuery" to="/buscar">Buscar Cliente</Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Primer Nombre</th>
                                <th>Segundo Nombre</th>
                                <th>Primer Apellido</th>
                                <th>Segundo Apellido</th>
                                <th>Celular</th>
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