import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getServiceById, changeRoomOfService } from "../useFetch";
import { getRooms } from "../../habitaciones/useFetch";

export default function ChangeRoom() {
    const [serviceData, setServiceData] = useState({ data: {}, loading: true, message: '' });
    const [roomsData, setRoomsData] = useState({ allRooms: [], loading: true, message: '' });
    const [roomNumber, setRoomNumber] = useState(0);
    const { idService } = useParams();
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        getRooms(
            (rooms) => isMounted.current && setRoomsData({ allRooms: rooms, loading: false, message: '' }),
            (message) => isMounted.current && setRoomsData((prev) => ({ ...prev, message })),
            () => isMounted.current && setRoomsData((prev) => ({ ...prev, loading: false }))
        );
    }, []);

    useEffect(() => {
        getServiceById(
            idService,
            (data) => isMounted.current && setServiceData({ data, loading: false, message: '' }),
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setServiceData((prev) => ({ ...prev, loading: false }))
        );
    }, [idService]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            idService: idService,
            roomNumber: roomNumber,
        };
        changeRoomOfService(
            formData,
            (message) => isMounted.current && setServiceData((prev) => ({ ...prev, message })),
            () => isMounted.current && setRoomNumber(0)
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

    const renderRoomOptions = () => {
        if (roomsData.loading) return <div>Loading...</div>;
        if (roomsData.message) return <div>{roomsData.message}</div>;

        return (
            <select value={roomNumber} onChange={(e) => setRoomNumber(parseInt(e.target.value))}>
                <option value="">Seleccione Habitación</option>
                {roomsData.allRooms
                    .filter(room => room.idRoomStatus.visibleOnSelection)
                    .map(room => (
                        <option key={room.idRoom} value={room.idRoom}>
                            {room.roomNumber + " " + room.idRoomStatus.statusName}
                        </option>
                    ))}
            </select>
        );
    };

    return (
        <div className="formulario">
            <h2>Cambio de habitación</h2>
            {renderServiceDetails()}
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>Habitación</label>
                    {renderRoomOptions()}
                </div>
                <div>
                    <button type="submit" className="boton botonAzul">Aceptar</button>
                </div>
            </form>
        </div>
    );
}