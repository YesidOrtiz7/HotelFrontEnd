const API_SERVER = "http://localhost:8080/recepcionista/";

export async function getReceptionists(setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}recepcionistas`, {
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
            setMessage('Error: Failed to fetch.');
        }

    } finally {
        setLoading(false);
    }
}
export async function getReceptionist(event, queryType, idOrDocument, setMessage, setData) {
    event.preventDefault();

    let endpoint = '';
    if (queryType === 'byId') {
        endpoint = `${API_SERVER}id/${idOrDocument}`;
    } else if (queryType === 'byDocument') {
        endpoint = `${API_SERVER}documento/${idOrDocument}`;
    }

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        //setMessage(`Client found:`);
        setData(result);

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to fetch.');
    }
}
export async function getReceptionistById(id, setMessage, setData) {
    event.preventDefault();

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
        //setMessage(`Client found:`);
        setData(result);

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to fetch.');
    }
}
export async function addNewReceptionist(event, formData, setMessage, clearForm) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}registrar`, {
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
        setMessage('Successfully added!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add.');
    }
}
export async function updateReceptionist(event, formData, setMessage) {
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
        setMessage('Receptionist successfully updated!');

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to update Receptionist.');
    }
}