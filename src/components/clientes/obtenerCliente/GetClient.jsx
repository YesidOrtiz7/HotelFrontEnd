import React, { useState } from "react";
import { getClient } from '../useFetch';

import ClientInformation from "../ClientInformation";

export default function GetClient() {
  const [queryType, setQueryType] = useState('byDocument');
  const [idOrDocument, setIdOrDocument] = useState('');
  const [message, setMessage] = useState('');
  const [client, setClient] = useState(null);

  return (
    <div>
      <h2>Buscar Cliente</h2>
      <form id="get-client-form" onSubmit={(event) => getClient(event, queryType, idOrDocument, setMessage, setClient)}>
        <div className="inputGroup">
          <label htmlFor="byId">Buscar cliente por ID</label>
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
          <label htmlFor="byDocument">Buscar cliente por Documento</label>
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
          <input type="submit" value="Consultar" className="boton botonAzul"/>
        </div>
      </form>
      {message && <p>{message}</p>}
      {client &&
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
            <ClientInformation cliente={client} />
          </tbody>
        </table>
      }

    </div>
  );
}
