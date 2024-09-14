const API_SERVER = "http://localhost:8080/cliente/";

export async function getClients(setData, setMessage, setLoading) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}clientes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        //    console.log('Success:', result);
        //setMessage(`Client found:`);
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

export async function getClient(event, queryType, idOrDocument, setMessage, setClient) {
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
            const errorResponse=await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            setClient(null);
            return;
        }

        const result = await response.json();
        
        if (result!=null){
            setMessage(`Cliente encontrado:`);
            setClient(result);
        }else{
            setClient(null);
        }
        

    } catch (error) {
        console.error('Error:', error);
        setClient(null);
        setMessage(error.message||'Failed to fetch client.');
    }
}

export default async function deleteClient(event, idClient, setMessage) {
    event.preventDefault();


    try {
        const response = await fetch(`${API_SERVER}eliminar/${idClient}`, {
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
            setMessage(`Client deleted: ${JSON.stringify(result)}`);
        } else {
            setMessage('Client successfully deleted.');
        }

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to delete client.');
    }
}

export async function updateClient(event, formData, setMessage) {
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
        setMessage('Client successfully updated!');

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to update client.');
    }
}

export async function getClientById(idClient, setClientData, setMessage) {

    try {
        const response = await fetch(`${API_SERVER}id/${idClient}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        //    console.log('Success:', result);
        //setClient(result);
        setClientData(result);

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to fetch client.');
    }
}

export async function addNewClient(event, formData, setMessage, clearForm) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}registrarCliente`, {
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
        setMessage('Client successfully added!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add client.');
    }
}