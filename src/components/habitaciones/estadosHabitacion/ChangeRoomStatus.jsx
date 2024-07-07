import { useState, useEffect } from "react";
import { changeRoomStatus } from "../useFetch";
import { getRoomStatus } from "./useFetch";
import { useParams } from "react-router-dom";

export default function ChangeRoomStatus() {
    const {roomId}=useParams();

    const [idStatus, setIdStatus] = useState(0);
    const [status, setStatus] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(
        () => { getRoomStatus(setStatus, setMessage, setLoading) },
        []
    );

    return (
        <div>
            {message && <p>{message}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form id="change-status-form" onSubmit={(event) => changeRoomStatus(event, idStatus, roomId, setMessage)}>
                    <fieldset>
                        <legend>Elige un estado</legend>

                        {status?.map((stat) => (
                            <label>
                                <input type="radio" name="status" value={stat.idStatus} onChange={(e) => setIdStatus(e.target.value)} />
                                {stat.statusName}
                            </label>

                        ))}
                    </fieldset>
                    <button type="submit">Aceptar</button>
                </form>
            )
            }
        </div>
    );
}