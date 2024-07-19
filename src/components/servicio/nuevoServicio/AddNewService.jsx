import { createNewService } from "../useFetch";
import { useState, useEffect } from "react";

import { getReceptionists } from "../../recepcionistas/useFetch";
import { getClient, getClients } from "../../clientes/useFetch";
import { getRooms } from "../../habitaciones/useFetch";
import { getRate } from "../../tarifas/useFetch";
import { getMunicipios } from "../../municipios/useFetch";
import { getPaymentTypes } from "../tipoPago/useFetch";
export default function AddNewService() {
    const [idService, setIdService] = useState('');

    const [idRecep, setIdRecep] = useState(0);
    const [allIdRecep, setAllIdRecep] = useState([]);

    const [idClient, setIdClient] = useState(0);
    // const [allIdClient, setAllIdClient] = useState([]);

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

    //const [payment, setPayment] = useState(0);
    const [fechaEntrada, setFechaEntrada] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');
    const [state, setState] = useState(true);

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [clientMessage, setClientMessage] = useState('');

    const handleDocumentChange = async (e) => {
        // console.log("handle");
        setDocumentOfClient(e.target.value);
        if (e.target.value.length >= 5) {
            getClient(e, 'byDocument', e.target.value, setClientMessage, setClientData);
            // console.log("handle");
            // if (clientData != null) {
            //     console.log("handle document change: "+clientData);
            //     setIdClient(clientData);
            // }
            // console.log("handle document change: " + clientData);
            // setIdClient(clientData);
        } /*else {
            setIdClient(null);
        }*/
        if (clientData != null) {
            console.log("handle document change: "+clientData);
            setIdClient(clientData);
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
        //setPayment(0);
        setFechaEntrada('');
        setFechaSalida('');
        setState(true);
    }
    const formData = {
        idRecep: allIdRecep.find(recep => recep.idRecep === idRecep),
        // idClient: allIdClient.find(cli => cli.idCliente === idClient),
        idClient: clientData,
        idRoom: allIdRoom.find(room => room.idRoom === idRoom),
        idRateType: allIdRateType.find(rate => rate.idTipoTarifa === idRateType),
        cliProcedencia: allCliProcedencia.find(proce => proce.idMunicipios === cliProcedencia),
        cliDestino: allCliDestino.find(dest => dest.idMunicipios === cliDestino),
        idTipoPago: allIdTipoPago.find(pago => pago.idPago === idTipoPago),
        //payment: payment,
        fechaEntrada: fechaEntrada,
        fechaSalida: fechaSalida,
        state: state,
    }
    useEffect(() => {
        getReceptionists(setAllIdRecep, setMessage, setLoading);
        // getClients(setAllIdClient, setMessage, setLoading);
        getRooms(setAllIdRoom, setMessage, setLoading);
        getRate(setAllIdRateType, setMessage, setLoading);
        getMunicipios(setAllCliProcedencia, setMessage, setLoading);
        getMunicipios(setAllCliDestino, setMessage, setLoading);
        getPaymentTypes(setAllIdTipoPago, setMessage, setLoading);
    }, []);
    return (
        <div className="formulario">
            {message && <p>{message}</p>}
            <form id="service-form" onSubmit={(e) => createNewService(e, formData, setMessage, clearForm)}>
                <div>
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
                <div>
                    <label htmlFor="documentOfClient">Documento Cliente</label>
                    <input type="text"
                        id="documentOfClient"
                        value={documentOfClient}
                        onChange={(e)=>handleDocumentChange(e)} />
                </div>
                <div>
                    {clientMessage && <p>{clientMessage}</p>}
                    {clientData != null &&
                        <p>{clientData.primerNombreCliente + " " + clientData.segundoNombreCliente + " " + clientData.primerApellidoCliente + " " + clientData.segundoApellidoCliente}</p>}
                </div>
                <div>
                    <label>Habitacion</label>
                    <select value={idRoom} onChange={(e) => setIdRoom(parseInt(e.target.value))}>
                        <option value="">Seleccione Habitacion</option>
                        {allIdRoom
                        .filter(room => room.idRoomStatus.visibleOnSelection)
                        .map(room => (
                            <option key={room.idRoom} value={room.idRoom}>
                                {room.roomNumber + " " + room.idRoomStatus.statusName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
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
                <div>
                    <label>Procedencia</label>
                    <select value={cliProcedencia} onChange={(e) => setCliProcedencia(parseInt(e.target.value))}>
                        <option value="">Seleccione Municipio</option>
                        {allCliProcedencia.map(procedencia => (
                            <option key={procedencia.idMunicipios} value={procedencia.idMunicipios}>
                                {procedencia.nombreMun}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Destino</label>
                    <select value={cliDestino} onChange={(e) => setCliDestino(parseInt(e.target.value))}>
                        <option value="">Seleccione Municipio</option>
                        {allCliDestino.map(destino => (
                            <option key={destino.idMunicipios} value={destino.idMunicipios}>
                                {destino.nombreMun}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
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
                {/* <div>
                    <label>Pago</label>
                    <input type="number"
                        name="payment"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)} />
                </div> */}
                <div>
                    <label>Fecha Entrada</label>
                    <input
                        type="datetime-local"
                        id="fechaEntrada"
                        name="fechaEntrada"
                        value={fechaEntrada}
                        onChange={(e) => handleDateChange(e, setFechaEntrada)}
                    />
                </div>
                <div>
                    <label>Fecha salida</label>
                    <input
                        type="datetime-local"
                        id="fechaSalida"
                        name="fechaSalida"
                        value={fechaSalida}
                        onChange={(e) => handleDateChange(e, setFechaSalida)}
                    />
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    );
}
/*idService integer($int32)
idRecep
    {
    idRecep integer($int32)
    docRecep string
    receptionistNames string
    receptionistLastNames string
    }
idClient
    {
    idCliente integer($int32)
    documentoCliente string
    primerNombreCliente string
    segundoNombreCliente string
    primerApellidoCliente string
    segundoApellidoCliente string
    celularCliente string
    }
idRoom
    {
    roomNumber integer($int32)
    idRoomStatus
        {
        idStatus integer($int32)
        statusName string
        }
    roomType
        {
        idRoomType integer($int32)
        roomTypeDescription string
        }
    roomPrice24Hours number($double)
    bedsNumber integer($int32)
    idRoom integer($int32)
    }
idRateType
    {
    idTipoTarifa integer($int32)
    descripcionTarifa string
    porcentajeTarifa integer($int32)
    }
cliProcedencia
    {
    idMunicipios integer($int32)
    nombreMun string
    }
cliDestino
    {
    idMunicipios integer($int32)
    nombreMun string
    }
idTipoPago
    {
    idPago integer($int32)
    descripcionPago string
    }
payment number($double)
fechaEntrada string($date-time)
fechaSalida string($date-time)
state integer($int32)
 */