// import { useState } from "react";
export default function ServiceInformation({ service }) {
    return (
        <>
            <tr key={service.idService}>
                <td>{service.idRoom.roomNumber}</td>
                <td>{service.idClient.primerNombreCliente + " " +
                    service.idClient.segundoNombreCliente + " " +
                    service.idClient.primerApellidoCliente + " " +
                    service.idClient.segundoApellidoCliente}</td>
                <td>{service.idRateType.descripcionTarifa}</td>
                <td>{service.cliProcedencia.nombreMun}</td>
                <td>{service.cliDestino.nombreMun}</td>
                <td>{service.fechaEntrada}</td>
                <td>{service.idRecep.receptionistNames}</td>
                <td>{service.state}</td>
                <td>{service.payment}</td>
                <td>{service.idTipoPago.descripcionPago}</td>

            </tr>
        </>
    );
}