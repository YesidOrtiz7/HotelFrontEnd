import { useState } from "react";

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
                            {/* <DeleteClient idClient={cliente.idCliente} /> */}
                            <form action={`/habitaciones/${room.roomNumber}`} method="get">
                                <input type="submit" value="Actualizar" />
                            </form>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}