const API_SERVER = "http://localhost:8080/cliente/";

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