import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getQuery, putQueryClearForm } from "../../useFetch";
//import { getServiceById, changeRateOfService } from "../useFetch";
//import { getRate } from "../../tarifas/useFetch";

export default function ChangeRate() {
    const [serviceData, setServiceData] = useState({ data: {}, loading: true, message: '' });
    //const [roomsData, setRoomsData] = useState({ allRooms: [], loading: true, message: '' });
    const [ratesData, setRatesData] = useState({ allRates: [], loading: true, message: '' });

    //const [roomNumber, setRoomNumber] = useState(0);
    const [rateId, setRateId] = useState(0);

    const { idService } = useParams();
    const isMounted = useRef(true);

    const ENDPOINT=`servicio/`;
    const ENDPOINT_Tarifas=`tarifas/`;

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        /*getRate(
            (rates) => isMounted.current && setRatesData({allRates: rates, loading: false, message: ''}),
            (message) => isMounted.current && setRatesData((prev)=>({...prev,message})),
            ()=>isMounted.current && setRatesData((prev)=>({...prev, loading: false}))
        );*/
        getQuery(
            (rates) => isMounted.current && setRatesData({allRates: rates, loading: false, message: ''}),
            (message) => isMounted.current && setRatesData((prev)=>({...prev,message})),
            ()=>isMounted.current && setRatesData((prev)=>({...prev, loading: false})),
            `${ENDPOINT_Tarifas}todas`
        );
    }, []);

    useEffect(() => {
        /*getServiceById(
            idService,
            (data) => isMounted.current && setServiceData({ data, loading: false, message: '' }),
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setServiceData((prev) => ({ ...prev, loading: false }))
        );*/
        getQuery(
            (data) => isMounted.current && setServiceData({ data, loading: false, message: '' }),
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setServiceData((prev) => ({ ...prev, loading: false })),
            `${ENDPOINT}id/${idService}`
        );
    }, [idService]);

    const handleSubmit = (e) => {
        //e.preventDefault();
        const formData = {
            idService: idService,
            rateId: rateId,
        };
        /*changeRateOfService(
            e,
            formData,
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setRateId(0)
        );*/
        putQueryClearForm(
            e,
            formData,
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setRateId(0),
            `${ENDPOINT}cambiarTarifa`
        );
    };

    const renderServiceDetails = () => {
        if (serviceData.loading) return <div>Loading...</div>;
        if (serviceData.message) return <div>{serviceData.message}</div>;

        const { data } = serviceData;
        if (!data || !data.idClient || !data.idRoom) return <div>No service details available</div>;

        return (
            <div>
                <p><b>Servicio pagado: </b>{data.itsPaid ? "SI" : "NO"}
                    <br />
                    <b>Cliente: </b>{data.idClient.primerNombreCliente}
                    {data.idClient.segundoNombreCliente}
                    {data.idClient.primerApellidoCliente}
                    {data.idClient.segundoApellidoCliente}
                    <br />
                    <b>Habitación: </b>{data.idRoom.roomNumber}<br />
                    <b>Tipo de habitación: </b>{data.idRoom.roomType.roomTypeDescription}<br />
                    <b>Precio habitacion por 24 horas: </b>{data.idRoom.roomPrice24Hours}<br />
                    <b>Camas: </b>{data.idRoom.bedsNumber}
                </p>
                <h3>Habitación a cambiar:</h3>
            </div>
        );
    };

    const renderRateOptions = () => {
        if (ratesData.loading) return <div>Loading...</div>;
        if (ratesData.message) return <div>{ratesData.message}</div>;

        return (
            <select value={rateId} onChange={(e) => setRateId(parseInt(e.target.value))}>
                <option value="">Seleccione Tarifa</option>
                {ratesData.allRates
                    .map(rate => (
                        <option key={rate.idTipoTarifa} value={rate.idTipoTarifa}>
                            {rate.descripcionTarifa + " descuento: " + rate.porcentajeTarifa+"%"}
                        </option>
                    ))}
            </select>
        );
    };

    return (
        <div className="formulario">
            <h2>Cambio de tarifa</h2>
            {renderServiceDetails()}
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>Tarifa</label>
                    {renderRateOptions()}
                </div>
                <div>
                    <button type="submit" className="boton botonAzul">Aceptar</button>
                </div>
            </form>
        </div>
    );
}