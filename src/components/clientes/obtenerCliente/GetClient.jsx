// import React from "react";

// import {getClient} from './getClient';

// export default function GetClient(){
//     return(
//         <div>
//             <h2>Buscar Cliente</h2>
//             <form id="get-client-form" onSubmit={(event)=>getClient(event, formData, setMessage, clearForm)}>
//                 <label htmlFor="byId">Buscar cliente por ID</label>
//                 <input type="radio" name="query" id="byId" value="byId"/>
//                 <label htmlFor="byDocument">Buscar cliente por Documento</label>
//                 <input type="radio" name="query" id="byDocument" value="byDocument"/>
//                 <input type="text" name="idOrDocument" id="idOrDocument" />
//                 <input type="submit">Constular</input>
//             </form>
//         </div>
//     );
// }
// GetClient.jsx
import React, { useState } from "react";
import { getClient } from './queryGetClient';

export default function GetClient() {
  const [queryType, setQueryType] = useState('byDocument');
  const [idOrDocument, setIdOrDocument] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h2>Buscar Cliente</h2>
      <form id="get-client-form" onSubmit={(event) => getClient(event, queryType, idOrDocument, setMessage)}>
        <div>
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
        <div>
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
        <div>
          <input
            type="text"
            name="idOrDocument"
            id="idOrDocument"
            value={idOrDocument}
            onChange={(e) => setIdOrDocument(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Consultar" />
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
