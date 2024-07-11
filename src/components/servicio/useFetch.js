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