const API_SERVER = "http://localhost:8080/cliente/";

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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
//    console.log('Success:', result);
    setMessage(`Client found:`);
    setClient(result);

  } catch (error) {
    console.error('Error:', error);
    setMessage('Failed to fetch client.');
  }
}