import { useState } from "react";
import { payService, closeService } from "./useFetch";

export default function ServiceInformation({ service, setMessage, updateService }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

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
                        <button onClick={toggleExpand}>
                            {isExpanded ? "Cerrar" : "Acciones"}
                        </button>
                    }
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="7">
                        <div style={{ display: 'flex', justifyContent: 'end' }}>

                            <form id="payment-button" onSubmit={e => handleSubmit(payService, e, { id: service.idService })}>
                                <input type="submit" value="Pagar" />
                            </form>
                            <form id="endOfService-button" onSubmit={e => handleSubmit(closeService, e, { id: service.idService })}>
                                <input type="submit" value="Terminar servicio" disabled={!service.itsPaid} />
                            </form>

                            <form action={`/ampliar/${service.idService}`} method="get">
                                <input type="submit" value="Ampliar Servicio" />
                            </form>
                            <form action={`/cambiarHabitacion/${service.idService}`} method="get">
                                <input type="submit" value="Cambiar Habitacion" />
                            </form>

                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}