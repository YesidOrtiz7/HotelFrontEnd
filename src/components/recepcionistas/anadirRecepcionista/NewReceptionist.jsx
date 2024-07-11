import { useState } from "react";
import { addNewReceptionist } from "../useFetch";
export default function NewReceptionist() {
    
    const [docRecep, setDocRecep] = useState('');
    const [receptionistNames, setReceptionistNames] = useState('');
    const [receptionistLastNames, setReceptionistLastNames] = useState('');

    const [message, setMessage] = useState('');

    const clearForm = () => {
        setDocRecep('');
        setReceptionistNames('');
        setReceptionistLastNames('');
    }
    const formData = {
        docRecep,
        receptionistNames,
        receptionistLastNames,
    }
    return (
        <div className="formulario">
            {message && <p>{message}</p>}
            <form id="receptionist-form"
            onSubmit={(e) => addNewReceptionist(e, formData, setMessage, clearForm)}
            >
                <div>
                    <label>Documento</label>
                    <input
                        name="docRecep"
                        type="text"
                        value={docRecep}
                        onChange={(e) => setDocRecep(e.target.value)}
                    />
                </div>
                <div>
                    <label>Nombres</label>
                    <input
                        name="receptionistNames"
                        type="text"
                        value={receptionistNames}
                        onChange={(e) => setReceptionistNames(e.target.value)}
                    />
                </div>
                <div>
                    <label>Apellidos</label>
                    <input
                        name="receptionistLastNames"
                        type="text"
                        value={receptionistLastNames}
                        onChange={(e) => setReceptionistLastNames(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}