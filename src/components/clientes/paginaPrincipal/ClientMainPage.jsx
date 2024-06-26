import { getClients } from "./useFetch";
import { Link } from "react-router-dom";

import DeleteClient from "../eliminarCliente/DeleteClient";
import ClientInformation from "../ClientInformation";
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
                                    <ClientInformation cliente={cliente}/>))
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