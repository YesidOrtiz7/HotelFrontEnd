import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getRoomStatus, updateConfigurationRoomStatus } from "./useFetch";
import RoomStatusInformation from "./RoomStatusInformation";

export default function RoomStatusMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    //const [isChecked, setIsChecked] = useState(false);//roomStatus.visibleOnSelection
    const [defaultOnClose, setDefaultOnClose]= useState(null);
    const [defaultOnStart, setDefaultOnStart]= useState(null);

    useEffect(() => {
        getRoomStatus(setData, setMessage, setLoading);
    }, []);

    useEffect(() => {
        if (data) {
            const defaultRoomToClose = data.find(roomStatus => roomStatus.defaultForServiceShutdown);
            const defaultRoomToStart = data.find(roomStatus => roomStatus.defaultForServiceStart);
            if (defaultRoomToClose) {
                setDefaultOnClose(defaultRoomToClose.idStatus);
            }
            if (defaultRoomToStart){
                setDefaultOnStart(defaultRoomToStart.idStatus);
            }
        }
    }, [data]);

    const handleCheckboxChange = (id, isChecked, query) => {
        // setIsChecked(!isChecked);
        console.log(id+" "+isChecked);
        updateConfigurationRoomStatus(
            {
                id:id,
                state:isChecked,
                query: query
            },
            setMessage
        )
    };


    //handleCheckboxChange={handleCheckboxChange} isChecked={isChecked}

    return (
        <div>
            <div className="enlaces">
                <Link id="newRoomStauts" to="/nuevoestado" className="enlace-boton enlace-boton_azul">
                    Añadir nuevo estado de Habitacion
                </Link>
            </div>

            {!loading && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Descripcion estado habitacion</th>
                                <th>Es visible en la pestaña de creacion de servicio</th>
                                <th>Es el estado que se asigna al iniciar el servicio</th>
                                <th>Es el estado que se asigna al terminar el servicio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((roomStatus) => (
                                <RoomStatusInformation
                                    key={roomStatus.idStatus}
                                    roomStatus={roomStatus}
                                    handleCheckboxChange={handleCheckboxChange}
                                    defaultOnClose={defaultOnClose}
                                    setDefaultOnClose={setDefaultOnClose}
                                    defaultOnStart={defaultOnStart}
                                    setDefaultOnStart={setDefaultOnStart}
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