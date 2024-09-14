const API_SERVER = "http://localhost:8080/servicio/";

export async function getServices(setData, setMessage, setLoading) {
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
export async function getServiceById(id, setData, setMessage, setLoading) {//<----------------------------------------
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.log(errorResponse);
            setMessage(errorResponse.errorMessage || `HTTP error! status: ${response.status}`);
            setLoading(false);
            return;
        }

        const result = await response.json();
        setData(result || {}); // Aseguramos que result siempre sea un objeto
        
        setLoading(false);

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message || 'Failed to fetch.');
        setLoading(false);
    }
}
export async function createNewService(event, formData, setMessage, clearForm) {
    event.preventDefault();

    //console.log(formData);

    try {
        const response = await fetch(`${API_SERVER}nuevo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            setMessage(errorResponse.errorMessage || `HTTP error! status: ${response.status}`);
            return;
        }

        //const result = await response.json();
        //console.log('Success:', result);
        setMessage('Creado!');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message || 'No se pudo crear.');
    }
}
export async function payService(event, formData, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}pagarServicio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            return;
        }

        let result;
        try {
            result = await response.json();
        } catch (e) {
            result = null;
        }
        setMessage('Servicio pagado.');

        if (result) {
            //console.log('Success:', result);
            //setMessage('Service paid.');
            //setMessage(`Paid service: ${JSON.stringify(result)}`);
            return result; // Devuelve el resultado para actualizar el estado
        } else {
            //setMessage('Service paid.');
            return null;
        }

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message||'No se pudo pagar.');
        return null;
    }
}
export async function closeService(event, formData, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}cerrarServicio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse=await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            return;
        }

        let result;
        try {
            result = await response.json();
        } catch (e) {
            result = null;
        }

        setMessage('Servicio cerrado.');
        if (result) {
            //console.log('Success:', result);
            //setMessage('Service close.');
            //setMessage(`Paid service: ${JSON.stringify(result)}`);
            return result; // Devuelve el resultado para actualizar el estado
        } else {
            //setMessage('Service close.');
            return null;
        }

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message||'No se pudo cerrar el servicio.');
        return null;
    }
}
export async function expandService(event, formData, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}extenderServicios`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse=await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            return;
        }

        const result = await response.json();
        console.log('Success:', result);
        setMessage('Servicio ampliado');

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message||'Failed to update.');
    }
}
export async function changeRoomOfService(event, formData, setMessage, clearForm) {
    event.preventDefault();

    //console.log(formData);

    try {
        const response = await fetch(`${API_SERVER}nuevaHabitacion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse=await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            return;
        }

        /*const result = await response.json();
        console.log('Success:', result);*/
        setMessage('Cambio exitoso');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage(error.message || 'No es posible realizar la operacion.');
    }
}
export async function changeRateOfService(event, formData, setMessage, clearForm) {
    event.preventDefault();


    try {
        const response = await fetch(`${API_SERVER}cambiarTarifa`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorResponse=await response.json();
            setMessage(errorResponse.errorMessage||`HTTP error! status: ${response.status}`);
            return;
        }

        /*const result = await response.json();
        console.log('Success:', result);*/
        setMessage('Cambio exitoso');
        clearForm();

    } catch (error) {
        console.error('Error:', error);
        setMessage('Error.');
    }
}
/*export async function payService(event, formData, setMessage) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}pagarServicio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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
            setMessage(`Paid service: ${JSON.stringify(result)}`);
        } else {
            setMessage('Service paid.');
        }

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to paid.');
    }
}
/*export default async function deleteClient(event, idClient, setMessage) {
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
} */