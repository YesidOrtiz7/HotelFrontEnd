import { useState } from "react";
import DeleteRoom from "./eliminarHabitacion/DeleteRoom";

export default function RoomInformation({ room }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <tr key={room.roomNumber}>
                <td>{room.roomNumber}</td>
                <td>{room.idRoomStatus.statusName}</td>
                <td>{room.roomType.roomTypeDescription}</td>
                <td>{room.roomPrice24Hours}</td>
                <td>{room.bedsNumber}</td>
                <td>
                    <button onClick={toggleExpand}>
                        {isExpanded ? "Cerrar" : "Opciones"}
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="7">
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <form action={`/cambiarEstado/${room.idRoom}`} method="get">
                                <input type="submit" value="Cambiar Estado" />
                            </form>
                            <DeleteRoom idRoom={room.idRoom} />
                            <form action={`/actualizarhabitacion/${room.idRoom}`} method="get">
                                <input type="submit" value="Actualizar" />
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}