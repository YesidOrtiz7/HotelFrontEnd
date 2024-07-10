import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TipoPagoInformation from "./TipoPagoInformation";
import { getPaymentTypes } from "./useFetch";

export default function TipoPagoMainPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {

        getPaymentTypes(setData, setMessage, setLoading);
    }, []);

    // idPago integer($int32)
    // descripcionPago string


    return (
        <div>
            <h2>Tipos de Pago</h2>
            <Link id="newPaymentType" to="/nuevotp" className="enlace-boton enlace-boton_azul">Añadir Tipo de Pago</Link>
            {!loading &&
                <div>

                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Descripcion del metodo de pago</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((tp) => (
                                    <TipoPagoInformation paymentType={tp} />))
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