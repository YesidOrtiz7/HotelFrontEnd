import { useState, useEffect } from "react";
import "./aviso.css";

import { getQuery } from "../../useFetch";
import { postQuery } from "../../useFetch";


//import { getClient } from "../../clientes/useFetch";

export default function AddNewService() {
    const API_SERVER = "http://localhost:8080/cliente/";

    const ENDPOINT = `servicio/`;
    const ENDPOINT_Recepcionistas = `recepcionista/`;
    const ENDPOINT_Habitaciones = `habitaciones/`;
    const ENDPOINT_Tarifas = `tarifas/`;
    const ENDPOINT_Municipio = `municipio/`;
    const ENDPOINT_TipoPago = `tipoPago/`;

    const [idRecep, setIdRecep] = useState(0);
    const [allIdRecep, setAllIdRecep] = useState([]);

    const [idClient, setIdClient] = useState(0);

    const [documentOfClient, setDocumentOfClient] = useState('');
    const [clientData, setClientData] = useState(null);

    const [idRoom, setIdRoom] = useState(0);
    const [allIdRoom, setAllIdRoom] = useState([]);

    const [idRateType, setIdRateType] = useState(0);
    const [allIdRateType, setAllIdRateType] = useState([]);

    const [cliProcedencia, setCliProcedencia] = useState(0);
    const [allCliProcedencia, setAllCliProcedencia] = useState([]);

    const [cliDestino, setCliDestino] = useState(0);
    const [allCliDestino, setAllCliDestino] = useState([]);

    const [idTipoPago, setIdTipoPago] = useState(0);
    const [allIdTipoPago, setAllIdTipoPago] = useState([]);

    const [fechaEntrada, setFechaEntrada] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [clientMessage, setClientMessage] = useState('');

    async function getClient(queryType, idOrDocument, setMessage, setClient) {

        let endpoint = '';
        if (queryType === 'byId') {
            endpoint = `${API_SERVER}id/${idOrDocument}`;
        } else if (queryType === 'byDocument') {
            endpoint = `${API_SERVER}documento/${idOrDocument}`;
        }

        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                setMessage(errorResponse.errorMessage || `HTTP error! status: ${response.status}`);
                setClient(null);
                return;
            }

            const result = await response.json();
            if (result != null) {
                setMessage(`Cliente encontrado:`);
                setClient(result);
            } else {
                setClient(null);
            }


        } catch (error) {
            console.error('Error:', error);
            setClient(null);
            setMessage(error.message || 'Failed to fetch client.');
        }
    }

    const handleDocumentChange = async (e) => {
        let documentValue = e.target.value
        setDocumentOfClient(documentValue);
        if (documentValue.length < 5) {
            setClientData(null);
            setIdClient(null);
            return;
        }
        if (documentValue.length >= 5) {
            await getClient('byDocument', documentValue, setClientMessage, setClientData);
        }
    }

    const handleDateChange = (e, setFunction) => {
        const { value } = e.target;
        setFunction(value);
    }

    const clearForm = () => {
        setIdRecep(0);
        setIdClient(0);
        setIdRoom(0);
        setIdRateType(0);
        setCliProcedencia(0);
        setCliDestino(0);
        setIdTipoPago(0);
        setFechaEntrada('');
        setFechaSalida('');
    }
    const formData = {
        idRecep: allIdRecep.find(recep => recep.idRecep === idRecep),
        idClient: clientData,
        idRoom: allIdRoom.find(room => room.idRoom === idRoom),
        idRateType: allIdRateType.find(rate => rate.idTipoTarifa === idRateType),
        cliProcedencia: allCliProcedencia.find(proce => proce.idMunicipios === cliProcedencia),
        cliDestino: allCliDestino.find(dest => dest.idMunicipios === cliDestino),
        idTipoPago: allIdTipoPago.find(pago => pago.idPago === idTipoPago),
        fechaEntrada: fechaEntrada,
        fechaSalida: fechaSalida,
    }
    useEffect(() => {
        getQuery(setAllIdRecep, setMessage, setLoading, `${ENDPOINT_Recepcionistas}recepcionistas`);
        getQuery(setAllIdRoom, setMessage, setLoading, `${ENDPOINT_Habitaciones}todas`);
        getQuery(setAllIdRateType, setMessage, setLoading, `${ENDPOINT_Tarifas}todas`);
        getQuery(setAllCliProcedencia, setMessage, setLoading, `${ENDPOINT_Municipio}municipios`);
        getQuery(setAllCliDestino, setMessage, setLoading, `${ENDPOINT_Municipio}municipios`);
        getQuery(setAllIdTipoPago, setMessage, setLoading, `${ENDPOINT_TipoPago}todos`);
    }, []);
    const renderReceptionistData = () => {
        return (
            <div className="inputGroup">
                <label>Recepcionista</label>
                <select value={idRecep} onChange={(e) => setIdRecep(parseInt(e.target.value))}>
                    <option value="">Seleccione Recepcionista</option>
                    {allIdRecep.map(recep => (
                        <option key={recep.idRecep} value={recep.idRecep}>
                            {recep.receptionistNames + " " + recep.receptionistLastNames}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    const renderClientData = () => {
        return (
            <div>
                <div className="inputGroup">
                    <label htmlFor="documentOfClient">Documento Cliente</label>
                    <input type="text"
                        id="documentOfClient"
                        value={documentOfClient}
                        onChange={(e) => handleDocumentChange(e)} />

                </div>
                <div className="inputGroup">
                    {clientMessage && <div className="barraMensaje">{clientMessage}</div> || <div className="barraMensaje"></div>}
                    {clientData &&
                        <div className="barraMensaje">
                            {`${clientData.primerNombreCliente || ""} ${clientData.segundoNombreCliente || ""} ${clientData.primerApellidoCliente || ""} ${clientData.segundoApellidoCliente || ""}`}
                        </div>
                        || <div className="barraMensaje"></div>
                    }
                </div>
            </div>

        );
    }
    const renderRoomData = () => {
        return (
            <div className="inputGroup">
                <label>Habitacion</label>
                <select value={idRoom} onChange={(e) => setIdRoom(parseInt(e.target.value))}>
                    <option value="">Seleccione Habitacion</option>
                    {allIdRoom
                        .filter(room => room.idRoomStatus.visibleOnSelection)
                        .map(room => (
                            <option key={room.idRoom} value={room.idRoom}>
                                {room.roomNumber + " " + room.idRoomStatus.statusName + " precio:" + room.roomPrice24Hours}
                            </option>
                        ))}
                </select>
            </div>
        );
    }
    const renderRateData = () => {
        return (
            <div className="inputGroup">
                <label>Tipo de Tarifa</label>
                <select value={idRateType} onChange={(e) => setIdRateType(parseInt(e.target.value))}>
                    <option value="">Seleccione Tarifa</option>
                    {allIdRateType.map(rate => (
                        <option key={rate.idTipoTarifa} value={rate.idTipoTarifa}>
                            {rate.descripcionTarifa}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    const renderMunicipioData = (label, value, onChageFunction, list) => {
        return (
            <div className="inputGroup">
                <label>{label}</label>
                <select value={value} onChange={(e) => onChageFunction(parseInt(e.target.value))}>
                    <option value="">Seleccione Municipio</option>
                    {list.map(item => (
                        <option key={item.idMunicipios} value={item.idMunicipios}>
                            {item.nombreMun}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    const renderPaymentType = () => {
        return (
            <div className="inputGroup">
                <label>Tipo de pago</label>
                <select value={idTipoPago} onChange={(e) => setIdTipoPago(parseInt(e.target.value))}>
                    <option value="">Seleccione tipo de pago</option>
                    {allIdTipoPago.map(tipo => (
                        <option key={tipo.idPago} value={tipo.idPago}>
                            {tipo.descripcionPago}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    const renderDate = (label, id, name, value, onChageFunction, setDataFunction) => {
        return (
            <div className="inputGroup">
                <label>{label}</label>
                <input
                    type="datetime-local"
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => onChageFunction(e, setDataFunction)}
                />
            </div>
        );
    }
    const renderForm = () => {
        return (
            <div className="formulario">
                {message && <p>{message}</p>}
                <form id="service-form" onSubmit={(e) => postQuery(e, formData, setMessage, clearForm, `${ENDPOINT}nuevo`)}>
                    {renderReceptionistData()}
                    {renderClientData()}
                    {renderRoomData()}
                    {renderRateData()}
                    {renderMunicipioData("Procedencia", cliProcedencia, setCliProcedencia, allCliProcedencia)}
                    {renderMunicipioData("Destino", cliDestino, setCliDestino, allCliDestino)}
                    {renderPaymentType()}
                    {renderDate("Fecha Entrada", "fechaEntrada", "fechaEntrada", fechaEntrada, handleDateChange, setFechaEntrada)}
                    {renderDate("Fecha salida", "fechaSalida", "fechaSalida", fechaSalida, handleDateChange, setFechaSalida)}
                    <div>
                        <button type="submit" className="boton botonAzul">Crear</button>
                    </div>
                </form>
            </div>
        );
    }
    return (
        renderForm()
    );
}