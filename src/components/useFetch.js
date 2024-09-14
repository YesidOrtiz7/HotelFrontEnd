export const fetchMessages={
    queryAborted:"Consulta cancelada",
    failedToFetch:"No se pudo realizar la consulta",
    objectCreated:"Creado",
    objectNotCreated:"No se pudo crear",
}

const API_SERVER = "http://localhost:8080/";

export async function getQuery(setData, setMessage, setLoading, url) {
    try {
        setLoading(true);
        const response = await fetch(`${API_SERVER}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            //console.log(errorResponse);
            setMessage(errorResponse.errorMessage || `HTTP error! status: ${response.status}`);
            setLoading(false);
            return;
        }

        const result = await response.json();
        setData(result || {});
        //setLoading(false);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        } else {
            console.error('Error:', error);
            setMessage(error.message ||'Error: No se puede obtener.');
        }

    } finally {
        setLoading(false);
    }
}
export async function postQuery(event, formData, setMessage, clearForm,url) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}${url}`, {
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
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo crear.');
        }
    }
}
export async function postQueryWithRedirection(event, formData, setMessage, clearForm,url,urlRetorno) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}${url}`, {
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

        setMessage('Creado!');
        clearForm();
        window.location.href = `${urlRetorno}`;

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo crear.');
        }
    }
}
export async function postQueryReturnResult(event, formData, setMessage,url) {
    //pay service
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}${url}`, {
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

        let result
        try{
            result = await response.json();
        }catch(e){
            result= null;
        }
        setMessage('Realizado');

        if(result){
            return result;
        }else{
            return null;
        }

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo realizar.');
            return null;
        }
    }
}
export async function putQuery(event, formData, setMessage, url) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}${url}`, {
            method: 'PUT',
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
        setMessage('Actualizado');

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo actualizar.');
        }
    }
}
export async function putQueryClearForm(event, formData, setMessage, clearForm, url) {
    event.preventDefault();

    try {
        const response = await fetch(`${API_SERVER}${url}`, {
            method: 'PUT',
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
        setMessage('Actualizado');
        clearForm();

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo actualizar.');
        }
    }
}
export async function deleteQuery(element, setMessage,url) {
    //event.preventDefault();
    try {
        const response = await fetch(`${API_SERVER}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            setMessage(errorResponse.errorMessage || `HTTP error! status: ${response.status}`);
            return;
        }

        let result;
        try {
            result = await response.json();
        } catch (e) {
            result = null;
        }

        if (result) {
            //console.log('Success:', result);
            setMessage(`Eliminado: ${JSON.stringify(result)}`);
        } else {
            setMessage('Eliminado');
        }

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Consulta cancelada");
        }else{
            console.error('Error:', error);
            setMessage(error.message || 'No se pudo eliminar.');
        }
    }
}