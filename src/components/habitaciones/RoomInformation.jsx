export default function RoomInformation(props) {
    const room=props.room;
    return (
        <tr key={room.roomNumber}>
            <td>{room.roomNumber}</td>
            <td>{room.idRoomStatus.statusName}</td>
            <td>{room.roomType.roomTypeDescription}</td>
            <td>{room.roomPrice24Hours}</td>
            <td>{room.bedsNumber}</td>
            {/* <td><DeleteClient idClient={cliente.idCliente} /></td>
            <td>
                <form action={`/cliente/${cliente.idCliente}`} method="get">
                    <input type="submit" value="Actualizar" />
                </form>
            </td> */}
        </tr>
    );
}