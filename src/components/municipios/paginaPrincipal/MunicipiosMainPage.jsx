import { useState,useEffect } from "react";
import MunicipioInformation from "../MunicipioInformation";
import { getMunicipios } from "../useFetch";

import { Link } from "react-router-dom";

export default function MunicipiosMainPage() {
    const [data,setData]=useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(()=>{

        getMunicipios(setData, setMessage, setLoading);
    },[]);

    // idMunicipios integer($int32)
    // nombreMun string

    return (
        <div>
            <h2>Municipios</h2>
            <Link id="newMunicipio" to="/nuevomunicipio" className="enlace-boton enlace-boton_azul">Añadir Municipio</Link>
            {!loading &&
                <div>

                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre Municipio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((municipio) => (
                                    <MunicipioInformation municipio={municipio} />))
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