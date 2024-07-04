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