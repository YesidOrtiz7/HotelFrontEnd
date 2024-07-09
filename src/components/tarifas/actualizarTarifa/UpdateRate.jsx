import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRateById, updateRate } from "../useFetch";

export default function UpdateRate() {
    const [rateData, setRateData] = useState({
        idTipoTarifa: '',
        descripcionTarifa: '',
        porcentajeTarifa: '',
    });
    const [message, setMessage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        getRateById(id, setRateData, setMessage);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRateData({
            ...rateData,
            [name]: value
        });
    };
    return (
        <div>
            <h2>Actualizar Tarifa</h2>
            {message && <p>{message}</p>}
            <form id="update-rate-form" onSubmit={(event) => updateRate(event, rateData, setMessage)}>
                <div>
                    <label>Descripcion Tarifa</label>
                    <input
                        name="descripcionTarifa"
                        type="text"
                        value={rateData.descripcionTarifa}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Porcentaje Tarifa</label>
                    <input
                        name="porcentajeTarifa"
                        type="number"
                        value={rateData.porcentajeTarifa}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}