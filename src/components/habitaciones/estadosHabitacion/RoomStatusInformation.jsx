import DeleteRoomStatus from "./DeleteRoomStatus";

export default function RoomStatusInformation(props) {
    const roomStatus=props.roomStatus;
    return (
        <tr>
            <td key={roomStatus.idStatus}>{roomStatus.statusName}</td>
            <td><DeleteRoomStatus idRoomStatus={roomStatus.idStatus} /></td>
             <td>
                <form action={`/estadohabitacion/${roomStatus.idStatus}`} method="get">
                    <input type="submit" value="Actualizar" />
                </form>
            </td>
        </tr>
    );
}