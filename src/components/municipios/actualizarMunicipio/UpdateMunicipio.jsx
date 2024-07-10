import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMunicipioById, updateMunicipio } from "../useFetch";

export default function UpdateMunicipio() {
    const[municipioData, setMunicipioData]=useState({
        idMunicipios:'',
        nombreMun:'',
    });

    const [message,setMessage]=useState('');

    const {id}=useParams();

    useEffect(() => {
        getMunicipioById(id, setMunicipioData, setMessage);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMunicipioData({
            ...municipioData,
            [name]: value
        });
    };

    return (
        <div>
            <h2>Actualizar Datos del Municipio</h2>
            {message && <p>{message}</p>}
            <form id="update-municipio-form" onSubmit={(event) => updateMunicipio(event, municipioData, setMessage)}>
                <div>
                    <label>Nombre Municipio</label>
                    <input
                        name="nombreMun"
                        type="text"
                        value={municipioData.nombreMun}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}