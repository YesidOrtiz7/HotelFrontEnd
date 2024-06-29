import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getRoomType } from "./useFetch";
import RoomTypeInformation from "./RoomTypeInformation";

export default function RoomTypeMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getRoomType(setData, setMessage, setLoading);
    }, []);

    return (
        <div>
            <Link id="newRoomType" to="/nuevotipo">Añadir nuevo tipo</Link>
            {!loading &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Descripcion tipo habitacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((roomType) => (
                                    <RoomTypeInformation roomType={roomType} />))
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