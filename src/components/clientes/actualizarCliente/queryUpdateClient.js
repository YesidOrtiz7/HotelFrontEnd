const API_SERVER = "http://localhost:8080/cliente/";

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

export async function getClient( idClient, setClientData, setMessage) {
    
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