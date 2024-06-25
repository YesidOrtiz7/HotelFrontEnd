// api.js
const API_SERVER = "http://localhost:8080/cliente/registrarCliente";

export async function handleSubmit(event, formData, setMessage, clearForm) {
  event.preventDefault();

  try {
    const response = await fetch(`${API_SERVER}`, {
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