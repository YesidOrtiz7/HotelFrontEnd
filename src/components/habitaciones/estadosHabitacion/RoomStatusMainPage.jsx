import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getRoomStatus } from "./useFetch";
import RoomStatusInformation from "./RoomStatusInformation";

export default function RoomStatusMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getRoomStatus(setData, setMessage, setLoading);
    }, []);

    return (
        <div>
            <Link id="newRoomStauts" to="/nuevoestado">
            Añadir nuevo estado de Habitacion</Link>
            {!loading &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Descripcion estado habitacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((roomStatus) => (
                                    <RoomStatusInformation roomStatus={roomStatus} />))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {message && <div>{message}</div>}
        </div>
    );
}