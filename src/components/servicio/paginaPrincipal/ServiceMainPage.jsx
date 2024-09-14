import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import { getServices } from "../useFetch";
import {getQuery} from "../../useFetch";
import ServiceInformation from "../ServiceInformation";

export default function ServiceMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getQuery(setData, setMessage, setLoading,`servicio/todos`);
    }, []);

    const updateService = (id, updatedService) => {
        setData((prevData) =>
            prevData.map((service) =>
                service.idService === id ? { ...service, ...updatedService } : service
            )
        );
    };

    return (
        <div className="contenedorHijo">
            <div className="enlaces">
                <Link id="newservice" to="/nuevoservicio" className="enlace-boton enlace-boton_azul">Crear nuevo servicio</Link>
                <Link id="roomType" to="/tipohabitaciones" className="enlace-boton enlace-boton_azul">Gestionar tipos de habitaciones</Link>
                <Link id="roomStatus" to="/estadoshabitaciones" className="enlace-boton enlace-boton_azul">Gestionar estados de habitaciones</Link>
            </div>
            {!loading && (
                <div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Numero Habitacion</th>
                                <th>Cliente</th>
                                <th>Tarifa</th>
                                <th>Procedencia</th>
                                <th>Destino</th>
                                <th>Fecha entrada</th>
                                <th>Fecha salida</th>
                                <th>Recepcionista</th>
                                <th>Estado</th>
                                <th>Total a pagar</th>
                                <th>Es pagado</th>
                                <th>Tipo Pago</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((service) => (
                                <ServiceInformation
                                    key={service.idService}
                                    service={service}
                                    setMessage={setMessage}
                                    updateService={updateService}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {loading && <div>Loading...</div>}
            {message && <div>{message}</div>}
        </div>
    );
}