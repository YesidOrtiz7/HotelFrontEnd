import { useState } from "react";
const [documentoCliente, setDocumentoCliente] = useState('');
const [primerNombreCliente, setPrimerNombreCliente] = useState('');
const [segundoNombreCliente, setSegundoNombreCliente] = useState('');
const [primerApellidoCliente, setPrimerApellidoCliente] = useState('');
const [segundoApellidoCliente, setSegundoApellidoCliente] = useState('');
const [celularCliente, setCelularCliente] = useState('');
const [message, setMessage] = useState('');

const API_SERVER = "http://localhost:8080/cliente/registrarCliente";

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
        documentoCliente: documentoCliente,
        primerNombreCliente: primerNombreCliente,
        segundoNombreCliente: segundoNombreCliente,
        primerApellidoCliente: primerApellidoCliente,
        segundoApellidoCliente: segundoApellidoCliente,
        celularCliente: celularCliente,
    };
    try {
        const response = await fetch(API_SERVER, {
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

        setDocumentoCliente('');
        setPrimerNombreCliente('');
        setSegundoNombreCliente('');
        setPrimerApellidoCliente('');
        setSegundoApellidoCliente('');
        setCelularCliente('');

    } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to add client.');
    }
}

export default handleSubmit;