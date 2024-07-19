import { useState } from "react";
import DeleteRoomStatus from "./DeleteRoomStatus";

export default function RoomStatusInformation({ roomStatus, handleCheckboxChange, selectedRadio, setSelectedRadio }) {
    const [isChecked, setIsChecked] = useState(roomStatus.visibleOnSelection);

    return (
        <tr>
            <td>{roomStatus.statusName}</td>
            <td>
                <input
                    type="checkbox"
                    name="visibleOnSelection"
                    checked={isChecked}
                    onChange={() => {
                        const newIsChecked = !isChecked;
                        setIsChecked(newIsChecked);
                        handleCheckboxChange(roomStatus.idStatus, newIsChecked, 1);
                    }}
                />
            </td>
            <td>
                <input
                    type="radio"
                    name="query"
                    id={roomStatus.statusName}
                    value={roomStatus.idStatus}
                    checked={selectedRadio === roomStatus.idStatus}
                    onChange={() => {
                        setSelectedRadio(roomStatus.idStatus);
                        handleCheckboxChange(roomStatus.idStatus, true, 2);
                    }}
                />
            </td>
            <td><DeleteRoomStatus idRoomStatus={roomStatus.idStatus} /></td>
            <td>
                <form action={`/estadohabitacion/${roomStatus.idStatus}`} method="get">
                    <input type="submit" value="Actualizar" />
                </form>
            </td>
        </tr>
    );
}