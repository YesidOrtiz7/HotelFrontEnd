const API_SERVER = "http://localhost:8080/municipio/";

export async function getMunicipios(setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}municipios`, {
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
export async function getMunicipioById(id, setData, setMessage) {

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
        setMessage('Failed to fetch.');
    }
}
export async function addNewMunicipio(event, formData, setMessage, clearForm) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}nuevo`, {
            method: 'POST',
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
        setMessage('Successfully added!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add.');
    }
}
export async function updateMunicipio(event, formData, setMessage) {
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
export async function deleteMunicipio(event, municipio, setMessage) {
    event.preventDefault();
    try {
        const response = await fetch(`${API_SERVER}eliminar`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(municipio)
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