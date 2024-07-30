import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReceptionistById, updateReceptionist } from "../useFetch";
export default function UpdateReceptionist() {
    // idRecep integer($int32)
    // docRecep string
    // receptionistNames string
    // receptionistLastNames string
    const [data, setData] = useState({
        idRecep: '',
        docRecep: '',
        receptionistNames: '',
        receptionistLastNames: '',
    });
    const [message, setMessage] = useState('');
    const { id } = useParams();
    useEffect(() => {
        getReceptionistById(id, setMessage, setData);
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }
    return (
        <div className="formulario">
            <h2>Actualizar Recepcionista</h2>
            {message && <p>{message}</p>}
            <form id="update-receptionist-form" onSubmit={(event) => updateReceptionist(event, data, setMessage)}>
                <div className="inputGroup">
                    <label>Documento</label>
                    <input
                        name="docRecep"
                        type="text"
                        value={data.docRecep}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputGroup">
                    <label>Nombres</label>
                    <input
                        name="receptionistNames"
                        type="text"
                        value={data.receptionistNames}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputGroup">
                    <label>Apellidos</label>
                    <input
                        name="receptionistLastNames"
                        type="text"
                        value={data.receptionistLastNames}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="boton botonAzul">Actualizar</button>
            </form>
        </div>
    );
}