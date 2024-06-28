// NewClient.jsx
import React, { useState } from "react";
import { addNewClient } from "../useFetch";

export default function NewClient() {
  const [documentoCliente, setDocumentoCliente] = useState('');
  const [primerNombreCliente, setPrimerNombreCliente] = useState('');
  const [segundoNombreCliente, setSegundoNombreCliente] = useState('');
  const [primerApellidoCliente, setPrimerApellidoCliente] = useState('');
  const [segundoApellidoCliente, setSegundoApellidoCliente] = useState('');
  const [celularCliente, setCelularCliente] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setDocumentoCliente('');
    setPrimerNombreCliente('');
    setSegundoNombreCliente('');
    setPrimerApellidoCliente('');
    setSegundoApellidoCliente('');
    setCelularCliente('');
  };

  const formData = {
    documentoCliente,
    primerNombreCliente,
    segundoNombreCliente,
    primerApellidoCliente,
    segundoApellidoCliente,
    celularCliente,
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <form id="client-form" onSubmit={(event) => addNewClient(event, formData, setMessage, clearForm)}>
        <div>
          <label>Documento</label>
          <input
            name="documentoCliente"
            type="text"
            value={documentoCliente}
            onChange={(e) => setDocumentoCliente(e.target.value)}
          />
        </div>
        <div>
          <label>Primer Nombre</label>
          <input
            name="primerNombreCliente"
            type="text"
            value={primerNombreCliente}
            onChange={(e) => setPrimerNombreCliente(e.target.value)}
          />
        </div>
        <div>
          <label>Segundo Nombre</label>
          <input
            name="segundoNombreCliente"
            type="text"
            value={segundoNombreCliente}
            onChange={(e) => setSegundoNombreCliente(e.target.value)}
          />
        </div>
        <div>
          <label>Primer Apellido</label>
          <input
            name="primerApellidoCliente"
            type="text"
            value={primerApellidoCliente}
            onChange={(e) => setPrimerApellidoCliente(e.target.value)}
          />
        </div>
        <div>
          <label>Segundo Apellido</label>
          <input
            name="segundoApellidoCliente"
            type="text"
            value={segundoApellidoCliente}
            onChange={(e) => setSegundoApellidoCliente(e.target.value)}
          />
        </div>
        <div>
          <label>Numero Celular</label>
          <input
            name="celularCliente"
            type="text"
            value={celularCliente}
            onChange={(e) => setCelularCliente(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
