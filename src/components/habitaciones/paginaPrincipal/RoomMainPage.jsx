import React, { useState, useEffect } from "react";

import { getRooms } from "../useFetch";
import RoomInformation from "../RoomInformation";

export default function RoomMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getRooms(setData, setMessage, setLoading);
    }, []);

    return (
        <div>
            {!loading &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Numero Habitacion</th>
                                <th>Estado</th>
                                <th>Tipo</th>
                                <th>Precio</th>
                                <th>Camas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((room) => (
                                    <RoomInformation room={room} />))
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