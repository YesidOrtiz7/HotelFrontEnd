import React, { useState } from "react";
import { setClients } from "../useFetch";



const API_SERVER = "http://localhost:8080";

export default function NewClient() {
	const [documentoCliente, setDocumentoCliente] = useState('');
	const [primerNombreCliente, setPrimerNombreCliente] = useState('');
	const [segundoNombreCliente, setSegundoNombreCliente] = useState('');
	const [primerApellidoCliente, setPrimerApellidoCliente] = useState('');
	const [segundoApellidoCliente, setSegundoApellidoCliente] = useState('');
	const [celularCliente, setCelularCliente] = useState('');
	const [message, setMessage] = useState('');

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
			const response = await fetch(`${API_SERVER}/cliente/registrarCliente`, {
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

	return (
		<div>
			{message && <p>{message}</p>}
			<form id="client-form" onSubmit={handleSubmit}>
				<div>
					<label>Documento</label>
					<input
					name="documentoCliente"
					type="text"
					value={documentoCliente}
					onChange={(e)=>setDocumentoCliente(e.target.value)}
					/>
				</div>
				<div>
					<label>Primer Nombre</label>
					<input
					name="primerNombreCliente"
					type="text"
					value={primerNombreCliente}
					onChange={(e)=>setPrimerNombreCliente(e.target.value)}
					/>
				</div>
				<div>
					<label>Segundo Nombre</label>
					<input
					name="segundoNombreCliente"
					type="text"
					value={segundoNombreCliente}
					onChange={(e)=>setSegundoNombreCliente(e.target.value)}
					/>
				</div>
				<div>
					<label>Primer Apellido</label>
					<input
					name="primerApellidoCliente"
					type="text"
					value={primerApellidoCliente}
					onChange={(e)=>setPrimerApellidoCliente(e.target.value)}
					/>
				</div>
				<div>
					<label>Segundo Apellido</label>
					<input
					name="segundoApellidoCliente"
					type="text"
					value={segundoApellidoCliente}
					onChange={(e)=>setSegundoApellidoCliente(e.target.value)}
					/>
				</div>
				<div>
					<label>Numero Celular</label>
					<input
					name="celularCliente"
					type="text"
					value={celularCliente}
					onChange={(e)=>setCelularCliente(e.target.value)}
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
			<script src="./addListener"></script>
		</div>
	);
}