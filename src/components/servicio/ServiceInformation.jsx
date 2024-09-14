import { useState } from "react";
//import {  closeService } from "./useFetch";
//import {postQueryReturnResult} from "../useFetch";

export default function ServiceInformation({ service, setMessage, updateService }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const API_SERVER="http://localhost:8080/servicio/";
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    async function payService(event, formData, setMessage) {
        event.preventDefault();
    
        try {
            const response = await fetch(`${API_SERVER}pagarServicio`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
                return;
            }
    
            let result;
            try {
                result = await response.json();
            } catch (e) {
                result = null;
            }
            setMessage('Servicio pagado.');
    
            if (result) {
                return result;
            } else {
                return null;
            }
    
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message||'No se pudo pagar.');
            return null;
        }
    }
    async function closeService(event, formData, setMessage) {
        event.preventDefault();
    
        try {
            const response = await fetch(`${API_SERVER}cerrarServicio`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const errorResponse=await response.json();
                setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
                return;
            }
    
            let result;
            try {
                result = await response.json();
            } catch (e) {
                result = null;
            }
    
            setMessage('Servicio cerrado.');
            if (result) {
                return result;
            } else {
                return null;
            }
    
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message||'No se pudo cerrar el servicio.');
            return null;
        }
    }

    const handleSubmit = async (functionToExecute, e, formData) => {
        e.preventDefault();
        const result = await functionToExecute(e, formData, setMessage);
        if (result) {
            updateService(service.idService, result);
        }
    };

    return (
        <>
            <tr key={service.idService}>
                <td>{service.idRoom.roomNumber}</td>
                <td>{`${service.idClient.primerNombreCliente} ${service.idClient.segundoNombreCliente} ${service.idClient.primerApellidoCliente} ${service.idClient.segundoApellidoCliente}`}</td>
                <td>{service.idRateType.descripcionTarifa}</td>
                <td>{service.cliProcedencia.nombreMun}</td>
                <td>{service.cliDestino.nombreMun}</td>
                <td>{service.fechaEntrada}</td>
                <td>{service.fechaSalida}</td>
                <td>{service.idRecep.receptionistNames}</td>
                <td>{service.state ? "Activo" : "Cerrado"}</td>
                <td>${service.payment}</td>
                <td>{service.itsPaid ? "Si" : "No"}</td>
                <td>{service.idTipoPago.descripcionPago}</td>
                <td>
                    {service.state &&
                        <button onClick={toggleExpand} className="boton botonAzul">
                            {isExpanded ? "Cerrar" : "Acciones"}
                        </button>
                    }
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="7">
                        <div className="contenedorBoton">

                            <form id="payment-button" onSubmit={e => handleSubmit(payService, e, { id: service.idService })}>
                                <input className="boton botonAzul" type="submit" value="Pagar" />
                            </form>
                            <form id="endOfService-button" onSubmit={e => handleSubmit(closeService, e, { id: service.idService })}>
                                <input className="boton botonAzul" type="submit" value="Terminar servicio" disabled={!service.itsPaid} />
                            </form>

                            <form action={`/ampliar/${service.idService}`} method="get">
                                <input className="boton botonAzul" type="submit" value="Ampliar Servicio" />
                            </form>
                            <form action={`/cambiarHabitacion/${service.idService}`} method="get">
                                <input className="boton botonAzul" type="submit" value="Cambiar Habitacion" />
                            </form>
                            <form action={`/cambiartarifa/${service.idService}`} method="get">
                                <input className="boton botonAzul" type="submit" value="Cambiar Tarifa" />
                            </form>

                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}