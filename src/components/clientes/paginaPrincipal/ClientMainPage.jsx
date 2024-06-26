import { getClients } from "./useFetch";
import { Link } from "react-router-dom";

//import {clientes, getClientes} from './clientsQuerys'
const API_SERVER = "http://localhost:8080/";

export default function ClientMainPage() {
    const { data, loading, error } = getClients(`${API_SERVER}cliente/clientes`);

    return (
        <div id="client-main-page">

            {!loading &&
            <div>
            <Link id="newClient" to="/registro">Registrar Cliente</Link>
            <Link id="clientQuery" to="/buscar">Buscar Cliente</Link>
                <table>
                    <tr>
                        <th>Documento</th>
                        <th>Primer Nombre</th>
                        <th>Segundo Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Celular</th>
                    </tr>
                    {
                        data?.map((cliente) => (
                            <tr>
                                <td>{cliente.documentoCliente}</td>
                                <td>{cliente.primerNombreCliente}</td>
                                <td>{cliente.segundoNombreCliente}</td>
                                <td>{cliente.primerApellidoCliente}</td>
                                <td>{cliente.segundoApellidoCliente}</td>
                                <td>{cliente.celularCliente}</td>
                            </tr>))
                    }
                </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

        </div>
    );
}