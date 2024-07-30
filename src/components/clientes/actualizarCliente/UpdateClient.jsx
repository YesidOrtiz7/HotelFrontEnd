import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getClientById, updateClient } from '../useFetch';

export default function UpdateClient() {
  const [clientData, setClientData] = useState({
    id: '',
    documentoCliente: '',
    primerNombreCliente: '',
    segundoNombreCliente: '',
    primerApellidoCliente: '',
    segundoApellidoCliente: '',
    celularCliente: ''
  });
  const [message, setMessage] = useState('');

  const {id}=useParams();

  useEffect(() => {
    getClientById(id, setClientData, setMessage);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value
    });
  };

  return (
    <div className="formulario">
      <h2>Actualizar Cliente</h2>
      {message && <p>{message}</p>}
      <form id="update-client-form" onSubmit={(event) => updateClient(event, clientData, setMessage)}>
        <div className="inputGroup">
          <label>Documento</label>
          <input
            name="documentoCliente"
            type="text"
            value={clientData.documentoCliente}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Primer Nombre</label>
          <input
            name="primerNombreCliente"
            type="text"
            value={clientData.primerNombreCliente}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Segundo Nombre</label>
          <input
            name="segundoNombreCliente"
            type="text"
            value={clientData.segundoNombreCliente}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Primer Apellido</label>
          <input
            name="primerApellidoCliente"
            type="text"
            value={clientData.primerApellidoCliente}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Segundo Apellido</label>
          <input
            name="segundoApellidoCliente"
            type="text"
            value={clientData.segundoApellidoCliente}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Numero Celular</label>
          <input
            name="celularCliente"
            type="text"
            value={clientData.celularCliente}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="boton botonAzul">Actualizar</button>
      </form>
    </div>
  );
}