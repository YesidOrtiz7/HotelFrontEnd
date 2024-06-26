import { getClients } from "./useFetch";
import { Link } from "react-router-dom";

import DeleteClient from "../eliminarCliente/DeleteClient";
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
                                    <tr key={cliente.idCliente}>
                                        <td>{cliente.documentoCliente}</td>
                                        <td>{cliente.primerNombreCliente}</td>
                                        <td>{cliente.segundoNombreCliente}</td>
                                        <td>{cliente.primerApellidoCliente}</td>
                                        <td>{cliente.segundoApellidoCliente}</td>
                                        <td>{cliente.celularCliente}</td>
                                        <td><DeleteClient idClient={cliente.idCliente} /></td>
                                    </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

        </div>
    );
}