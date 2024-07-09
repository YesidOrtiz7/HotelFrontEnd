import RateInformation from "../RateInformation";
import { getRate } from "../useFetch";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RateMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getRate(setData, setMessage, setLoading);
    }, []);
    return (
        <div>
            <h2>Tarifas</h2>
            <Link id="newRate" to="/nuevatarifa" className="enlace-boton enlace-boton_azul">Añadir Tarifa</Link>
            {!loading &&
                <div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Descripcion</th>
                                <th>Porcentaje de descuento</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((rate) => (
                                    <RateInformation rate={rate} />))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {loading && <div>Loading...</div>}
            {message && <div>{message}</div>}
        </div>
    );
}