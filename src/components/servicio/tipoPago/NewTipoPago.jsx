import { useState } from "react";
import { addNewPaymentType } from "./useFetch";
export default function NewTipoPago() {
    const [descripcionPago, setDescripcionPago] = useState('');

    const [message,setMessage]=useState('');

    const clearForm = () => {
        setDescripcionPago('');
    }

    const formData = {
        descripcionPago,
    }

    return (
        <div className="formulario">
            {message && <p>{message}</p>}
            <form id="payment-type-form" onSubmit={(event) => addNewPaymentType(event, formData, setMessage, clearForm)}>
                <div className="inputGroup">

                    <label>Descripcion del tipo de pago</label>
                    <input
                        name="descripcionPago"
                        type="text"
                        value={descripcionPago}
                        onChange={(e) => setDescripcionPago(e.target.value)}
                    />
                </div>

                <button type="submit" className="boton botonAzul">Enviar</button>
            </form>
        </div>
    );
}