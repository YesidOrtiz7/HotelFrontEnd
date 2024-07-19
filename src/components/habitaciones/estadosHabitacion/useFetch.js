const API_SERVER = "http://localhost:8080/estados/";

export async function getRoomStatus(setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}todos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        //console.log(result);
        setData(result);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        } else {
            console.error('Error:', error);
            setMessage('Error: Failed to fetch.');
        }

    } finally {
        setLoading(false);
    }
}

export async function getRoomStatusById(id, setData, setMessage) {

    try {
        const response = await fetch(`${API_SERVER}id/${id}`, {
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
        console.error('Error:', error);
        setMessage('Failed to fetch client.');
    }
}

export async function addNewRoomStatus(event, formData, setMessage, clearForm) {
    event.preventDefault();

    try {
        //console.log(formData);
        const response = await fetch(`${API_SERVER}nuevo`, {
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
        setMessage('Room Status successfully added!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add.');
    }
}

//pendiente de implementacion del endpoint
export async function deleteRoomStatus(event, idRoomStatus, setMessage) {
    event.preventDefault();


    try {
        const response = await fetch(`${API_SERVER}eliminar/${idRoomStatus}`, {
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
            result = null; // or handle the empty response appropriately
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

export async function updateRoomStatus(event, formData, setMessage) {
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
export async function updateConfigurationRoomStatus(formData, setMessage) {

    try {
        const response = await fetch(`${API_SERVER}actualizarconfiguracionestados`, {
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