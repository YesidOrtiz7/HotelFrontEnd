import DeleteRoomType from "./DeleteRoomType";

export default function RoomTypeInformation(props) {
    const roomType=props.roomType;
    return (
        <tr>
            <td key={roomType.idRoomType}>{roomType.roomTypeDescription}</td>
            <td><DeleteRoomType idRoomType={roomType.idRoomType} /></td>
             <td>
                <form action={`/tipohabitacion/${roomType.idRoomType}`} method="get">
                    <input type="submit" value="Actualizar" />
                </form>
            </td>
        </tr>
    );
}