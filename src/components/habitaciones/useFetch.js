const API_SERVER = "http://localhost:8080/habitaciones/";

export async function getRooms(setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}todas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        } else {
            console.error('Error:', error);
            setMessage('Error: Failed to fetch clients.');
        }

    } finally {
        setLoading(false);
    }
}

export async function addNewRoom(event, formData, setMessage, clearForm) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}nuevaHabitacion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept':'*/*'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        setMessage('Room successfully added!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add.');
    }
}

export async function getRoomById(id, setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}idHabitacion/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false)

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to fetch.');
        setLoading(false);
    }
}

export async function updateRoom(event, formData, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}actualizar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        setMessage('Successfully updated!');

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to update.');
    }
}

export default async function deleteRoom(event, id, setMessage) {
    event.preventDefault();


    try {
        const response = await fetch(`${API_SERVER}eliminarHabitacionPorId/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let result;
        try {
            result = await response.json();
        } catch (e) {
            result = null;
        }

        if (result) {
            console.log('Success:', result);
            setMessage(`Deleted: ${JSON.stringify(result)}`);
        } else {
            setMessage('Successfully deleted.');
        }

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to delete.');
    }
}

export async function changeRoomStatus(event, idStatus,idRoom, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}cambiarEstado/${idStatus}/${idRoom}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'accept':'*/*'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        setMessage('Status successfully changed!');
        // clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to change.');
    }
}