import { useState } from "react";

import ReceptionistInformation from "../ReceptionistInformation";
import { getReceptionist } from "../useFetch";
export default function GetReceptionist() {
    const [queryType, setQueryType] = useState('byDocument');
    const [idOrDocument, setIdOrDocument] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState(null);

    return (
        <div>
            <div>
                <h2>Buscar Recepcionista</h2>
                <form id="get-receptionist-form"
                    onSubmit={(e) => getReceptionist(e, queryType, idOrDocument, setMessage, setData)}>
                    <div className="inputGroup">
                        <label htmlFor="byId">Buscar recepcionista por ID</label>
                        <input
                            type="radio"
                            name="query"
                            id="byId"
                            value="byId"
                            checked={queryType === 'byId'}
                            onChange={(e) => setQueryType(e.target.value)}
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="byDocument">Buscar recepcionista por Documento</label>
                        <input
                            type="radio"
                            name="query"
                            id="byDocument"
                            value="byDocument"
                            checked={queryType === 'byDocument'}
                            onChange={(e) => setQueryType(e.target.value)}
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="text"
                            name="idOrDocument"
                            id="idOrDocument"
                            value={idOrDocument}
                            onChange={(e) => setIdOrDocument(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Consultar" className="boton botonAzul" />
                    </div>
                </form>
            </div>

            {message && <p>{message}</p>}
            {data &&
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
                            <ReceptionistInformation receptionist={data} />
                        }
                    </tbody>
                </table>}
        </div>
    );
}